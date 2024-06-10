(() => {
  "use strict";
  var e,
    t,
    i,
    a = {
      8821: (e, t, i) => {
        var a = i(9963),
          n = i(2262),
          l = i(6252),
          r = i(3577);
        const s = ["title"],
          o = ["action"],
          u = ["value"],
          d = (0, l._)(
            "input",
            { value: "put", name: "_method", type: "hidden" },
            null,
            -1
          ),
          c = { class: "md:mt-4" },
          p = { key: 0 },
          m = { key: 3 },
          h = ["for"],
          _ = { key: 1, class: "py-1" },
          f = { key: 2, dir: "auto", class: "mb-3 px-1" },
          g = ["id", "required", "name"],
          w = ["selected"],
          b = ["selected", "value"],
          y = { key: 4 },
          v = ["for"],
          k = { key: 1, dir: "auto", class: "mb-3 px-1" },
          x = { class: "flex w-full max-h-44 overflow-y-auto" },
          S = { key: 0, class: "text-xl px-1" },
          F = { class: "font-semibold" },
          D = ["for"],
          q = ["id", "name", "value", "required"],
          C = { class: "text-xl" },
          I = { key: 6 },
          z = { key: 0, dir: "auto", class: "mb-3 px-1" },
          V = { class: "flex w-full max-h-44 overflow-y-auto" },
          j = (0, l._)(
            "input",
            { type: "hidden", name: "cast_boolean", value: "true" },
            null,
            -1
          ),
          $ = { class: "space-y-3.5 mx-auto" },
          T = { class: "text-xl" },
          U = { class: "font-semibold" },
          P = ["name", "value"],
          M = ["for"],
          A = ["name", "value"],
          O = ["id", "oninvalid", "onchange", "required", "checked", "onClick"],
          R = { key: 0, class: "text-xl" },
          B = { key: 1, class: "text-xl" },
          E = ["disabled"],
          N = { class: "flex" },
          W = { key: 1, class: "w-6 flex justify-start mr-1" },
          Z = [(0, l._)("span", null, "...", -1)],
          H = { key: 0, class: "text-center mt-1" },
          L = { key: 2, class: "flex justify-center" },
          Y = { class: "flex items-center mt-4 mb-1 flex-wrap" },
          K = ["onClick"],
          Q = { key: 3, class: "mt-5" };
        const J = {
            key: 0,
            class:
              "absolute top-0 bottom-0 right-0 left-0 items-center justify-center h-full w-full",
          },
          G = {
            key: 0,
            class: "flex justify-center items-center h-full opacity-50",
          },
          X = {
            key: 1,
            class:
              "absolute -top-7 rounded bg-base-content text-base-100 px-2 text-sm whitespace-nowrap pointer-events-none",
          },
          ee = { key: 2, ref: "scrollToElem", class: "absolute -top-20" },
          te = ["src"],
          ie = ["src"],
          ae = ["src"],
          ne = ["src"],
          le = { key: 7, class: "px-0.5 flex flex-col justify-center" },
          re = ["href"],
          se = ["checked"],
          oe = ["checked"],
          ue = ["checked"],
          de = { key: 11, class: "w-full flex items-center" },
          ce = { key: 0 },
          pe = { key: 1 },
          me = { key: 2 };
        var he = i(2651),
          _e = i(3361),
          fe = i(6346),
          ge = i(7436),
          we = i(2430),
          be = i(8031),
          ye = i(3342),
          ve = i(8500),
          ke = i(3247),
          xe = i(6936),
          Se = i(1414),
          Fe = i(5782),
          De = i(2013),
          qe = i(6039),
          Ce = i(627),
          Ie = i(4513),
          ze = {
            name: "FieldArea",
            components: { IconPaperclip: he.Z, IconCheck: _e.Z },
            inject: ["t"],
            props: {
              field: { type: Object, required: !0 },
              isValueSet: { type: Boolean, required: !1, default: !1 },
              submittable: { type: Boolean, required: !1, default: !1 },
              modelValue: {
                type: [Array, String, Number, Object, Boolean],
                required: !1,
                default: "",
              },
              isActive: { type: Boolean, required: !1, default: !1 },
              withLabel: { type: Boolean, required: !1, default: !0 },
              fieldIndex: { type: Number, required: !1, default: 0 },
              attachmentsIndex: {
                type: Object,
                required: !1,
                default: () => ({}),
              },
              area: { type: Object, required: !0 },
            },
            emits: ["update:model-value"],
            data: () => ({ textOverflowChars: 0 }),
            computed: {
              fieldNames() {
                return {
                  text: this.t("text"),
                  signature: this.t("signature"),
                  initials: this.t("initials"),
                  date: this.t("date"),
                  number: this.t("number"),
                  image: this.t("image"),
                  file: this.t("file"),
                  select: this.t("select"),
                  checkbox: this.t("checkbox"),
                  multiple: this.t("multiple"),
                  radio: this.t("radio"),
                  cells: this.t("cells"),
                  stamp: this.t("stamp"),
                  payment: this.t("payment"),
                  phone: this.t("phone"),
                };
              },
              alignClasses: () => ({
                center: "text-center",
                left: "text-left",
                right: "text-right",
              }),
              option() {
                return this.field.options.find(
                  (e) => e.uuid === this.area.option_uuid
                );
              },
              fieldIcons: () => ({
                text: fe.Z,
                signature: ge.Z,
                date: we.Z,
                number: be.Z,
                image: ye.Z,
                initials: ve.Z,
                file: he.Z,
                select: ke.Z,
                checkbox: xe.Z,
                radio: Se.Z,
                stamp: Fe.Z,
                cells: De.Z,
                multiple: qe.Z,
                phone: Ce.Z,
                payment: Ie.Z,
              }),
              image() {
                return "image" === this.field.type
                  ? this.attachmentsIndex[this.modelValue]
                  : null;
              },
              stamp() {
                return "stamp" === this.field.type
                  ? this.attachmentsIndex[this.modelValue]
                  : null;
              },
              signature() {
                return "signature" === this.field.type
                  ? this.attachmentsIndex[this.modelValue]
                  : null;
              },
              initials() {
                return "initials" === this.field.type
                  ? this.attachmentsIndex[this.modelValue]
                  : null;
              },
              locale: () => Intl.DateTimeFormat().resolvedOptions()?.locale,
              formattedDate() {
                return "date" === this.field.type && this.modelValue
                  ? this.formatDate(
                      "{{date}}" === this.modelValue
                        ? new Date()
                        : new Date(this.modelValue),
                      this.field.preferences?.format ||
                        (this.locale.endsWith("-US")
                          ? "MM/DD/YYYY"
                          : "DD/MM/YYYY")
                    )
                  : "";
              },
              attachments() {
                return "file" === this.field.type
                  ? (this.modelValue || []).map((e) => this.attachmentsIndex[e])
                  : "payment" === this.field.type
                  ? [this.attachmentsIndex[this.modelValue]].filter(Boolean)
                  : [];
              },
              computedStyle() {
                const { x: e, y: t, w: i, h: a } = this.area;
                return {
                  top: 100 * t + "%",
                  left: 100 * e + "%",
                  width: 100 * i + "%",
                  height: 100 * a + "%",
                };
              },
            },
            watch: {
              modelValue() {
                this.$nextTick(() => {
                  ["date", "text", "number"].includes(this.field.type) &&
                    this.$refs.textContainer &&
                    (0 === this.textOverflowChars ||
                      this.textOverflowChars - 4 >
                        `${this.modelValue}`.length) &&
                    (this.textOverflowChars =
                      this.$refs.textContainer.scrollHeight >
                      this.$refs.textContainer.clientHeight
                        ? `${this.modelValue}`.length
                        : 0);
                });
              },
            },
            mounted() {
              this.$nextTick(() => {
                ["date", "text", "number"].includes(this.field.type) &&
                  this.$refs.textContainer &&
                  (this.textOverflowChars =
                    this.$refs.textContainer.scrollHeight >
                    this.$refs.textContainer.clientHeight
                      ? `${this.modelValue}`.length
                      : 0);
              });
            },
            methods: {
              optionValue(e) {
                if (e) {
                  if (e.value) return e.value;
                  {
                    const t = this.field.options.indexOf(e);
                    return `${this.t("option")} ${t + 1}`;
                  }
                }
              },
              formatNumber: (e, t) =>
                "comma" === t
                  ? new Intl.NumberFormat("en-US").format(e)
                  : "dot" === t
                  ? new Intl.NumberFormat("de-DE").format(e)
                  : "space" === t
                  ? new Intl.NumberFormat("fr-FR").format(e)
                  : e,
              formatDate(e, t) {
                const i = new Intl.DateTimeFormat([], {
                  day: { D: "numeric", DD: "2-digit" }[t.match(/D+/)],
                  month: {
                    M: "numeric",
                    MM: "2-digit",
                    MMM: "short",
                    MMMM: "long",
                  }[t.match(/M+/)],
                  year: { YYYY: "numeric", YYY: "numeric", YY: "2-digit" }[
                    t.match(/Y+/)
                  ],
                  timeZone: "UTC",
                }).formatToParts(e);
                return t
                  .replace(/D+/, i.find((e) => "day" === e.type).value)
                  .replace(/M+/, i.find((e) => "month" === e.type).value)
                  .replace(/Y+/, i.find((e) => "year" === e.type).value);
              },
              updateMultipleSelectValue(e) {
                if (this.modelValue?.includes(e)) {
                  const t = [...this.modelValue];
                  t.splice(t.indexOf(e), 1),
                    this.$emit("update:model-value", t);
                } else {
                  const t = this.modelValue ? [...this.modelValue] : [];
                  t.push(e), this.$emit("update:model-value", t);
                }
              },
            },
          },
          Ve = i(3744);
        var je = (0, Ve.Z)(ze, [
            [
              "render",
              function (e, t, i, a, n, s) {
                const o = (0, l.up)("IconPaperclip"),
                  u = (0, l.up)("IconCheck");
                return (
                  (0, l.wg)(),
                  (0, l.iD)(
                    "div",
                    {
                      class: (0, r.C_)([
                        "field-area flex absolute lg:text-base -outline-offset-1",
                        {
                          "text-[1.5vw] lg:text-base": !n.textOverflowChars,
                          "text-[1.0vw] lg:text-xs": n.textOverflowChars,
                          "cursor-default": !i.submittable,
                          "border border-red-100 bg-red-100 cursor-pointer":
                            i.submittable,
                          "border border-red-100": !i.isActive && i.submittable,
                          "bg-opacity-80":
                            !i.isActive && !i.isValueSet && i.submittable,
                          "field-area-active outline-red-500 outline-dashed outline-2 z-10":
                            i.isActive && i.submittable,
                          "bg-opacity-40":
                            (i.isActive || i.isValueSet) && i.submittable,
                        },
                      ]),
                      dir: "auto",
                      style: (0, r.j5)(s.computedStyle),
                    },
                    [
                      i.isActive ||
                      i.isValueSet ||
                      "checkbox" === i.field.type ||
                      !i.submittable ||
                      i.area.option_uuid
                        ? (0, l.kq)("", !0)
                        : ((0, l.wg)(),
                          (0, l.iD)("div", J, [
                            i.field
                              ? ((0, l.wg)(),
                                (0, l.iD)("span", G, [
                                  ((0, l.wg)(),
                                  (0, l.j4)(
                                    (0, l.LL)(s.fieldIcons[i.field.type]),
                                    {
                                      width: "100%",
                                      height: "100%",
                                      class: "max-h-10 text-base-content",
                                    }
                                  )),
                                ]))
                              : (0, l.kq)("", !0),
                          ])),
                      !i.isActive ||
                      !i.withLabel ||
                      (i.area.option_uuid && s.option.value)
                        ? (0, l.kq)("", !0)
                        : ((0, l.wg)(),
                          (0, l.iD)("div", X, [
                            i.area.option_uuid && !s.option.value
                              ? ((0, l.wg)(),
                                (0, l.iD)(
                                  l.HY,
                                  { key: 0 },
                                  [
                                    (0, l.Uk)(
                                      (0, r.zw)(s.optionValue(s.option)),
                                      1
                                    ),
                                  ],
                                  64
                                ))
                              : ((0, l.wg)(),
                                (0, l.iD)(
                                  l.HY,
                                  { key: 1 },
                                  [
                                    (0, l.Uk)(
                                      (0, r.zw)(
                                        i.field.name ||
                                          s.fieldNames[i.field.type]
                                      ) + " ",
                                      1
                                    ),
                                    "checkbox" !== i.field.type || i.field.name
                                      ? i.field.required ||
                                        "checkbox" === i.field.type
                                        ? (0, l.kq)("", !0)
                                        : ((0, l.wg)(),
                                          (0, l.iD)(
                                            l.HY,
                                            { key: 1 },
                                            [(0, l.Uk)(" (optional) ")],
                                            64
                                          ))
                                      : ((0, l.wg)(),
                                        (0, l.iD)(
                                          l.HY,
                                          { key: 0 },
                                          [
                                            (0, l.Uk)(
                                              (0, r.zw)(i.fieldIndex + 1),
                                              1
                                            ),
                                          ],
                                          64
                                        )),
                                  ],
                                  64
                                )),
                          ])),
                      i.isActive
                        ? ((0, l.wg)(), (0, l.iD)("div", ee, null, 512))
                        : (0, l.kq)("", !0),
                      "image" === i.field.type && s.image
                        ? ((0, l.wg)(),
                          (0, l.iD)(
                            "img",
                            {
                              key: 3,
                              class: "object-contain mx-auto",
                              src: s.image.url,
                            },
                            null,
                            8,
                            te
                          ))
                        : "stamp" === i.field.type && s.stamp
                        ? ((0, l.wg)(),
                          (0, l.iD)(
                            "img",
                            {
                              key: 4,
                              class: "object-contain mx-auto",
                              src: s.stamp.url,
                            },
                            null,
                            8,
                            ie
                          ))
                        : "signature" === i.field.type && s.signature
                        ? ((0, l.wg)(),
                          (0, l.iD)(
                            "img",
                            {
                              key: 5,
                              class: "object-contain mx-auto",
                              src: s.signature.url,
                            },
                            null,
                            8,
                            ae
                          ))
                        : "initials" === i.field.type && s.initials
                        ? ((0, l.wg)(),
                          (0, l.iD)(
                            "img",
                            {
                              key: 6,
                              class: "object-contain mx-auto",
                              src: s.initials.url,
                            },
                            null,
                            8,
                            ne
                          ))
                        : "file" === i.field.type || "payment" === i.field.type
                        ? ((0, l.wg)(),
                          (0, l.iD)("div", le, [
                            ((0, l.wg)(!0),
                            (0, l.iD)(
                              l.HY,
                              null,
                              (0, l.Ko)(
                                s.attachments,
                                (e, t) => (
                                  (0, l.wg)(),
                                  (0, l.iD)(
                                    "a",
                                    { key: t, target: "_blank", href: e.url },
                                    [
                                      (0, l.Wm)(o, {
                                        class:
                                          "inline w-[1.5vw] h-[1.5vw] lg:w-4 lg:h-4",
                                      }),
                                      (0, l.Uk)(" " + (0, r.zw)(e.filename), 1),
                                    ],
                                    8,
                                    re
                                  )
                                )
                              ),
                              128
                            )),
                          ]))
                        : "checkbox" === i.field.type
                        ? ((0, l.wg)(),
                          (0, l.iD)(
                            "div",
                            {
                              key: 8,
                              class:
                                "w-full p-[1px] flex items-center justify-center",
                              onClick:
                                t[1] ||
                                (t[1] = (e) =>
                                  e.target.querySelector("input")?.click()),
                            },
                            [
                              i.submittable
                                ? ((0, l.wg)(),
                                  (0, l.iD)(
                                    "input",
                                    {
                                      key: 0,
                                      type: "checkbox",
                                      value: !1,
                                      class: (0, r.C_)([
                                        "aspect-square base-checkbox",
                                        {
                                          "!w-auto !h-full":
                                            i.area.w > i.area.h,
                                          "!w-full !h-auto":
                                            i.area.w <= i.area.h,
                                        },
                                      ]),
                                      checked: !!i.modelValue,
                                      onClick:
                                        t[0] ||
                                        (t[0] = (t) =>
                                          e.$emit(
                                            "update:model-value",
                                            !i.modelValue
                                          )),
                                    },
                                    null,
                                    10,
                                    se
                                  ))
                                : i.modelValue
                                ? ((0, l.wg)(),
                                  (0, l.j4)(
                                    u,
                                    {
                                      key: 1,
                                      class: (0, r.C_)([
                                        "aspect-square",
                                        {
                                          "!w-auto !h-full":
                                            i.area.w > i.area.h,
                                          "!w-full !h-auto":
                                            i.area.w <= i.area.h,
                                        },
                                      ]),
                                    },
                                    null,
                                    8,
                                    ["class"]
                                  ))
                                : (0, l.kq)("", !0),
                            ]
                          ))
                        : "radio" === i.field.type && i.area.option_uuid
                        ? ((0, l.wg)(),
                          (0, l.iD)(
                            "div",
                            {
                              key: 9,
                              class:
                                "w-full p-[1px] flex items-center justify-center",
                              onClick:
                                t[3] ||
                                (t[3] = (e) =>
                                  e.target.querySelector("input")?.click()),
                            },
                            [
                              i.submittable
                                ? ((0, l.wg)(),
                                  (0, l.iD)(
                                    "input",
                                    {
                                      key: 0,
                                      type: "radio",
                                      value: !1,
                                      class: (0, r.C_)([
                                        "aspect-square checked:checkbox checked:checkbox-xs",
                                        {
                                          "base-radio":
                                            !i.modelValue ||
                                            i.modelValue !==
                                              s.optionValue(s.option),
                                          "!w-auto !h-full":
                                            i.area.w > i.area.h,
                                          "!w-full !h-auto":
                                            i.area.w <= i.area.h,
                                        },
                                      ]),
                                      checked:
                                        !!i.modelValue &&
                                        i.modelValue ===
                                          s.optionValue(s.option),
                                      onClick:
                                        t[2] ||
                                        (t[2] = (t) =>
                                          e.$emit(
                                            "update:model-value",
                                            s.optionValue(s.option)
                                          )),
                                    },
                                    null,
                                    10,
                                    oe
                                  ))
                                : i.modelValue &&
                                  i.modelValue === s.optionValue(s.option)
                                ? ((0, l.wg)(),
                                  (0, l.j4)(
                                    u,
                                    {
                                      key: 1,
                                      class: (0, r.C_)([
                                        "aspect-square",
                                        {
                                          "!w-auto !h-full":
                                            i.area.w > i.area.h,
                                          "!w-full !h-auto":
                                            i.area.w <= i.area.h,
                                        },
                                      ]),
                                    },
                                    null,
                                    8,
                                    ["class"]
                                  ))
                                : (0, l.kq)("", !0),
                            ]
                          ))
                        : "multiple" === i.field.type && i.area.option_uuid
                        ? ((0, l.wg)(),
                          (0, l.iD)(
                            "div",
                            {
                              key: 10,
                              class:
                                "w-full p-[1px] flex items-center justify-center",
                              onClick:
                                t[5] ||
                                (t[5] = (e) =>
                                  e.target.querySelector("input")?.click()),
                            },
                            [
                              i.submittable
                                ? ((0, l.wg)(),
                                  (0, l.iD)(
                                    "input",
                                    {
                                      key: 0,
                                      type: "checkbox",
                                      value: !1,
                                      class: (0, r.C_)([
                                        "aspect-square base-checkbox",
                                        {
                                          "!w-auto !h-full":
                                            i.area.w > i.area.h,
                                          "!w-full !h-auto":
                                            i.area.w <= i.area.h,
                                        },
                                      ]),
                                      checked:
                                        !!i.modelValue &&
                                        i.modelValue.includes(
                                          s.optionValue(s.option)
                                        ),
                                      onChange:
                                        t[4] ||
                                        (t[4] = (e) =>
                                          s.updateMultipleSelectValue(
                                            s.optionValue(s.option)
                                          )),
                                    },
                                    null,
                                    42,
                                    ue
                                  ))
                                : i.modelValue &&
                                  i.modelValue.includes(s.optionValue(s.option))
                                ? ((0, l.wg)(),
                                  (0, l.j4)(
                                    u,
                                    {
                                      key: 1,
                                      class: (0, r.C_)([
                                        "aspect-square",
                                        {
                                          "!w-auto !h-full":
                                            i.area.w > i.area.h,
                                          "!w-full !h-auto":
                                            i.area.w <= i.area.h,
                                        },
                                      ]),
                                    },
                                    null,
                                    8,
                                    ["class"]
                                  ))
                                : (0, l.kq)("", !0),
                            ]
                          ))
                        : "cells" === i.field.type
                        ? ((0, l.wg)(),
                          (0, l.iD)("div", de, [
                            ((0, l.wg)(!0),
                            (0, l.iD)(
                              l.HY,
                              null,
                              (0, l.Ko)(
                                i.modelValue,
                                (e, t) => (
                                  (0, l.wg)(),
                                  (0, l.iD)(
                                    "div",
                                    {
                                      key: t,
                                      class: "text-center flex-none",
                                      style: (0, r.j5)({
                                        width:
                                          (i.area.cell_w / i.area.w) * 100 +
                                          "%",
                                      }),
                                    },
                                    (0, r.zw)(e),
                                    5
                                  )
                                )
                              ),
                              128
                            )),
                          ]))
                        : ((0, l.wg)(),
                          (0, l.iD)(
                            "div",
                            {
                              key: 12,
                              ref: "textContainer",
                              dir: "auto",
                              class: (0, r.C_)([
                                "flex items-center px-0.5 w-full",
                                s.alignClasses[i.field.preferences?.align],
                              ]),
                            },
                            [
                              Array.isArray(i.modelValue)
                                ? ((0, l.wg)(),
                                  (0, l.iD)(
                                    "span",
                                    ce,
                                    (0, r.zw)(i.modelValue.join(", ")),
                                    1
                                  ))
                                : "date" === i.field.type
                                ? ((0, l.wg)(),
                                  (0, l.iD)(
                                    "span",
                                    pe,
                                    (0, r.zw)(s.formattedDate),
                                    1
                                  ))
                                : "number" === i.field.type
                                ? ((0, l.wg)(),
                                  (0, l.iD)(
                                    "span",
                                    me,
                                    (0, r.zw)(
                                      s.formatNumber(
                                        i.modelValue,
                                        i.field.preferences?.format
                                      )
                                    ),
                                    1
                                  ))
                                : ((0, l.wg)(),
                                  (0, l.iD)(
                                    "span",
                                    {
                                      key: 3,
                                      class: (0, r.C_)([
                                        "whitespace-pre-wrap",
                                        {
                                          "w-full": i.field.preferences?.align,
                                        },
                                      ]),
                                    },
                                    (0, r.zw)(i.modelValue),
                                    3
                                  )),
                            ],
                            2
                          )),
                    ],
                    6
                  )
                );
              },
            ],
          ]),
          $e = {
            name: "FieldAreas",
            components: { FieldArea: je },
            props: {
              steps: { type: Array, required: !1, default: () => [] },
              values: { type: Object, required: !1, default: () => ({}) },
              attachmentsIndex: {
                type: Object,
                required: !1,
                default: () => ({}),
              },
              withLabel: { type: Boolean, required: !1, default: !0 },
              currentStep: { type: Array, required: !1, default: () => [] },
            },
            emits: ["focus-step"],
            data: () => ({ areaRefs: [] }),
            beforeUpdate() {
              this.areaRefs = [];
            },
            methods: {
              findPageElementForArea(e) {
                return (
                  this.$root.$el?.parentNode?.getRootNode() || document
                ).getElementById(`page-${e.attachment_uuid}-${e.page}`);
              },
              scrollIntoField(e) {
                e?.areas && this.scrollIntoArea(e.areas[0]);
              },
              scrollIntoArea(e) {
                const t = this.areaRefs.find((t) => t.area === e);
                if (t) {
                  const e = this.$root.$el.parentNode.getRootNode();
                  return (
                    "hidden" ===
                    (e.body || e.querySelector("div")).style.overflow
                      ? this.scrollInContainer(t.$el)
                      : t.$refs.scrollToElem.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        }),
                    !0
                  );
                }
              },
              scrollInContainer(e) {
                const t = this.$root.$el.parentNode.getRootNode(),
                  i = t.getElementById("scrollbox"),
                  a = t.getElementById("form_container"),
                  n = t.body || t.querySelector("div"),
                  l = i.children[0].getBoundingClientRect(),
                  r = e.getBoundingClientRect().top - l.top;
                i.scrollTop =
                  r - n.offsetHeight + a.offsetHeight + e.offsetHeight + 64;
              },
              setAreaRef(e) {
                e && this.areaRefs.push(e);
              },
            },
          };
        var Te = (0, Ve.Z)($e, [
          [
            "render",
            function (e, t, i, a, n, r) {
              const s = (0, l.up)("FieldArea");
              return (
                (0, l.wg)(!0),
                (0, l.iD)(
                  l.HY,
                  null,
                  (0, l.Ko)(
                    i.steps,
                    (t) => (
                      (0, l.wg)(),
                      (0, l.iD)(
                        l.HY,
                        { key: t[0].uuid },
                        [
                          ((0, l.wg)(!0),
                          (0, l.iD)(
                            l.HY,
                            null,
                            (0, l.Ko)(
                              t,
                              (a, n) => (
                                (0, l.wg)(),
                                (0, l.iD)(
                                  l.HY,
                                  { key: a.uuid },
                                  [
                                    ((0, l.wg)(!0),
                                    (0, l.iD)(
                                      l.HY,
                                      null,
                                      (0, l.Ko)(
                                        a.areas,
                                        (o, u) => (
                                          (0, l.wg)(),
                                          (0, l.iD)(
                                            l.HY,
                                            { key: u },
                                            [
                                              r.findPageElementForArea(o)
                                                ? ((0, l.wg)(),
                                                  (0, l.j4)(
                                                    l.lR,
                                                    {
                                                      key: 0,
                                                      to: r.findPageElementForArea(
                                                        o
                                                      ),
                                                    },
                                                    [
                                                      (0, l.Wm)(
                                                        s,
                                                        {
                                                          ref_for: !0,
                                                          ref: r.setAreaRef,
                                                          modelValue:
                                                            i.values[a.uuid],
                                                          "onUpdate:modelValue":
                                                            (e) =>
                                                              (i.values[
                                                                a.uuid
                                                              ] = e),
                                                          field: a,
                                                          area: o,
                                                          submittable: !0,
                                                          "field-index": n,
                                                          "is-active":
                                                            i.currentStep === t,
                                                          "with-label":
                                                            i.withLabel,
                                                          "is-value-set":
                                                            t.some(
                                                              (e) =>
                                                                e.uuid in
                                                                i.values
                                                            ),
                                                          "attachments-index":
                                                            i.attachmentsIndex,
                                                          onClick: (i) =>
                                                            e.$emit(
                                                              "focus-step",
                                                              t
                                                            ),
                                                        },
                                                        null,
                                                        8,
                                                        [
                                                          "modelValue",
                                                          "onUpdate:modelValue",
                                                          "field",
                                                          "area",
                                                          "field-index",
                                                          "is-active",
                                                          "with-label",
                                                          "is-value-set",
                                                          "attachments-index",
                                                          "onClick",
                                                        ]
                                                      ),
                                                    ],
                                                    8,
                                                    ["to"]
                                                  ))
                                                : (0, l.kq)("", !0),
                                            ],
                                            64
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )
              );
            },
          ],
        ]);
        var Ue = {
          name: "FormulaFieldAreas",
          components: { FieldArea: je },
          props: {
            fields: { type: Array, required: !1, default: () => [] },
            values: { type: Object, required: !1, default: () => ({}) },
          },
          data: () => ({ isMathLoaded: !1 }),
          async mounted() {
            const {
              create: e,
              evaluateDependencies: t,
              addDependencies: a,
              subtractDependencies: n,
              divideDependencies: l,
              multiplyDependencies: r,
              powDependencies: s,
              roundDependencies: o,
              absDependencies: u,
              sinDependencies: d,
              tanDependencies: c,
              cosDependencies: p,
            } = await i.e(914).then(i.bind(i, 1914));
            (this.math = e({
              evaluateDependencies: t,
              addDependencies: a,
              subtractDependencies: n,
              divideDependencies: l,
              multiplyDependencies: r,
              powDependencies: s,
              roundDependencies: o,
              absDependencies: u,
              sinDependencies: d,
              tanDependencies: c,
              cosDependencies: p,
            })),
              (this.isMathLoaded = !0);
          },
          methods: {
            findPageElementForArea(e) {
              return (
                this.$root.$el?.parentNode?.getRootNode() || document
              ).getElementById(`page-${e.attachment_uuid}-${e.page}`);
            },
            calculateFormula(e) {
              const t = e.preferences.formula.replace(
                /{{(.*?)}}/g,
                (e, t) => this.values[t] || 0
              );
              return this.math.evaluate(t.toLowerCase());
            },
          },
        };
        var Pe = (0, Ve.Z)(Ue, [
          [
            "render",
            function (e, t, i, a, n, r) {
              const s = (0, l.up)("FieldArea");
              return (
                (0, l.wg)(!0),
                (0, l.iD)(
                  l.HY,
                  null,
                  (0, l.Ko)(
                    i.fields,
                    (e, t) => (
                      (0, l.wg)(),
                      (0, l.iD)(
                        l.HY,
                        { key: e.uuid },
                        [
                          ((0, l.wg)(!0),
                          (0, l.iD)(
                            l.HY,
                            null,
                            (0, l.Ko)(
                              e.areas,
                              (i, a) => (
                                (0, l.wg)(),
                                (0, l.iD)(
                                  l.HY,
                                  { key: a },
                                  [
                                    r.findPageElementForArea(i)
                                      ? ((0, l.wg)(),
                                        (0, l.j4)(
                                          l.lR,
                                          {
                                            key: 0,
                                            to: r.findPageElementForArea(i),
                                          },
                                          [
                                            n.isMathLoaded
                                              ? ((0, l.wg)(),
                                                (0, l.j4)(
                                                  s,
                                                  {
                                                    key: 0,
                                                    "model-value":
                                                      r.calculateFormula(e),
                                                    field: e,
                                                    area: i,
                                                    submittable: !1,
                                                    "field-index": t,
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    "model-value",
                                                    "field",
                                                    "area",
                                                    "field-index",
                                                  ]
                                                ))
                                              : (0, l.kq)("", !0),
                                          ],
                                          8,
                                          ["to"]
                                        ))
                                      : (0, l.kq)("", !0),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )
              );
            },
          ],
        ]);
        const Me = { key: 0 },
          Ae = { class: "flex justify-between items-center w-full mb-2" },
          Oe = { class: "label text-2xl" },
          Re = ["src"],
          Be = ["value", "name"],
          Ee = { key: 1 },
          Ne = { key: 0, dir: "auto", class: "mb-3 px-1" };
        const We = ["for"],
          Ze = {
            class:
              "absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center",
          },
          He = { class: "flex flex-col items-center" },
          Le = { key: 2, class: "font-medium mb-1" },
          Ye = { class: "text-xs" },
          Ke = { class: "font-medium" },
          Qe = ["id", "multiple", "accept"];
        var Je = i(5798),
          Ge = i(7153),
          Xe = {
            name: "FileDropzone",
            components: { IconCloudUpload: Je.Z, IconInnerShadowTop: Ge.Z },
            inject: ["baseUrl", "t"],
            props: {
              message: { type: String, required: !0 },
              submitterSlug: { type: String, required: !0 },
              accept: { type: String, required: !1, default: "*/*" },
              multiple: { type: Boolean, required: !1, default: !1 },
            },
            emits: ["upload"],
            data: () => ({ isLoading: !1 }),
            computed: {
              inputId: () => "el" + Math.random().toString(32).split(".")[1],
            },
            methods: {
              onDropFiles(e) {
                this.uploadFiles(e.dataTransfer.files);
              },
              onSelectFiles(e) {
                e.preventDefault(),
                  this.uploadFiles(this.$refs.input.files).then(() => {
                    this.$refs.input && (this.$refs.input.value = "");
                  });
              },
              async uploadFiles(e) {
                return (
                  (this.isLoading = !0),
                  await Promise.all(
                    Array.from(e).map(async (e) => {
                      const t = new FormData();
                      return (
                        "image/bmp" === e.type &&
                          (e = await this.convertBmpToPng(e)),
                        t.append("file", e),
                        t.append("submitter_slug", this.submitterSlug),
                        t.append("name", "attachments"),
                        fetch(this.baseUrl + "/api/attachments", {
                          method: "POST",
                          body: t,
                        })
                          .then((e) => e.json())
                          .then((e) => e)
                      );
                    })
                  )
                    .then((e) => {
                      this.$emit("upload", e);
                    })
                    .finally(() => {
                      this.isLoading = !1;
                    })
                );
              },
              convertBmpToPng: (e) =>
                new Promise((t, i) => {
                  const a = new FileReader();
                  (a.onload = function (i) {
                    const a = new Image();
                    (a.onload = function () {
                      const i = document.createElement("canvas"),
                        n = i.getContext("2d");
                      (i.width = a.width),
                        (i.height = a.height),
                        n.drawImage(a, 0, 0),
                        i.toBlob(function (i) {
                          const a = new File(
                            [i],
                            e.name.replace(/\.\w+$/, ".png"),
                            { type: "image/png" }
                          );
                          t(a);
                        }, "image/png");
                    }),
                      (a.src = i.target.result);
                  }),
                    (a.onerror = i),
                    a.readAsDataURL(e);
                }),
            },
          };
        var et = (0, Ve.Z)(Xe, [
            [
              "render",
              function (e, t, i, n, s, o) {
                const u = (0, l.up)("IconInnerShadowTop"),
                  d = (0, l.up)("IconCloudUpload");
                return (
                  (0, l.wg)(),
                  (0, l.iD)(
                    "div",
                    {
                      class: "flex h-32 w-full",
                      onDragover:
                        t[1] || (t[1] = (0, a.iM)(() => {}, ["prevent"])),
                      onDrop:
                        t[2] ||
                        (t[2] = (0, a.iM)(
                          (...e) => o.onDropFiles && o.onDropFiles(...e),
                          ["prevent"]
                        )),
                    },
                    [
                      (0, l._)(
                        "label",
                        {
                          for: o.inputId,
                          class: (0, r.C_)([
                            "w-full relative bg-base-300 hover:bg-base-200 rounded-md border border-base-content border-dashed",
                            { "opacity-50": s.isLoading },
                          ]),
                        },
                        [
                          (0, l._)("div", Ze, [
                            (0, l._)("div", He, [
                              s.isLoading
                                ? ((0, l.wg)(),
                                  (0, l.j4)(u, {
                                    key: 0,
                                    class: "animate-spin",
                                    width: 30,
                                    height: 30,
                                  }))
                                : ((0, l.wg)(),
                                  (0, l.j4)(d, {
                                    key: 1,
                                    width: 30,
                                    height: 30,
                                  })),
                              i.message
                                ? ((0, l.wg)(),
                                  (0, l.iD)("div", Le, (0, r.zw)(i.message), 1))
                                : (0, l.kq)("", !0),
                              (0, l._)("div", Ye, [
                                (0, l._)(
                                  "span",
                                  Ke,
                                  (0, r.zw)(o.t("click_to_upload")),
                                  1
                                ),
                                (0, l.Uk)(
                                  " " +
                                    (0, r.zw)(o.t("or_drag_and_drop_files")),
                                  1
                                ),
                              ]),
                            ]),
                          ]),
                          (0, l._)(
                            "input",
                            {
                              id: o.inputId,
                              ref: "input",
                              multiple: i.multiple,
                              accept: i.accept,
                              type: "file",
                              class: "hidden",
                              onChange:
                                t[0] ||
                                (t[0] = (...e) =>
                                  o.onSelectFiles && o.onSelectFiles(...e)),
                            },
                            null,
                            40,
                            Qe
                          ),
                        ],
                        10,
                        We
                      ),
                    ],
                    32
                  )
                );
              },
            ],
          ]),
          tt = i(652);
        const it = ["href"],
          at = { key: 1 },
          nt = { key: 2 },
          lt = { key: 3 };
        var rt = i(9252);
        const st =
          /(<a.+?<\/a>|<i>.+?<\/i>|<b>.+?<\/b>|<em>.+?<\/em>|<strong>.+?<\/strong>|<br>)/;
        var ot = {
          name: "MarkdownContent",
          props: { string: { type: String, required: !1, default: "" } },
          computed: {
            items() {
              return (0, rt.Z)(this.string.replace(/\n/g, "<br>")).split(st);
            },
          },
          methods: {
            sanitizeHref(e) {
              if (e && e.trim().match(/^((?:https?:\/\/)|\/)/))
                return e.replace(/javascript:/g, "");
            },
            extractAttr(e, t) {
              if (e.includes(t)) return e.split(t).pop().split('"')[1];
            },
            extractText(e) {
              if (e) return e.match(/>(.+?)</)?.[1];
            },
          },
        };
        var ut = (0, Ve.Z)(ot, [
            [
              "render",
              function (e, t, i, a, n, s) {
                return (
                  (0, l.wg)(),
                  (0, l.iD)("span", null, [
                    ((0, l.wg)(!0),
                    (0, l.iD)(
                      l.HY,
                      null,
                      (0, l.Ko)(
                        s.items,
                        (e, t) => (
                          (0, l.wg)(),
                          (0, l.iD)(
                            l.HY,
                            { key: t },
                            [
                              e.startsWith("<a") && e.endsWith("</a>")
                                ? ((0, l.wg)(),
                                  (0, l.iD)(
                                    "a",
                                    {
                                      key: 0,
                                      href: s.sanitizeHref(
                                        s.extractAttr(e, "href")
                                      ),
                                      rel: "noopener noreferrer nofollow",
                                      class: (0, r.C_)(
                                        s.extractAttr(e, "class") || "link"
                                      ),
                                      target: "_blank",
                                    },
                                    (0, r.zw)(s.extractText(e)),
                                    11,
                                    it
                                  ))
                                : e.startsWith("<b>") ||
                                  e.startsWith("<strong>")
                                ? ((0, l.wg)(),
                                  (0, l.iD)(
                                    "b",
                                    at,
                                    (0, r.zw)(s.extractText(e)),
                                    1
                                  ))
                                : e.startsWith("<i>") || e.startsWith("<em>")
                                ? ((0, l.wg)(),
                                  (0, l.iD)(
                                    "i",
                                    nt,
                                    (0, r.zw)(s.extractText(e)),
                                    1
                                  ))
                                : "<br>" === e || "\n" === e
                                ? ((0, l.wg)(), (0, l.iD)("br", lt))
                                : ((0, l.wg)(),
                                  (0, l.iD)(
                                    l.HY,
                                    { key: 4 },
                                    [(0, l.Uk)((0, r.zw)(e), 1)],
                                    64
                                  )),
                            ],
                            64
                          )
                        )
                      ),
                      128
                    )),
                  ])
                );
              },
            ],
          ]),
          dt = {
            name: "ImageStep",
            components: {
              FileDropzone: et,
              IconReload: tt.Z,
              MarkdownContent: ut,
            },
            inject: ["t"],
            props: {
              field: { type: Object, required: !0 },
              showFieldNames: { type: Boolean, required: !1, default: !0 },
              submitterSlug: { type: String, required: !0 },
              attachmentsIndex: {
                type: Object,
                required: !1,
                default: () => ({}),
              },
              modelValue: { type: String, required: !1, default: "" },
            },
            emits: ["attached", "update:model-value"],
            methods: {
              remove() {
                this.$emit("update:model-value", "");
              },
              onImageUpload(e) {
                this.$emit("attached", e[0]),
                  this.$emit("update:model-value", e[0].uuid);
              },
            },
          };
        var ct = (0, Ve.Z)(dt, [
          [
            "render",
            function (e, t, i, n, s, o) {
              const u = (0, l.up)("IconReload"),
                d = (0, l.up)("MarkdownContent"),
                c = (0, l.up)("FileDropzone");
              return (
                (0, l.wg)(),
                (0, l.iD)(
                  l.HY,
                  null,
                  [
                    i.modelValue
                      ? ((0, l.wg)(),
                        (0, l.iD)("div", Me, [
                          (0, l._)("div", Ae, [
                            (0, l._)(
                              "label",
                              Oe,
                              (0, r.zw)(
                                i.showFieldNames && i.field.name
                                  ? i.field.name
                                  : o.t("image")
                              ),
                              1
                            ),
                            (0, l._)(
                              "button",
                              {
                                class: "btn btn-outline btn-sm",
                                onClick:
                                  t[0] ||
                                  (t[0] = (0, a.iM)(
                                    (...e) => o.remove && o.remove(...e),
                                    ["prevent"]
                                  )),
                              },
                              [
                                (0, l.Wm)(u, { width: 16 }),
                                (0, l.Uk)(" " + (0, r.zw)(o.t("reupload")), 1),
                              ]
                            ),
                          ]),
                          (0, l._)("div", null, [
                            (0, l._)(
                              "img",
                              {
                                src: i.attachmentsIndex[i.modelValue].url,
                                class:
                                  "h-52 border border-base-300 rounded mx-auto",
                              },
                              null,
                              8,
                              Re
                            ),
                          ]),
                          (0, l._)(
                            "input",
                            {
                              value: i.modelValue,
                              type: "hidden",
                              name: `values[${i.field.uuid}]`,
                            },
                            null,
                            8,
                            Be
                          ),
                        ]))
                      : (0, l.kq)("", !0),
                    i.modelValue
                      ? (0, l.kq)("", !0)
                      : ((0, l.wg)(),
                        (0, l.iD)("div", Ee, [
                          i.field.description
                            ? ((0, l.wg)(),
                              (0, l.iD)("div", Ne, [
                                (0, l.Wm)(
                                  d,
                                  { string: i.field.description },
                                  null,
                                  8,
                                  ["string"]
                                ),
                              ]))
                            : (0, l.kq)("", !0),
                          (0, l.Wm)(
                            c,
                            {
                              message: `${o.t("upload")} ${
                                i.field.name || o.t("image")
                              }${
                                i.field.required ? "" : ` (${o.t("optional")})`
                              }`,
                              "submitter-slug": i.submitterSlug,
                              accept: "image/*",
                              onUpload: o.onImageUpload,
                            },
                            null,
                            8,
                            ["message", "submitter-slug", "onUpload"]
                          ),
                        ])),
                  ],
                  64
                )
              );
            },
          ],
        ]);
        const pt = { dir: "auto", class: "relative" },
          mt = { class: "label text-2xl" },
          ht = { class: "space-x-2 flex" },
          _t = ["data-tip"],
          ft = { class: "hidden sm:inline" },
          gt = ["data-tip"],
          wt = { class: "hidden sm:inline" },
          bt = ["data-tip"],
          yt = {
            class: "btn btn-outline btn-sm font-medium inline-flex flex-nowrap",
          },
          vt = { class: "hidden sm:inline" },
          kt = ["title"],
          xt = { key: 0, dir: "auto", class: "mb-3 px-1" },
          St = ["value", "name"],
          Ft = ["src"],
          Dt = { class: "relative" },
          qt = ["data-tip"],
          Ct = {
            ref: "canvas",
            style: { padding: "1px" },
            class: "bg-white border border-base-300 rounded-2xl w-full",
          },
          It = {
            class:
              "top-0 bottom-0 right-0 left-0 absolute bg-base-content/10 rounded-2xl",
          },
          zt = { class: "absolute top-1.5 right-1.5 tooltip" },
          Vt = { class: "flex items-center justify-center w-full h-full p-4" },
          jt = { key: 0, ref: "qr", class: "bg-white p-4 rounded-xl h-full" },
          $t = { ref: "qrCanvas", class: "h-full" },
          Tt = ["required", "placeholder"],
          Ut = {
            key: 3,
            dir: "auto",
            class: "text-base-content/60 text-xs text-center w-full mt-1",
          },
          Pt = {
            key: 4,
            dir: "auto",
            class: "text-base-content/60 text-xs text-center w-full mt-1",
          },
          Mt = {
            href: "https://www.uvtsign.co/esign-disclosure",
            target: "_blank",
          },
          At = { class: "inline md:hidden" },
          Ot = { class: "hidden md:inline" },
          Rt = { key: 5, class: "mt-5 md:mt-7" };
        var Bt = i(2974),
          Et = i(230),
          Nt = i(4762),
          Wt = i(5646),
          Zt = i(1392);
        function Ht(e, { errorOnTooSmall: t } = { errorOnTooSmall: !1 }) {
          const i = e.getContext("2d"),
            a = e.width,
            n = e.height;
          let l = n,
            r = 0,
            s = a,
            o = 0;
          const u = i.getImageData(0, 0, a, n).data;
          for (let h = 0; h < n; h++)
            for (let e = 0; e < a; e++) {
              0 !== u[4 * (h * a + e) + 3] &&
                ((l = Math.min(l, h)),
                (r = Math.max(r, h)),
                (s = Math.min(s, e)),
                (o = Math.max(o, e)));
            }
          const d = o - s + 1,
            c = r - l + 1,
            p = document.createElement("canvas");
          (p.width = d), (p.height = c);
          const m = p.getContext("2d");
          return t && (d < 20 || c < 20)
            ? Promise.reject(new Error("Image too small"))
            : (m.drawImage(e, s, l, d, c, 0, 0, d, c),
              new Promise((e, t) => {
                p.toBlob((i) => {
                  i ? e(i) : t(new Error("Failed to create a PNG blob."));
                }, "image/png");
              }));
        }
        var Lt = i(7672);
        const Yt = { key: 0, dir: "auto", class: "mb-2" },
          Kt = { class: "flex space-x-1 text-sm ml-1 -mt-3" },
          Qt = ["onClick"];
        var Jt = {
          name: "AppearsOn",
          inject: ["t", "scrollIntoArea"],
          props: { field: { type: Object, required: !0 } },
          computed: {
            isMultipleDocs() {
              return this.attachmentUuids.length > 1;
            },
            attachmentUuids() {
              return [
                ...new Set(this.uniqueAreas.map((e) => e.attachment_uuid)),
              ];
            },
            uniqueAreas() {
              const e = {};
              return (
                this.field.areas?.forEach((t) => {
                  e[t.attachment_uuid + t.page] ||= t;
                }),
                Object.values(e).slice(0, 6)
              );
            },
          },
        };
        var Gt = (0, Ve.Z)(Jt, [
          [
            "render",
            function (e, t, i, n, s, o) {
              return o.uniqueAreas.length > 1
                ? ((0, l.wg)(),
                  (0, l.iD)("div", Yt, [
                    (0, l._)("div", Kt, [
                      (0, l._)(
                        "span",
                        null,
                        (0, r.zw)(o.t("appears_on")) + ": ",
                        1
                      ),
                      ((0, l.wg)(!0),
                      (0, l.iD)(
                        l.HY,
                        null,
                        (0, l.Ko)(
                          o.uniqueAreas,
                          (e) => (
                            (0, l.wg)(),
                            (0, l.iD)(
                              "a",
                              {
                                key: e.uuid,
                                href: "#",
                                class: "link pr-0.5",
                                onClick: (0, a.iM)(
                                  (t) => o.scrollIntoArea(e),
                                  ["prevent"]
                                ),
                              },
                              [
                                (0, l.Uk)((0, r.zw)(o.t("page")) + " ", 1),
                                o.isMultipleDocs
                                  ? ((0, l.wg)(),
                                    (0, l.iD)(
                                      l.HY,
                                      { key: 0 },
                                      [
                                        (0, l.Uk)(
                                          (0, r.zw)(
                                            o.attachmentUuids.indexOf(
                                              e.attachment_uuid
                                            ) + 1
                                          ) + "-",
                                          1
                                        ),
                                      ],
                                      64
                                    ))
                                  : (0, l.kq)("", !0),
                                (0, l.Uk)((0, r.zw)(e.page + 1), 1),
                              ],
                              8,
                              Qt
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ]))
                : (0, l.kq)("", !0);
            },
          ],
        ]);
        let Xt = !1;
        var ei = {
          name: "SignatureStep",
          components: {
            AppearsOn: Gt,
            IconReload: tt.Z,
            IconCamera: Bt.Z,
            IconQrcode: Et.Z,
            MarkdownContent: ut,
            IconX: Nt.Z,
            IconTextSize: fe.Z,
            IconSignature: Wt.Z,
            IconArrowsDiagonalMinimize2: Zt.Z,
          },
          inject: ["baseUrl", "t"],
          props: {
            field: { type: Object, required: !0 },
            submitterSlug: { type: String, required: !0 },
            showFieldNames: { type: Boolean, required: !1, default: !0 },
            withDisclosure: { type: Boolean, required: !1, default: !1 },
            withQrButton: { type: Boolean, required: !1, default: !1 },
            buttonText: { type: String, required: !1, default: "Submit" },
            withTypedSignature: { type: Boolean, required: !1, default: !0 },
            attachmentsIndex: {
              type: Object,
              required: !1,
              default: () => ({}),
            },
            previousValue: { type: String, required: !1, default: "" },
            modelValue: { type: String, required: !1, default: "" },
          },
          emits: ["attached", "update:model-value", "start", "minimize"],
          data() {
            return {
              isSignatureStarted: !!this.previousValue,
              isShowQr: !1,
              isUsePreviousValue: !0,
              isTextSignature: "typed" === this.field.preferences?.format,
              uploadImageInputKey: Math.random().toString(),
            };
          },
          computed: {
            computedPreviousValue() {
              return this.isUsePreviousValue ? this.previousValue : null;
            },
          },
          async mounted() {
            this.$nextTick(() => {
              this.$refs.canvas &&
                ((this.$refs.canvas.width =
                  3 * this.$refs.canvas.parentNode.clientWidth),
                (this.$refs.canvas.height =
                  (3 * this.$refs.canvas.parentNode.clientWidth) / 3),
                this.$refs.canvas.getContext("2d").scale(3, 3)),
                this.withQrButton &&
                  i
                    .e(1)
                    .then(i.bind(i, 8001))
                    .then(({ default: e }) => {
                      e.render(
                        {
                          text: `${document.location.origin}/p/${
                            this.submitterSlug
                          }?f=${this.field.uuid.split("-")[0]}`,
                          radius: 0,
                          ecLevel: "H",
                          background: null,
                          size: 132,
                        },
                        this.$refs.qrCanvas
                      );
                    });
            }),
              this.$refs.canvas &&
                ((this.pad = new Lt.default(this.$refs.canvas)),
                this.pad.addEventListener("beginStroke", () => {
                  (this.isSignatureStarted = !0), this.$emit("start");
                }),
                (this.intersectionObserver = new IntersectionObserver(
                  (e, t) => {
                    e.forEach((e) => {
                      e.isIntersecting &&
                        ((this.$refs.canvas.width =
                          3 * this.$refs.canvas.parentNode.clientWidth),
                        (this.$refs.canvas.height =
                          (3 * this.$refs.canvas.parentNode.clientWidth) / 3),
                        this.$refs.canvas.getContext("2d").scale(3, 3),
                        this.intersectionObserver?.disconnect());
                    });
                  }
                )),
                this.intersectionObserver.observe(this.$refs.canvas));
          },
          beforeUnmount() {
            this.intersectionObserver?.disconnect(), this.stopCheckSignature();
          },
          methods: {
            remove() {
              this.$emit("update:model-value", ""),
                (this.isUsePreviousValue = !1),
                (this.isSignatureStarted = !1);
            },
            loadFont() {
              if (!Xt) {
                new FontFace(
                  "Dancing Script",
                  `url(${this.baseUrl}/fonts/DancingScript-Regular.otf) format("opentype")`
                )
                  .load()
                  .then((e) => {
                    document.fonts.add(e), (Xt = !0);
                  })
                  .catch((e) => {
                    console.error("Font loading failed:", e);
                  });
              }
            },
            showQr() {
              (this.isShowQr = !0), this.startCheckSignature();
            },
            hideQr() {
              (this.isShowQr = !1), this.stopCheckSignature();
            },
            startCheckSignature() {
              const e = JSON.stringify(new Date());
              this.checkSignatureInterval = setInterval(() => {
                this.checkSignature({ after: e });
              }, 2e3);
            },
            stopCheckSignature() {
              this.checkSignatureInterval &&
                clearInterval(this.checkSignatureInterval);
            },
            checkSignature(e = {}) {
              return fetch(
                this.baseUrl +
                  "/s/" +
                  this.submitterSlug +
                  "/values?field_uuid=" +
                  this.field.uuid +
                  "&after=" +
                  e.after,
                { method: "GET" }
              ).then(async (e) => {
                const { attachment: t } = await e.json();
                t?.uuid &&
                  (this.$emit("attached", t),
                  this.$emit("update:model-value", t.uuid),
                  this.hideQr());
              });
            },
            clear() {
              this.pad.clear(),
                (this.isSignatureStarted = !1),
                this.$refs.textInput && (this.$refs.textInput.value = "");
            },
            updateWrittenSignature(e) {
              this.isSignatureStarted = !!e.target.value;
              const t = this.$refs.canvas,
                i = t.getContext("2d");
              (i.font = "italic  38px Dancing Script"),
                (i.textAlign = "center"),
                i.clearRect(0, 0, t.width / 3, t.height / 3),
                i.fillText(
                  e.target.value,
                  t.width / 2 / 3,
                  t.height / 2 / 3 + 11
                );
            },
            toggleTextInput() {
              this.remove(),
                this.clear(),
                (this.isTextSignature = !this.isTextSignature),
                this.isTextSignature &&
                  this.$nextTick(() => {
                    this.$refs.textInput.focus(),
                      this.loadFont(),
                      this.$emit("start");
                  });
            },
            drawImage(e) {
              this.remove(), (this.isSignatureStarted = !0);
              const t = e.target.files[0];
              if (t && t.type.match("image.*")) {
                const e = new FileReader();
                (e.onload = (e) => {
                  const t = new Image();
                  (t.src = e.target.result),
                    (t.onload = () => {
                      const e = this.$refs.canvas,
                        i = e.getContext("2d"),
                        a = t.width / t.height,
                        n = e.width / 3,
                        l = e.height / 3;
                      let r = n,
                        s = l;
                      if ((n / l > a ? (r = l * a) : (s = n / a), s > r)) {
                        const e = s / r;
                        (r *= e), (s *= e);
                      }
                      const o = (n - r) / 2,
                        u = (l - s) / 2;
                      setTimeout(() => {
                        i.clearRect(0, 0, n, l),
                          i.drawImage(t, o, u, r, s),
                          this.$emit("start");
                      }, 50);
                    });
                }),
                  e.readAsDataURL(t),
                  (this.uploadImageInputKey = Math.random().toString());
              }
            },
            async submit() {
              return this.modelValue || this.computedPreviousValue
                ? (this.computedPreviousValue &&
                    this.$emit(
                      "update:model-value",
                      this.computedPreviousValue
                    ),
                  Promise.resolve({}))
                : new Promise((e, t) => {
                    Ht(this.$refs.canvas, { errorOnTooSmall: !0 })
                      .then(async (t) => {
                        const i = new File([t], "signature.png", {
                            type: "image/png",
                          }),
                          a = new FormData();
                        return (
                          a.append("file", i),
                          a.append("submitter_slug", this.submitterSlug),
                          a.append("name", "attachments"),
                          fetch(this.baseUrl + "/api/attachments", {
                            method: "POST",
                            body: a,
                          })
                            .then((e) => e.json())
                            .then(
                              (t) => (
                                this.$emit("attached", t),
                                this.$emit("update:model-value", t.uuid),
                                e(t)
                              )
                            )
                        );
                      })
                      .catch((e) => t(e));
                  });
            },
          },
        };
        var ti = (0, Ve.Z)(ei, [
          [
            "render",
            function (e, t, i, n, s, o) {
              const u = (0, l.up)("MarkdownContent"),
                d = (0, l.up)("IconSignature"),
                c = (0, l.up)("IconTextSize"),
                p = (0, l.up)("IconCamera"),
                m = (0, l.up)("IconReload"),
                h = (0, l.up)("IconArrowsDiagonalMinimize2"),
                _ = (0, l.up)("AppearsOn"),
                f = (0, l.up)("IconQrcode"),
                g = (0, l.up)("IconX");
              return (
                (0, l.wg)(),
                (0, l.iD)("div", pt, [
                  (0, l._)(
                    "div",
                    {
                      class: (0, r.C_)([
                        "flex justify-between items-center w-full",
                        { "mb-2": !i.field.description },
                      ]),
                    },
                    [
                      (0, l._)("label", mt, [
                        i.field.title
                          ? ((0, l.wg)(),
                            (0, l.j4)(
                              u,
                              { key: 0, string: i.field.title },
                              null,
                              8,
                              ["string"]
                            ))
                          : ((0, l.wg)(),
                            (0, l.iD)(
                              l.HY,
                              { key: 1 },
                              [
                                (0, l.Uk)(
                                  (0, r.zw)(
                                    i.showFieldNames && i.field.name
                                      ? i.field.name
                                      : o.t("signature")
                                  ),
                                  1
                                ),
                              ],
                              64
                            )),
                      ]),
                      (0, l._)("div", ht, [
                        s.isTextSignature &&
                        "typed" !== i.field.preferences?.format
                          ? ((0, l.wg)(),
                            (0, l.iD)(
                              "span",
                              {
                                key: 0,
                                class: "tooltip",
                                "data-tip": o.t("draw_signature"),
                              },
                              [
                                (0, l._)(
                                  "a",
                                  {
                                    id: "type_text_button",
                                    href: "#",
                                    class: "btn btn-outline btn-sm font-medium",
                                    onClick:
                                      t[0] ||
                                      (t[0] = (0, a.iM)(
                                        (e) => [
                                          o.toggleTextInput(),
                                          o.hideQr(),
                                        ],
                                        ["prevent"]
                                      )),
                                  },
                                  [
                                    (0, l.Wm)(d, { width: 16 }),
                                    (0, l._)(
                                      "span",
                                      ft,
                                      (0, r.zw)(o.t("draw")),
                                      1
                                    ),
                                  ]
                                ),
                              ],
                              8,
                              _t
                            ))
                          : i.withTypedSignature &&
                            "typed" !== i.field.preferences?.format &&
                            "drawn" !== i.field.preferences?.format
                          ? ((0, l.wg)(),
                            (0, l.iD)(
                              "span",
                              {
                                key: 1,
                                class: "tooltip ml-2",
                                "data-tip": o.t("type_text"),
                              },
                              [
                                (0, l._)(
                                  "a",
                                  {
                                    id: "type_text_button",
                                    href: "#",
                                    class:
                                      "btn btn-outline btn-sm font-medium inline-flex flex-nowrap",
                                    onClick:
                                      t[1] ||
                                      (t[1] = (0, a.iM)(
                                        (e) => [
                                          o.toggleTextInput(),
                                          o.hideQr(),
                                        ],
                                        ["prevent"]
                                      )),
                                  },
                                  [
                                    (0, l.Wm)(c, { width: 16 }),
                                    (0, l._)(
                                      "span",
                                      wt,
                                      (0, r.zw)(o.t("type")),
                                      1
                                    ),
                                  ]
                                ),
                              ],
                              8,
                              gt
                            ))
                          : (0, l.kq)("", !0),
                        "typed" !== i.field.preferences?.format
                          ? ((0, l.wg)(),
                            (0, l.iD)(
                              "span",
                              {
                                key: 2,
                                class: "tooltip",
                                "data-tip": o.t("take_photo"),
                              },
                              [
                                (0, l._)("label", yt, [
                                  (0, l.Wm)(p, { width: 16 }),
                                  ((0, l.wg)(),
                                  (0, l.iD)(
                                    "input",
                                    {
                                      key: s.uploadImageInputKey,
                                      type: "file",
                                      hidden: "",
                                      accept: "image/*",
                                      onChange:
                                        t[2] ||
                                        (t[2] = (...e) =>
                                          o.drawImage && o.drawImage(...e)),
                                    },
                                    null,
                                    32
                                  )),
                                  (0, l._)(
                                    "span",
                                    vt,
                                    (0, r.zw)(o.t("upload")),
                                    1
                                  ),
                                ]),
                              ],
                              8,
                              bt
                            ))
                          : (0, l.kq)("", !0),
                        i.modelValue || o.computedPreviousValue
                          ? ((0, l.wg)(),
                            (0, l.iD)(
                              "a",
                              {
                                key: 3,
                                href: "#",
                                class: "btn btn-outline btn-sm font-medium",
                                onClick:
                                  t[3] ||
                                  (t[3] = (0, a.iM)(
                                    (...e) => o.remove && o.remove(...e),
                                    ["prevent"]
                                  )),
                              },
                              [
                                (0, l.Wm)(m, { width: 16 }),
                                (0, l.Uk)(" " + (0, r.zw)(o.t("redraw")), 1),
                              ]
                            ))
                          : ((0, l.wg)(),
                            (0, l.iD)(
                              "a",
                              {
                                key: 4,
                                href: "#",
                                class: "btn btn-outline btn-sm font-medium",
                                onClick:
                                  t[4] ||
                                  (t[4] = (0, a.iM)(
                                    (e) => [o.clear(), o.hideQr()],
                                    ["prevent"]
                                  )),
                              },
                              [
                                (0, l.Wm)(m, { width: 16 }),
                                (0, l.Uk)(" " + (0, r.zw)(o.t("clear")), 1),
                              ]
                            )),
                        (0, l._)(
                          "a",
                          {
                            href: "#",
                            title: o.t("minimize"),
                            class: "py-1.5 inline md:hidden",
                            onClick:
                              t[5] ||
                              (t[5] = (0, a.iM)(
                                (t) => e.$emit("minimize"),
                                ["prevent"]
                              )),
                          },
                          [(0, l.Wm)(h, { width: 20, height: 20 })],
                          8,
                          kt
                        ),
                      ]),
                    ],
                    2
                  ),
                  i.field.description
                    ? ((0, l.wg)(),
                      (0, l.iD)("div", xt, [
                        (0, l.Wm)(u, { string: i.field.description }, null, 8, [
                          "string",
                        ]),
                      ]))
                    : (0, l.kq)("", !0),
                  (0, l.Wm)(_, { field: i.field }, null, 8, ["field"]),
                  (0, l._)(
                    "input",
                    {
                      value: i.modelValue || o.computedPreviousValue,
                      type: "hidden",
                      name: `values[${i.field.uuid}]`,
                    },
                    null,
                    8,
                    St
                  ),
                  i.modelValue || o.computedPreviousValue
                    ? ((0, l.wg)(),
                      (0, l.iD)(
                        "img",
                        {
                          key: 1,
                          src: i.attachmentsIndex[
                            i.modelValue || o.computedPreviousValue
                          ].url,
                          class:
                            "mx-auto bg-white border border-base-300 rounded max-h-72",
                        },
                        null,
                        8,
                        Ft
                      ))
                    : (0, l.kq)("", !0),
                  (0, l._)("div", Dt, [
                    i.withQrButton
                      ? ((0, l.wg)(),
                        (0, l.iD)(
                          "div",
                          {
                            key: 0,
                            class:
                              "absolute top-1.5 right-1.5 tooltip hidden md:inline",
                            "data-tip": o.t(
                              "drawn_signature_on_a_touchscreen_device"
                            ),
                          },
                          [
                            s.isShowQr ||
                            s.isSignatureStarted ||
                            s.isTextSignature ||
                            i.modelValue
                              ? (0, l.kq)("", !0)
                              : ((0, l.wg)(),
                                (0, l.iD)(
                                  "a",
                                  {
                                    key: 0,
                                    href: "#",
                                    class: "btn btn-sm btn-circle btn-ghost",
                                    onClick:
                                      t[6] ||
                                      (t[6] = (0, a.iM)(
                                        (...e) => o.showQr && o.showQr(...e),
                                        ["prevent"]
                                      )),
                                  },
                                  [(0, l.Wm)(f)]
                                )),
                          ],
                          8,
                          qt
                        ))
                      : (0, l.kq)("", !0),
                    (0, l.wy)((0, l._)("canvas", Ct, null, 512), [
                      [a.F8, !i.modelValue && !o.computedPreviousValue],
                    ]),
                    (0, l.wy)(
                      (0, l._)(
                        "div",
                        It,
                        [
                          (0, l._)("div", zt, [
                            (0, l._)(
                              "a",
                              {
                                href: "#",
                                class:
                                  "btn btn-sm btn-circle btn-normal btn-outline",
                                onClick:
                                  t[7] ||
                                  (t[7] = (0, a.iM)(
                                    (...e) => o.hideQr && o.hideQr(...e),
                                    ["prevent"]
                                  )),
                              },
                              [(0, l.Wm)(g)]
                            ),
                          ]),
                          (0, l._)("div", Vt, [
                            i.withQrButton
                              ? ((0, l.wg)(),
                                (0, l.iD)(
                                  "div",
                                  jt,
                                  [(0, l._)("canvas", $t, null, 512)],
                                  512
                                ))
                              : (0, l.kq)("", !0),
                          ]),
                        ],
                        512
                      ),
                      [[a.F8, s.isShowQr]]
                    ),
                  ]),
                  s.isTextSignature
                    ? ((0, l.wg)(),
                      (0, l.iD)(
                        "input",
                        {
                          key: 2,
                          id: "signature_text_input",
                          ref: "textInput",
                          class: "base-input !text-2xl w-full mt-6",
                          required: i.field.required && !s.isSignatureStarted,
                          placeholder: `${o.t("type_signature_here")}...`,
                          type: "text",
                          onInput:
                            t[8] ||
                            (t[8] = (...e) =>
                              o.updateWrittenSignature &&
                              o.updateWrittenSignature(...e)),
                        },
                        null,
                        40,
                        Tt
                      ))
                    : (0, l.kq)("", !0),
                  s.isShowQr
                    ? ((0, l.wg)(),
                      (0, l.iD)(
                        "div",
                        Ut,
                        (0, r.zw)(
                          o.t(
                            "scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature"
                          )
                        ),
                        1
                      ))
                    : i.withDisclosure
                    ? ((0, l.wg)(),
                      (0, l.iD)("div", Pt, [
                        (0, l.Uk)(
                          (0, r.zw)(
                            o
                              .t("by_clicking_you_agree_to_the")
                              .replace(
                                "{button}",
                                i.buttonText.charAt(0).toUpperCase() +
                                  i.buttonText.slice(1)
                              )
                          ) + " ",
                          1
                        ),
                        (0, l._)("a", Mt, [
                          (0, l._)(
                            "span",
                            At,
                            (0, r.zw)(o.t("esignature_disclosure")),
                            1
                          ),
                          (0, l._)(
                            "span",
                            Ot,
                            (0, r.zw)(o.t("electronic_signature_disclosure")),
                            1
                          ),
                        ]),
                      ]))
                    : ((0, l.wg)(), (0, l.iD)("div", Rt)),
                ])
              );
            },
          ],
        ]);
        const ii = { dir: "auto" },
          ai = { class: "label text-2xl" },
          ni = { class: "space-x-2 flex" },
          li = ["data-tip"],
          ri = { class: "hidden sm:inline" },
          si = ["data-tip"],
          oi = { class: "hidden sm:inline" },
          ui = ["title"],
          di = { key: 0, dir: "auto", class: "mb-3 px-1" },
          ci = ["value", "name"],
          pi = ["src"],
          mi = {
            ref: "canvas",
            class: "bg-white border border-base-300 rounded-2xl w-full",
          },
          hi = ["required", "placeholder"];
        var _i = {
          name: "InitialsStep",
          components: {
            AppearsOn: Gt,
            IconReload: tt.Z,
            IconTextSize: fe.Z,
            IconSignature: Wt.Z,
            MarkdownContent: ut,
            IconArrowsDiagonalMinimize2: Zt.Z,
          },
          inject: ["baseUrl", "t"],
          props: {
            field: { type: Object, required: !0 },
            submitterSlug: { type: String, required: !0 },
            showFieldNames: { type: Boolean, required: !1, default: !0 },
            attachmentsIndex: {
              type: Object,
              required: !1,
              default: () => ({}),
            },
            previousValue: { type: String, required: !1, default: "" },
            modelValue: { type: String, required: !1, default: "" },
          },
          emits: [
            "attached",
            "update:model-value",
            "start",
            "minimize",
            "focus",
          ],
          data() {
            return {
              isInitialsStarted: !!this.previousValue,
              isUsePreviousValue: !0,
              isDrawInitials: !1,
            };
          },
          computed: {
            computedPreviousValue() {
              return this.isUsePreviousValue ? this.previousValue : null;
            },
          },
          async mounted() {
            this.$nextTick(() => {
              this.$refs.canvas &&
                ((this.$refs.canvas.width =
                  3 * this.$refs.canvas.parentNode.clientWidth),
                (this.$refs.canvas.height =
                  (this.$refs.canvas.parentNode.clientWidth / 4.5) * 3),
                this.$refs.canvas.getContext("2d").scale(3, 3));
            }),
              this.$refs.canvas &&
                ((this.pad = new Lt.default(this.$refs.canvas)),
                this.pad.addEventListener("beginStroke", () => {
                  (this.isInitialsStarted = !0), this.$emit("start");
                }),
                (this.intersectionObserver = new IntersectionObserver(
                  (e, t) => {
                    e.forEach((e) => {
                      e.isIntersecting &&
                        ((this.$refs.canvas.width =
                          3 * this.$refs.canvas.parentNode.clientWidth),
                        (this.$refs.canvas.height =
                          (this.$refs.canvas.parentNode.clientWidth / 4.5) * 3),
                        this.$refs.canvas.getContext("2d").scale(3, 3),
                        this.intersectionObserver?.disconnect());
                    });
                  }
                )),
                this.intersectionObserver.observe(this.$refs.canvas));
          },
          beforeUnmount() {
            this.intersectionObserver?.disconnect();
          },
          methods: {
            remove() {
              this.$emit("update:model-value", ""),
                (this.isUsePreviousValue = !1),
                (this.isInitialsStarted = !1);
            },
            clear() {
              this.pad.clear(),
                (this.isInitialsStarted = !1),
                this.$refs.textInput && (this.$refs.textInput.value = "");
            },
            updateWrittenInitials(e) {
              this.isInitialsStarted = !!e.target.value;
              const t = this.$refs.canvas,
                i = t.getContext("2d");
              (i.font = "italic  44px Arial"),
                (i.textAlign = "center"),
                i.clearRect(0, 0, t.width / 3, t.height / 3),
                i.fillText(
                  e.target.value,
                  t.width / 2 / 3,
                  t.height / 2 / 3 + 11
                );
            },
            toggleTextInput() {
              this.remove(),
                this.clear(),
                (this.isDrawInitials = !this.isDrawInitials),
                this.isDrawInitials ||
                  this.$nextTick(() => {
                    this.$refs.textInput.focus(), this.$emit("start");
                  });
            },
            async submit() {
              return this.modelValue || this.computedPreviousValue
                ? (this.computedPreviousValue &&
                    this.$emit(
                      "update:model-value",
                      this.computedPreviousValue
                    ),
                  Promise.resolve({}))
                : new Promise((e) => {
                    Ht(this.$refs.canvas).then(async (t) => {
                      const i = new File([t], "initials.png", {
                          type: "image/png",
                        }),
                        a = new FormData();
                      return (
                        a.append("file", i),
                        a.append("submitter_slug", this.submitterSlug),
                        a.append("name", "attachments"),
                        fetch(this.baseUrl + "/api/attachments", {
                          method: "POST",
                          body: a,
                        })
                          .then((e) => e.json())
                          .then(
                            (t) => (
                              this.$emit("attached", t),
                              this.$emit("update:model-value", t.uuid),
                              e(t)
                            )
                          )
                      );
                    });
                  });
            },
          },
        };
        var fi = (0, Ve.Z)(_i, [
          [
            "render",
            function (e, t, i, n, s, o) {
              const u = (0, l.up)("MarkdownContent"),
                d = (0, l.up)("IconTextSize"),
                c = (0, l.up)("IconSignature"),
                p = (0, l.up)("IconReload"),
                m = (0, l.up)("IconArrowsDiagonalMinimize2"),
                h = (0, l.up)("AppearsOn");
              return (
                (0, l.wg)(),
                (0, l.iD)("div", ii, [
                  (0, l._)(
                    "div",
                    {
                      class: (0, r.C_)([
                        "flex justify-between items-center w-full",
                        { "mb-2": !i.field.description },
                      ]),
                    },
                    [
                      (0, l._)("label", ai, [
                        i.field.title
                          ? ((0, l.wg)(),
                            (0, l.j4)(
                              u,
                              { key: 0, string: i.field.title },
                              null,
                              8,
                              ["string"]
                            ))
                          : ((0, l.wg)(),
                            (0, l.iD)(
                              l.HY,
                              { key: 1 },
                              [
                                (0, l.Uk)(
                                  (0, r.zw)(
                                    i.showFieldNames && i.field.name
                                      ? i.field.name
                                      : o.t("initials")
                                  ),
                                  1
                                ),
                              ],
                              64
                            )),
                      ]),
                      (0, l._)("div", ni, [
                        s.isDrawInitials
                          ? ((0, l.wg)(),
                            (0, l.iD)(
                              "span",
                              {
                                key: 0,
                                class: "tooltip",
                                "data-tip": o.t("type_initial"),
                              },
                              [
                                (0, l._)(
                                  "a",
                                  {
                                    id: "type_text_button",
                                    href: "#",
                                    class: "btn btn-outline font-medium btn-sm",
                                    onClick:
                                      t[0] ||
                                      (t[0] = (0, a.iM)(
                                        (...e) =>
                                          o.toggleTextInput &&
                                          o.toggleTextInput(...e),
                                        ["prevent"]
                                      )),
                                  },
                                  [
                                    (0, l.Wm)(d, { width: 16 }),
                                    (0, l._)(
                                      "span",
                                      ri,
                                      (0, r.zw)(o.t("type")),
                                      1
                                    ),
                                  ]
                                ),
                              ],
                              8,
                              li
                            ))
                          : ((0, l.wg)(),
                            (0, l.iD)(
                              "span",
                              {
                                key: 1,
                                class: "tooltip ml-2",
                                "data-tip": o.t("draw_initials"),
                              },
                              [
                                (0, l._)(
                                  "a",
                                  {
                                    id: "type_text_button",
                                    href: "#",
                                    class: "btn btn-outline font-medium btn-sm",
                                    onClick:
                                      t[1] ||
                                      (t[1] = (0, a.iM)(
                                        (...e) =>
                                          o.toggleTextInput &&
                                          o.toggleTextInput(...e),
                                        ["prevent"]
                                      )),
                                  },
                                  [
                                    (0, l.Wm)(c, { width: 16 }),
                                    (0, l._)(
                                      "span",
                                      oi,
                                      (0, r.zw)(o.t("draw")),
                                      1
                                    ),
                                  ]
                                ),
                              ],
                              8,
                              si
                            )),
                        i.modelValue || o.computedPreviousValue
                          ? ((0, l.wg)(),
                            (0, l.iD)(
                              "a",
                              {
                                key: 2,
                                href: "#",
                                class: "btn font-medium btn-outline btn-sm",
                                onClick:
                                  t[2] ||
                                  (t[2] = (0, a.iM)(
                                    (...e) => o.remove && o.remove(...e),
                                    ["prevent"]
                                  )),
                              },
                              [
                                (0, l.Wm)(p, { width: 16 }),
                                (0, l.Uk)(" " + (0, r.zw)(o.t("clear")), 1),
                              ]
                            ))
                          : ((0, l.wg)(),
                            (0, l.iD)(
                              "a",
                              {
                                key: 3,
                                href: "#",
                                class: "btn font-medium btn-outline btn-sm",
                                onClick:
                                  t[3] ||
                                  (t[3] = (0, a.iM)(
                                    (...e) => o.clear && o.clear(...e),
                                    ["prevent"]
                                  )),
                              },
                              [
                                (0, l.Wm)(p, { width: 16 }),
                                (0, l.Uk)(" " + (0, r.zw)(o.t("clear")), 1),
                              ]
                            )),
                        (0, l._)(
                          "a",
                          {
                            title: o.t("minimize"),
                            href: "#",
                            class: "py-1.5 inline md:hidden",
                            onClick:
                              t[4] ||
                              (t[4] = (0, a.iM)(
                                (t) => e.$emit("minimize"),
                                ["prevent"]
                              )),
                          },
                          [(0, l.Wm)(m, { width: 20, height: 20 })],
                          8,
                          ui
                        ),
                      ]),
                    ],
                    2
                  ),
                  i.field.description
                    ? ((0, l.wg)(),
                      (0, l.iD)("div", di, [
                        (0, l.Wm)(u, { string: i.field.description }, null, 8, [
                          "string",
                        ]),
                      ]))
                    : (0, l.kq)("", !0),
                  (0, l.Wm)(h, { field: i.field }, null, 8, ["field"]),
                  (0, l._)(
                    "input",
                    {
                      value: i.modelValue || o.computedPreviousValue,
                      type: "hidden",
                      name: `values[${i.field.uuid}]`,
                    },
                    null,
                    8,
                    ci
                  ),
                  i.modelValue || o.computedPreviousValue
                    ? ((0, l.wg)(),
                      (0, l.iD)(
                        "img",
                        {
                          key: 1,
                          src: i.attachmentsIndex[
                            i.modelValue || o.computedPreviousValue
                          ].url,
                          class:
                            "mx-auto bg-white border border-base-300 rounded max-h-72",
                        },
                        null,
                        8,
                        pi
                      ))
                    : (0, l.kq)("", !0),
                  (0, l.wy)((0, l._)("canvas", mi, null, 512), [
                    [a.F8, !i.modelValue && !o.computedPreviousValue],
                  ]),
                  s.isDrawInitials || i.modelValue || o.computedPreviousValue
                    ? (0, l.kq)("", !0)
                    : ((0, l.wg)(),
                      (0, l.iD)(
                        "input",
                        {
                          key: 2,
                          id: "initials_text_input",
                          ref: "textInput",
                          class: "base-input !text-2xl w-full mt-6 text-center",
                          required: i.field.required && !s.isInitialsStarted,
                          placeholder: `${o.t("type_initial_here")}...`,
                          type: "text",
                          onFocus: t[5] || (t[5] = (t) => e.$emit("focus")),
                          onInput:
                            t[6] ||
                            (t[6] = (...e) =>
                              o.updateWrittenInitials &&
                              o.updateWrittenInitials(...e)),
                        },
                        null,
                        40,
                        hi
                      )),
                ])
              );
            },
          ],
        ]);
        const gi = { key: 0 },
          wi = ["value", "name"],
          bi = ["href"],
          yi = ["onClick"],
          vi = ["name"],
          ki = { key: 2, dir: "auto", class: "mb-3 px-1" };
        var xi = i(1381),
          Si = {
            name: "AttachmentStep",
            components: {
              FileDropzone: et,
              MarkdownContent: ut,
              IconPaperclip: he.Z,
              IconTrashX: xi.Z,
            },
            inject: ["t"],
            props: {
              field: { type: Object, required: !0 },
              submitterSlug: { type: String, required: !0 },
              attachmentsIndex: {
                type: Object,
                required: !1,
                default: () => ({}),
              },
              modelValue: { type: Array, required: !1, default: () => [] },
            },
            emits: ["attached", "update:model-value"],
            computed: {
              value: {
                set(e) {
                  this.$emit("update:model-value", this.modelValue || []);
                },
                get() {
                  return this.modelValue || [];
                },
              },
            },
            methods: {
              removeAttachment(e) {
                this.value.splice(this.value.indexOf(e), 1),
                  this.$emit("update:model-value", this.value);
              },
              onUpload(e) {
                e.forEach((e) => {
                  this.$emit("attached", e);
                }),
                  this.$emit("update:model-value", [
                    ...this.value,
                    ...e.map((e) => e.uuid),
                  ]);
              },
            },
          };
        var Fi = (0, Ve.Z)(Si, [
          [
            "render",
            function (e, t, i, n, s, o) {
              const u = (0, l.up)("IconPaperclip"),
                d = (0, l.up)("IconTrashX"),
                c = (0, l.up)("MarkdownContent"),
                p = (0, l.up)("FileDropzone");
              return (
                (0, l.wg)(),
                (0, l.iD)("div", null, [
                  o.value.length
                    ? ((0, l.wg)(),
                      (0, l.iD)("div", gi, [
                        ((0, l.wg)(!0),
                        (0, l.iD)(
                          l.HY,
                          null,
                          (0, l.Ko)(
                            o.value,
                            (e, t) => (
                              (0, l.wg)(),
                              (0, l.iD)("div", { key: t, class: "flex mb-2" }, [
                                (0, l._)(
                                  "input",
                                  {
                                    value: e,
                                    type: "hidden",
                                    name: `values[${i.field.uuid}][]`,
                                  },
                                  null,
                                  8,
                                  wi
                                ),
                                e
                                  ? ((0, l.wg)(),
                                    (0, l.iD)(
                                      "a",
                                      {
                                        key: 0,
                                        class:
                                          "flex items-center space-x-1.5 w-full",
                                        href: i.attachmentsIndex[e].url,
                                        target: "_blank",
                                      },
                                      [
                                        (0, l.Wm)(u, {
                                          width: 16,
                                          class: "flex-none",
                                          heigh: 16,
                                        }),
                                        (0, l._)(
                                          "span",
                                          null,
                                          (0, r.zw)(
                                            i.attachmentsIndex[e].filename
                                          ),
                                          1
                                        ),
                                      ],
                                      8,
                                      bi
                                    ))
                                  : (0, l.kq)("", !0),
                                (0, l._)(
                                  "button",
                                  {
                                    onClick: (0, a.iM)(
                                      (t) => o.removeAttachment(e),
                                      ["prevent"]
                                    ),
                                  },
                                  [(0, l.Wm)(d, { width: 18, heigh: 19 })],
                                  8,
                                  yi
                                ),
                              ])
                            )
                          ),
                          128
                        )),
                      ]))
                    : ((0, l.wg)(),
                      (0, l.iD)(
                        "input",
                        {
                          key: 1,
                          value: "",
                          type: "hidden",
                          name: `values[${i.field.uuid}][]`,
                        },
                        null,
                        8,
                        vi
                      )),
                  i.field.description && !i.modelValue.length
                    ? ((0, l.wg)(),
                      (0, l.iD)("div", ki, [
                        (0, l.Wm)(c, { string: i.field.description }, null, 8, [
                          "string",
                        ]),
                      ]))
                    : (0, l.kq)("", !0),
                  (0, l.Wm)(
                    p,
                    {
                      message: `${o.t("upload")} ${
                        i.field.name || o.t("files")
                      }${i.field.required ? "" : ` (${o.t("optional")})`}`,
                      "submitter-slug": i.submitterSlug,
                      multiple: !0,
                      onUpload: o.onUpload,
                    },
                    null,
                    8,
                    ["message", "submitter-slug", "onUpload"]
                  ),
                ])
              );
            },
          ],
        ]);
        const Di = ["for"],
          qi = { key: 1, dir: "auto", class: "mb-3 px-1" },
          Ci = { class: "flex w-full max-h-44 overflow-y-auto" },
          Ii = ["name"],
          zi = { key: 1, class: "text-xl px-1" },
          Vi = { class: "font-semibold" },
          ji = ["for"],
          $i = ["id", "name", "value", "checked"],
          Ti = { class: "text-xl" };
        var Ui = {
          name: "MultiSelectStep",
          components: { MarkdownContent: ut },
          inject: ["t", "scrollIntoField"],
          props: {
            field: { type: Object, required: !0 },
            isLastStep: { type: Boolean, required: !0, default: !1 },
            showFieldNames: { type: Boolean, required: !1, default: !0 },
            modelValue: { type: Array, required: !1, default: () => [] },
          },
          emits: ["update:model-value"],
          data: () => ({ inputRefs: [] }),
          computed: {
            showOptions() {
              return (
                this.showFieldNames &&
                (this.field.options.some((e) => e.value) ||
                  this.field.options.length < 5)
              );
            },
          },
          beforeUpdate() {
            this.inputRefs = [];
          },
          methods: {
            setInputRef(e) {
              e && this.inputRefs.push(e);
            },
            optionValue(e, t) {
              return e.value ? e.value : `${this.t("option")} ${t + 1}`;
            },
            onChange() {
              this.$emit(
                "update:model-value",
                this.inputRefs
                  .filter((e) => e.checked)
                  .map((e, t) => this.optionValue(e, t))
              );
            },
          },
        };
        var Pi = (0, Ve.Z)(Ui, [
          [
            "render",
            function (e, t, i, a, n, s) {
              const o = (0, l.up)("MarkdownContent");
              return (
                (0, l.wg)(),
                (0, l.iD)(
                  l.HY,
                  null,
                  [
                    i.showFieldNames && (i.field.name || i.field.title)
                      ? ((0, l.wg)(),
                        (0, l.iD)(
                          "label",
                          {
                            key: 0,
                            for: i.field.uuid,
                            dir: "auto",
                            class: (0, r.C_)([
                              "label text-2xl",
                              { "mb-2": !i.field.description },
                            ]),
                          },
                          [
                            i.field.title
                              ? ((0, l.wg)(),
                                (0, l.j4)(
                                  o,
                                  { key: 0, string: i.field.title },
                                  null,
                                  8,
                                  ["string"]
                                ))
                              : ((0, l.wg)(),
                                (0, l.iD)(
                                  l.HY,
                                  { key: 1 },
                                  [(0, l.Uk)((0, r.zw)(i.field.name), 1)],
                                  64
                                )),
                          ],
                          10,
                          Di
                        ))
                      : (0, l.kq)("", !0),
                    i.field.description
                      ? ((0, l.wg)(),
                        (0, l.iD)("div", qi, [
                          (0, l.Wm)(
                            o,
                            { string: i.field.description },
                            null,
                            8,
                            ["string"]
                          ),
                        ]))
                      : (0, l.kq)("", !0),
                    (0, l._)("div", Ci, [
                      0 === i.modelValue.length
                        ? ((0, l.wg)(),
                          (0, l.iD)(
                            "input",
                            {
                              key: 0,
                              type: "text",
                              name: `values[${i.field.uuid}][]`,
                              value: "",
                              class: "hidden",
                            },
                            null,
                            8,
                            Ii
                          ))
                        : (0, l.kq)("", !0),
                      s.showOptions
                        ? (0, l.kq)("", !0)
                        : ((0, l.wg)(),
                          (0, l.iD)("div", zi, [
                            (0, l._)(
                              "span",
                              {
                                onClick:
                                  t[0] ||
                                  (t[0] = (e) => s.scrollIntoField(i.field)),
                              },
                              [
                                (0, l.Uk)(
                                  (0, r.zw)(
                                    s.t(
                                      "complete_hightlighted_checkboxes_and_click"
                                    )
                                  ) + " ",
                                  1
                                ),
                                (0, l._)(
                                  "span",
                                  Vi,
                                  (0, r.zw)(
                                    i.isLastStep ? s.t("submit") : s.t("next")
                                  ),
                                  1
                                ),
                                (0, l.Uk)(". "),
                              ]
                            ),
                          ])),
                      (0, l._)(
                        "div",
                        {
                          class: (0, r.C_)([
                            "space-y-3.5 mx-auto",
                            { hidden: !s.showOptions },
                          ]),
                        },
                        [
                          ((0, l.wg)(!0),
                          (0, l.iD)(
                            l.HY,
                            null,
                            (0, l.Ko)(
                              i.field.options,
                              (e, a) => (
                                (0, l.wg)(),
                                (0, l.iD)("div", { key: e.uuid }, [
                                  (0, l._)(
                                    "label",
                                    {
                                      for: e.uuid,
                                      class: "flex items-center space-x-3",
                                      onClick:
                                        t[2] ||
                                        (t[2] = (e) =>
                                          s.scrollIntoField(i.field)),
                                    },
                                    [
                                      (0, l._)(
                                        "input",
                                        {
                                          id: e.uuid,
                                          ref_for: !0,
                                          ref: s.setInputRef,
                                          type: "checkbox",
                                          name: `values[${i.field.uuid}][]`,
                                          value: s.optionValue(e, a),
                                          class: "base-checkbox !h-7 !w-7",
                                          checked: (
                                            i.modelValue || []
                                          ).includes(s.optionValue(e, a)),
                                          onChange:
                                            t[1] ||
                                            (t[1] = (...e) =>
                                              s.onChange && s.onChange(...e)),
                                        },
                                        null,
                                        40,
                                        $i
                                      ),
                                      (0, l._)(
                                        "span",
                                        Ti,
                                        (0, r.zw)(s.optionValue(e, a)),
                                        1
                                      ),
                                    ],
                                    8,
                                    ji
                                  ),
                                ])
                              )
                            ),
                            128
                          )),
                        ],
                        2
                      ),
                    ]),
                  ],
                  64
                )
              );
            },
          ],
        ]);
        const Mi = ["for"],
          Ai = { key: 0, dir: "auto", class: "mb-3 px-1" },
          Oi = (0, l._)(
            "input",
            { type: "hidden", name: "normalize_phone", value: "true" },
            null,
            -1
          ),
          Ri = { key: 0 },
          Bi = ["placeholder"],
          Ei = { class: "flex justify-between mt-2 -mb-2 md:-mb-4" },
          Ni = ["id", "value", "readonly", "required", "name"];
        var Wi = {
          name: "PhoneStep",
          components: { MarkdownContent: ut },
          inject: ["t", "baseUrl"],
          props: {
            field: { type: Object, required: !0 },
            verifiedValue: { type: String, required: !1, default: "" },
            submitterSlug: { type: String, required: !0 },
            locale: { type: String, required: !1, default: "en" },
            showFieldNames: { type: Boolean, required: !1, default: !0 },
            modelValue: { type: String, required: !1, default: "" },
            defaultValue: { type: String, required: !1, default: "" },
          },
          emits: ["update:model-value", "focus", "submit"],
          data: () => ({ isCodeSent: !1, isResendLoading: !1 }),
          methods: {
            emitSubmit: (function (e, t) {
              let i = 0;
              return function (...a) {
                const n = Date.now();
                n - i >= t && (e.apply(this, a), (i = n));
              };
            })(function (e) {
              this.$emit("submit");
            }, 1e3),
            onInputCode(e) {
              6 === e.target.value.length && this.emitSubmit();
            },
            resendCode() {
              (this.isResendLoading = !0),
                this.sendVerificationCode().finally(() => {
                  alert(this.t("verification_code_has_been_resent")),
                    (this.isResendLoading = !1);
                });
            },
            sendVerificationCode() {
              return fetch(this.baseUrl + "/api/send_phone_verification_code", {
                method: "POST",
                body: JSON.stringify({
                  submitter_slug: this.submitterSlug,
                  locale: this.locale,
                  phone: this.$refs.phone.value,
                }),
                headers: { "Content-Type": "application/json" },
              });
            },
            async submit() {
              return this.verifiedValue &&
                this.verifiedValue === this.modelValue
                ? Promise.resolve({})
                : this.$refs.phone.value.toString().startsWith("+")
                ? this.isCodeSent
                  ? Promise.resolve({})
                  : (this.sendVerificationCode(),
                    this.$emit("update:model-value", this.$refs.phone.value),
                    (this.isCodeSent = !0),
                    Promise.reject(new Error("verify with code")))
                : (alert(this.t("use_international_format")),
                  Promise.reject(new Error("phone invalid")));
            },
          },
        };
        var Zi = (0, Ve.Z)(Wi, [
          [
            "render",
            function (e, t, i, n, s, o) {
              const u = (0, l.up)("MarkdownContent");
              return (
                (0, l.wg)(),
                (0, l.iD)("div", null, [
                  (0, l._)(
                    "label",
                    {
                      for: s.isCodeSent ? "one_time_code" : i.field.uuid,
                      class: (0, r.C_)([
                        "label text-2xl",
                        { "mb-2": !i.field.description },
                      ]),
                    },
                    [
                      i.field.title
                        ? ((0, l.wg)(),
                          (0, l.j4)(
                            u,
                            { key: 0, string: i.field.title },
                            null,
                            8,
                            ["string"]
                          ))
                        : ((0, l.wg)(),
                          (0, l.iD)(
                            l.HY,
                            { key: 1 },
                            [
                              (0, l.Uk)(
                                (0, r.zw)(
                                  i.showFieldNames && i.field.name
                                    ? i.field.name
                                    : o.t("verified_phone_number")
                                ) + " ",
                                1
                              ),
                              i.field.required
                                ? (0, l.kq)("", !0)
                                : ((0, l.wg)(),
                                  (0, l.iD)(
                                    l.HY,
                                    { key: 0 },
                                    [
                                      (0, l.Uk)(
                                        "(" + (0, r.zw)(o.t("optional")) + ")",
                                        1
                                      ),
                                    ],
                                    64
                                  )),
                            ],
                            64
                          )),
                    ],
                    10,
                    Mi
                  ),
                  i.field.description
                    ? ((0, l.wg)(),
                      (0, l.iD)("div", Ai, [
                        (0, l.Wm)(u, { string: i.field.description }, null, 8, [
                          "string",
                        ]),
                      ]))
                    : (0, l.kq)("", !0),
                  (0, l._)("div", null, [
                    Oi,
                    s.isCodeSent
                      ? ((0, l.wg)(),
                        (0, l.iD)("div", Ri, [
                          (0, l._)(
                            "input",
                            {
                              id: "one_time_code",
                              class: "base-input !text-2xl w-full text-center",
                              name: "one_time_code",
                              type: "text",
                              autocomplete: "one-time-code",
                              placeholder: o.t("six_digits_code"),
                              required: "",
                              maxlength: "6",
                              autofocus: "",
                              inputmode: "decimal",
                              onInput:
                                t[0] ||
                                (t[0] = (...e) =>
                                  o.onInputCode && o.onInputCode(...e)),
                            },
                            null,
                            40,
                            Bi
                          ),
                          (0, l._)("div", Ei, [
                            i.defaultValue
                              ? (0, l.kq)("", !0)
                              : ((0, l.wg)(),
                                (0, l.iD)(
                                  "a",
                                  {
                                    key: 0,
                                    href: "#",
                                    class: "link",
                                    onClick:
                                      t[1] ||
                                      (t[1] = (0, a.iM)(
                                        (e) => (s.isCodeSent = !1),
                                        ["prevent"]
                                      )),
                                  },
                                  (0, r.zw)(o.t("change_phone_number")),
                                  1
                                )),
                            (0, l._)(
                              "a",
                              {
                                href: "#",
                                class: "link",
                                onClick:
                                  t[2] ||
                                  (t[2] = (0, a.iM)(
                                    (...e) =>
                                      o.resendCode && o.resendCode(...e),
                                    ["prevent"]
                                  )),
                              },
                              (0, r.zw)(
                                s.isResendLoading
                                  ? o.t("sending")
                                  : o.t("resend_code")
                              ),
                              1
                            ),
                          ]),
                        ]))
                      : (0, l.kq)("", !0),
                    (0, l.wy)(
                      (0, l._)(
                        "input",
                        {
                          id: i.field.uuid,
                          ref: "phone",
                          value: i.modelValue || i.defaultValue,
                          readonly: !!i.defaultValue,
                          class: "base-input !text-2xl w-full",
                          autocomplete: "tel",
                          pattern: "^\\+[0-9\\s\\-]+$",
                          type: "tel",
                          inputmode: "tel",
                          required: i.field.required,
                          placeholder: "+1 234 567-8900",
                          name: `values[${i.field.uuid}]`,
                          onInvalid:
                            t[3] ||
                            (t[3] = (e) =>
                              e.target.value
                                ? e.target.setCustomValidity(
                                    `${o.t("use_international_format")}...`
                                  )
                                : ""),
                          onInput:
                            t[4] ||
                            (t[4] = (t) => [
                              t.target.setCustomValidity(""),
                              e.$emit("update:model-value", t.target.value),
                            ]),
                          onFocus: t[5] || (t[5] = (t) => e.$emit("focus")),
                        },
                        null,
                        40,
                        Ni
                      ),
                      [[a.F8, !s.isCodeSent]]
                    ),
                  ]),
                ])
              );
            },
          ],
        ]);
        const Hi = ["for"],
          Li = ["value", "name"],
          Yi = { key: 0, class: "text-2xl mb-2" },
          Ki = { key: 1 },
          Qi = { key: 0, disabled: "", class: "base-button w-full" },
          Ji = ["id", "disabled"];
        var Gi = i(2532),
          Xi = i(6272),
          ea = {
            name: "PaymentStep",
            components: {
              IconBrandStripe: Gi.Z,
              IconInnerShadowTop: Ge.Z,
              IconLoader: Xi.Z,
            },
            inject: ["baseUrl", "t"],
            props: {
              modelValue: { type: String, required: !1, default: "" },
              field: { type: Object, required: !0 },
              submitterSlug: { type: String, required: !0 },
            },
            emits: ["focus", "submit", "update:model-value", "attached"],
            data: () => ({ isCreatingCheckout: !1 }),
            computed: {
              queryParams: () => new URLSearchParams(window.location.search),
              sessionId() {
                return this.queryParams.get("stripe_session_id");
              },
              defaultName() {
                const { price: e, currency: t } = this.field.preferences || {};
                return `Pay ${new Intl.NumberFormat([], {
                  style: "currency",
                  currency: t,
                }).format(e)}`;
              },
            },
            mounted() {
              this.sessionId && this.$emit("submit");
            },
            methods: {
              async submit() {
                return this.sessionId
                  ? fetch(
                      (this.baseUrl || "/embed").replace(
                        "/embed",
                        "/api/stripe_payments/" + this.sessionId
                      ),
                      {
                        method: "PUT",
                        body: JSON.stringify({
                          submitter_slug: this.submitterSlug,
                        }),
                        headers: { "Content-Type": "application/json" },
                      }
                    ).then(async (e) => {
                      if (422 === e.status || 500 === e.status) {
                        const t = await e.json();
                        return (
                          alert(t.error || "Unexpected error"),
                          Promise.reject(new Error(t.error))
                        );
                      }
                      const t = await e.json();
                      return (
                        window.history.replaceState(
                          {},
                          document.title,
                          window.location.pathname
                        ),
                        this.$emit("update:model-value", t.uuid),
                        this.$emit("attached", t),
                        e
                      );
                    })
                  : Promise.resolve({});
              },
              startCheckout() {
                (this.isCreatingCheckout = !0),
                  fetch(
                    (this.baseUrl || "/embed").replace(
                      "/embed",
                      "/api/stripe_payments"
                    ),
                    {
                      method: "POST",
                      body: JSON.stringify({
                        submitter_slug: this.submitterSlug,
                        field_uuid: this.field.uuid,
                      }),
                      headers: { "Content-Type": "application/json" },
                    }
                  )
                    .then(async (e) => {
                      if (422 === e.status || 500 === e.status) {
                        const t = await e.json();
                        return (
                          alert(t.message || "Unexpected error"),
                          Promise.reject(new Error(t.message))
                        );
                      }
                      const { url: t } = await e.json(),
                        i = document.createElement("a");
                      (i.href = t), t && i.click();
                    })
                    .finally(() => {
                      this.isCreatingCheckout = !1;
                    });
              },
            },
          };
        var ta = (0, Ve.Z)(ea, [
          [
            "render",
            function (e, t, i, n, s, o) {
              const u = (0, l.up)("IconLoader"),
                d = (0, l.up)("IconInnerShadowTop"),
                c = (0, l.up)("IconBrandStripe");
              return (
                (0, l.wg)(),
                (0, l.iD)(
                  l.HY,
                  null,
                  [
                    i.modelValue || o.sessionId
                      ? (0, l.kq)("", !0)
                      : ((0, l.wg)(),
                        (0, l.iD)(
                          "label",
                          {
                            key: 0,
                            for: i.field.uuid,
                            class: "label text-2xl mb-2",
                          },
                          (0, r.zw)(i.field.name || o.defaultName),
                          9,
                          Hi
                        )),
                    (0, l._)("div", null, [
                      (0, l._)(
                        "input",
                        {
                          type: "text",
                          value: i.modelValue,
                          hidden: "",
                          name: `values[${i.field.uuid}]`,
                          class: "hidden",
                        },
                        null,
                        8,
                        Li
                      ),
                      i.modelValue && !o.sessionId
                        ? ((0, l.wg)(), (0, l.iD)("div", Yi, " Already paid "))
                        : ((0, l.wg)(),
                          (0, l.iD)("div", Ki, [
                            o.sessionId
                              ? ((0, l.wg)(),
                                (0, l.iD)("button", Qi, [
                                  (0, l.Wm)(u, {
                                    width: "22",
                                    class: "animate-spin",
                                  }),
                                  (0, l._)(
                                    "span",
                                    null,
                                    (0, r.zw)(o.t("processing")) + "... ",
                                    1
                                  ),
                                ]))
                              : ((0, l.wg)(),
                                (0, l.iD)(
                                  "button",
                                  {
                                    key: 1,
                                    id: i.field.uuid,
                                    class: (0, r.C_)([
                                      "btn bg-[#7B73FF] text-white hover:bg-[#0A2540] text-lg w-full",
                                      { disabled: s.isCreatingCheckout },
                                    ]),
                                    disabled: s.isCreatingCheckout,
                                    onClick:
                                      t[0] ||
                                      (t[0] = (0, a.iM)(
                                        (...e) =>
                                          o.startCheckout &&
                                          o.startCheckout(...e),
                                        ["prevent"]
                                      )),
                                  },
                                  [
                                    s.isCreatingCheckout
                                      ? ((0, l.wg)(),
                                        (0, l.j4)(d, {
                                          key: 0,
                                          width: "22",
                                          class: "animate-spin",
                                        }))
                                      : ((0, l.wg)(),
                                        (0, l.j4)(c, { key: 1, width: "22" })),
                                    (0, l._)(
                                      "span",
                                      null,
                                      (0, r.zw)(o.t("pay_with_strip")),
                                      1
                                    ),
                                  ],
                                  10,
                                  Ji
                                )),
                          ])),
                    ]),
                  ],
                  64
                )
              );
            },
          ],
        ]);
        const ia = ["for"],
          aa = { key: 1, class: "py-1" },
          na = { key: 2, dir: "auto", class: "mb-3 px-1" },
          la = { class: "items-center flex" },
          ra = [
            "id",
            "maxlength",
            "required",
            "pattern",
            "placeholder",
            "name",
          ],
          sa = ["id", "placeholder", "required", "name"],
          oa = ["data-tip"];
        var ua = {
          name: "TextStep",
          components: {
            IconAlignBoxLeftTop: i(8604).Z,
            MarkdownContent: ut,
            AppearsOn: Gt,
          },
          inject: ["t"],
          props: {
            field: { type: Object, required: !0 },
            showFieldNames: { type: Boolean, required: !1, default: !0 },
            modelValue: { type: String, required: !1, default: "" },
          },
          emits: ["update:model-value", "focus"],
          data: () => ({ isTextArea: !1 }),
          computed: {
            cellsMaxLegth() {
              if ("cells" === this.field.type) {
                const e = this.field.areas?.[0];
                return e ? parseInt(e.w / e.cell_w) + 1 : null;
              }
              return null;
            },
            text: {
              set(e) {
                this.$emit("update:model-value", e);
              },
              get() {
                return this.modelValue;
              },
            },
          },
          mounted() {
            this.modelValue &&
              ((this.isTextArea = this.modelValue.toString().includes("\n")),
              this.isTextArea &&
                this.$nextTick(() => {
                  this.resizeTextarea();
                }));
          },
          methods: {
            resizeTextarea() {
              const e = this.$refs.textarea;
              (e.style.height = "auto"),
                (e.style.height = e.scrollHeight + "px");
            },
            toggleTextArea() {
              (this.isTextArea = !0),
                this.$nextTick(() => {
                  this.$refs.textarea.focus(),
                    this.$refs.textarea.setSelectionRange(
                      this.$refs.textarea.value.length,
                      this.$refs.textarea.value.length
                    ),
                    this.resizeTextarea();
                });
            },
          },
        };
        var da = (0, Ve.Z)(ua, [
          [
            "render",
            function (e, t, i, n, s, o) {
              const u = (0, l.up)("MarkdownContent"),
                d = (0, l.up)("AppearsOn"),
                c = (0, l.up)("IconAlignBoxLeftTop");
              return (
                (0, l.wg)(),
                (0, l.iD)(
                  l.HY,
                  null,
                  [
                    i.showFieldNames && (i.field.name || i.field.title)
                      ? ((0, l.wg)(),
                        (0, l.iD)(
                          "label",
                          {
                            key: 0,
                            for: i.field.uuid,
                            dir: "auto",
                            class: (0, r.C_)([
                              "label text-2xl",
                              { "mb-2": !i.field.description },
                            ]),
                          },
                          [
                            i.field.title
                              ? ((0, l.wg)(),
                                (0, l.j4)(
                                  u,
                                  { key: 0, string: i.field.title },
                                  null,
                                  8,
                                  ["string"]
                                ))
                              : ((0, l.wg)(),
                                (0, l.iD)(
                                  l.HY,
                                  { key: 1 },
                                  [(0, l.Uk)((0, r.zw)(i.field.name), 1)],
                                  64
                                )),
                            i.field.required
                              ? (0, l.kq)("", !0)
                              : ((0, l.wg)(),
                                (0, l.iD)(
                                  l.HY,
                                  { key: 2 },
                                  [
                                    (0, l.Uk)(
                                      "(" + (0, r.zw)(o.t("optional")) + ")",
                                      1
                                    ),
                                  ],
                                  64
                                )),
                          ],
                          10,
                          ia
                        ))
                      : ((0, l.wg)(), (0, l.iD)("div", aa)),
                    i.field.description
                      ? ((0, l.wg)(),
                        (0, l.iD)("div", na, [
                          (0, l.Wm)(
                            u,
                            { string: i.field.description },
                            null,
                            8,
                            ["string"]
                          ),
                        ]))
                      : (0, l.kq)("", !0),
                    (0, l.Wm)(d, { field: i.field }, null, 8, ["field"]),
                    (0, l._)("div", la, [
                      s.isTextArea
                        ? (0, l.kq)("", !0)
                        : (0, l.wy)(
                            ((0, l.wg)(),
                            (0, l.iD)(
                              "input",
                              {
                                key: 0,
                                id: i.field.uuid,
                                "onUpdate:modelValue":
                                  t[0] || (t[0] = (e) => (o.text = e)),
                                maxlength: o.cellsMaxLegth,
                                dir: "auto",
                                class: (0, r.C_)([
                                  "base-input !text-2xl w-full",
                                  {
                                    "!pr-11 -mr-10":
                                      !i.field.validation?.pattern,
                                  },
                                ]),
                                required: i.field.required,
                                pattern: i.field.validation?.pattern,
                                placeholder: `${o.t("type_here_")}${
                                  i.field.required
                                    ? ""
                                    : ` (${o.t("optional")})`
                                }`,
                                type: "text",
                                name: `values[${i.field.uuid}]`,
                                onInvalid:
                                  t[1] ||
                                  (t[1] = (e) =>
                                    i.field.validation?.message
                                      ? e.target.setCustomValidity(
                                          i.field.validation.message
                                        )
                                      : ""),
                                onInput:
                                  t[2] ||
                                  (t[2] = (e) =>
                                    i.field.validation?.message
                                      ? e.target.setCustomValidity("")
                                      : ""),
                                onFocus:
                                  t[3] || (t[3] = (t) => e.$emit("focus")),
                              },
                              null,
                              42,
                              ra
                            )),
                            [[a.nr, o.text]]
                          ),
                      s.isTextArea
                        ? (0, l.wy)(
                            ((0, l.wg)(),
                            (0, l.iD)(
                              "textarea",
                              {
                                key: 1,
                                id: i.field.uuid,
                                ref: "textarea",
                                "onUpdate:modelValue":
                                  t[4] || (t[4] = (e) => (o.text = e)),
                                dir: "auto",
                                class: "base-textarea !text-2xl w-full",
                                placeholder: `${o.t("type_here_")}${
                                  i.field.required
                                    ? ""
                                    : ` (${o.t("optional")})`
                                }`,
                                required: i.field.required,
                                name: `values[${i.field.uuid}]`,
                                onInput:
                                  t[5] ||
                                  (t[5] = (...e) =>
                                    o.resizeTextarea && o.resizeTextarea(...e)),
                                onFocus:
                                  t[6] || (t[6] = (t) => e.$emit("focus")),
                              },
                              null,
                              40,
                              sa
                            )),
                            [[a.nr, o.text]]
                          )
                        : (0, l.kq)("", !0),
                      s.isTextArea ||
                      "cells" === i.field.type ||
                      i.field.validation?.pattern
                        ? (0, l.kq)("", !0)
                        : ((0, l.wg)(),
                          (0, l.iD)(
                            "div",
                            {
                              key: 2,
                              class: "tooltip",
                              "data-tip": o.t("toggle_multiline_text"),
                            },
                            [
                              (0, l._)(
                                "a",
                                {
                                  href: "#",
                                  class: "btn btn-ghost btn-circle btn-sm",
                                  onClick:
                                    t[7] ||
                                    (t[7] = (0, a.iM)(
                                      (...e) =>
                                        o.toggleTextArea &&
                                        o.toggleTextArea(...e),
                                      ["prevent"]
                                    )),
                                },
                                [(0, l.Wm)(c)]
                              ),
                            ],
                            8,
                            oa
                          )),
                    ]),
                  ],
                  64
                )
              );
            },
          ],
        ]);
        const ca = ["for"],
          pa = { key: 1, class: "py-1" },
          ma = { key: 2, dir: "auto", class: "mb-3 px-1" },
          ha = { class: "items-center flex" },
          _a = (0, l._)(
            "input",
            { type: "hidden", name: "cast_number", value: "true" },
            null,
            -1
          ),
          fa = ["id", "required", "placeholder", "name"];
        var ga = {
          name: "TextStep",
          components: { AppearsOn: Gt, MarkdownContent: ut },
          inject: ["t"],
          props: {
            field: { type: Object, required: !0 },
            showFieldNames: { type: Boolean, required: !1, default: !0 },
            modelValue: { type: [String, Number], required: !1, default: "" },
          },
          emits: ["update:model-value", "focus"],
          computed: {
            number: {
              set(e) {
                this.$emit("update:model-value", e);
              },
              get() {
                return this.modelValue;
              },
            },
          },
        };
        var wa = (0, Ve.Z)(ga, [
          [
            "render",
            function (e, t, i, n, s, o) {
              const u = (0, l.up)("MarkdownContent"),
                d = (0, l.up)("AppearsOn");
              return (
                (0, l.wg)(),
                (0, l.iD)(
                  l.HY,
                  null,
                  [
                    i.showFieldNames && (i.field.name || i.field.title)
                      ? ((0, l.wg)(),
                        (0, l.iD)(
                          "label",
                          {
                            key: 0,
                            for: i.field.uuid,
                            dir: "auto",
                            class: (0, r.C_)([
                              "label text-2xl",
                              { "mb-2": !i.field.description },
                            ]),
                          },
                          [
                            i.field.title
                              ? ((0, l.wg)(),
                                (0, l.j4)(
                                  u,
                                  { key: 0, string: i.field.title },
                                  null,
                                  8,
                                  ["string"]
                                ))
                              : ((0, l.wg)(),
                                (0, l.iD)(
                                  l.HY,
                                  { key: 1 },
                                  [(0, l.Uk)((0, r.zw)(i.field.name), 1)],
                                  64
                                )),
                            i.field.required
                              ? (0, l.kq)("", !0)
                              : ((0, l.wg)(),
                                (0, l.iD)(
                                  l.HY,
                                  { key: 2 },
                                  [
                                    (0, l.Uk)(
                                      "(" + (0, r.zw)(o.t("optional")) + ")",
                                      1
                                    ),
                                  ],
                                  64
                                )),
                          ],
                          10,
                          ca
                        ))
                      : ((0, l.wg)(), (0, l.iD)("div", pa)),
                    i.field.description
                      ? ((0, l.wg)(),
                        (0, l.iD)("div", ma, [
                          (0, l.Wm)(
                            u,
                            { string: i.field.description },
                            null,
                            8,
                            ["string"]
                          ),
                        ]))
                      : (0, l.kq)("", !0),
                    (0, l.Wm)(d, { field: i.field }, null, 8, ["field"]),
                    (0, l._)("div", ha, [
                      _a,
                      (0, l.wy)(
                        (0, l._)(
                          "input",
                          {
                            id: i.field.uuid,
                            "onUpdate:modelValue":
                              t[0] || (t[0] = (e) => (o.number = e)),
                            type: "number",
                            class: "base-input !text-2xl w-full",
                            step: "any",
                            required: i.field.required,
                            placeholder: `${o.t("type_here_")}${
                              i.field.required ? "" : ` (${o.t("optional")})`
                            }`,
                            name: `values[${i.field.uuid}]`,
                            onFocus: t[1] || (t[1] = (t) => e.$emit("focus")),
                          },
                          null,
                          40,
                          fa
                        ),
                        [[a.nr, o.number]]
                      ),
                    ]),
                  ],
                  64
                )
              );
            },
          ],
        ]);
        const ba = { dir: "auto" },
          ya = ["for"],
          va = { key: 0, class: "mb-3 px-1", dir: "auto" },
          ka = { class: "text-center" },
          xa = ["required", "name"];
        var Sa = {
          name: "DateStep",
          components: {
            IconCalendarCheck: i(1086).Z,
            MarkdownContent: ut,
            AppearsOn: Gt,
          },
          inject: ["t"],
          props: {
            field: { type: Object, required: !0 },
            showFieldNames: { type: Boolean, required: !1, default: !0 },
            modelValue: { type: String, required: !1, default: "" },
          },
          emits: ["update:model-value", "focus"],
          computed: {
            value: {
              set(e) {
                this.$emit("update:model-value", e);
              },
              get() {
                return this.modelValue;
              },
            },
          },
          methods: {
            setCurrentDate() {
              const e = this.$refs.input;
              (e.valueAsDate = new Date(
                new Date().getTime() - 6e4 * new Date().getTimezoneOffset()
              )),
                e.dispatchEvent(new Event("input", { bubbles: !0 }));
            },
          },
        };
        var Fa = (0, Ve.Z)(Sa, [
          [
            "render",
            function (e, t, i, n, s, o) {
              const u = (0, l.up)("MarkdownContent"),
                d = (0, l.up)("IconCalendarCheck"),
                c = (0, l.up)("AppearsOn");
              return (
                (0, l.wg)(),
                (0, l.iD)("div", ba, [
                  (0, l._)(
                    "div",
                    {
                      class: (0, r.C_)([
                        "flex justify-between items-center w-full",
                        { "mb-2": !i.field.description },
                      ]),
                    },
                    [
                      (0, l._)(
                        "label",
                        { for: i.field.uuid, class: "label text-2xl" },
                        [
                          i.field.title
                            ? ((0, l.wg)(),
                              (0, l.j4)(
                                u,
                                { key: 0, string: i.field.title },
                                null,
                                8,
                                ["string"]
                              ))
                            : ((0, l.wg)(),
                              (0, l.iD)(
                                l.HY,
                                { key: 1 },
                                [
                                  (0, l.Uk)(
                                    (0, r.zw)(
                                      i.field.name && i.showFieldNames
                                        ? i.field.name
                                        : o.t("date")
                                    ) + " ",
                                    1
                                  ),
                                  i.field.required
                                    ? (0, l.kq)("", !0)
                                    : ((0, l.wg)(),
                                      (0, l.iD)(
                                        l.HY,
                                        { key: 0 },
                                        [
                                          (0, l.Uk)(
                                            "(" +
                                              (0, r.zw)(o.t("optional")) +
                                              ")",
                                            1
                                          ),
                                        ],
                                        64
                                      )),
                                ],
                                64
                              )),
                        ],
                        8,
                        ya
                      ),
                      (0, l._)(
                        "button",
                        {
                          class:
                            "btn btn-outline btn-sm !normal-case font-normal",
                          onClick:
                            t[0] ||
                            (t[0] = (0, a.iM)(
                              (t) => [o.setCurrentDate(), e.$emit("focus")],
                              ["prevent"]
                            )),
                        },
                        [
                          (0, l.Wm)(d, { width: 16 }),
                          (0, l.Uk)(" " + (0, r.zw)(o.t("set_today")), 1),
                        ]
                      ),
                    ],
                    2
                  ),
                  i.field.description
                    ? ((0, l.wg)(),
                      (0, l.iD)("div", va, [
                        (0, l.Wm)(u, { string: i.field.description }, null, 8, [
                          "string",
                        ]),
                      ]))
                    : (0, l.kq)("", !0),
                  (0, l.Wm)(c, { field: i.field }, null, 8, ["field"]),
                  (0, l._)("div", ka, [
                    (0, l.wy)(
                      (0, l._)(
                        "input",
                        {
                          ref: "input",
                          "onUpdate:modelValue":
                            t[1] || (t[1] = (e) => (o.value = e)),
                          class: "base-input !text-2xl text-center w-full",
                          required: i.field.required,
                          type: "date",
                          name: `values[${i.field.uuid}]`,
                          onFocus: t[2] || (t[2] = (t) => e.$emit("focus")),
                        },
                        null,
                        40,
                        xa
                      ),
                      [[a.nr, o.value]]
                    ),
                  ]),
                ])
              );
            },
          ],
        ]);
        const Da = { class: "mx-auto max-w-md flex flex-col", dir: "auto" },
          qa = {
            class: "font-medium text-2xl flex items-center space-x-1.5 mx-auto",
          },
          Ca = { key: 0, class: "mt-2" },
          Ia = { class: "space-y-3 mt-5" },
          za = ["href"],
          Va = ["disabled"],
          ja = ["disabled"],
          $a = {
            key: 3,
            target: "_blank",
            href: "https://github.com/uvtsignco/uvtsign",
            class: "white-button flex items-center space-x-1 w-full",
          },
          Ta = (0, l._)("span", null, " Star on Github ", -1),
          Ua = {
            key: 4,
            href: "https://uvtsign.co/sign_up",
            class: "white-button flex items-center space-x-1 w-full",
          },
          Pa = { key: 1, class: "text-center mt-4" },
          Ma = (0, l._)(
            "a",
            {
              href: "https://www.uvtsign.co/start",
              target: "_blank",
              class: "underline",
            },
            "UVTSign",
            -1
          );
        var Aa = i(1432),
          Oa = i(489),
          Ra = i(2988),
          Ba = i(1603),
          Ea = i(5883),
          Na = {
            name: "FormCompleted",
            components: {
              MarkdownContent: ut,
              IconCircleCheck: Aa.Z,
              IconInnerShadowTop: Ge.Z,
              IconBrandGithub: Oa.Z,
              IconMail: Ra.Z,
              IconLogin: Ba.Z,
              IconDownload: Ea.Z,
            },
            inject: ["baseUrl", "t"],
            props: {
              submitterSlug: { type: String, required: !0 },
              isDemo: { type: Boolean, required: !1, default: !1 },
              attribution: { type: Boolean, required: !1, default: !0 },
              withDownloadButton: { type: Boolean, required: !1, default: !0 },
              withSendCopyButton: { type: Boolean, required: !1, default: !0 },
              withConfetti: { type: Boolean, required: !1, default: !1 },
              canSendEmail: { type: Boolean, required: !1, default: !1 },
              completedButton: {
                type: Object,
                required: !1,
                default: () => ({}),
              },
              completedMessage: {
                type: Object,
                required: !1,
                default: () => ({}),
              },
            },
            data: () => ({ isSendingCopy: !1, isDownloading: !1 }),
            computed: {
              isWebView: () =>
                /webview|wv|ip((?!.*Safari)|(?=.*like Safari))/i.test(
                  window.navigator.userAgent
                ),
            },
            async mounted() {
              if (this.withConfetti) {
                const { default: e } = await i.e(883).then(i.bind(i, 9883));
                e({ particleCount: 50, startVelocity: 30, spread: 140 });
              }
            },
            methods: {
              sendCopyToEmail() {
                (this.isSendingCopy = !0),
                  fetch(
                    this.baseUrl +
                      `/send_submission_email.json?submitter_slug=${this.submitterSlug}`,
                    { method: "POST" }
                  )
                    .then(() => {
                      alert(this.t("email_has_been_sent"));
                    })
                    .finally(() => {
                      this.isSendingCopy = !1;
                    });
              },
              download() {
                (this.isDownloading = !0),
                  fetch(
                    this.baseUrl + `/submitters/${this.submitterSlug}/download`
                  ).then(async (e) => {
                    if (e.ok) {
                      const t = await e.json();
                      /iPhone|iPad|iPod/i.test(navigator.userAgent) &&
                      t.length > 1
                        ? this.downloadSafariIos(t)
                        : this.downloadUrls(t);
                    } else alert("Failed to download files");
                  });
              },
              downloadUrls(e) {
                e.map(
                  (e) => () =>
                    fetch(e).then(async (t) => {
                      const i = URL.createObjectURL(await t.blob()),
                        a = document.createElement("a");
                      (a.href = i),
                        a.setAttribute(
                          "download",
                          decodeURI(e.split("/").pop())
                        ),
                        a.click(),
                        URL.revokeObjectURL(i);
                    })
                )
                  .reduce((e, t) => e.then(() => t()), Promise.resolve())
                  .finally(() => {
                    this.isDownloading = !1;
                  });
              },
              sanitizeHref(e) {
                if (e && e.trim().match(/^((?:https?:\/\/)|\/)/))
                  return e.replace(/javascript:/g, "");
              },
              downloadSafariIos(e) {
                const t = e.map((e) =>
                  fetch(e).then(async (t) => {
                    const i = await t.blob(),
                      a = URL.createObjectURL(
                        i.slice(0, i.size, "application/octet-stream")
                      ),
                      n = document.createElement("a");
                    return (
                      (n.href = a),
                      n.setAttribute("download", decodeURI(e.split("/").pop())),
                      n
                    );
                  })
                );
                Promise.all(t)
                  .then((e) => {
                    e.forEach((e, t) => {
                      setTimeout(() => {
                        e.click(), URL.revokeObjectURL(e.href);
                      }, 50 * t);
                    });
                  })
                  .finally(() => {
                    this.isDownloading = !1;
                  });
              },
            },
          };
        var Wa = (0, Ve.Z)(Na, [
            [
              "render",
              function (e, t, i, n, s, o) {
                const u = (0, l.up)("IconCircleCheck"),
                  d = (0, l.up)("MarkdownContent"),
                  c = (0, l.up)("IconInnerShadowTop"),
                  p = (0, l.up)("IconMail"),
                  m = (0, l.up)("IconDownload"),
                  h = (0, l.up)("IconBrandGithub"),
                  _ = (0, l.up)("IconLogin");
                return (
                  (0, l.wg)(),
                  (0, l.iD)("div", Da, [
                    (0, l._)("div", qa, [
                      (0, l.Wm)(u, {
                        class: "inline text-green-600",
                        width: 30,
                        height: 30,
                      }),
                      (0, l._)(
                        "span",
                        null,
                        (0, r.zw)(
                          i.completedMessage.title ||
                            o.t("form_has_been_completed")
                        ),
                        1
                      ),
                    ]),
                    i.completedMessage.body
                      ? ((0, l.wg)(),
                        (0, l.iD)("div", Ca, [
                          (0, l.Wm)(
                            d,
                            { string: i.completedMessage.body },
                            null,
                            8,
                            ["string"]
                          ),
                        ]))
                      : (0, l.kq)("", !0),
                    (0, l._)("div", Ia, [
                      i.completedButton.url
                        ? ((0, l.wg)(),
                          (0, l.iD)(
                            "a",
                            {
                              key: 0,
                              href: o.sanitizeHref(i.completedButton.url),
                              rel: "noopener noreferrer nofollow",
                              class: "white-button flex items-center w-full",
                            },
                            [
                              (0, l._)(
                                "span",
                                null,
                                (0, r.zw)(
                                  i.completedButton.title || "Back to Website"
                                ),
                                1
                              ),
                            ],
                            8,
                            za
                          ))
                        : (0, l.kq)("", !0),
                      i.canSendEmail && !i.isDemo && i.withSendCopyButton
                        ? ((0, l.wg)(),
                          (0, l.iD)(
                            "button",
                            {
                              key: 1,
                              class:
                                "white-button !h-auto flex items-center space-x-1 w-full",
                              disabled: s.isSendingCopy,
                              onClick:
                                t[0] ||
                                (t[0] = (0, a.iM)(
                                  (...e) =>
                                    o.sendCopyToEmail &&
                                    o.sendCopyToEmail(...e),
                                  ["prevent"]
                                )),
                            },
                            [
                              s.isSendingCopy
                                ? ((0, l.wg)(),
                                  (0, l.j4)(c, {
                                    key: 0,
                                    class: "animate-spin",
                                  }))
                                : ((0, l.wg)(), (0, l.j4)(p, { key: 1 })),
                              (0, l._)(
                                "span",
                                null,
                                (0, r.zw)(o.t("send_copy_via_email")),
                                1
                              ),
                            ],
                            8,
                            Va
                          ))
                        : (0, l.kq)("", !0),
                      !o.isWebView && i.withDownloadButton
                        ? ((0, l.wg)(),
                          (0, l.iD)(
                            "button",
                            {
                              key: 2,
                              class:
                                "base-button flex items-center space-x-1 w-full",
                              disabled: s.isDownloading,
                              onClick:
                                t[1] ||
                                (t[1] = (0, a.iM)(
                                  (...e) => o.download && o.download(...e),
                                  ["prevent"]
                                )),
                            },
                            [
                              s.isDownloading
                                ? ((0, l.wg)(),
                                  (0, l.j4)(c, {
                                    key: 0,
                                    class: "animate-spin",
                                  }))
                                : ((0, l.wg)(), (0, l.j4)(m, { key: 1 })),
                              (0, l._)(
                                "span",
                                null,
                                (0, r.zw)(o.t("download")),
                                1
                              ),
                            ],
                            8,
                            ja
                          ))
                        : (0, l.kq)("", !0),
                      i.isDemo
                        ? ((0, l.wg)(), (0, l.iD)("a", $a, [(0, l.Wm)(h), Ta]))
                        : (0, l.kq)("", !0),
                      i.isDemo
                        ? ((0, l.wg)(),
                          (0, l.iD)("a", Ua, [
                            (0, l.Wm)(_),
                            (0, l._)(
                              "span",
                              null,
                              (0, r.zw)(o.t("create_a_free_account")),
                              1
                            ),
                          ]))
                        : (0, l.kq)("", !0),
                    ]),
                    i.attribution
                      ? ((0, l.wg)(),
                        (0, l.iD)("div", Pa, [
                          (0, l.Uk)((0, r.zw)(o.t("signed_with")) + " ", 1),
                          Ma,
                          (0, l.Uk)(
                            " - " +
                              (0, r.zw)(o.t("open_source_documents_software")),
                            1
                          ),
                        ]))
                      : (0, l.kq)("", !0),
                  ])
                );
              },
            ],
          ]),
          Za = i(1321);
        var Ha = {
          en: {
            text: "Text",
            by_clicking_you_agree_to_the:
              'By clicking "{button}", you agree to the',
            electronic_signature_disclosure: "Electronic Signature Disclosure",
            esignature_disclosure: "eSignature Disclosure",
            signature: "Signature",
            initials: "Initials",
            drawn_signature_on_a_touchscreen_device:
              "Drawn signature on a touchscreen device",
            scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature:
              "Scan the QR code with the camera app to open the form on mobile and draw your signature",
            date: "Date",
            number: "Number",
            image: "Image",
            take_photo: "Take photo",
            file: "File",
            select: "Select",
            checkbox: "Checkbox",
            multiple: "Multiple",
            radio: "Radio",
            cells: "Cells",
            stamp: "Stamp",
            minimize: "Minimize",
            payment: "Payment",
            phone: "Phone",
            submit_form: "Submit Form",
            sign_now: "Sign Now",
            type_here_: "Type here...",
            optional: "optional",
            option: "Option",
            appears_on: "Appears on",
            page: "Page",
            select_your_option: "Select your option",
            complete_hightlighted_checkboxes_and_click:
              "Complete highlighted checkboxes and click",
            submit: "submit",
            next: "next",
            click_to_upload: "Click to upload",
            or_drag_and_drop_files: "or drag and drop files",
            send_copy_via_email: "Send copy via email",
            download: "Download",
            clear: "Clear",
            redraw: "Redraw",
            draw_initials: "Draw initials",
            type_signature_here: "Type signature here",
            type_initial_here: "Type initials here",
            form_has_been_completed: "Form has been completed!",
            create_a_free_account: "Create a Free Account",
            signed_with: "Signed with",
            please_check_the_box_to_continue:
              "Please check the box to continue",
            open_source_documents_software: "open source documents software",
            verified_phone_number: "Verify Phone Number",
            use_international_format: "Use international format: +1xxx",
            six_digits_code: "6-digit code",
            change_phone_number: "Change phone number",
            sending: "Sending...",
            resend_code: "Re-send code",
            verification_code_has_been_resent:
              "Verification code has been re-sent via SMS",
            please_fill_all_required_fields: "Please fill all required fields",
            set_today: "Set Today",
            toggle_multiline_text: "Toggle Multiline Text",
            draw_signature: "Draw signature",
            type_initial: "Type initials",
            draw: "Draw",
            type: "Type",
            type_text: "Type text",
            email_has_been_sent: "Email has been sent",
            processing: "Processing",
            pay_with_strip: "Pay with Stripe",
            reupload: "Reupload",
            upload: "Upload",
            files: "Files",
          },
          es: {
            drawn_signature_on_a_touchscreen_device:
              "Firma dibujada en un dispositivo con pantalla t\xe1ctil",
            scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature:
              "Escanea el c\xf3digo QR con la aplicaci\xf3n de la c\xe1mara para abrir el formulario en el m\xf3vil y dibujar tu firma",
            by_clicking_you_agree_to_the:
              'Al hacer clic en "{button}", usted acepta el',
            electronic_signature_disclosure:
              "Divulgaci\xf3n de Firma Electr\xf3nica",
            esignature_disclosure: "Divulgaci\xf3n de eFirma",
            minimize: "Minimizar",
            text: "Texto",
            signature: "Firma",
            initials: "Iniciales",
            date: "Fecha",
            number: "N\xfamero",
            image: "Imagen",
            file: "Archivo",
            select: "Seleccionar",
            checkbox: "Casilla",
            multiple: "M\xfaltiple",
            radio: "Radio",
            cells: "Celdas",
            stamp: "Sello",
            payment: "Pago",
            phone: "Tel\xe9fono",
            take_photo: "Tomar foto",
            submit_form: "Enviar Formulario",
            sign_now: "Firmar ahora",
            type_here_: "Escribe aqu\xed...",
            optional: "opcional",
            appears_on: "Aparece en",
            page: "P\xe1gina",
            select_your_option: "Selecciona tu opci\xf3n",
            complete_hightlighted_checkboxes_and_click:
              "Completa las casillas resaltadas y haz clic",
            submit: "enviar",
            next: "siguiente",
            click_to_upload: "Haz clic para cargar",
            or_drag_and_drop_files: "o arrastra y suelta archivos",
            send_copy_via_email: "Enviar copia por correo electr\xf3nico",
            download: "Descargar",
            clear: "Borrar",
            redraw: "Redibujar",
            draw_initials: "Dibujar iniciales",
            type_signature_here: "Escribe la firma aqu\xed",
            type_initial_here: "Escribe las iniciales aqu\xed",
            form_has_been_completed: "\xa1El formulario ha sido completado!",
            create_a_free_account: "Crear una Cuenta Gratuita",
            signed_with: "Firmado con",
            please_check_the_box_to_continue:
              "Por favor marque la casilla para continuar",
            open_source_documents_software:
              "software de documentos de c\xf3digo abierto",
            verified_phone_number: "Verificar n\xfamero de tel\xe9fono",
            use_international_format: "Usar formato internacional: +1xxx",
            six_digits_code: "C\xf3digo de 6 d\xedgitos",
            change_phone_number: "Cambiar n\xfamero de tel\xe9fono",
            sending: "Enviando...",
            resend_code: "Reenviar c\xf3digo",
            verification_code_has_been_resent:
              "El c\xf3digo de verificaci\xf3n ha sido reenviado por SMS",
            please_fill_all_required_fields:
              "Por favor, complete todos los campos obligatorios",
            set_today: "Establecer Hoy",
            toggle_multiline_text: "Alternar Texto Multil\xednea",
            draw_signature: "Dibujar firma",
            type_initial: "Escribir iniciales",
            draw: "Dibujar",
            type: "Escribir",
            type_text: "Escribir texto",
            email_has_been_sent: "El correo electr\xf3nico ha sido enviado",
            processing: "Procesando",
            pay_with_strip: "Pagar con Stripe",
            reupload: "Volver a subir",
            upload: "Subir",
            files: "Archivos",
          },
          it: {
            drawn_signature_on_a_touchscreen_device:
              "Firma disegnata su un dispositivo con schermo tattile",
            scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature:
              "Scansiona il codice QR con l'app della fotocamera per aprire il modulo sul cellulare e disegnare la tua firma",
            by_clicking_you_agree_to_the: 'Cliccando su "{button}", accetti il',
            electronic_signature_disclosure:
              "Divulgazione della Firma Elettronica",
            esignature_disclosure: "Divulgazione della eFirma",
            minimize: "Minimizza",
            text: "Testo",
            signature: "Firma",
            initials: "Iniziali",
            date: "Data",
            number: "Numero",
            image: "Immagine",
            file: "File",
            select: "Seleziona",
            checkbox: "Casella di controllo",
            multiple: "Multiplo",
            radio: "Radio",
            cells: "Celle",
            stamp: "Timbro",
            payment: "Pagamento",
            phone: "Telefono",
            submit_form: "Invia Modulo",
            sign_now: "Firma ora",
            type_here_: "Digita qui...",
            optional: "opzionale",
            appears_on: "Compare su",
            page: "Pagina",
            take_photo: "Scattare una foto",
            select_your_option: "Seleziona la tua opzione",
            complete_hightlighted_checkboxes_and_click:
              "Completa le caselle evidenziate e fai clic",
            submit: "invia",
            next: "avanti",
            click_to_upload: "Clicca per caricare",
            or_drag_and_drop_files: "oppure trascina e rilascia i file",
            send_copy_via_email: "Invia copia via email",
            download: "Scarica",
            clear: "Cancella",
            redraw: "Ridisegna",
            draw_initials: "Disegna iniziali",
            type_signature_here: "Scrivi la firma qui",
            type_initial_here: "Scrivi le iniziali qui",
            form_has_been_completed: "Il modulo \xe8 stato completato!",
            create_a_free_account: "Crea un Account Gratuito",
            signed_with: "Firmato con",
            please_check_the_box_to_continue:
              "Si prega di spuntare la casella per continuare",
            open_source_documents_software: "software di documenti open source",
            verified_phone_number: "Verifica numero di telefono",
            use_international_format: "Usa formato internazionale: +1xxx",
            six_digits_code: "Codice a 6 cifre",
            change_phone_number: "Cambia numero di telefono",
            sending: "Invio in corso...",
            resend_code: "Rinvia codice",
            verification_code_has_been_resent:
              "Il codice di verifica \xe8 stato rinviato tramite SMS",
            please_fill_all_required_fields:
              "Si prega di compilare tutti i campi obbligatori",
            set_today: "Imposta Oggi",
            draw_signature: "Disegna firma",
            type_initial: "Inserisci iniziali",
            draw: "Disegna",
            type: "Inserisci",
            type_text: "Inserisci testo",
            toggle_multiline_text: "Attiva Testo Multilinea",
            email_has_been_sent: "L'email \xe8 stata inviata",
            processing: "Elaborazione",
            pay_with_strip: "Paga con Stripe",
            reupload: "Ricarica",
            upload: "Carica",
            files: "File",
          },
          de: {
            drawn_signature_on_a_touchscreen_device:
              "Gezeichnete Unterschrift auf einem Touchscreen-Ger\xe4t",
            scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature:
              "Scannen Sie den QR-Code mit der Kamera-App, um das Formular auf dem Handy zu \xf6ffnen und Ihre Unterschrift zu zeichnen",
            by_clicking_you_agree_to_the:
              'Durch Klicken auf "{button}" stimmen Sie zu, dass Sie die',
            electronic_signature_disclosure:
              "Elektronische Unterschriftenoffenlegung",
            esignature_disclosure: "eSignatur Offenlegung",
            minimize: "Minimieren",
            text: "Text",
            signature: "Unterschrift",
            initials: "Initialen",
            date: "Datum",
            number: "Nummer",
            image: "Bild",
            file: "Datei",
            select: "Ausw\xe4hlen",
            checkbox: "Checkbox",
            multiple: "Mehrere",
            radio: "Radio",
            cells: "Zellen",
            stamp: "Stempel",
            payment: "Zahlung",
            phone: "Telefon",
            submit_form: "Formular absenden",
            sign_now: "Jetzt unterschreiben",
            type_here_: "Hier eingeben...",
            optional: "optional",
            appears_on: "Erscheint auf",
            page: "Seite",
            take_photo: "Foto aufnehmen",
            select_your_option: "W\xe4hle deine Option",
            complete_hightlighted_checkboxes_and_click:
              "Markierte Kontrollk\xe4stchen ausf\xfcllen und klicken",
            submit: "absenden",
            next: "weiter",
            click_to_upload: "Klicken zum Hochladen",
            or_drag_and_drop_files: "oder Dateien hierher ziehen und ablegen",
            send_copy_via_email: "Kopie per E-Mail senden",
            download: "Herunterladen",
            clear: "L\xf6schen",
            redraw: "Neu zeichnen",
            draw_initials: "Initialen zeichnen",
            type_signature_here: "Unterschrift hier eingeben",
            type_initial_here: "Initialen hier eingeben",
            form_has_been_completed: "Formular wurde ausgef\xfcllt!",
            create_a_free_account: "Kostenloses Konto erstellen",
            signed_with: "Unterschrieben mit",
            please_check_the_box_to_continue:
              "Bitte setzen Sie das H\xe4kchen, um fortzufahren",
            open_source_documents_software: "Open-Source-Dokumentensoftware",
            verified_phone_number: "Telefonnummer \xfcberpr\xfcfen",
            use_international_format: "Internationales Format verwenden: +1xxx",
            six_digits_code: "6-stelliger Code",
            change_phone_number: "Telefonnummer \xe4ndern",
            sending: "Senden...",
            resend_code: "Code erneut senden",
            verification_code_has_been_resent:
              "Die Verifizierungscode wurde erneut per SMS gesendet",
            please_fill_all_required_fields:
              "Bitte f\xfcllen Sie alle erforderlichen Felder aus",
            set_today: "Heute einstellen",
            draw_signature: "Unterschrift zeichnen",
            type_initial: "Initialen eingeben",
            draw: "Zeichnen",
            type: "Eingeben",
            type_text: "Text eingeben",
            toggle_multiline_text: "Mehrzeiligen Text umschalten",
            email_has_been_sent: "Die E-Mail wurde gesendet",
            processing: "Verarbeitung",
            pay_with_strip: "Mit Stripe bezahlen",
            reupload: "Erneut hochladen",
            upload: "Hochladen",
            files: "Dateien",
          },
          fr: {
            drawn_signature_on_a_touchscreen_device:
              "Signature dessin\xe9e sur un appareil \xe0 \xe9cran tactile",
            scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature:
              "Scannez le code QR avec l'application de l'appareil photo pour ouvrir le formulaire sur mobile et dessiner votre signature",
            by_clicking_you_agree_to_the:
              'En cliquant sur "{button}", vous acceptez la',
            electronic_signature_disclosure:
              "Divulgation de Signature \xc9lectronique",
            esignature_disclosure: "Divulgation de la eSignature",
            minimize: "R\xe9duire",
            text: "Texte",
            signature: "Signature",
            initials: "Initiales",
            date: "Date",
            number: "Num\xe9ro",
            image: "Image",
            file: "Fichier",
            select: "Choisir",
            checkbox: "Coche",
            multiple: "Multiple",
            radio: "Radio",
            cells: "Cellules",
            stamp: "Tampon",
            payment: "Paiement",
            phone: "T\xe9l\xe9phone",
            submit_form: "Envoyer le Formulaire",
            sign_now: "Signer maintenant",
            type_here_: "Tapez ici...",
            optional: "facultatif",
            appears_on: "Appara\xeet sur",
            page: "Page",
            take_photo: "Prendre une photo",
            select_your_option: "S\xe9lectionnez votre option",
            complete_hightlighted_checkboxes_and_click:
              "Compl\xe9tez les cases \xe0 cocher en surbrillance et cliquez",
            submit: "envoyer",
            next: "suivant",
            click_to_upload: "Cliquez pour t\xe9l\xe9charger",
            or_drag_and_drop_files: "ou faites glisser-d\xe9poser les fichiers",
            send_copy_via_email: "Envoyer une copie par e-mail",
            download: "T\xe9l\xe9charger",
            clear: "Effacer",
            redraw: "Redessiner",
            draw_initials: "Dessiner les initiales",
            type_signature_here: "Tapez la signature ici",
            type_initial_here: "Tapez les initiales ici",
            form_has_been_completed:
              "Le formulaire a \xe9t\xe9 compl\xe9t\xe9 !",
            create_a_free_account: "Cr\xe9er un Compte Gratuit",
            signed_with: "Sign\xe9 avec",
            please_check_the_box_to_continue:
              "Veuillez cocher la case pour continuer",
            open_source_documents_software: "logiciel de documents open source",
            verified_phone_number:
              "V\xe9rifier le num\xe9ro de t\xe9l\xe9phone",
            use_international_format:
              "Utiliser le format international : +1xxx",
            six_digits_code: "Code \xe0 6 chiffres",
            change_phone_number: "Changer le num\xe9ro de t\xe9l\xe9phone",
            sending: "Envoi en cours...",
            resend_code: "Renvoyer le code",
            verification_code_has_been_resent:
              "Le code de v\xe9rification a \xe9t\xe9 renvoy\xe9 par SMS",
            please_fill_all_required_fields:
              "Veuillez remplir tous les champs obligatoires",
            set_today: "D\xe9finir Aujourd'hui",
            draw_signature: "Dessiner une signature",
            type_initial: "Saisir les initiales",
            draw: "Dessiner",
            type: "Saisir",
            type_text: "Saisir du texte",
            toggle_multiline_text: "Basculer le Texte Multiligne",
            email_has_been_sent: "L'email a \xe9t\xe9 envoy\xe9",
            processing: "Traitement",
            pay_with_strip: "Paiement avec Stripe",
            reupload: "Recharger",
            upload: "T\xe9l\xe9charger",
            files: "Fichiers",
          },
          pl: {
            drawn_signature_on_a_touchscreen_device:
              "Podpis odr\u0119czny na urz\u0105dzeniu z ekranem dotykowym",
            scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature:
              "Zeskanuj kod QR za pomoc\u0105 aplikacji aparatu, aby otworzy\u0107 formularz na telefonie i narysowa\u0107 sw\xf3j podpis",
            by_clicking_you_agree_to_the:
              'Klikaj\u0105c na "{button}", zgadzasz si\u0119 na',
            electronic_signature_disclosure:
              "Ujawnienie Elektronicznej Sygnatury",
            esignature_disclosure: "Ujawnienie ePodpisu",
            minimize: "Zminimalizuj",
            text: "Tekst",
            signature: "Podpis",
            initials: "Inicja\u0142y",
            date: "Data",
            number: "Numer",
            image: "Obraz",
            file: "Plik",
            select: "Wybierz",
            checkbox: "Pole wyboru",
            multiple: "Wielokrotne",
            radio: "Radio",
            cells: "Kom\xf3rki",
            stamp: "Piecz\u0105tka",
            payment: "P\u0142atno\u015b\u0107",
            phone: "Telefon",
            submit_form: "Wy\u015blij Formularz",
            sign_now: "Podpisz teraz",
            type_here_: "Wpisz tutaj...",
            optional: "opcjonalny",
            appears_on: "Pojawia si\u0119 na",
            page: "Strona",
            select_your_option: "Wybierz swoj\u0105 opcj\u0119",
            complete_hightlighted_checkboxes_and_click:
              "Wype\u0142nij zaznaczone pola wyboru i kliknij",
            submit: "wy\u015blij",
            next: "dalej",
            take_photo: "Zr\xf3b zdj\u0119cie",
            click_to_upload: "Kliknij, aby przes\u0142a\u0107",
            or_drag_and_drop_files:
              "lub przeci\u0105gnij i upu\u015b\u0107 pliki",
            send_copy_via_email:
              "Wy\u015blij kopi\u0119 drog\u0105 mailow\u0105",
            download: "Pobierz",
            clear: "Wyczy\u015b\u0107",
            redraw: "Przerysuj",
            draw_initials: "Narysuj inicja\u0142y",
            type_signature_here: "Wpisz podpis tutaj",
            type_initial_here: "Wpisz inicja\u0142y tutaj",
            form_has_been_completed: "Formularz zosta\u0142 wype\u0142niony!",
            create_a_free_account: "Utw\xf3rz darmowe konto",
            signed_with: "Podpisane za pomoc\u0105",
            please_check_the_box_to_continue:
              "Prosz\u0119 zaznaczy\u0107 pole, aby kontynuowa\u0107",
            open_source_documents_software:
              "oprogramowanie do dokument\xf3w open source",
            verified_phone_number: "Zweryfikuj numer telefonu",
            use_international_format:
              "U\u017cyj mi\u0119dzynarodowego formatu: +1xxx",
            six_digits_code: "6-cyfrowy kod",
            change_phone_number: "Zmie\u0144 numer telefonu",
            sending: "Wysy\u0142anie...",
            resend_code: "Ponownie wy\u015blij kod",
            verification_code_has_been_resent:
              "Kod weryfikacyjny zosta\u0142 ponownie wys\u0142any",
            please_fill_all_required_fields:
              "Prosz\u0119 wype\u0142ni\u0107 wszystkie wymagane pola",
            set_today: "Ustaw Dzi\u015b",
            draw_signature: "Rysuj podpis",
            type_initial: "Wprowad\u017a inicja\u0142y",
            draw: "Rysuj",
            type: "Wprowad\u017a",
            type_text: "Wprowad\u017a tekst",
            toggle_multiline_text: "Prze\u0142\u0105cz Tekst Wielolinijkowy",
            email_has_been_sent: "E-mail zosta\u0142 wys\u0142any",
            processing: "Przetwarzanie",
            pay_with_strip: "P\u0142atno\u015b\u0107 za pomoc\u0105 Stripe",
            reupload: "Ponowne przes\u0142anie",
            upload: "Przesy\u0142anie",
            files: "Pliki",
          },
          uk: {
            drawn_signature_on_a_touchscreen_device:
              "\u041f\u0456\u0434\u043f\u0438\u0441 \u043d\u0430 \u0441\u0435\u043d\u0441\u043e\u0440\u043d\u043e\u043c\u0443 \u043f\u0440\u0438\u0441\u0442\u0440\u043e\u0457",
            scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature:
              "\u0421\u043a\u0430\u043d\u0443\u0439\u0442\u0435 QR-\u043a\u043e\u0434 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438 \u043a\u0430\u043c\u0435\u0440\u0438, \u0449\u043e\u0431 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438 \u0444\u043e\u0440\u043c\u0443 \u043d\u0430 \u043c\u043e\u0431\u0456\u043b\u044c\u043d\u043e\u043c\u0443 \u043f\u0440\u0438\u0441\u0442\u0440\u043e\u0457 \u0442\u0430 \u043d\u0430\u043c\u0430\u043b\u044e\u0432\u0430\u0442\u0438 \u0441\u0432\u0456\u0439 \u043f\u0456\u0434\u043f\u0438\u0441",
            by_clicking_you_agree_to_the:
              '\u041d\u0430\u0442\u0438\u0441\u043d\u0443\u0432\u0448\u0438 \u043d\u0430 "{button}", \u0432\u0438 \u043f\u043e\u0433\u043e\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044f \u0437',
            electronic_signature_disclosure:
              "\u0420\u043e\u0437\u0433\u043e\u043b\u043e\u0448\u0435\u043d\u043d\u044f \u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0433\u043e \u041f\u0456\u0434\u043f\u0438\u0441\u0443",
            esignature_disclosure:
              "\u0420\u043e\u0437\u0433\u043e\u043b\u043e\u0448\u0435\u043d\u043d\u044f \u0435\u041f\u0456\u0434\u043f\u0438\u0441\u0443",
            minimize: "\u0417\u043c\u0435\u043d\u0448\u0438\u0442\u0438",
            text: "\u0422\u0435\u043a\u0441\u0442",
            signature: "\u041f\u0456\u0434\u043f\u0438\u0441",
            initials: "\u0406\u043d\u0456\u0446\u0456\u0430\u043b\u0438",
            date: "\u0414\u0430\u0442\u0430",
            number: "\u0427\u0438\u0441\u043b\u043e",
            image:
              "\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f",
            file: "\u0424\u0430\u0439\u043b",
            select: "\u0412\u0438\u0431\u0440\u0430\u0442\u0438",
            checkbox: "\u041f\u0440\u0430\u043f\u043e\u0440\u0435\u0446\u044c",
            multiple: "\u041c\u043d\u043e\u0436\u0438\u043d\u043d\u0438\u0439",
            radio: "\u0420\u0430\u0434\u0456\u043e",
            cells: "\u041a\u043b\u0456\u0442\u0438\u043d\u043a\u0438",
            stamp: "\u0428\u0442\u0430\u043c\u043f",
            payment: "\u041f\u043b\u0430\u0442\u0456\u0436",
            phone: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
            submit_form:
              "\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438 \u0424\u043e\u0440\u043c\u0443",
            sign_now:
              "\u041f\u0456\u0434\u043f\u0438\u0441\u0430\u0442\u0438 \u0437\u0430\u0440\u0430\u0437",
            type_here_:
              "\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0442\u0443\u0442",
            optional:
              "\u043d\u0435\u043e\u0431\u043e\u0432\u2019\u044f\u0437\u043a\u043e\u0432\u043e",
            appears_on:
              "\u0417'\u044f\u0432\u043b\u044f\u0454\u0442\u044c\u0441\u044f \u043d\u0430",
            page: "\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0430",
            take_photo:
              "\u0417\u0440\u043e\u0431\u0438\u0442\u0438 \u0444\u043e\u0442\u043e",
            select_your_option:
              "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0432\u0430\u0440\u0456\u0430\u043d\u0442",
            complete_hightlighted_checkboxes_and_click:
              "\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u043f\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0456 \u043f\u0440\u0430\u043f\u043e\u0440\u0446\u0456 \u0442\u0430 \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c",
            submit: "\u043d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438",
            next: "\u0434\u0430\u043b\u0456",
            click_to_upload:
              "\u041a\u043b\u0430\u0446\u043d\u0456\u0442\u044c, \u0449\u043e\u0431 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438",
            or_drag_and_drop_files:
              "\u0430\u0431\u043e \u043f\u0435\u0440\u0435\u0442\u044f\u0433\u043d\u0456\u0442\u044c \u0444\u0430\u0439\u043b\u0438 \u0441\u044e\u0434\u0438",
            send_copy_via_email:
              "\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438 \u043a\u043e\u043f\u0456\u044e \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u044e \u043f\u043e\u0448\u0442\u043e\u044e",
            download:
              "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438",
            clear: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438",
            redraw:
              "\u041f\u0435\u0440\u0435\u043c\u0430\u043b\u044e\u0432\u0430\u0442\u0438",
            draw_initials:
              "\u041d\u0430\u043c\u0430\u043b\u044e\u0432\u0430\u0442\u0438 \u0456\u043d\u0456\u0446\u0456\u0430\u043b\u0438",
            type_signature_here:
              "\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0456\u0434\u043f\u0438\u0441 \u0442\u0443\u0442",
            type_initial_here:
              "\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043d\u0456\u0446\u0456\u0430\u043b\u0438 \u0442\u0443\u0442",
            form_has_been_completed:
              "\u0424\u043e\u0440\u043c\u0443 \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043e!",
            create_a_free_account:
              "\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0431\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u0438\u0439 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441",
            signed_with:
              "\u041f\u0456\u0434\u043f\u0438\u0441\u0430\u043d\u043e \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e",
            please_check_the_box_to_continue:
              "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u043e\u0437\u043d\u0430\u0447\u0442\u0435 \u043f\u0440\u0430\u043f\u043e\u0440\u0435\u0446\u044c, \u0449\u043e\u0431 \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438",
            open_source_documents_software:
              "\u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043d\u0438\u0439 \u0437\u0430\u0441\u0456\u0431 \u0434\u043b\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0456\u0432",
            verified_phone_number:
              "\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",
            use_international_format:
              "\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0439\u0442\u0435 \u043c\u0456\u0436\u043d\u0430\u0440\u043e\u0434\u043d\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442: +1xxx",
            six_digits_code:
              "6-\u0437\u043d\u0430\u0447\u043d\u0438\u0439 \u043a\u043e\u0434",
            change_phone_number:
              "\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",
            sending: "\u041d\u0430\u0434\u0441\u0438\u043b\u0430\u044e...",
            resend_code:
              "\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u043a\u043e\u0434",
            verification_code_has_been_resent:
              "\u041a\u043e\u0434 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u0431\u0443\u0432 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u0438\u0439",
            please_fill_all_required_fields:
              "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0437\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0432\u0441\u0456 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0456 \u043f\u043e\u043b\u044f",
            set_today:
              "\u0417\u0430\u0434\u0430\u0442\u0438 \u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456",
            draw_signature:
              "\u041d\u0430\u043c\u0430\u043b\u044e\u0439\u0442\u0435 \u043f\u0456\u0434\u043f\u0438\u0441",
            type_initial:
              "\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043d\u0456\u0446\u0456\u0430\u043b\u0438",
            draw: "\u041f\u0456\u0434\u043f\u0438\u0441",
            type: "\u0422\u0435\u043a\u0441\u0442",
            type_text:
              "\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0442\u0435\u043a\u0441\u0442",
            toggle_multiline_text:
              "\u041f\u0435\u0440\u0435\u043c\u043a\u043d\u0443\u0442\u0438 \u0411\u0430\u0433\u0430\u0442\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u0438\u0439 \u0422\u0435\u043a\u0441\u0442",
            email_has_been_sent:
              "\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0438\u0439 \u043b\u0438\u0441\u0442 \u0431\u0443\u0432 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0439",
            processing: "\u041e\u0431\u0440\u043e\u0431\u043a\u0430",
            pay_with_strip:
              "\u0421\u043f\u043b\u0430\u0442\u0438\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e Stripe",
            reupload:
              "\u041f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438",
            upload:
              "\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438",
            files: "\u0424\u0430\u0439\u043b\u0438",
          },
          cs: {
            drawn_signature_on_a_touchscreen_device:
              "Namalovan\xfd podpis na dotykov\xe9m za\u0159\xedzen\xed",
            scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature:
              "Naskenujte QR k\xf3d pomoc\xed aplikace fotoapar\xe1tu, abyste otev\u0159eli formul\xe1\u0159 na mobiln\xedm za\u0159\xedzen\xed a nakreslili sv\u016fj podpis",
            by_clicking_you_agree_to_the:
              'Kliknut\xedm na "{button}" souhlas\xedte s',
            electronic_signature_disclosure:
              "Zve\u0159ejn\u011bn\xedm Elektronick\xe9ho Podpisu",
            esignature_disclosure: "Zve\u0159ejn\u011bn\xed ePodpisu",
            minimize: "Minimalizovat",
            text: "Text",
            signature: "Podpis",
            initials: "Inici\xe1ly",
            date: "Datum",
            number: "\u010c\xedslo",
            image: "Obr\xe1zek",
            file: "Soubor",
            select: "Vybrat",
            checkbox: "Za\u0161krt\xe1vac\xed pol\xed\u010dko",
            multiple: "V\xedce mo\u017enost\xed",
            radio: "R\xe1dio",
            cells: "Bu\u0148ky",
            stamp: "Raz\xedtko",
            payment: "Platba",
            phone: "Telefon",
            submit_form: "Odeslat formul\xe1\u0159",
            sign_now: "Podepsat nyn\xed",
            type_here_: "Zadejte zde",
            optional: "voliteln\xe9",
            appears_on: "Zobrazuje se na",
            page: "Str\xe1nka",
            select_your_option: "Vyberte svou volbu",
            take_photo: "Fotit",
            complete_hightlighted_checkboxes_and_click:
              "Ozna\u010dte zv\xfdrazn\u011bn\xe9 za\u0161krt\xe1vac\xed pol\xed\u010dka a klikn\u011bte na",
            submit: "odeslat",
            next: "dal\u0161\xed",
            click_to_upload: "Klikn\u011bte pro nahr\xe1n\xed",
            or_drag_and_drop_files: "nebo p\u0159et\xe1hn\u011bte soubory sem",
            send_copy_via_email: "Odeslat kopii e-mailem",
            download: "St\xe1hnout",
            clear: "Smazat",
            redraw: "P\u0159ekreslit",
            draw_initials: "Nakreslit inici\xe1ly",
            type_signature_here: "Sem zadejte podpis",
            type_initial_here: "Sem zadejte inici\xe1ly",
            form_has_been_completed: "Formul\xe1\u0159 byl dokon\u010den!",
            create_a_free_account: "Vytvo\u0159it bezplatn\xfd \xfa\u010det",
            signed_with: "Podeps\xe1no pomoc\xed",
            please_check_the_box_to_continue:
              "Pros\xedm, za\u0161krtn\u011bte pol\xed\u010dko pro pokra\u010dov\xe1n\xed",
            open_source_documents_software:
              "open source software pro dokumenty",
            verified_phone_number:
              "Ov\u011b\u0159te telefonn\xed \u010d\xedslo",
            use_international_format:
              "Pou\u017eijte mezin\xe1rodn\xed form\xe1t: +1xxx",
            six_digits_code: "6-m\xedstn\xfd k\xf3d",
            change_phone_number: "Zm\u011bnit telefonn\xed \u010d\xedslo",
            sending: "Odes\xedl\xe1n\xed...",
            resend_code: "Znovu odeslat k\xf3d",
            verification_code_has_been_resent:
              "Ov\u011b\u0159ovac\xed k\xf3d byl znovu odesl\xe1n",
            please_fill_all_required_fields:
              "Pros\xedm vypl\u0148te v\u0161echny povinn\xe9 polo\u017eky",
            set_today: "Nastavit Dnes",
            draw_signature: "Nakreslit podpis",
            type_initial: "Zadat inici\xe1ly",
            draw: "Kreslit",
            type: "Zadat",
            type_text: "Zadat text",
            toggle_multiline_text:
              "P\u0159epnout V\xedce\u0159\xe1dkov\xfd Text",
            email_has_been_sent: "E-mail byl odesl\xe1n",
            processing: "Zpracov\xe1n\xed",
            pay_with_strip: "Zaplacen\xed p\u0159es Stripe",
            reupload: "Znovu nahr\xe1t",
            upload: "Nahr\xe1t",
            files: "Soubory",
          },
          pt: {
            drawn_signature_on_a_touchscreen_device:
              "Assinatura desenhada em um dispositivo com tela sens\xedvel ao toque",
            scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature:
              "Escaneie o c\xf3digo QR com o aplicativo da c\xe2mera para abrir o formul\xe1rio no celular e desenhar sua assinatura",
            by_clicking_you_agree_to_the:
              'Ao clicar em "{button}", voc\xea concorda com o',
            electronic_signature_disclosure:
              "Divulga\xe7\xe3o de Assinatura Eletr\xf4nica",
            esignature_disclosure: "Divulga\xe7\xe3o da eAssinatura",
            minimize: "Minimizar",
            text: "Texto",
            signature: "Assinatura",
            initials: "Iniciais",
            date: "Data",
            number: "N\xfamero",
            image: "Imagem",
            file: "Arquivo",
            select: "Selecionar",
            checkbox: "Caixa",
            multiple: "M\xfaltiplo",
            radio: "R\xe1dio",
            cells: "C\xe9lulas",
            stamp: "Carimbo",
            payment: "Pagamento",
            phone: "Telefone",
            submit_form: "Enviar Formul\xe1rio",
            sign_now: "Assinar agora",
            type_here_: "Digite aqui",
            optional: "opcional",
            appears_on: "Aparece em",
            page: "P\xe1gina",
            take_photo: "Tirar foto",
            select_your_option: "Selecione sua op\xe7\xe3o",
            complete_hightlighted_checkboxes_and_click:
              "Complete as caixas de sele\xe7\xe3o destacadas e clique",
            submit: "enviar",
            next: "pr\xf3ximo",
            click_to_upload: "Clique para fazer o upload",
            or_drag_and_drop_files: "ou arraste e solte arquivos",
            send_copy_via_email: "Enviar c\xf3pia por e-mail",
            download: "Baixar",
            clear: "Limpar",
            redraw: "Redesenhar",
            draw_initials: "Desenhar iniciais",
            type_signature_here: "Digite a assinatura aqui",
            type_initial_here: "Digite as iniciais aqui",
            form_has_been_completed: "O formul\xe1rio foi conclu\xeddo!",
            create_a_free_account: "Criar uma Conta Gratuita",
            signed_with: "Assinado com",
            please_check_the_box_to_continue:
              "Por favor, marque a caixa para continuar",
            open_source_documents_software:
              "software de documentos de c\xf3digo aberto",
            verified_phone_number: "Verificar N\xfamero de Telefone",
            use_international_format: "Use formato internacional: +1xxx",
            six_digits_code: "C\xf3digo de 6 d\xedgitos",
            change_phone_number: "Alterar n\xfamero de telefone",
            sending: "Enviando...",
            resend_code: "Reenviar c\xf3digo",
            verification_code_has_been_resent:
              "O c\xf3digo de verifica\xe7\xe3o foi reenviado via SMS",
            please_fill_all_required_fields:
              "Por favor, preencha todos os campos obrigat\xf3rios",
            set_today: "Definir Hoje",
            draw_signature: "Desenhar assinatura",
            type_initial: "Inserir iniciais",
            draw: "Desenhar",
            type: "Inserir",
            type_text: "Inserir texto",
            toggle_multiline_text: "Alternar Texto Multilinha",
            email_has_been_sent: "Email enviado",
            processing: "Processamento",
            pay_with_strip: "Pagar com Stripe",
            reupload: "Reenviar",
            upload: "Carregar",
            files: "Arquivos",
          },
          he: {
            drawn_signature_on_a_touchscreen_device:
              "\u05d7\u05ea\u05d9\u05de\u05d4 \u05e9\u05e0\u05d5\u05e6\u05e8\u05d4 \u05d1\u05de\u05db\u05e9\u05d9\u05e8 \u05e2\u05dd \u05de\u05e1\u05da \u05de\u05d2\u05e2",
            scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature:
              "\u05e1\u05e8\u05d5\u05e7 \u05d0\u05ea \u05e7\u05d5\u05d3 \u05d4-QR \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d9\u05ea \u05d4\u05de\u05e6\u05dc\u05de\u05d4 \u05db\u05d3\u05d9 \u05dc\u05e4\u05ea\u05d5\u05d7 \u05d0\u05ea \u05d4\u05d8\u05d5\u05e4\u05e1 \u05d1\u05de\u05d5\u05d1\u05d9\u05d9\u05dc \u05d5\u05dc\u05e6\u05d9\u05d9\u05e8 \u05d0\u05ea \u05d4\u05d7\u05ea\u05d9\u05de\u05d4 \u05e9\u05dc\u05da",
            by_clicking_you_agree_to_the:
              '\u05e2\u05dc \u05d9\u05d3\u05d9 \u05dc\u05d7\u05d9\u05e6\u05d4 \u05e2\u05dc "{button}", \u05d0\u05ea\u05d4 \u05de\u05e1\u05db\u05d9\u05dd \u05dc',
            electronic_signature_disclosure:
              "\u05d7\u05e9\u05d9\u05e4\u05ea \u05d7\u05ea\u05d9\u05de\u05d4 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9\u05ea",
            esignature_disclosure:
              "\u05d7\u05e9\u05d9\u05e4\u05ea \u05d4-e\u05d7\u05ea\u05d9\u05de\u05d4",
            minimize: "\u05dc\u05e7\u05d8\u05df",
            text: "\u05d8\u05e7\u05e1\u05d8",
            signature: "\u05d7\u05ea\u05d9\u05de\u05d4",
            initials: "\u05e8\u05d0\u05e9\u05d9 \u05ea\u05d9\u05d1\u05d5\u05ea",
            date: "\u05ea\u05d0\u05e8\u05d9\u05da",
            number: "\u05de\u05e1\u05e4\u05e8",
            image: "\u05ea\u05de\u05d5\u05e0\u05d4",
            file: "\u05e7\u05d5\u05d1\u05e5",
            select: "\u05d1\u05d7\u05e8",
            checkbox: "\u05ea\u05d9\u05e7 \u05d1\u05d7\u05d9\u05e8\u05d4",
            multiple: "\u05e8\u05d1 \u05e2\u05e8\u05db\u05d9\u05dd",
            radio: "\u05e8\u05d3\u05d9\u05d5",
            cells: "\u05ea\u05d0\u05d9\u05dd",
            stamp: "\u05d7\u05d5\u05ea\u05de\u05ea",
            payment: "\u05ea\u05e9\u05dc\u05d5\u05dd",
            phone: "\u05d8\u05dc\u05e4\u05d5\u05df",
            submit_form: "\u05e9\u05dc\u05d7 \u05d8\u05d5\u05e4\u05e1",
            sign_now: "\u05d7\u05ea\u05d5\u05dd \u05db\u05e2\u05ea",
            type_here_: "\u05d4\u05e7\u05dc\u05d3 \u05db\u05d0\u05df",
            optional: "\u05d0\u05d5\u05e4\u05e6\u05d9\u05d5\u05e0\u05dc\u05d9",
            option: "\u05d0\u05e4\u05e9\u05e8\u05d5\u05ea",
            appears_on: "\u05de\u05d5\u05e4\u05d9\u05e2 \u05d1",
            page: "\u05e2\u05de\u05d5\u05d3",
            take_photo: "\u05e6\u05dc\u05dd \u05ea\u05de\u05d5\u05e0\u05d4",
            select_your_option:
              "\u05d1\u05d7\u05e8 \u05d0\u05ea \u05d4\u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05e9\u05dc\u05da",
            complete_hightlighted_checkboxes_and_click:
              "\u05d4\u05e9\u05dc\u05dd \u05d0\u05ea \u05ea\u05d9\u05d1\u05d5\u05ea \u05d4\u05e1\u05d9\u05de\u05d5\u05df \u05d4\u05de\u05d5\u05d3\u05d2\u05e9\u05d5\u05ea \u05d5\u05dc\u05d7\u05e5",
            submit: "\u05e9\u05dc\u05d9\u05d7\u05d4",
            next: "\u05d4\u05d1\u05d0",
            click_to_upload:
              "\u05dc\u05d7\u05e5 \u05dc\u05d4\u05e2\u05dc\u05d0\u05d4",
            or_drag_and_drop_files:
              "\u05d0\u05d5 \u05d2\u05e8\u05d5\u05e8 \u05d5\u05e9\u05d7\u05e8\u05e8 \u05e7\u05d1\u05e6\u05d9\u05dd",
            send_copy_via_email:
              "\u05e9\u05dc\u05d7 \u05e2\u05d5\u05ea\u05e7 \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05d0\u05d9\u05de\u05d9\u05d9\u05dc",
            download: "\u05d4\u05d5\u05e8\u05d3\u05d4",
            clear: "\u05e0\u05e7\u05d4",
            redraw: "\u05e6\u05d9\u05d9\u05e8 \u05de\u05d7\u05d3\u05e9",
            draw_initials:
              "\u05e6\u05d9\u05d9\u05e8 \u05e6\u05d9\u05d5\u05e0\u05d9 \u05e8\u05d0\u05e9\u05d9 \u05ea\u05d9\u05d1\u05d5\u05ea",
            type_signature_here:
              "\u05d4\u05e7\u05dc\u05d3 \u05d7\u05ea\u05d9\u05de\u05d4 \u05db\u05d0\u05df",
            type_initial_here:
              "\u05d4\u05e7\u05dc\u05d3 \u05e6\u05d9\u05d5\u05e0\u05d9 \u05e8\u05d0\u05e9\u05d9 \u05ea\u05d9\u05d1\u05d5\u05ea \u05db\u05d0\u05df",
            form_has_been_completed:
              "\u05d4\u05d8\u05d5\u05e4\u05e1 \u05d4\u05d5\u05e9\u05dc\u05dd",
            create_a_free_account:
              "\u05e6\u05d5\u05e8 \u05d7\u05e9\u05d1\u05d5\u05df \u05d7\u05d9\u05e0\u05dd",
            signed_with:
              "\u05d7\u05ea\u05d5\u05dd \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea",
            please_check_the_box_to_continue:
              "\u05d0\u05e0\u05d0 \u05e1\u05de\u05df \u05d0\u05ea \u05d4\u05ea\u05d9\u05d1\u05d4 \u05db\u05d3\u05d9 \u05dc\u05d4\u05de\u05e9\u05d9\u05da",
            open_source_documents_software:
              "\u05ea\u05d5\u05db\u05e0\u05d4 \u05e4\u05ea\u05d5\u05d7\u05d4 \u05dc\u05de\u05e1\u05de\u05db\u05d9\u05dd",
            verified_phone_number:
              "\u05d0\u05d9\u05de\u05d5\u05ea \u05de\u05e1\u05e4\u05e8 \u05d8\u05dc\u05e4\u05d5\u05df",
            use_international_format:
              "\u05d4\u05e9\u05ea\u05de\u05e9 \u05d1\u05e4\u05d5\u05e8\u05de\u05d8 \u05d1\u05d9\u05e0\u05dc\u05d0\u05d5\u05de\u05d9: +1xxx",
            six_digits_code:
              "\u05e7\u05d5\u05d3 \u05de\u05e9\u05ea\u05de\u05e9 \u05e9\u05e9 \u05e1\u05e4\u05e8\u05d5\u05ea",
            change_phone_number:
              "\u05e9\u05d9\u05e0\u05d5\u05d9 \u05de\u05e1\u05e4\u05e8 \u05d8\u05dc\u05e4\u05d5\u05df",
            sending: "\u05e9\u05d5\u05dc\u05d7",
            resend_code:
              "\u05e9\u05dc\u05d7 \u05de\u05d7\u05d3\u05e9 \u05e7\u05d5\u05d3",
            verification_code_has_been_resent:
              "\u05e7\u05d5\u05d3 \u05d4\u05d0\u05d9\u05de\u05d5\u05ea \u05e0\u05e9\u05dc\u05d7 \u05de\u05d7\u05d3\u05e9 \u05d1SMS",
            please_fill_all_required_fields:
              "\u05d0\u05e0\u05d0 \u05de\u05dc\u05d0 \u05d0\u05ea \u05db\u05dc \u05d4\u05e9\u05d3\u05d5\u05ea \u05d4\u05d3\u05e8\u05d5\u05e9\u05d9\u05dd",
            set_today: "\u05e7\u05d1\u05e2 \u05d4\u05d9\u05d5\u05dd",
            toggle_multiline_text:
              "\u05e9\u05e0\u05d4 \u05d1\u05d9\u05df \u05d8\u05e7\u05e1\u05d8 \u05d1\u05de\u05e1\u05e4\u05e8 \u05e9\u05d5\u05e8\u05d5\u05ea \u05dc\u05d8\u05e7\u05e1\u05d8 \u05d1\u05e9\u05d5\u05e8\u05d4 \u05d0\u05d7\u05ea",
            draw_signature:
              "\u05e6\u05d9\u05d9\u05e8 \u05d7\u05ea\u05d9\u05de\u05d4",
            type_initial:
              "\u05d4\u05e7\u05dc\u05d3 \u05e6\u05d9\u05d5\u05e0\u05d9 \u05e8\u05d0\u05e9\u05d9 \u05ea\u05d9\u05d1\u05d5\u05ea",
            draw: "\u05e6\u05d9\u05d9\u05e8",
            type: "\u05d4\u05e7\u05dc\u05d3",
            type_text: "\u05d4\u05e7\u05dc\u05d3 \u05d8\u05e7\u05e1\u05d8",
            email_has_been_sent:
              "\u05d4\u05d0\u05d9\u05de\u05d9\u05d9\u05dc \u05e0\u05e9\u05dc\u05d7",
            processing: "\u05de\u05e2\u05d1\u05d3",
            pay_with_strip:
              "\u05e9\u05dc\u05dd \u05e2\u05dd \u05e1\u05d8\u05e8\u05d9\u05d9\u05e4",
            reupload: "\u05d4\u05e2\u05dc\u05d4 \u05e9\u05d5\u05d1",
            upload: "\u05d4\u05e2\u05dc\u05d0\u05d4",
            files: "\u05e7\u05d1\u05e6\u05d9\u05dd",
          },
          nl: {
            drawn_signature_on_a_touchscreen_device:
              "Getekende handtekening op een apparaat met een touchscreen",
            scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature:
              "Scan de QR-code met de camera-app om het formulier op mobiel te openen en uw handtekening te tekenen",
            by_clicking_you_agree_to_the:
              'Door op "{button}" te klikken, gaat u akkoord met de',
            electronic_signature_disclosure:
              "Openbaarmaking van Elektronische Handtekening",
            esignature_disclosure: "Openbaarmaking van eHandtekening",
            minimize: "Minimaliseren",
            text: "Tekst",
            signature: "Handtekening",
            initials: "Initialen",
            date: "Datum",
            number: "Nummer",
            image: "Afbeelding",
            take_photo: "Maak een foto",
            file: "Bestand",
            select: "Selecteer",
            checkbox: "Aankruisvakje",
            multiple: "Meerdere",
            radio: "Radio",
            cells: "Cellen",
            stamp: "Stempel",
            payment: "Betaling",
            phone: "Telefoon",
            submit_form: "Formulier verzenden",
            sign_now: "Nu ondertekenen",
            type_here_: "Typ hier...",
            optional: "Optioneel",
            option: "Optie",
            appears_on: "Verschijnt op",
            page: "Pagina",
            select_your_option: "Selecteer uw optie",
            complete_hightlighted_checkboxes_and_click:
              "Voltooi de gemarkeerde selectievakjes en klik",
            submit: "Voltooien",
            next: "Volgende",
            click_to_upload: "Klik om te uploaden",
            or_drag_and_drop_files: "of sleep en plaats bestanden",
            send_copy_via_email: "Stuur kopie per e-mail",
            download: "Downloaden",
            clear: "Wissen",
            redraw: "Opnieuw tekenen",
            draw_initials: "Initialen tekenen",
            type_signature_here: "Typ hier uw handtekening",
            type_initial_here: "Typ hier uw initialen",
            form_has_been_completed: "Formulier is voltooid!",
            create_a_free_account: "Maak een gratis account aan",
            signed_with: "Ondertekend met",
            please_check_the_box_to_continue:
              "Vink het vakje aan om door te gaan",
            open_source_documents_software: "Open source documenten software",
            verified_phone_number: "Geverifieerd telefoonnummer",
            use_international_format: "Gebruik internationaal formaat: +1xxx",
            six_digits_code: "6-cijferige code",
            change_phone_number: "Wijzig telefoonnummer",
            sending: "Voltooien...",
            resend_code: "Code opnieuw verzenden",
            verification_code_has_been_resent:
              "Verificatiecode is opnieuw verzonden via SMS",
            please_fill_all_required_fields: "Vul alle verplichte velden in",
            set_today: "Vandaag",
            toggle_multiline_text: "Schakel meerregelige tekst in/uit",
            draw_signature: "Handtekening tekenen",
            type_initial: "Typ initialen",
            draw: "Tekenen",
            type: "Typen",
            type_text: "Typ tekst",
            email_has_been_sent: "E-mail is verzonden",
            processing: "Verwerken",
            pay_with_strip: "Betalen met Stripe",
            reupload: "Opnieuw uploaden",
            upload: "Uploaden",
            files: "Bestanden",
          },
          ar: {
            drawn_signature_on_a_touchscreen_device:
              "\u062a\u0648\u0642\u064a\u0639 \u0645\u0631\u0633\u0648\u0645 \u0639\u0644\u0649 \u062c\u0647\u0627\u0632 \u0628\u0634\u0627\u0634\u0629 \u062a\u0639\u0645\u0644 \u0628\u0627\u0644\u0644\u0645\u0633",
            scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature:
              "\u0627\u0645\u0633\u062d \u0631\u0645\u0632 \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0627\u0644\u0633\u0631\u064a\u0639\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0643\u0627\u0645\u064a\u0631\u0627 \u0644\u0641\u062a\u062d \u0627\u0644\u0646\u0645\u0648\u0630\u062c \u0639\u0644\u0649 \u0627\u0644\u0647\u0627\u062a\u0641 \u0627\u0644\u0645\u062d\u0645\u0648\u0644 \u0648\u0631\u0633\u0645 \u062a\u0648\u0642\u064a\u0639\u0643",
            by_clicking_you_agree_to_the:
              '\u0628\u0627\u0644\u0646\u0642\u0631 \u0641\u0648\u0642 "{button}"\u060c \u0623\u0646\u062a \u062a\u0648\u0627\u0641\u0642 \u0639\u0644\u0649',
            electronic_signature_disclosure:
              "\u0643\u0634\u0641 \u0627\u0644\u062a\u0648\u0642\u064a\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
            esignature_disclosure:
              "\u0643\u0634\u0641 \u0627\u0644\u062a\u0648\u0642\u064a\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
            text: "\u0646\u0635",
            signature: "\u062a\u0648\u0642\u064a\u0639",
            initials:
              "\u0627\u0644\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a",
            date: "\u062a\u0627\u0631\u064a\u062e",
            number: "\u0631\u0642\u0645",
            image: "\u0635\u0648\u0631\u0629",
            take_photo:
              "\u0627\u0644\u062a\u0642\u0627\u0637 \u0635\u0648\u0631\u0629",
            file: "\u0645\u0644\u0641",
            select: "\u0627\u062e\u062a\u064a\u0627\u0631",
            checkbox:
              "\u062e\u0627\u0646\u0629 \u0627\u062e\u062a\u064a\u0627\u0631",
            multiple: "\u0645\u062a\u0639\u062f\u062f",
            radio: "\u0631\u0627\u062f\u064a\u0648",
            cells: "\u062e\u0644\u0627\u064a\u0627",
            stamp: "\u062e\u062a\u0645",
            minimize: "\u062a\u0635\u063a\u064a\u0631",
            payment: "\u0627\u0644\u062f\u0641\u0639",
            phone: "\u0647\u0627\u062a\u0641",
            submit_form:
              "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0646\u0645\u0648\u0630\u062c",
            sign_now: "\u0648\u0642\u0639 \u0627\u0644\u0622\u0646",
            type_here_: "\u0627\u0643\u062a\u0628 \u0647\u0646\u0627",
            optional: "\u0627\u062e\u062a\u064a\u0627\u0631\u064a",
            option: "\u062e\u064a\u0627\u0631",
            appears_on: "\u064a\u0638\u0647\u0631 \u0639\u0644\u0649",
            page: "\u0635\u0641\u062d\u0629",
            select_your_option:
              "\u0627\u062e\u062a\u0631 \u062e\u064a\u0627\u0631\u0643",
            complete_hightlighted_checkboxes_and_click:
              "\u0623\u0643\u0645\u0644 \u0627\u0644\u062e\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0645\u064a\u0632\u0629 \u0648\u0627\u0646\u0642\u0631",
            submit: "\u0625\u0631\u0633\u0627\u0644",
            next: "\u0627\u0644\u062a\u0627\u0644\u064a",
            click_to_upload:
              "\u0627\u0646\u0642\u0631 \u0644\u0644\u062a\u062d\u0645\u064a\u0644",
            or_drag_and_drop_files:
              "\u0623\u0648 \u0627\u0633\u062d\u0628 \u0648\u0623\u0633\u0642\u0637 \u0627\u0644\u0645\u0644\u0641\u0627\u062a",
            send_copy_via_email:
              "\u0625\u0631\u0633\u0627\u0644 \u0646\u0633\u062e\u0629 \u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
            download: "\u062a\u062d\u0645\u064a\u0644",
            clear: "\u0645\u0633\u062d",
            redraw:
              "\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0631\u0633\u0645",
            draw_initials:
              "\u0627\u0631\u0633\u0645 \u0627\u0644\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a",
            type_signature_here:
              "\u0627\u0643\u062a\u0628 \u0627\u0644\u062a\u0648\u0642\u064a\u0639 \u0647\u0646\u0627",
            type_initial_here:
              "\u0627\u0643\u062a\u0628 \u0627\u0644\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0647\u0646\u0627",
            form_has_been_completed:
              "\u062a\u0645 \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0646\u0645\u0648\u0630\u062c!",
            create_a_free_account:
              "\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628 \u0645\u062c\u0627\u0646\u064a",
            signed_with:
              "\u062a\u0645 \u0627\u0644\u062a\u0648\u0642\u064a\u0639 \u0628\u0648\u0627\u0633\u0637\u0629",
            please_check_the_box_to_continue:
              "\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u062e\u0627\u0646\u0629 \u0644\u0644\u0645\u062a\u0627\u0628\u0639\u0629",
            open_source_documents_software:
              "\u0628\u0631\u0646\u0627\u0645\u062c \u0648\u062b\u0627\u0626\u0642 \u0645\u0641\u062a\u0648\u062d \u0627\u0644\u0645\u0635\u062f\u0631",
            verified_phone_number:
              "\u062a\u062d\u0642\u0642 \u0645\u0646 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",
            use_international_format:
              "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u062f\u0648\u0644\u064a: +1xxx",
            six_digits_code:
              "\u0631\u0645\u0632 \u0645\u0643\u0648\u0646 \u0645\u0646 6 \u0623\u0631\u0642\u0627\u0645",
            change_phone_number:
              "\u062a\u063a\u064a\u064a\u0631 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",
            sending:
              "\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644",
            resend_code:
              "\u0625\u0639\u0627\u062f\u0629 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0645\u0632",
            verification_code_has_been_resent:
              "\u062a\u0645 \u0625\u0639\u0627\u062f\u0629 \u0625\u0631\u0633\u0627\u0644 \u0631\u0645\u0632 \u0627\u0644\u062a\u062d\u0642\u0642 \u0639\u0628\u0631 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0642\u0635\u064a\u0631\u0629",
            please_fill_all_required_fields:
              "\u0627\u0644\u0631\u062c\u0627\u0621 \u0645\u0644\u0621 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629",
            set_today:
              "\u062a\u0639\u064a\u064a\u0646 \u0627\u0644\u064a\u0648\u0645",
            toggle_multiline_text:
              "\u062a\u0628\u062f\u064a\u0644 \u0627\u0644\u0646\u0635\u0648\u0635 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0623\u0633\u0637\u0631",
            draw_signature:
              "\u0627\u0631\u0633\u0645 \u0627\u0644\u062a\u0648\u0642\u064a\u0639",
            type_initial:
              "\u0627\u0643\u062a\u0628 \u0627\u0644\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a",
            draw: "\u0627\u0631\u0633\u0645",
            type: "\u0627\u0643\u062a\u0628",
            type_text: "\u0627\u0643\u062a\u0628 \u0646\u0635\u064b\u0627",
            email_has_been_sent:
              "\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
            processing:
              "\u062c\u0627\u0631\u064d \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629",
            pay_with_strip:
              "\u0627\u0644\u062f\u0641\u0639 \u0628\u0648\u0627\u0633\u0637\u0629 Stripe",
            reupload:
              "\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u062d\u0645\u064a\u0644",
            upload: "\u062a\u062d\u0645\u064a\u0644",
            files: "\u0627\u0644\u0645\u0644\u0641\u0627\u062a",
          },
          ko: {
            drawn_signature_on_a_touchscreen_device:
              "\ud130\uce58\uc2a4\ud06c\ub9b0 \uc7a5\uce58\uc5d0\uc11c \uadf8\ub9b0 \uc11c\uba85",
            scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature:
              "\uce74\uba54\ub77c \uc571\uc73c\ub85c QR \ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uc5ec \ubaa8\ubc14\uc77c\uc5d0\uc11c \uc591\uc2dd\uc744 \uc5f4\uace0 \uc11c\uba85\uc744 \uadf8\ub9ac\uc138\uc694",
            by_clicking_you_agree_to_the:
              '"{button}"\ub97c \ud074\ub9ad\ud568\uc73c\ub85c\uc368, \ub2e4\uc74c\uc5d0 \ub3d9\uc758\ud558\uac8c \ub429\ub2c8\ub2e4',
            electronic_signature_disclosure:
              "\uc804\uc790 \uc11c\uba85 \uacf5\uac1c",
            esignature_disclosure: "\uc804\uc790 \uc11c\uba85 \uacf5\uac1c",
            text: "\ud14d\uc2a4\ud2b8",
            signature: "\uc11c\uba85",
            initials: "\uc774\ub2c8\uc15c",
            date: "\ub0a0\uc9dc",
            number: "\uc22b\uc790",
            image: "\uc774\ubbf8\uc9c0",
            take_photo: "\uc0ac\uc9c4 \ucc0d\uae30",
            file: "\ud30c\uc77c",
            select: "\uc120\ud0dd",
            checkbox: "\uccb4\ud06c\ubc15\uc2a4",
            multiple: "\ub2e4\uc911",
            radio: "\ub77c\ub514\uc624",
            cells: "\uc140",
            stamp: "\uc2a4\ud0ec\ud504",
            minimize: "\ucd5c\uc18c\ud654",
            payment: "\uacb0\uc81c",
            phone: "\uc804\ud654",
            submit_form: "\uc591\uc2dd \uc81c\ucd9c",
            sign_now: "\uc9c0\uae08 \uc11c\uba85",
            type_here_: "\uc5ec\uae30\uc5d0 \uc785\ub825...",
            optional: "\uc120\ud0dd \uc0ac\ud56d",
            option: "\uc635\uc158",
            appears_on: "\ub2e4\uc74c\uc5d0 \ub098\ud0c0\ub0a9\ub2c8\ub2e4",
            page: "\ud398\uc774\uc9c0",
            select_your_option: "\uc635\uc158 \uc120\ud0dd",
            complete_hightlighted_checkboxes_and_click:
              "\uac15\uc870\ub41c \uccb4\ud06c\ubc15\uc2a4\ub97c \uc644\ub8cc\ud558\uace0 \ud074\ub9ad",
            submit: "\uc81c\ucd9c",
            next: "\ub2e4\uc74c",
            click_to_upload:
              "\uc5c5\ub85c\ub4dc\ud558\ub824\uba74 \ud074\ub9ad",
            or_drag_and_drop_files:
              "\ub610\ub294 \ud30c\uc77c\uc744 \ub4dc\ub798\uadf8\ud558\uc5ec \ub193\uc73c\uc2ed\uc2dc\uc624",
            send_copy_via_email:
              "\uc774\uba54\uc77c\ub85c \uc0ac\ubcf8 \ubcf4\ub0b4\uae30",
            download: "\ub2e4\uc6b4\ub85c\ub4dc",
            clear: "\uc9c0\uc6b0\uae30",
            redraw: "\ub2e4\uc2dc \uadf8\ub9ac\uae30",
            draw_initials: "\uc774\ub2c8\uc15c \uadf8\ub9ac\uae30",
            type_signature_here: "\uc5ec\uae30\uc5d0 \uc11c\uba85 \uc785\ub825",
            type_initial_here:
              "\uc5ec\uae30\uc5d0 \uc774\ub2c8\uc15c \uc785\ub825",
            form_has_been_completed:
              "\uc591\uc2dd\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",
            create_a_free_account: "\ubb34\ub8cc \uacc4\uc815 \uc0dd\uc131",
            signed_with: "\ub2e4\uc74c\uc73c\ub85c \uc11c\uba85:",
            please_check_the_box_to_continue:
              "\uacc4\uc18d\ud558\ub824\uba74 \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624",
            open_source_documents_software:
              "\uc624\ud508 \uc18c\uc2a4 \ubb38\uc11c \uc18c\ud504\ud2b8\uc6e8\uc5b4",
            verified_phone_number:
              "\uc804\ud654\ubc88\ud638 \ud655\uc778\ub428",
            use_international_format:
              "\uad6d\uc81c \ud3ec\ub9f7 \uc0ac\uc6a9: +1xxx",
            six_digits_code: "6\uc790\ub9ac \ucf54\ub4dc",
            change_phone_number: "\uc804\ud654\ubc88\ud638 \ubcc0\uacbd",
            sending: "\uc804\uc1a1 \uc911...",
            resend_code: "\ucf54\ub4dc \ub2e4\uc2dc \ubcf4\ub0b4\uae30",
            verification_code_has_been_resent:
              "\uc778\uc99d \ucf54\ub4dc\uac00 SMS\ub85c \ub2e4\uc2dc \uc804\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4",
            please_fill_all_required_fields:
              "\ud544\uc218 \ud544\ub4dc\ub97c \ubaa8\ub450 \uc785\ub825\ud558\uc2ed\uc2dc\uc624",
            set_today: "\uc624\ub298 \ub0a0\uc9dc\ub85c \uc124\uc815",
            toggle_multiline_text:
              "\ub2e4\uc911 \ud14d\uc2a4\ud2b8 \uc804\ud658",
            draw_signature: "\uc11c\uba85 \uadf8\ub9ac\uae30",
            type_initial: "\uc774\ub2c8\uc15c \uc785\ub825",
            draw: "\uadf8\ub9ac\uae30",
            type: "\uc785\ub825",
            type_text: "\ud14d\uc2a4\ud2b8 \uc785\ub825",
            email_has_been_sent:
              "\uc774\uba54\uc77c\uc774 \uc804\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4",
            processing: "\ucc98\ub9ac \uc911",
            pay_with_strip: "\uc2a4\ud2b8\ub77c\uc774\ud504\ub85c \uacb0\uc81c",
            reupload: "\ub2e4\uc2dc \uc5c5\ub85c\ub4dc",
            upload: "\uc5c5\ub85c\ub4dc",
            files: "\ud30c\uc77c",
          },
        };
        const La = (e) =>
          null == e ||
          (Array.isArray(e)
            ? 0 === e.length
            : "string" === typeof e
            ? 0 === e.trim().length
            : "object" === typeof e
            ? 0 === Object.keys(e).length
            : !1 === e);
        var Ya = {
          name: "SubmissionForm",
          components: {
            FieldAreas: Te,
            ImageStep: ct,
            SignatureStep: ti,
            AppearsOn: Gt,
            IconWritingSign: ge.Z,
            AttachmentStep: Fi,
            InitialsStep: fi,
            MultiSelectStep: Pi,
            IconInnerShadowTop: Ge.Z,
            DateStep: Fa,
            IconArrowsDiagonal: Za.Z,
            TextStep: da,
            NumberStep: wa,
            FormulaFieldAreas: Pe,
            PhoneStep: Zi,
            MarkdownContent: ut,
            PaymentStep: ta,
            IconArrowsDiagonalMinimize2: Zt.Z,
            FormCompleted: Wa,
          },
          provide() {
            return {
              baseUrl: this.baseUrl,
              scrollIntoArea: this.scrollIntoArea,
              scrollIntoField: this.scrollIntoField,
              t: this.t,
            };
          },
          props: {
            submitter: { type: Object, required: !0 },
            canSendEmail: { type: Boolean, required: !1, default: !1 },
            attachments: { type: Array, required: !1, default: () => [] },
            onComplete: {
              type: Function,
              required: !1,
              default: () => () => {},
            },
            expand: { type: Boolean, required: !1, default: null },
            minimize: { type: Boolean, required: !1, default: !1 },
            withDisclosure: { type: Boolean, required: !1, default: !1 },
            reuseSignature: { type: Boolean, required: !1, default: !0 },
            withConfetti: { type: Boolean, required: !1, default: !1 },
            autoscrollFields: { type: Boolean, required: !1, default: !0 },
            showFieldNames: { type: Boolean, required: !1, default: !0 },
            withQrButton: { type: Boolean, required: !1, default: !1 },
            withTypedSignature: { type: Boolean, required: !1, default: !0 },
            isBreakpointMd: { type: Boolean, required: !1, default: !0 },
            baseUrl: { type: String, required: !1, default: "" },
            fields: { type: Array, required: !1, default: () => [] },
            backgroundColor: { type: String, required: !1, default: "" },
            allowToSkip: { type: Boolean, required: !1, default: !1 },
            goToLast: { type: Boolean, required: !1, default: !0 },
            isDemo: { type: Boolean, required: !1, default: !1 },
            dryRun: { type: Boolean, required: !1, default: !1 },
            attribution: { type: Boolean, required: !1, default: !0 },
            language: { type: String, required: !1, default: "" },
            values: { type: Object, required: !1, default: () => ({}) },
            authenticityToken: { type: String, required: !1, default: "" },
            i18n: { type: Object, required: !1, default: () => ({}) },
            withSendCopyButton: { type: Boolean, required: !1, default: !0 },
            withDownloadButton: { type: Boolean, required: !1, default: !0 },
            completedRedirectUrl: { type: String, required: !1, default: "" },
            completedButton: {
              type: Object,
              required: !1,
              default: () => ({}),
            },
            completedMessage: {
              type: Object,
              required: !1,
              default: () => ({}),
            },
          },
          data() {
            return {
              isCompleted: !1,
              isFormVisible: !1 !== this.expand,
              showFillAllRequiredFields: !1,
              currentStep: 0,
              phoneVerifiedValues: {},
              orientation: screen?.orientation?.type,
              isSubmitting: !1,
              submittedValues: {},
              recalculateButtonDisabledKey: "",
            };
          },
          computed: {
            isMobile: () => /android|iphone|ipad/i.test(navigator.userAgent),
            buttonText() {
              return this.alwaysMinimize ||
                this.stepFields.length === this.currentStep + 1
                ? this.t("submit")
                : this.t("next");
            },
            alwaysMinimize() {
              return (
                this.minimize ||
                (this.orientation?.includes("landscape") &&
                  this.isMobile &&
                  parseInt(window.innerHeight) < 550)
              );
            },
            currentStepFields() {
              return this.stepFields[this.currentStep] || [];
            },
            browserLanguage: () =>
              (navigator.language || navigator.userLanguage || "en").split(
                "-"
              )[0],
            queryParams: () => new URLSearchParams(window.location.search),
            submitterSlug() {
              return this.submitter.slug;
            },
            fieldsUuidIndex() {
              return this.fields.reduce((e, t) => ((e[t.uuid] = t), e), {});
            },
            previousInitialsValue() {
              if (!1 !== this.reuseSignature) {
                const e = [...this.fields]
                  .reverse()
                  .find((e) => "initials" === e.type && !!this.values[e.uuid]);
                return this.values[e?.uuid];
              }
              return null;
            },
            isAnonymousChecboxes() {
              return (
                "checkbox" === this.currentField.type &&
                this.currentStepFields.every((e) => !e.name && !e.required) &&
                this.currentStepFields.length > 4
              );
            },
            isButtonDisabled() {
              return (
                !!this.recalculateButtonDisabledKey &&
                (this.isSubmitting ||
                  (this.currentField.required &&
                    ["image", "file", "multiple"].includes(
                      this.currentField.type
                    ) &&
                    !this.values[this.currentField.uuid]?.length) ||
                  (this.currentField.required &&
                    "signature" === this.currentField.type &&
                    !this.values[this.currentField.uuid]?.length &&
                    this.$refs.currentStep &&
                    !this.$refs.currentStep.isSignatureStarted) ||
                  (this.currentField.required &&
                    "initials" === this.currentField.type &&
                    !this.values[this.currentField.uuid]?.length &&
                    this.$refs.currentStep &&
                    !this.$refs.currentStep.isInitialsStarted))
              );
            },
            currentField() {
              return this.currentStepFields[0];
            },
            stepFields() {
              return this.fields
                .filter((e) => !e.readonly)
                .reduce((e, t) => {
                  const i = e[e.length - 1];
                  return (
                    this.checkFieldConditions(t) &&
                      ("checkbox" === t.type &&
                      Array.isArray(i) &&
                      "checkbox" === i[0].type &&
                      !t.description
                        ? i.push(t)
                        : e.push([t])),
                    e
                  );
                }, []);
            },
            formulaFields() {
              return this.fields.filter((e) => e.preferences?.formula);
            },
            attachmentsIndex() {
              return this.attachments.reduce(
                (e, t) => ((e[t.uuid] = t), e),
                {}
              );
            },
            submitPath() {
              return `/s/${this.submitterSlug}`;
            },
          },
          watch: {
            expand(e) {
              this.isFormVisible = e;
            },
            currentStepFields(e) {
              La(e) && this.currentStep > 0 && (this.currentStep -= 1);
            },
          },
          beforeUnmount() {
            screen?.orientation?.removeEventListener(
              "change",
              this.onOrientationChange
            );
          },
          mounted() {
            if (
              ((this.submittedValues = JSON.parse(JSON.stringify(this.values))),
              screen?.orientation.addEventListener(
                "change",
                this.onOrientationChange
              ),
              this.fields.forEach((e) => {
                e.default_value &&
                  !e.readonly &&
                  (this.values[e.uuid] ||= e.default_value);
              }),
              this.queryParams.get("field_uuid"))
            ) {
              const e = this.stepFields.findIndex((e) =>
                e.some((e) => e.uuid === this.queryParams.get("field_uuid"))
              );
              this.currentStep = Math.max(e, 0);
            } else if (this.goToLast) {
              const e = this.stepFields.indexOf(
                  this.stepFields.find((e) =>
                    e.some((e) => e.required && !this.submittedValues[e.uuid])
                  )
                ),
                t =
                  this.stepFields.indexOf(
                    [...this.stepFields]
                      .reverse()
                      .find((e) =>
                        e.some((e) => !!this.submittedValues[e.uuid])
                      )
                  ) + 1,
                i = [this.stepFields.length - 1];
              -1 !== e && i.push(e),
                -1 !== t && i.push(t),
                (this.currentStep = Math.min(...i));
            }
            document.body?.clientWidth >= 768 &&
              !0 !== this.expand &&
              ["signature", "initials", "file", "image"].includes(
                this.currentField?.type
              ) &&
              (this.isFormVisible = !1),
              this.alwaysMinimize && (this.isFormVisible = !1),
              /iPhone|iPad|iPod/i.test(navigator.userAgent) &&
                this.$nextTick(() => {
                  const e = this.$root.$el.parentNode.getRootNode(),
                    t = e.getElementById("scrollbox");
                  ((e.body || e.querySelector("div")).style.overflow =
                    "hidden"),
                    t.classList.add("h-full", "overflow-y-auto"),
                    t.parentNode.classList.add("h-screen", "overflow-y-auto"),
                    (t.parentNode.style.maxHeight = "-webkit-fill-available");
                }),
              this.$nextTick(() => {
                (this.recalculateButtonDisabledKey = Math.random()),
                  Promise.all([
                    this.maybeTrackEmailClick(),
                    this.maybeTrackSmsClick(),
                  ]).finally(() => {
                    this.trackViewForm();
                  });
              });
          },
          methods: {
            t(e) {
              return (
                this.i18n[e] ||
                Ha[this.language?.toLowerCase()]?.[e] ||
                Ha[this.browserLanguage]?.[e] ||
                Ha.en[e] ||
                e
              );
            },
            onOrientationChange(e) {
              this.orientation = e.target.type;
            },
            checkFieldConditions(e) {
              return (
                !e.conditions?.length ||
                e.conditions.reduce((e, t) => {
                  if (["empty", "unchecked"].includes(t.action))
                    return e && La(this.values[t.field_uuid]);
                  if (["not_empty", "checked"].includes(t.action))
                    return e && !La(this.values[t.field_uuid]);
                  if (["equal", "contains"].includes(t.action)) {
                    const i = this.fieldsUuidIndex[t.field_uuid],
                      a = i.options.find((e) => e.uuid === t.value),
                      n = [this.values[t.field_uuid]].flat();
                    return (
                      e && n.includes(this.optionValue(a, i.options.indexOf(a)))
                    );
                  }
                  if (["not_equal", "does_not_contain"].includes(t.action)) {
                    const i = this.fieldsUuidIndex[t.field_uuid],
                      a = i.options.find((e) => e.uuid === t.value),
                      n = [this.values[t.field_uuid]].flat();
                    return (
                      e &&
                      !n.includes(this.optionValue(a, i.options.indexOf(a)))
                    );
                  }
                  return e;
                }, !0)
              );
            },
            optionValue(e, t) {
              return e.value ? e.value : `${this.t("option")} ${t + 1}`;
            },
            maybeTrackEmailClick() {
              const { queryParams: e } = this;
              if (e.has("t")) {
                const t = e.get("t");
                e.delete("t");
                const i = [window.location.pathname, e.toString()]
                  .filter(Boolean)
                  .join("?");
                return (
                  window.history.replaceState({}, document.title, i),
                  fetch(this.baseUrl + "/api/submitter_email_clicks", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      t: t,
                      submitter_slug: this.submitterSlug,
                    }),
                  })
                );
              }
              return Promise.resolve({});
            },
            maybeTrackSmsClick() {
              const { queryParams: e } = this;
              if (e.has("c")) {
                const t = e.get("c");
                e.delete("c");
                const i = [window.location.pathname, e.toString()]
                  .filter(Boolean)
                  .join("?");
                return (
                  window.history.replaceState({}, document.title, i),
                  fetch(this.baseUrl + "/api/submitter_sms_clicks", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      c: t,
                      submitter_slug: this.submitterSlug,
                    }),
                  })
                );
              }
              return Promise.resolve({});
            },
            trackViewForm() {
              fetch(this.baseUrl + "/api/submitter_form_views", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ submitter_slug: this.submitterSlug }),
              });
            },
            previousSignatureValueFor(e) {
              if (!1 !== this.reuseSignature) {
                const t = [...this.fields]
                  .reverse()
                  .find(
                    (t) =>
                      "signature" === t.type &&
                      e.preferences?.format === t.preferences?.format &&
                      !!this.values[t.uuid]
                  );
                return this.values[t?.uuid];
              }
              return null;
            },
            goToStep(e, t = !1, i = !1) {
              (this.currentStep = this.stepFields.indexOf(e)),
                (this.showFillAllRequiredFields = !1),
                this.$nextTick(() => {
                  (this.recalculateButtonDisabledKey = Math.random()),
                    this.isCompleted ||
                      (t &&
                        (this.scrollIntoField(e[0]),
                        this.$refs.form
                          .querySelector(
                            'input[type="date"], input[type="number"], input[type="text"], select'
                          )
                          ?.focus()),
                      i &&
                        !this.values[this.currentField.uuid] &&
                        ["file", "image"].includes(this.currentField.type) &&
                        this.$refs.form
                          .querySelector('input[type="file"]')
                          ?.click());
                });
            },
            saveStep(e) {
              const t = this.currentStepFields.map((e) => e.uuid),
                i = this.currentField.type;
              return this.isCompleted
                ? Promise.resolve({})
                : fetch(this.baseUrl + this.submitPath, {
                    method: "POST",
                    body: e || new FormData(this.$refs.form),
                  }).then(
                    (e) => (
                      200 === e.status &&
                        t.forEach((e) => {
                          (this.submittedValues[e] = this.values[e]),
                            "phone" === i &&
                              (this.phoneVerifiedValues[e] = this.values[e]);
                        }),
                      e
                    )
                  );
            },
            scrollIntoField(e) {
              return this.$refs.areas.scrollIntoField(e);
            },
            scrollIntoArea(e) {
              return this.$refs.areas.scrollIntoArea(e);
            },
            async submitStep() {
              this.isSubmitting = !0;
              (["signature", "phone", "initials", "payment"].includes(
                this.currentField.type
              )
                ? this.$refs.currentStep.submit
                : () => Promise.resolve({}))()
                .then(async () => {
                  const e = this.stepFields.find(
                      (e, t) =>
                        !(t >= this.currentStep) &&
                        e.some(
                          (e) =>
                            e.required &&
                            ("phone" === e.type || !this.allowToSkip) &&
                            La(this.submittedValues[e.uuid])
                        )
                    ),
                    t = new FormData(this.$refs.form),
                    i = this.currentStep === this.stepFields.length - 1;
                  let a;
                  !i || e || this.dryRun || t.append("completed", "true"),
                    (a =
                      !i &&
                      this.phoneVerifiedValues[this.currentField.uuid] &&
                      this.phoneVerifiedValues[this.currentField.uuid] ===
                        this.values[this.currentField.uuid]
                        ? Promise.resolve({})
                        : this.saveStep(t)),
                    await a
                      .then(async (t) => {
                        if (422 === t.status || 500 === t.status) {
                          const e = await t.json();
                          return (
                            alert(e.error || "Value is invalid"),
                            Promise.reject(new Error(e.error))
                          );
                        }
                        i && (this.isSecondWalkthrough = !0);
                        const a =
                          (i && e) || this.stepFields[this.currentStep + 1];
                        if (a)
                          this.alwaysMinimize && (this.isFormVisible = !1),
                            this.goToStep(a, this.autoscrollFields),
                            e === a && (this.showFillAllRequiredFields = !0);
                        else {
                          this.isCompleted = !0;
                          const e = await t.text();
                          e && this.onComplete(JSON.parse(e)),
                            this.completedRedirectUrl &&
                              (window.location.href =
                                this.completedRedirectUrl);
                        }
                      })
                      .catch((e) => {
                        console.error(e);
                      })
                      .finally(() => {
                        this.isSubmitting = !1;
                      });
                })
                .catch((e) => {
                  "Image too small" === e?.message
                    ? alert("Signature is too small - please redraw.")
                    : console.log(e);
                })
                .finally(() => {
                  this.isSubmitting = !1;
                });
            },
          },
        };
        var Ka = (0, Ve.Z)(Ya, [
            [
              "render",
              function (e, t, i, n, J, G) {
                const X = (0, l.up)("FieldAreas"),
                  ee = (0, l.up)("FormulaFieldAreas"),
                  te = (0, l.up)("IconWritingSign"),
                  ie = (0, l.up)("IconArrowsDiagonal"),
                  ae = (0, l.up)("IconArrowsDiagonalMinimize2"),
                  ne = (0, l.up)("TextStep"),
                  le = (0, l.up)("NumberStep"),
                  re = (0, l.up)("DateStep"),
                  se = (0, l.up)("MarkdownContent"),
                  oe = (0, l.up)("AppearsOn"),
                  ue = (0, l.up)("MultiSelectStep"),
                  de = (0, l.up)("ImageStep"),
                  ce = (0, l.up)("SignatureStep"),
                  pe = (0, l.up)("InitialsStep"),
                  me = (0, l.up)("AttachmentStep"),
                  he = (0, l.up)("PhoneStep"),
                  _e = (0, l.up)("PaymentStep"),
                  fe = (0, l.up)("IconInnerShadowTop"),
                  ge = (0, l.up)("FormCompleted");
                return (
                  (0, l.wg)(),
                  (0, l.iD)(
                    l.HY,
                    null,
                    [
                      (0, l.Wm)(
                        X,
                        {
                          ref: "areas",
                          steps: G.stepFields,
                          values: i.values,
                          "attachments-index": G.attachmentsIndex,
                          "with-label":
                            !G.isAnonymousChecboxes && i.showFieldNames,
                          "current-step": G.currentStepFields,
                          onFocusStep:
                            t[0] ||
                            (t[0] = (e) => [
                              G.saveStep(),
                              G.goToStep(e, !1, !0),
                              "checkbox" !== G.currentField.type
                                ? (J.isFormVisible = !0)
                                : "",
                            ]),
                        },
                        null,
                        8,
                        [
                          "steps",
                          "values",
                          "attachments-index",
                          "with-label",
                          "current-step",
                        ]
                      ),
                      G.formulaFields.length
                        ? ((0, l.wg)(),
                          (0, l.j4)(
                            ee,
                            {
                              key: 0,
                              fields: G.formulaFields,
                              values: i.values,
                            },
                            null,
                            8,
                            ["fields", "values"]
                          ))
                        : (0, l.kq)("", !0),
                      J.isFormVisible
                        ? (0, l.kq)("", !0)
                        : ((0, l.wg)(),
                          (0, l.iD)(
                            "button",
                            {
                              key: 1,
                              id: "expand_form_button",
                              class:
                                "btn btn-neutral flex text-white absolute bottom-0 w-full mb-3",
                              style: { width: "96%", "margin-left": "2%" },
                              onClick:
                                t[1] ||
                                (t[1] = (0, a.iM)(
                                  (e) => [
                                    (J.isFormVisible = !0),
                                    G.scrollIntoField(G.currentField),
                                  ],
                                  ["prevent"]
                                )),
                            },
                            [
                              ["initials", "signature"].includes(
                                G.currentField.type
                              )
                                ? ((0, l.wg)(),
                                  (0, l.iD)(
                                    l.HY,
                                    { key: 0 },
                                    [
                                      (0, l.Wm)(te, { "stroke-width": "1.5" }),
                                      (0, l.Uk)(
                                        " " + (0, r.zw)(G.t("sign_now")),
                                        1
                                      ),
                                    ],
                                    64
                                  ))
                                : G.alwaysMinimize
                                ? ((0, l.wg)(),
                                  (0, l.iD)(
                                    l.HY,
                                    { key: 1 },
                                    [(0, l.Uk)((0, r.zw)(G.t("next")), 1)],
                                    64
                                  ))
                                : ((0, l.wg)(),
                                  (0, l.iD)(
                                    l.HY,
                                    { key: 2 },
                                    [
                                      (0, l.Uk)(
                                        (0, r.zw)(G.t("submit_form")),
                                        1
                                      ),
                                    ],
                                    64
                                  )),
                              (0, l.Wm)(ie, {
                                class: "absolute right-0 mr-4",
                                width: 20,
                                height: 20,
                              }),
                            ]
                          )),
                      (0, l.wy)(
                        (0, l._)(
                          "div",
                          {
                            id: "form_container",
                            class: (0, r.C_)([
                              "shadow-md bg-base-100 absolute bottom-0 w-full border-base-200 border p-4 rounded",
                              { "md:bottom-4": i.isBreakpointMd },
                            ]),
                            style: (0, r.j5)({
                              backgroundColor: i.backgroundColor,
                            }),
                          },
                          [
                            J.isCompleted
                              ? (0, l.kq)("", !0)
                              : ((0, l.wg)(),
                                (0, l.iD)(
                                  "button",
                                  {
                                    key: 0,
                                    id: "minimize_form_button",
                                    class:
                                      "absolute right-0 mr-2 mt-2 top-0 hidden md:block",
                                    title: G.t("minimize"),
                                    onClick:
                                      t[2] ||
                                      (t[2] = (0, a.iM)(
                                        (e) => (J.isFormVisible = !1),
                                        ["prevent"]
                                      )),
                                  },
                                  [(0, l.Wm)(ae, { width: 20, height: 20 })],
                                  8,
                                  s
                                )),
                            (0, l._)(
                              "div",
                              {
                                class: (0, r.C_)({
                                  "md:px-4": i.isBreakpointMd,
                                }),
                              },
                              [
                                J.isCompleted
                                  ? ((0, l.wg)(),
                                    (0, l.j4)(
                                      ge,
                                      {
                                        key: 1,
                                        "is-demo": i.isDemo,
                                        attribution: i.attribution,
                                        "completed-button":
                                          i.completedRedirectUrl
                                            ? {}
                                            : i.completedButton,
                                        "completed-message":
                                          i.completedRedirectUrl
                                            ? {}
                                            : i.completedMessage,
                                        "with-send-copy-button":
                                          i.withSendCopyButton &&
                                          !i.completedRedirectUrl,
                                        "with-download-button":
                                          i.withDownloadButton &&
                                          !i.completedRedirectUrl,
                                        "with-confetti": i.withConfetti,
                                        "can-send-email":
                                          i.canSendEmail && !!i.submitter.email,
                                        "submitter-slug": G.submitterSlug,
                                      },
                                      null,
                                      8,
                                      [
                                        "is-demo",
                                        "attribution",
                                        "completed-button",
                                        "completed-message",
                                        "with-send-copy-button",
                                        "with-download-button",
                                        "with-confetti",
                                        "can-send-email",
                                        "submitter-slug",
                                      ]
                                    ))
                                  : ((0, l.wg)(),
                                    (0, l.iD)(
                                      "form",
                                      {
                                        key: 0,
                                        ref: "form",
                                        action: G.submitPath,
                                        method: "post",
                                        class: "mx-auto",
                                        style: (0, r.j5)({
                                          maxWidth: i.isBreakpointMd
                                            ? "582px"
                                            : "",
                                        }),
                                        onSubmit:
                                          t[33] ||
                                          (t[33] = (0, a.iM)(
                                            (...e) =>
                                              G.submitStep &&
                                              G.submitStep(...e),
                                            ["prevent"]
                                          )),
                                      },
                                      [
                                        (0, l._)(
                                          "input",
                                          {
                                            type: "hidden",
                                            name: "authenticity_token",
                                            value: i.authenticityToken,
                                          },
                                          null,
                                          8,
                                          u
                                        ),
                                        d,
                                        (0, l._)("div", c, [
                                          ["cells", "text"].includes(
                                            G.currentField.type
                                          )
                                            ? ((0, l.wg)(),
                                              (0, l.iD)("div", p, [
                                                ((0, l.wg)(),
                                                (0, l.j4)(
                                                  ne,
                                                  {
                                                    key: G.currentField.uuid,
                                                    modelValue:
                                                      i.values[
                                                        G.currentField.uuid
                                                      ],
                                                    "onUpdate:modelValue":
                                                      t[3] ||
                                                      (t[3] = (e) =>
                                                        (i.values[
                                                          G.currentField.uuid
                                                        ] = e)),
                                                    "show-field-names":
                                                      i.showFieldNames,
                                                    field: G.currentField,
                                                    onFocus:
                                                      t[4] ||
                                                      (t[4] = (e) =>
                                                        G.scrollIntoField(
                                                          G.currentField
                                                        )),
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    "modelValue",
                                                    "show-field-names",
                                                    "field",
                                                  ]
                                                )),
                                              ]))
                                            : "number" === G.currentField.type
                                            ? ((0, l.wg)(),
                                              (0, l.j4)(
                                                le,
                                                {
                                                  key: G.currentField.uuid,
                                                  modelValue:
                                                    i.values[
                                                      G.currentField.uuid
                                                    ],
                                                  "onUpdate:modelValue":
                                                    t[5] ||
                                                    (t[5] = (e) =>
                                                      (i.values[
                                                        G.currentField.uuid
                                                      ] = e)),
                                                  "show-field-names":
                                                    i.showFieldNames,
                                                  field: G.currentField,
                                                  onFocus:
                                                    t[6] ||
                                                    (t[6] = (e) =>
                                                      G.scrollIntoField(
                                                        G.currentField
                                                      )),
                                                },
                                                null,
                                                8,
                                                [
                                                  "modelValue",
                                                  "show-field-names",
                                                  "field",
                                                ]
                                              ))
                                            : "date" === G.currentField.type
                                            ? ((0, l.wg)(),
                                              (0, l.j4)(
                                                re,
                                                {
                                                  key: G.currentField.uuid,
                                                  modelValue:
                                                    i.values[
                                                      G.currentField.uuid
                                                    ],
                                                  "onUpdate:modelValue":
                                                    t[7] ||
                                                    (t[7] = (e) =>
                                                      (i.values[
                                                        G.currentField.uuid
                                                      ] = e)),
                                                  "show-field-names":
                                                    i.showFieldNames,
                                                  field: G.currentField,
                                                  onFocus:
                                                    t[8] ||
                                                    (t[8] = (e) =>
                                                      G.scrollIntoField(
                                                        G.currentField
                                                      )),
                                                },
                                                null,
                                                8,
                                                [
                                                  "modelValue",
                                                  "show-field-names",
                                                  "field",
                                                ]
                                              ))
                                            : "select" === G.currentField.type
                                            ? ((0, l.wg)(),
                                              (0, l.iD)("div", m, [
                                                i.showFieldNames &&
                                                (G.currentField.name ||
                                                  G.currentField.title)
                                                  ? ((0, l.wg)(),
                                                    (0, l.iD)(
                                                      "label",
                                                      {
                                                        key: 0,
                                                        for: G.currentField
                                                          .uuid,
                                                        dir: "auto",
                                                        class: (0, r.C_)([
                                                          "label text-2xl",
                                                          {
                                                            "mb-2":
                                                              !G.currentField
                                                                .description,
                                                          },
                                                        ]),
                                                      },
                                                      [
                                                        G.currentField.title
                                                          ? ((0, l.wg)(),
                                                            (0, l.j4)(
                                                              se,
                                                              {
                                                                key: 0,
                                                                string:
                                                                  G.currentField
                                                                    .title,
                                                              },
                                                              null,
                                                              8,
                                                              ["string"]
                                                            ))
                                                          : ((0, l.wg)(),
                                                            (0, l.iD)(
                                                              l.HY,
                                                              { key: 1 },
                                                              [
                                                                (0, l.Uk)(
                                                                  (0, r.zw)(
                                                                    G
                                                                      .currentField
                                                                      .name
                                                                  ) + " ",
                                                                  1
                                                                ),
                                                                G.currentField
                                                                  .required
                                                                  ? (0, l.kq)(
                                                                      "",
                                                                      !0
                                                                    )
                                                                  : ((0,
                                                                    l.wg)(),
                                                                    (0, l.iD)(
                                                                      l.HY,
                                                                      {
                                                                        key: 0,
                                                                      },
                                                                      [
                                                                        (0,
                                                                        l.Uk)(
                                                                          "(" +
                                                                            (0,
                                                                            r.zw)(
                                                                              G.t(
                                                                                "optional"
                                                                              )
                                                                            ) +
                                                                            ")",
                                                                          1
                                                                        ),
                                                                      ],
                                                                      64
                                                                    )),
                                                              ],
                                                              64
                                                            )),
                                                      ],
                                                      10,
                                                      h
                                                    ))
                                                  : ((0, l.wg)(),
                                                    (0, l.iD)("div", _)),
                                                G.currentField.description
                                                  ? ((0, l.wg)(),
                                                    (0, l.iD)("div", f, [
                                                      (0, l.Wm)(
                                                        se,
                                                        {
                                                          string:
                                                            G.currentField
                                                              .description,
                                                        },
                                                        null,
                                                        8,
                                                        ["string"]
                                                      ),
                                                    ]))
                                                  : (0, l.kq)("", !0),
                                                (0, l.Wm)(
                                                  oe,
                                                  { field: G.currentField },
                                                  null,
                                                  8,
                                                  ["field"]
                                                ),
                                                (0, l._)(
                                                  "select",
                                                  {
                                                    id: G.currentField.uuid,
                                                    dir: "auto",
                                                    required:
                                                      G.currentField.required,
                                                    class:
                                                      "select base-input !text-2xl w-full text-center font-normal",
                                                    name: `values[${G.currentField.uuid}]`,
                                                    onChange:
                                                      t[9] ||
                                                      (t[9] = (e) =>
                                                        (i.values[
                                                          G.currentField.uuid
                                                        ] = e.target.value)),
                                                    onFocus:
                                                      t[10] ||
                                                      (t[10] = (e) =>
                                                        G.scrollIntoField(
                                                          G.currentField
                                                        )),
                                                  },
                                                  [
                                                    (0, l._)(
                                                      "option",
                                                      {
                                                        value: "",
                                                        selected:
                                                          !i.values[
                                                            G.currentField.uuid
                                                          ],
                                                      },
                                                      (0, r.zw)(
                                                        G.t(
                                                          "select_your_option"
                                                        )
                                                      ),
                                                      9,
                                                      w
                                                    ),
                                                    ((0, l.wg)(!0),
                                                    (0, l.iD)(
                                                      l.HY,
                                                      null,
                                                      (0, l.Ko)(
                                                        G.currentField.options,
                                                        (e) => (
                                                          (0, l.wg)(),
                                                          (0, l.iD)(
                                                            "option",
                                                            {
                                                              key: e.uuid,
                                                              selected:
                                                                i.values[
                                                                  G.currentField
                                                                    .uuid
                                                                ] == e.value,
                                                              value: e.value,
                                                            },
                                                            (0, r.zw)(e.value),
                                                            9,
                                                            b
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                                  ],
                                                  40,
                                                  g
                                                ),
                                              ]))
                                            : "radio" === G.currentField.type
                                            ? ((0, l.wg)(),
                                              (0, l.iD)("div", y, [
                                                i.showFieldNames &&
                                                (G.currentField.name ||
                                                  G.currentField.title)
                                                  ? ((0, l.wg)(),
                                                    (0, l.iD)(
                                                      "label",
                                                      {
                                                        key: 0,
                                                        for: G.currentField
                                                          .uuid,
                                                        dir: "auto",
                                                        class: (0, r.C_)([
                                                          "label text-2xl",
                                                          {
                                                            "mb-2":
                                                              !G.currentField
                                                                .description,
                                                          },
                                                        ]),
                                                      },
                                                      [
                                                        G.currentField.title
                                                          ? ((0, l.wg)(),
                                                            (0, l.j4)(
                                                              se,
                                                              {
                                                                key: 0,
                                                                string:
                                                                  G.currentField
                                                                    .title,
                                                              },
                                                              null,
                                                              8,
                                                              ["string"]
                                                            ))
                                                          : ((0, l.wg)(),
                                                            (0, l.iD)(
                                                              l.HY,
                                                              { key: 1 },
                                                              [
                                                                (0, l.Uk)(
                                                                  (0, r.zw)(
                                                                    G
                                                                      .currentField
                                                                      .name
                                                                  ) + " ",
                                                                  1
                                                                ),
                                                                G.currentField
                                                                  .required
                                                                  ? (0, l.kq)(
                                                                      "",
                                                                      !0
                                                                    )
                                                                  : ((0,
                                                                    l.wg)(),
                                                                    (0, l.iD)(
                                                                      l.HY,
                                                                      {
                                                                        key: 0,
                                                                      },
                                                                      [
                                                                        (0,
                                                                        l.Uk)(
                                                                          "(" +
                                                                            (0,
                                                                            r.zw)(
                                                                              G.t(
                                                                                "optional"
                                                                              )
                                                                            ) +
                                                                            ")",
                                                                          1
                                                                        ),
                                                                      ],
                                                                      64
                                                                    )),
                                                              ],
                                                              64
                                                            )),
                                                      ],
                                                      10,
                                                      v
                                                    ))
                                                  : (0, l.kq)("", !0),
                                                G.currentField.description
                                                  ? ((0, l.wg)(),
                                                    (0, l.iD)("div", k, [
                                                      (0, l.Wm)(
                                                        se,
                                                        {
                                                          string:
                                                            G.currentField
                                                              .description,
                                                        },
                                                        null,
                                                        8,
                                                        ["string"]
                                                      ),
                                                    ]))
                                                  : (0, l.kq)("", !0),
                                                (0, l._)("div", x, [
                                                  !i.showFieldNames ||
                                                  (G.currentField.options.every(
                                                    (e) => !e.value
                                                  ) &&
                                                    G.currentField.options
                                                      .length > 4)
                                                    ? ((0, l.wg)(),
                                                      (0, l.iD)("div", S, [
                                                        (0, l._)(
                                                          "span",
                                                          {
                                                            onClick:
                                                              t[11] ||
                                                              (t[11] = (e) =>
                                                                G.scrollIntoField(
                                                                  G.currentField
                                                                )),
                                                          },
                                                          [
                                                            (0, l.Uk)(
                                                              (0, r.zw)(
                                                                G.t(
                                                                  "complete_hightlighted_checkboxes_and_click"
                                                                )
                                                              ) + " ",
                                                              1
                                                            ),
                                                            (0, l._)(
                                                              "span",
                                                              F,
                                                              (0, r.zw)(
                                                                G.stepFields
                                                                  .length ===
                                                                  J.currentStep +
                                                                    1
                                                                  ? G.t(
                                                                      "submit"
                                                                    )
                                                                  : G.t("next")
                                                              ),
                                                              1
                                                            ),
                                                            (0, l.Uk)(". "),
                                                          ]
                                                        ),
                                                      ]))
                                                    : (0, l.kq)("", !0),
                                                  (0, l._)(
                                                    "div",
                                                    {
                                                      class: (0, r.C_)([
                                                        "space-y-3.5 mx-auto",
                                                        {
                                                          hidden:
                                                            !i.showFieldNames ||
                                                            (G.currentField.options.every(
                                                              (e) => !e.value
                                                            ) &&
                                                              G.currentField
                                                                .options
                                                                .length > 4),
                                                        },
                                                      ]),
                                                    },
                                                    [
                                                      ((0, l.wg)(!0),
                                                      (0, l.iD)(
                                                        l.HY,
                                                        null,
                                                        (0, l.Ko)(
                                                          G.currentField
                                                            .options,
                                                          (e, n) => (
                                                            (0, l.wg)(),
                                                            (0, l.iD)(
                                                              "div",
                                                              { key: e.uuid },
                                                              [
                                                                (0, l._)(
                                                                  "label",
                                                                  {
                                                                    for: e.uuid,
                                                                    class:
                                                                      "flex items-center space-x-3",
                                                                  },
                                                                  [
                                                                    (0, l.wy)(
                                                                      (0, l._)(
                                                                        "input",
                                                                        {
                                                                          id: e.uuid,
                                                                          "onUpdate:modelValue":
                                                                            t[12] ||
                                                                            (t[12] =
                                                                              (
                                                                                e
                                                                              ) =>
                                                                                (i.values[
                                                                                  G.currentField.uuid
                                                                                ] =
                                                                                  e)),
                                                                          type: "radio",
                                                                          class:
                                                                            "base-radio !h-7 !w-7",
                                                                          name: `values[${G.currentField.uuid}]`,
                                                                          value:
                                                                            e.value ||
                                                                            `${G.t(
                                                                              "option"
                                                                            )} ${
                                                                              n +
                                                                              1
                                                                            }`,
                                                                          required:
                                                                            G
                                                                              .currentField
                                                                              .required,
                                                                          onClick:
                                                                            t[13] ||
                                                                            (t[13] =
                                                                              (
                                                                                e
                                                                              ) =>
                                                                                G.scrollIntoField(
                                                                                  G.currentField
                                                                                )),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        q
                                                                      ),
                                                                      [
                                                                        [
                                                                          a.G2,
                                                                          i
                                                                            .values[
                                                                            G
                                                                              .currentField
                                                                              .uuid
                                                                          ],
                                                                        ],
                                                                      ]
                                                                    ),
                                                                    (0, l._)(
                                                                      "span",
                                                                      C,
                                                                      (0, r.zw)(
                                                                        e.value ||
                                                                          `${G.t(
                                                                            "option"
                                                                          )} ${
                                                                            n +
                                                                            1
                                                                          }`
                                                                      ),
                                                                      1
                                                                    ),
                                                                  ],
                                                                  8,
                                                                  D
                                                                ),
                                                              ]
                                                            )
                                                          )
                                                        ),
                                                        128
                                                      )),
                                                    ],
                                                    2
                                                  ),
                                                ]),
                                              ]))
                                            : "multiple" === G.currentField.type
                                            ? ((0, l.wg)(),
                                              (0, l.j4)(
                                                ue,
                                                {
                                                  key: G.currentField.uuid,
                                                  modelValue:
                                                    i.values[
                                                      G.currentField.uuid
                                                    ],
                                                  "onUpdate:modelValue":
                                                    t[14] ||
                                                    (t[14] = (e) =>
                                                      (i.values[
                                                        G.currentField.uuid
                                                      ] = e)),
                                                  "show-field-names":
                                                    i.showFieldNames,
                                                  "is-last-step":
                                                    G.stepFields.length ===
                                                    J.currentStep + 1,
                                                  field: G.currentField,
                                                },
                                                null,
                                                8,
                                                [
                                                  "modelValue",
                                                  "show-field-names",
                                                  "is-last-step",
                                                  "field",
                                                ]
                                              ))
                                            : "checkbox" === G.currentField.type
                                            ? ((0, l.wg)(),
                                              (0, l.iD)("div", I, [
                                                G.currentField.description
                                                  ? ((0, l.wg)(),
                                                    (0, l.iD)("div", z, [
                                                      (0, l.Wm)(
                                                        se,
                                                        {
                                                          string:
                                                            G.currentField
                                                              .description,
                                                        },
                                                        null,
                                                        8,
                                                        ["string"]
                                                      ),
                                                    ]))
                                                  : (0, l.kq)("", !0),
                                                (0, l._)("div", V, [
                                                  j,
                                                  (0, l._)("div", $, [
                                                    G.isAnonymousChecboxes ||
                                                    !i.showFieldNames
                                                      ? ((0, l.wg)(),
                                                        (0, l.iD)(
                                                          l.HY,
                                                          { key: 0 },
                                                          [
                                                            (0, l._)(
                                                              "span",
                                                              T,
                                                              [
                                                                (0, l.Uk)(
                                                                  (0, r.zw)(
                                                                    G.t(
                                                                      "complete_hightlighted_checkboxes_and_click"
                                                                    )
                                                                  ) + " ",
                                                                  1
                                                                ),
                                                                (0, l._)(
                                                                  "span",
                                                                  U,
                                                                  (0, r.zw)(
                                                                    G.stepFields
                                                                      .length ===
                                                                      J.currentStep +
                                                                        1
                                                                      ? G.t(
                                                                          "submit"
                                                                        )
                                                                      : G.t(
                                                                          "next"
                                                                        )
                                                                  ),
                                                                  1
                                                                ),
                                                                (0, l.Uk)(". "),
                                                              ]
                                                            ),
                                                            ((0, l.wg)(!0),
                                                            (0, l.iD)(
                                                              l.HY,
                                                              null,
                                                              (0, l.Ko)(
                                                                G.currentStepFields,
                                                                (e) => (
                                                                  (0, l.wg)(),
                                                                  (0, l.iD)(
                                                                    "input",
                                                                    {
                                                                      key: e.uuid,
                                                                      type: "hidden",
                                                                      name: `values[${e.uuid}]`,
                                                                      value:
                                                                        !!i
                                                                          .values[
                                                                          e.uuid
                                                                        ],
                                                                    },
                                                                    null,
                                                                    8,
                                                                    P
                                                                  )
                                                                )
                                                              ),
                                                              128
                                                            )),
                                                          ],
                                                          64
                                                        ))
                                                      : ((0, l.wg)(!0),
                                                        (0, l.iD)(
                                                          l.HY,
                                                          { key: 1 },
                                                          (0, l.Ko)(
                                                            G.currentStepFields,
                                                            (e, t) => (
                                                              (0, l.wg)(),
                                                              (0, l.iD)(
                                                                "div",
                                                                { key: e.uuid },
                                                                [
                                                                  (0, l._)(
                                                                    "label",
                                                                    {
                                                                      for: e.uuid,
                                                                      class:
                                                                        "flex items-center space-x-3",
                                                                    },
                                                                    [
                                                                      (0, l._)(
                                                                        "input",
                                                                        {
                                                                          type: "hidden",
                                                                          name: `values[${e.uuid}]`,
                                                                          value:
                                                                            !!i
                                                                              .values[
                                                                              e
                                                                                .uuid
                                                                            ],
                                                                        },
                                                                        null,
                                                                        8,
                                                                        A
                                                                      ),
                                                                      (0, l._)(
                                                                        "input",
                                                                        {
                                                                          id: e.uuid,
                                                                          type: "checkbox",
                                                                          class:
                                                                            "base-checkbox !h-7 !w-7",
                                                                          oninvalid: `this.setCustomValidity('${G.t(
                                                                            "please_check_the_box_to_continue"
                                                                          )}')`,
                                                                          onchange: `this.setCustomValidity(validity.valueMissing ? '${G.t(
                                                                            "please_check_the_box_to_continue"
                                                                          )}' : '');`,
                                                                          required:
                                                                            e.required,
                                                                          checked:
                                                                            !!i
                                                                              .values[
                                                                              e
                                                                                .uuid
                                                                            ],
                                                                          onClick:
                                                                            (
                                                                              t
                                                                            ) => [
                                                                              G.scrollIntoField(
                                                                                e
                                                                              ),
                                                                              (i.values[
                                                                                e.uuid
                                                                              ] =
                                                                                !i
                                                                                  .values[
                                                                                  e
                                                                                    .uuid
                                                                                ]),
                                                                            ],
                                                                        },
                                                                        null,
                                                                        8,
                                                                        O
                                                                      ),
                                                                      e.title
                                                                        ? ((0,
                                                                          l.wg)(),
                                                                          (0,
                                                                          l.iD)(
                                                                            "span",
                                                                            R,
                                                                            [
                                                                              (0,
                                                                              l.Wm)(
                                                                                se,
                                                                                {
                                                                                  string:
                                                                                    e.title,
                                                                                },
                                                                                null,
                                                                                8,
                                                                                [
                                                                                  "string",
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          ))
                                                                        : ((0,
                                                                          l.wg)(),
                                                                          (0,
                                                                          l.iD)(
                                                                            "span",
                                                                            B,
                                                                            (0,
                                                                            r.zw)(
                                                                              e.name ||
                                                                                e.type +
                                                                                  " " +
                                                                                  (t +
                                                                                    1)
                                                                            ),
                                                                            1
                                                                          )),
                                                                    ],
                                                                    8,
                                                                    M
                                                                  ),
                                                                ]
                                                              )
                                                            )
                                                          ),
                                                          128
                                                        )),
                                                  ]),
                                                ]),
                                              ]))
                                            : "image" === G.currentField.type ||
                                              "stamp" === G.currentField.type
                                            ? ((0, l.wg)(),
                                              (0, l.j4)(
                                                de,
                                                {
                                                  key: G.currentField.uuid,
                                                  modelValue:
                                                    i.values[
                                                      G.currentField.uuid
                                                    ],
                                                  "onUpdate:modelValue":
                                                    t[15] ||
                                                    (t[15] = (e) =>
                                                      (i.values[
                                                        G.currentField.uuid
                                                      ] = e)),
                                                  field: G.currentField,
                                                  "attachments-index":
                                                    G.attachmentsIndex,
                                                  "submitter-slug":
                                                    G.submitterSlug,
                                                  "show-field-names":
                                                    i.showFieldNames,
                                                  onAttached:
                                                    t[16] ||
                                                    (t[16] = (e) => [
                                                      i.attachments.push(e),
                                                      G.scrollIntoField(
                                                        G.currentField
                                                      ),
                                                    ]),
                                                },
                                                null,
                                                8,
                                                [
                                                  "modelValue",
                                                  "field",
                                                  "attachments-index",
                                                  "submitter-slug",
                                                  "show-field-names",
                                                ]
                                              ))
                                            : "signature" ===
                                              G.currentField.type
                                            ? ((0, l.wg)(),
                                              (0, l.j4)(
                                                ce,
                                                {
                                                  ref: "currentStep",
                                                  key: G.currentField.uuid,
                                                  modelValue:
                                                    i.values[
                                                      G.currentField.uuid
                                                    ],
                                                  "onUpdate:modelValue":
                                                    t[17] ||
                                                    (t[17] = (e) =>
                                                      (i.values[
                                                        G.currentField.uuid
                                                      ] = e)),
                                                  field: G.currentField,
                                                  "previous-value":
                                                    G.previousSignatureValueFor(
                                                      G.currentField
                                                    ),
                                                  "with-typed-signature":
                                                    i.withTypedSignature,
                                                  "attachments-index":
                                                    G.attachmentsIndex,
                                                  "button-text": G.buttonText,
                                                  "with-disclosure":
                                                    i.withDisclosure,
                                                  "with-qr-button":
                                                    i.withQrButton,
                                                  "submitter-slug":
                                                    G.submitterSlug,
                                                  "show-field-names":
                                                    i.showFieldNames,
                                                  onAttached:
                                                    t[18] ||
                                                    (t[18] = (e) =>
                                                      i.attachments.push(e)),
                                                  onStart:
                                                    t[19] ||
                                                    (t[19] = (e) =>
                                                      G.scrollIntoField(
                                                        G.currentField
                                                      )),
                                                  onMinimize:
                                                    t[20] ||
                                                    (t[20] = (e) =>
                                                      (J.isFormVisible = !1)),
                                                },
                                                null,
                                                8,
                                                [
                                                  "modelValue",
                                                  "field",
                                                  "previous-value",
                                                  "with-typed-signature",
                                                  "attachments-index",
                                                  "button-text",
                                                  "with-disclosure",
                                                  "with-qr-button",
                                                  "submitter-slug",
                                                  "show-field-names",
                                                ]
                                              ))
                                            : "initials" === G.currentField.type
                                            ? ((0, l.wg)(),
                                              (0, l.j4)(
                                                pe,
                                                {
                                                  ref: "currentStep",
                                                  key: G.currentField.uuid,
                                                  modelValue:
                                                    i.values[
                                                      G.currentField.uuid
                                                    ],
                                                  "onUpdate:modelValue":
                                                    t[21] ||
                                                    (t[21] = (e) =>
                                                      (i.values[
                                                        G.currentField.uuid
                                                      ] = e)),
                                                  field: G.currentField,
                                                  "previous-value":
                                                    G.previousInitialsValue,
                                                  "attachments-index":
                                                    G.attachmentsIndex,
                                                  "show-field-names":
                                                    i.showFieldNames,
                                                  "submitter-slug":
                                                    G.submitterSlug,
                                                  onAttached:
                                                    t[22] ||
                                                    (t[22] = (e) =>
                                                      i.attachments.push(e)),
                                                  onStart:
                                                    t[23] ||
                                                    (t[23] = (e) =>
                                                      G.scrollIntoField(
                                                        G.currentField
                                                      )),
                                                  onFocus:
                                                    t[24] ||
                                                    (t[24] = (e) =>
                                                      G.scrollIntoField(
                                                        G.currentField
                                                      )),
                                                  onMinimize:
                                                    t[25] ||
                                                    (t[25] = (e) =>
                                                      (J.isFormVisible = !1)),
                                                },
                                                null,
                                                8,
                                                [
                                                  "modelValue",
                                                  "field",
                                                  "previous-value",
                                                  "attachments-index",
                                                  "show-field-names",
                                                  "submitter-slug",
                                                ]
                                              ))
                                            : "file" === G.currentField.type
                                            ? ((0, l.wg)(),
                                              (0, l.j4)(
                                                me,
                                                {
                                                  key: G.currentField.uuid,
                                                  modelValue:
                                                    i.values[
                                                      G.currentField.uuid
                                                    ],
                                                  "onUpdate:modelValue":
                                                    t[26] ||
                                                    (t[26] = (e) =>
                                                      (i.values[
                                                        G.currentField.uuid
                                                      ] = e)),
                                                  field: G.currentField,
                                                  "attachments-index":
                                                    G.attachmentsIndex,
                                                  "submitter-slug":
                                                    G.submitterSlug,
                                                  onAttached:
                                                    t[27] ||
                                                    (t[27] = (e) => [
                                                      i.attachments.push(e),
                                                      G.scrollIntoField(
                                                        G.currentField
                                                      ),
                                                    ]),
                                                },
                                                null,
                                                8,
                                                [
                                                  "modelValue",
                                                  "field",
                                                  "attachments-index",
                                                  "submitter-slug",
                                                ]
                                              ))
                                            : "phone" === G.currentField.type
                                            ? ((0, l.wg)(),
                                              (0, l.j4)(
                                                he,
                                                {
                                                  ref: "currentStep",
                                                  key: G.currentField.uuid,
                                                  modelValue:
                                                    i.values[
                                                      G.currentField.uuid
                                                    ],
                                                  "onUpdate:modelValue":
                                                    t[28] ||
                                                    (t[28] = (e) =>
                                                      (i.values[
                                                        G.currentField.uuid
                                                      ] = e)),
                                                  field: G.currentField,
                                                  locale:
                                                    i.language?.toLowerCase() ||
                                                    G.browserLanguage,
                                                  "show-field-names":
                                                    i.showFieldNames,
                                                  "verified-value":
                                                    J.phoneVerifiedValues[
                                                      G.currentField.uuid
                                                    ],
                                                  "default-value":
                                                    i.submitter.phone,
                                                  "submitter-slug":
                                                    G.submitterSlug,
                                                  onFocus:
                                                    t[29] ||
                                                    (t[29] = (e) =>
                                                      G.scrollIntoField(
                                                        G.currentField
                                                      )),
                                                  onSubmit: G.submitStep,
                                                },
                                                null,
                                                8,
                                                [
                                                  "modelValue",
                                                  "field",
                                                  "locale",
                                                  "show-field-names",
                                                  "verified-value",
                                                  "default-value",
                                                  "submitter-slug",
                                                  "onSubmit",
                                                ]
                                              ))
                                            : "payment" === G.currentField.type
                                            ? ((0, l.wg)(),
                                              (0, l.j4)(
                                                _e,
                                                {
                                                  ref: "currentStep",
                                                  key: G.currentField.uuid,
                                                  modelValue:
                                                    i.values[
                                                      G.currentField.uuid
                                                    ],
                                                  "onUpdate:modelValue":
                                                    t[30] ||
                                                    (t[30] = (e) =>
                                                      (i.values[
                                                        G.currentField.uuid
                                                      ] = e)),
                                                  field: G.currentField,
                                                  "submitter-slug":
                                                    G.submitterSlug,
                                                  onAttached:
                                                    t[31] ||
                                                    (t[31] = (e) =>
                                                      i.attachments.push(e)),
                                                  onFocus:
                                                    t[32] ||
                                                    (t[32] = (e) =>
                                                      G.scrollIntoField(
                                                        G.currentField
                                                      )),
                                                  onSubmit: G.submitStep,
                                                },
                                                null,
                                                8,
                                                [
                                                  "modelValue",
                                                  "field",
                                                  "submitter-slug",
                                                  "onSubmit",
                                                ]
                                              ))
                                            : (0, l.kq)("", !0),
                                        ]),
                                        "payment" !== G.currentField.type ||
                                        J.submittedValues[G.currentField.uuid]
                                          ? ((0, l.wg)(),
                                            (0, l.iD)(
                                              "div",
                                              {
                                                key: 0,
                                                class: (0, r.C_)(
                                                  "signature" ===
                                                    G.currentField.type
                                                    ? "mt-2"
                                                    : "mt-6 md:mt-8"
                                                ),
                                              },
                                              [
                                                (0, l._)(
                                                  "button",
                                                  {
                                                    id: "submit_form_button",
                                                    ref: "submitButton",
                                                    type: "submit",
                                                    class:
                                                      "base-button w-full flex justify-center",
                                                    disabled:
                                                      G.isButtonDisabled,
                                                  },
                                                  [
                                                    (0, l._)("span", N, [
                                                      J.isSubmitting
                                                        ? ((0, l.wg)(),
                                                          (0, l.j4)(fe, {
                                                            key: 0,
                                                            class:
                                                              "mr-1 animate-spin",
                                                          }))
                                                        : (0, l.kq)("", !0),
                                                      (0, l._)(
                                                        "span",
                                                        null,
                                                        (0, r.zw)(G.buttonText),
                                                        1
                                                      ),
                                                      J.isSubmitting
                                                        ? ((0, l.wg)(),
                                                          (0, l.iD)(
                                                            "span",
                                                            W,
                                                            Z
                                                          ))
                                                        : (0, l.kq)("", !0),
                                                    ]),
                                                  ],
                                                  8,
                                                  E
                                                ),
                                                J.showFillAllRequiredFields
                                                  ? ((0, l.wg)(),
                                                    (0, l.iD)(
                                                      "div",
                                                      H,
                                                      (0, r.zw)(
                                                        G.t(
                                                          "please_fill_all_required_fields"
                                                        )
                                                      ),
                                                      1
                                                    ))
                                                  : (0, l.kq)("", !0),
                                              ],
                                              2
                                            ))
                                          : (0, l.kq)("", !0),
                                      ],
                                      44,
                                      o
                                    )),
                                G.stepFields.length < 80
                                  ? ((0, l.wg)(),
                                    (0, l.iD)("div", L, [
                                      (0, l._)("div", Y, [
                                        ((0, l.wg)(!0),
                                        (0, l.iD)(
                                          l.HY,
                                          null,
                                          (0, l.Ko)(
                                            G.stepFields,
                                            (e, t) => (
                                              (0, l.wg)(),
                                              (0, l.iD)(
                                                "a",
                                                {
                                                  key: e[0].uuid,
                                                  href: "#",
                                                  class: (0, r.C_)([
                                                    "inline border border-base-300 h-3 w-3 rounded-full mx-1 mt-1",
                                                    {
                                                      "bg-base-300":
                                                        t === J.currentStep,
                                                      "bg-base-content":
                                                        (t < J.currentStep &&
                                                          G.stepFields[t].every(
                                                            (e) =>
                                                              !e.required ||
                                                              ![
                                                                null,
                                                                void 0,
                                                                "",
                                                              ].includes(
                                                                i.values[e.uuid]
                                                              )
                                                          )) ||
                                                        J.isCompleted,
                                                      "bg-white":
                                                        t > J.currentStep,
                                                    },
                                                  ]),
                                                  onClick: (0, a.iM)(
                                                    (t) =>
                                                      J.isCompleted
                                                        ? ""
                                                        : [
                                                            G.saveStep(),
                                                            G.goToStep(e, !0),
                                                          ],
                                                    ["prevent"]
                                                  ),
                                                },
                                                null,
                                                10,
                                                K
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                    ]))
                                  : ((0, l.wg)(), (0, l.iD)("div", Q)),
                              ],
                              2
                            ),
                          ],
                          6
                        ),
                        [[a.F8, J.isFormVisible]]
                      ),
                    ],
                    64
                  )
                );
              },
            ],
          ]),
          Qa = i(4506),
          Ja = (0, Qa.Fw)(
            class extends HTMLElement {
              static [Qa.fA.static] = ["defaultButton", "loadingButton"];
              connectedCallback() {
                this.addEventListener("click", () => this.downloadFiles());
              }
              toggleState() {
                this.defaultButton?.classList?.toggle("hidden"),
                  this.loadingButton?.classList?.toggle("hidden");
              }
              downloadFiles() {
                this.dataset.src &&
                  (this.toggleState(),
                  fetch(this.dataset.src).then(async (e) => {
                    if (e.ok) {
                      const t = await e.json();
                      /iPhone|iPad|iPod/i.test(navigator.userAgent) &&
                      t.length > 1
                        ? this.downloadSafariIos(t)
                        : this.downloadUrls(t);
                    } else alert("Failed to download files");
                  }));
              }
              downloadUrls(e) {
                e.map(
                  (e) => () =>
                    fetch(e).then(async (t) => {
                      const i = URL.createObjectURL(await t.blob()),
                        a = document.createElement("a");
                      (a.href = i),
                        a.setAttribute(
                          "download",
                          decodeURI(e.split("/").pop())
                        ),
                        a.click(),
                        URL.revokeObjectURL(i);
                    })
                )
                  .reduce((e, t) => e.then(() => t()), Promise.resolve())
                  .finally(() => {
                    this.toggleState();
                  });
              }
              downloadSafariIos(e) {
                const t = e.map((e) =>
                  fetch(e).then(async (t) => {
                    const i = await t.blob(),
                      a = URL.createObjectURL(
                        i.slice(0, i.size, "application/octet-stream")
                      ),
                      n = document.createElement("a");
                    return (
                      (n.href = a),
                      n.setAttribute("download", decodeURI(e.split("/").pop())),
                      n
                    );
                  })
                );
                Promise.all(t)
                  .then((e) => {
                    e.forEach((e, t) => {
                      setTimeout(() => {
                        e.click(), URL.revokeObjectURL(e.href);
                      }, 50 * t);
                    });
                  })
                  .finally(() => {
                    this.toggleState();
                  });
              }
            }
          ),
          Ga = class extends HTMLElement {
            connectedCallback() {
              (this.button.disabled = !1),
                this.form.addEventListener("submit", () => {
                  this.button.disabled = !0;
                });
            }
            disconnectedCallback() {
              this.button.disabled = !1;
            }
            get button() {
              return this.querySelector('[type="submit"]');
            }
            get form() {
              return this.querySelector("form") || this.closest("form");
            }
          };
        const Xa = (e, t, i = {}) =>
          !window.customElements.get(e) &&
          window.customElements.define(e, t, i);
        Xa("download-button", Ja),
          Xa("toggle-submit", Ga),
          Xa(
            "submission-form",
            class extends HTMLElement {
              connectedCallback() {
                (this.appElem = document.createElement("div")),
                  (this.app = (0, a.ri)(Ka, {
                    submitter: JSON.parse(this.dataset.submitter),
                    canSendEmail: "true" === this.dataset.canSendEmail,
                    goToLast: "true" === this.dataset.goToLast,
                    isDemo: "true" === this.dataset.isDemo,
                    attribution: "false" !== this.dataset.attribution,
                    withConfetti: "false" !== this.dataset.withConfetti,
                    withDisclosure: "true" === this.dataset.withDisclosure,
                    withTypedSignature:
                      "false" !== this.dataset.withTypedSignature,
                    authenticityToken: document.querySelector(
                      'meta[name="csrf-token"]'
                    )?.content,
                    values: (0, n.qj)(JSON.parse(this.dataset.values)),
                    completedButton: JSON.parse(
                      this.dataset.completedButton || "{}"
                    ),
                    withQrButton: !0,
                    completedMessage: JSON.parse(
                      this.dataset.completedMessage || "{}"
                    ),
                    completedRedirectUrl: this.dataset.completedRedirectUrl,
                    attachments: (0, n.qj)(
                      JSON.parse(this.dataset.attachments)
                    ),
                    fields: JSON.parse(this.dataset.fields),
                  })),
                  this.app.mount(this.appElem),
                  this.appendChild(this.appElem);
              }
              disconnectedCallback() {
                this.app?.unmount(), this.appElem?.remove();
              }
            }
          );
      },
      9688: () => {},
    },
    n = {};
  function l(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var i = (n[e] = { exports: {} });
    return a[e].call(i.exports, i, i.exports, l), i.exports;
  }
  (l.m = a),
    (e = []),
    (l.O = (t, i, a, n) => {
      if (!i) {
        var r = 1 / 0;
        for (d = 0; d < e.length; d++) {
          (i = e[d][0]), (a = e[d][1]), (n = e[d][2]);
          for (var s = !0, o = 0; o < i.length; o++)
            (!1 & n || r >= n) && Object.keys(l.O).every((e) => l.O[e](i[o]))
              ? i.splice(o--, 1)
              : ((s = !1), n < r && (r = n));
          if (s) {
            e.splice(d--, 1);
            var u = a();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      n = n || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
      e[d] = [i, a, n];
    }),
    (l.d = (e, t) => {
      for (var i in t)
        l.o(t, i) &&
          !l.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (l.f = {}),
    (l.e = (e) =>
      Promise.all(Object.keys(l.f).reduce((t, i) => (l.f[i](e, t), t), []))),
    (l.u = (e) =>
      "js/" +
      e +
      "-" +
      {
        1: "7d2725cf66f305280f4f",
        883: "59dab9d55dcdcb3f57f0",
        914: "5ddc999b40d964ccccc7",
      }[e] +
      ".chunk.js"),
    (l.miniCssF = (e) => {}),
    (l.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (t = {}),
    (i = "uvtsign:"),
    (l.l = (e, a, n, r) => {
      if (t[e]) t[e].push(a);
      else {
        var s, o;
        if (void 0 !== n)
          for (
            var u = document.getElementsByTagName("script"), d = 0;
            d < u.length;
            d++
          ) {
            var c = u[d];
            if (
              c.getAttribute("src") == e ||
              c.getAttribute("data-webpack") == i + n
            ) {
              s = c;
              break;
            }
          }
        s ||
          ((o = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          l.nc && s.setAttribute("nonce", l.nc),
          s.setAttribute("data-webpack", i + n),
          (s.src = e)),
          (t[e] = [a]);
        var p = (i, a) => {
            (s.onerror = s.onload = null), clearTimeout(m);
            var n = t[e];
            if (
              (delete t[e],
              s.parentNode && s.parentNode.removeChild(s),
              n && n.forEach((e) => e(a)),
              i)
            )
              return i(a);
          },
          m = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          );
        (s.onerror = p.bind(null, s.onerror)),
          (s.onload = p.bind(null, s.onload)),
          o && document.head.appendChild(s);
      }
    }),
    (l.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.p = "/packs/"),
    (() => {
      var e = { 680: 0 };
      (l.f.j = (t, i) => {
        var a = l.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) i.push(a[2]);
          else {
            var n = new Promise((i, n) => (a = e[t] = [i, n]));
            i.push((a[2] = n));
            var r = l.p + l.u(t),
              s = new Error();
            l.l(
              r,
              (i) => {
                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = i && ("load" === i.type ? "missing" : i.type),
                    r = i && i.target && i.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + n + ": " + r + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = n),
                    (s.request = r),
                    a[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      }),
        (l.O.j = (t) => 0 === e[t]);
      var t = (t, i) => {
          var a,
            n,
            r = i[0],
            s = i[1],
            o = i[2],
            u = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (a in s) l.o(s, a) && (l.m[a] = s[a]);
            if (o) var d = o(l);
          }
          for (t && t(i); u < r.length; u++)
            (n = r[u]), l.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return l.O(d);
        },
        i = (self.webpackChunkuvtsign = self.webpackChunkuvtsign || []);
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
    })(),
    l.O(void 0, [630], () => l(8821));
  var r = l.O(void 0, [630], () => l(9688));
  r = l.O(r);
})();
//# sourceMappingURL=form-595f3ee2dbaef61197c8.js.map
