<template>
  <div
    class="absolute overflow-visible group"
    :style="positionStyle"
    @pointerdown.stop
    @mousedown.stop="startDrag"
    @touchstart="startTouchDrag"
  >
    <div
      v-if="isSelected || isDraw"
      class="top-0 bottom-0 right-0 left-0 absolute border border-1.5 pointer-events-none"
      :class="borderColors[submitterIndex]"
    />
    <div
      v-if="field.type === 'cells' && (isSelected || isDraw)"
      class="top-0 bottom-0 right-0 left-0 absolute"
    >
      <div
        v-for="(cellW, index) in cells"
        :key="index"
        class="absolute top-0 bottom-0 border-r"
        :class="borderColors[submitterIndex]"
        :style="{ left: (cellW / area.w) * 100 + '%' }"
      >
        <span
          v-if="index === 0 && editable"
          class="h-2.5 w-2.5 rounded-full -bottom-1 border-gray-400 bg-white shadow-md border absolute cursor-ew-resize z-10"
          style="left: -4px"
          @mousedown.stop="startResizeCell"
        />
      </div>
    </div>
    <div
      v-if="field?.type"
      class="absolute bg-white rounded-t border overflow-visible whitespace-nowrap group-hover:flex group-hover:z-10"
      :class="{
        'flex z-10': isNameFocus || isSelected,
        invisible: !isNameFocus && !isSelected,
      }"
      style="top: -25px; height: 25px"
      @mousedown.stop
      @pointerdown.stop
    >
      <FieldSubmitter
        v-model="field.submitter_uuid"
        class="border-r"
        :compact="true"
        :editable="
          editable && (!defaultField || defaultField.role !== submitter?.name)
        "
        :allow-add-new="!defaultSubmitters.length"
        :menu-classes="'dropdown-content bg-white menu menu-xs p-2 shadow rounded-box w-52 rounded-t-none -left-[1px] mt-[1px]'"
        :submitters="template.submitters"
        @update:model-value="save"
        @click="selectedAreaRef.value = area"
      />
      <FieldType
        v-model="field.type"
        :button-width="27"
        :editable="editable && !defaultField"
        :button-classes="'px-1'"
        :menu-classes="'bg-white rounded-t-none'"
        @update:model-value="[maybeUpdateOptions(), save()]"
        @click="selectedAreaRef.value = area"
      />
      <span
        v-if="field.type !== 'checkbox' || field.name"
        ref="name"
        :contenteditable="editable && !defaultField"
        dir="auto"
        class="pr-1 cursor-text outline-none block"
        style="min-width: 2px"
        @keydown.enter.prevent="onNameEnter"
        @focus="onNameFocus"
        @blur="onNameBlur"
        >{{ optionIndexText }}
        {{
          (defaultField ? field.title || field.name : field.name) || defaultName
        }}</span
      >
      <div
        v-if="isSettingsFocus || (isNameFocus && field.type !== 'checkbox')"
        class="flex items-center ml-1.5"
      >
        <input
          :id="`required-checkbox-${field.uuid}`"
          v-model="field.required"
          type="checkbox"
          class="checkbox checkbox-xs no-animation rounded"
          @mousedown.prevent
        />
        <label
          :for="`required-checkbox-${field.uuid}`"
          class="label text-xs"
          @click.prevent="field.required = !field.required"
          @mousedown.prevent
          >{{ t("required") }}</label
        >
        <span
          v-if="field.type !== 'payment'"
          class="dropdown dropdown-end"
          @mouseenter="renderDropdown = true"
          @touchstart="renderDropdown = true"
        >
          <label
            ref="settingsButton"
            tabindex="0"
            :title="t('settings')"
            class="cursor-pointer flex items-center"
            style="height: 25px"
            @focus="isSettingsFocus = true"
            @blur="maybeBlurSettings"
          >
            <IconDotsVertical class="w-5 h-5" />
          </label>
          <ul
            v-if="renderDropdown"
            ref="settingsDropdown"
            tabindex="0"
            class="dropdown-content menu menu-xs px-2 pb-2 pt-1 shadow rounded-box w-52 z-10 rounded-t-none"
            :style="{ backgroundColor: 'white' }"
            @dragstart.prevent.stop
            @click="closeDropdown"
            @focusout="maybeBlurSettings"
          >
            <FieldSettings
              :field="field"
              :default-field="defaultField"
              :editable="editable"
              :background-color="'white'"
              :with-required="false"
              :with-areas="false"
              @click-formula="isShowFormulaModal = true"
              @click-description="isShowDescriptionModal = true"
              @click-condition="isShowConditionsModal = true"
              @scroll-to="
                [(selectedAreaRef.value = $event), $emit('scroll-to', $event)]
              "
            />
          </ul>
        </span>
      </div>
      <button
        v-else-if="editable"
        class="pr-1"
        :title="t('remove')"
        @click.prevent="$emit('remove')"
      >
        <IconX width="14" />
      </button>
    </div>
    <div
      class="flex items-center h-full w-full"
      dir="auto"
      :class="[
        bgColors[submitterIndex],
        field?.default_value
          ? alignClasses[field.preferences?.align] || ''
          : 'justify-center',
      ]"
    >
      <span
        v-if="field"
        class="flex justify-center items-center space-x-1 h-full"
        :class="{ 'w-full h-full': field.type == 'checkbox' }"
      >
        <div
          v-if="field?.default_value"
          :class="{
            'w-full h-full': field.type == 'checkbox',
            'text-[1.5vw] lg:text-base': !textOverflowChars,
            'text-[1.0vw] lg:text-xs': textOverflowChars,
          }"
        >
          <div
            ref="textContainer"
            class="flex items-center px-0.5"
            :class="{ 'w-full h-full': field.type == 'checkbox' }"
          >
            <IconCheck
              v-if="field.type == 'checkbox'"
              class="aspect-square mx-auto"
              :class="{
                '!w-auto !h-full': area.w > area.h,
                '!w-full !h-auto': area.w <= area.h,
              }"
            />
            <span
              v-else-if="field.type === 'number'"
              class="whitespace-pre-wrap"
              >{{
                formatNumber(field.default_value, field.preferences?.format)
              }}</span
            >
            <span v-else class="whitespace-pre-wrap">{{
              field.default_value
            }}</span>
          </div>
        </div>
        <component
          :is="fieldIcons[field.type]"
          v-else
          width="100%"
          height="100%"
          class="max-h-10 opacity-50"
        />
      </span>
    </div>
    <div
      ref="touchTarget"
      class="absolute top-0 bottom-0 right-0 left-0 cursor-pointer"
    />
    <span
      v-if="field?.type && editable"
      class="h-4 w-4 md:h-2.5 md:w-2.5 -right-1 rounded-full -bottom-1 border-gray-400 bg-white shadow-md border absolute cursor-nwse-resize"
      @mousedown.stop="startResize"
      @touchstart="startTouchResize"
    />
    <Teleport v-if="isShowFormulaModal" :to="modalContainerEl">
      <FormulaModal
        :field="field"
        :editable="editable && !defaultField"
        :build-default-name="buildDefaultName"
        @close="isShowFormulaModal = false"
      />
    </Teleport>
    <Teleport v-if="isShowConditionsModal" :to="modalContainerEl">
      <ConditionsModal
        :field="field"
        :build-default-name="buildDefaultName"
        @close="isShowConditionsModal = false"
      />
    </Teleport>
    <Teleport v-if="isShowDescriptionModal" :to="modalContainerEl">
      <DescriptionModal
        :field="field"
        :editable="editable && !defaultField"
        :build-default-name="buildDefaultName"
        @close="isShowDescriptionModal = false"
      />
    </Teleport>
  </div>
</template>

<script>
import FieldSubmitter from "./field_submitter";
import FieldType from "./field_type";
import Field from "./field";
import FieldSettings from "./field_settings";
import FormulaModal from "./formula_modal";
import ConditionsModal from "./conditions_modal";
import DescriptionModal from "./description_modal";
import { IconX, IconCheck, IconDotsVertical } from "@tabler/icons-vue";
import { v4 } from "uuid";

export default {
  name: "FieldArea",
  components: {
    FieldType,
    IconCheck,
    FieldSettings,
    FormulaModal,
    IconDotsVertical,
    DescriptionModal,
    ConditionsModal,
    FieldSubmitter,
    IconX,
  },
  inject: ["template", "selectedAreaRef", "save", "t"],
  props: {
    area: {
      type: Object,
      required: true,
    },
    isDraw: {
      type: Boolean,
      required: false,
      default: false,
    },
    defaultField: {
      type: Object,
      required: false,
      default: null,
    },
    defaultSubmitters: {
      type: Array,
      required: false,
      default: () => [],
    },
    editable: {
      type: Boolean,
      required: false,
      default: true,
    },
    field: {
      type: Object,
      required: false,
      default: null,
    },
  },
  emits: [
    "start-resize",
    "stop-resize",
    "start-drag",
    "stop-drag",
    "remove",
    "scroll-to",
  ],
  data() {
    return {
      isShowFormulaModal: false,
      isShowConditionsModal: false,
      isSettingsFocus: false,
      isShowDescriptionModal: false,
      isResize: false,
      isDragged: false,
      renderDropdown: false,
      isNameFocus: false,
      textOverflowChars: 0,
      dragFrom: { x: 0, y: 0 },
    };
  },
  computed: {
    fieldNames: FieldType.computed.fieldNames,
    fieldIcons: FieldType.computed.fieldIcons,
    modalContainerEl() {
      return this.$el.getRootNode().querySelector("#uvtsign_modal_container");
    },
    defaultName() {
      return this.buildDefaultName(this.field, this.template.fields);
    },
    alignClasses() {
      return {
        center: "justify-center",
        left: "justify-start",
        right: "justify-end",
      };
    },
    optionIndexText() {
      if (this.area.option_uuid && this.field.options) {
        return `${
          this.field.options.findIndex(
            (o) => o.uuid === this.area.option_uuid
          ) + 1
        }.`;
      } else {
        return "";
      }
    },
    cells() {
      const cells = [];

      let currentWidth = 0;

      while (
        currentWidth + (this.area.cell_w + this.area.cell_w / 4) <
        this.area.w
      ) {
        currentWidth += this.area.cell_w || 9999999;

        cells.push(currentWidth);
      }

      return cells;
    },
    submitter() {
      return this.template.submitters.find(
        (s) => s.uuid === this.field.submitter_uuid
      );
    },
    submitterIndex() {
      return this.template.submitters.indexOf(this.submitter);
    },
    borderColors() {
      return [
        "border-red-500/80",
        "border-sky-500/80",
        "border-emerald-500/80",
        "border-yellow-300/80",
        "border-purple-600/80",
        "border-pink-500/80",
        "border-cyan-500/80",
        "border-orange-500/80",
        "border-lime-500/80",
        "border-indigo-500/80",
        "border-red-500/80",
        "border-sky-500/80",
        "border-emerald-500/80",
        "border-yellow-300/80",
        "border-purple-600/80",
        "border-pink-500/80",
        "border-cyan-500/80",
        "border-orange-500/80",
        "border-lime-500/80",
        "border-indigo-500/80",
      ];
    },
    bgColors() {
      return [
        "bg-red-100/80",
        "bg-sky-100/80",
        "bg-emerald-100/80",
        "bg-yellow-100/80",
        "bg-purple-100/80",
        "bg-pink-100/80",
        "bg-cyan-100/80",
        "bg-orange-100/80",
        "bg-lime-100/80",
        "bg-indigo-100/80",
        "bg-red-100/80",
        "bg-sky-100/80",
        "bg-emerald-100/80",
        "bg-yellow-100/80",
        "bg-purple-100/80",
        "bg-pink-100/80",
        "bg-cyan-100/80",
        "bg-orange-100/80",
        "bg-lime-100/80",
        "bg-indigo-100/80",
      ];
    },
    isSelected() {
      return this.selectedAreaRef.value === this.area;
    },
    positionStyle() {
      const { x, y, w, h } = this.area;

      return {
        top: y * 100 + "%",
        left: x * 100 + "%",
        width: w * 100 + "%",
        height: h * 100 + "%",
      };
    },
  },
  watch: {
    "field.default_value"() {
      this.$nextTick(() => {
        if (
          ["date", "text", "number"].includes(this.field.type) &&
          this.field.default_value &&
          this.$refs.textContainer &&
          (this.textOverflowChars === 0 ||
            this.textOverflowChars - 4 > `${this.field.default_value}`.length)
        ) {
          this.textOverflowChars =
            this.$el.clientHeight < this.$refs.textContainer.clientHeight
              ? `${this.field.default_value}`.length
              : 0;
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (
        ["date", "text", "number"].includes(this.field.type) &&
        this.field.default_value &&
        this.$refs.textContainer &&
        (this.textOverflowChars === 0 ||
          this.textOverflowChars - 4 > `${this.field.default_value}`.length)
      ) {
        this.textOverflowChars =
          this.$el.clientHeight < this.$refs.textContainer.clientHeight
            ? `${this.field.default_value}`.length
            : 0;
      }
    });
  },
  methods: {
    buildDefaultName: Field.methods.buildDefaultName,
    closeDropdown() {
      document.activeElement.blur();
    },
    formatNumber(number, format) {
      if (format === "comma") {
        return new Intl.NumberFormat("en-US").format(number);
      } else if (format === "dot") {
        return new Intl.NumberFormat("de-DE").format(number);
      } else if (format === "space") {
        return new Intl.NumberFormat("fr-FR").format(number);
      } else {
        return number;
      }
    },
    maybeBlurSettings(e) {
      if (
        !e.relatedTarget ||
        !this.$refs.settingsDropdown.contains(e.relatedTarget)
      ) {
        this.isSettingsFocus = false;
      }
    },
    onNameFocus(e) {
      this.selectedAreaRef.value = this.area;

      this.isNameFocus = true;
      this.$refs.name.style.minWidth = this.$refs.name.clientWidth + "px";

      if (!this.field.name) {
        setTimeout(() => {
          this.$refs.name.innerText = " ";
        }, 1);
      }
    },
    startResizeCell(e) {
      this.$el.getRootNode().addEventListener("mousemove", this.onResizeCell);
      this.$el.getRootNode().addEventListener("mouseup", this.stopResizeCell);

      this.$emit("start-resize", "ew");
    },
    stopResizeCell(e) {
      this.$el
        .getRootNode()
        .removeEventListener("mousemove", this.onResizeCell);
      this.$el
        .getRootNode()
        .removeEventListener("mouseup", this.stopResizeCell);

      this.$emit("stop-resize");

      this.save();
    },
    onResizeCell(e) {
      if (e.target.id === "mask") {
        const positionX = e.offsetX / (e.target.clientWidth - 1);

        if (positionX > this.area.x) {
          this.area.cell_w = positionX - this.area.x;
        }
      }
    },
    maybeUpdateOptions() {
      delete this.field.default_value;

      if (!["radio", "multiple", "select"].includes(this.field.type)) {
        delete this.field.options;
      }

      if (["select", "multiple", "radio"].includes(this.field.type)) {
        this.field.options ||= [{ value: "", uuid: v4() }];
      }

      (this.field.areas || []).forEach((area) => {
        if (this.field.type === "cells") {
          area.cell_w = (area.w * 2) / Math.floor(area.w / area.h);
        } else {
          delete area.cell_w;
        }
      });
    },
    onNameBlur(e) {
      if (e.relatedTarget === this.$refs.settingsButton) {
        this.isSettingsFocus = true;
      }

      const text = this.$refs.name.innerText.trim();

      this.isNameFocus = false;
      this.$refs.name.style.minWidth = "";

      if (text) {
        this.field.name = text;
      } else {
        this.field.name = "";
        this.$refs.name.innerText = this.defaultName;
      }

      this.save();
    },
    onNameEnter(e) {
      this.$refs.name.blur();
    },
    resize(e) {
      if (e.target.id === "mask") {
        this.area.w = e.offsetX / e.target.clientWidth - this.area.x;
        this.area.h = e.offsetY / e.target.clientHeight - this.area.y;
      }
    },
    drag(e) {
      if (e.target.id === "mask") {
        this.isDragged = true;

        this.area.x = (e.offsetX - this.dragFrom.x) / e.target.clientWidth;
        this.area.y = (e.offsetY - this.dragFrom.y) / e.target.clientHeight;
      }
    },
    startDrag(e) {
      this.selectedAreaRef.value = this.area;

      if (!this.editable) {
        return;
      }

      const rect = e.target.getBoundingClientRect();

      this.dragFrom = { x: e.clientX - rect.left, y: e.clientY - rect.top };

      this.$el.getRootNode().addEventListener("mousemove", this.drag);
      this.$el.getRootNode().addEventListener("mouseup", this.stopDrag);

      this.$emit("start-drag");
    },
    startTouchDrag(e) {
      if (e.target !== this.$refs.touchTarget) {
        return;
      }

      this.$refs?.name?.blur();

      e.preventDefault();

      this.isDragged = true;

      const rect = e.target.getBoundingClientRect();

      this.selectedAreaRef.value = this.area;

      this.dragFrom = {
        x: rect.left - e.touches[0].clientX,
        y: rect.top - e.touches[0].clientY,
      };

      this.$el.getRootNode().addEventListener("touchmove", this.touchDrag);
      this.$el.getRootNode().addEventListener("touchend", this.stopTouchDrag);

      this.$emit("start-drag");
    },
    touchDrag(e) {
      const page = this.$parent.$refs.mask.previousSibling;
      const rect = page.getBoundingClientRect();

      this.area.x =
        (this.dragFrom.x + e.touches[0].clientX - rect.left) / rect.width;
      this.area.y =
        (this.dragFrom.y + e.touches[0].clientY - rect.top) / rect.height;
    },
    stopTouchDrag() {
      this.$el.getRootNode().removeEventListener("touchmove", this.touchDrag);
      this.$el
        .getRootNode()
        .removeEventListener("touchend", this.stopTouchDrag);

      if (this.isDragged) {
        this.save();
      }

      this.isDragged = false;

      this.$emit("stop-drag");
    },
    stopDrag() {
      this.$el.getRootNode().removeEventListener("mousemove", this.drag);
      this.$el.getRootNode().removeEventListener("mouseup", this.stopDrag);

      if (this.isDragged) {
        this.save();
      }

      this.isDragged = false;

      this.$emit("stop-drag");
    },
    startResize() {
      this.selectedAreaRef.value = this.area;

      this.$el.getRootNode().addEventListener("mousemove", this.resize);
      this.$el.getRootNode().addEventListener("mouseup", this.stopResize);

      this.$emit("start-resize", "nwse");
    },
    stopResize() {
      this.$el.getRootNode().removeEventListener("mousemove", this.resize);
      this.$el.getRootNode().removeEventListener("mouseup", this.stopResize);

      this.$emit("stop-resize");

      this.save();
    },
    startTouchResize(e) {
      this.selectedAreaRef.value = this.area;

      this.$refs?.name?.blur();

      e.preventDefault();

      this.$el.getRootNode().addEventListener("touchmove", this.touchResize);
      this.$el.getRootNode().addEventListener("touchend", this.stopTouchResize);

      this.$emit("start-resize", "nwse");
    },
    touchResize(e) {
      const page = this.$parent.$refs.mask.previousSibling;
      const rect = page.getBoundingClientRect();

      this.area.w =
        (e.touches[0].clientX - rect.left) / rect.width - this.area.x;
      this.area.h =
        (e.touches[0].clientY - rect.top) / rect.height - this.area.y;
    },
    stopTouchResize() {
      this.$el.getRootNode().removeEventListener("touchmove", this.touchResize);
      this.$el
        .getRootNode()
        .removeEventListener("touchend", this.stopTouchResize);

      this.$emit("stop-resize");

      this.save();
    },
  },
};
</script>
