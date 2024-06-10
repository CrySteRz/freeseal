(() => {
  "use strict";
  var e,
    t,
    i,
    s = {
      3188: (e, t, i) => {
        i(6184);
        var s = i(9758),
          l = i(9963),
          a = i(2262),
          n = i(6252),
          o = i(3577);
        const r = {
            style: { "max-width": "1600px" },
            class: "mx-auto pl-3 md:pl-4 h-full",
          },
          d = { class: "flex items-center space-x-3" },
          u = { key: 0, href: "/" },
          c = { class: "space-x-3 flex items-center flex-shrink-0" },
          p = ["href", "target", "data-turbo-frame"],
          m = { class: "hidden md:inline" },
          h = ["href"],
          f = { class: "hidden md:inline" },
          b = { class: "hidden md:inline" },
          w = ["href"],
          g = { class: "hidden md:inline" },
          y = {
            id: "pages_container",
            class:
              "w-full overflow-y-hidden md:overflow-y-auto overflow-x-hidden mt-0.5 pt-0.5",
          },
          v = { ref: "documents", class: "pr-3.5 pl-0.5" },
          k = { key: 0, class: "pb-4" },
          x = { class: "bg-base-200 rounded-lg p-5 text-center space-y-4" },
          _ = { class: "sticky bottom-0" },
          D = (0, n._)("div", { id: "uvtsign_modal_container" }, null, -1);
        const C = ["for"],
          F = { key: 2 },
          S = { key: 3 },
          q = { key: 4 },
          T = { ref: "form", class: "hidden" },
          M = ["id", "accept"];
        var I = i(9081),
          R = i(7153),
          $ = {
            name: "DocumentsUpload",
            components: { IconUpload: I.Z, IconInnerShadowTop: R.Z },
            inject: ["baseFetch", "t"],
            props: {
              templateId: { type: [Number, String], required: !0 },
              acceptFileTypes: {
                type: String,
                required: !1,
                default: "image/*, application/pdf",
              },
            },
            emits: ["success"],
            data: () => ({ isLoading: !1, isProcessing: !1 }),
            computed: {
              inputId: () => "el" + Math.random().toString(32).split(".")[1],
            },
            methods: {
              async upload() {
                (this.isLoading = !0),
                  this.baseFetch(`/templates/${this.templateId}/documents`, {
                    method: "POST",
                    body: new FormData(this.$refs.form),
                  })
                    .then((e) => {
                      e.ok
                        ? e.json().then((e) => {
                            this.$emit("success", e),
                              (this.$refs.input.value = "");
                          })
                        : 422 === e.status &&
                          e.json().then((e) => {
                            if ("PDF encrypted" === e.error) {
                              const e = new FormData(this.$refs.form);
                              e.append(
                                "password",
                                prompt("Enter PDF password")
                              ),
                                this.baseFetch(
                                  `/templates/${this.templateId}/documents`,
                                  { method: "POST", body: e }
                                ).then(async (e) => {
                                  e.ok
                                    ? (this.$emit("success", await e.json()),
                                      (this.$refs.input.value = ""))
                                    : alert("Wrong password");
                                });
                            }
                          });
                    })
                    .finally(() => {
                      this.isLoading = !1;
                    });
              },
            },
          },
          A = i(3744);
        var z = (0, A.Z)($, [
          [
            "render",
            function (e, t, i, s, l, a) {
              const r = (0, n.up)("IconInnerShadowTop"),
                d = (0, n.up)("IconUpload");
              return (
                (0, n.wg)(),
                (0, n.iD)("div", null, [
                  (0, n._)(
                    "label",
                    {
                      for: a.inputId,
                      class: (0, o.C_)([
                        "btn btn-outline w-full",
                        { "btn-disabled": l.isLoading || l.isProcessing },
                      ]),
                    },
                    [
                      l.isLoading || l.isProcessing
                        ? ((0, n.wg)(),
                          (0, n.j4)(r, {
                            key: 0,
                            width: "20",
                            class: "animate-spin",
                          }))
                        : ((0, n.wg)(), (0, n.j4)(d, { key: 1, width: "20" })),
                      l.isLoading
                        ? ((0, n.wg)(),
                          (0, n.iD)("span", F, (0, o.zw)(a.t("uploading_")), 1))
                        : l.isProcessing
                        ? ((0, n.wg)(),
                          (0, n.iD)(
                            "span",
                            S,
                            (0, o.zw)(a.t("processing_")),
                            1
                          ))
                        : ((0, n.wg)(),
                          (0, n.iD)(
                            "span",
                            q,
                            (0, o.zw)(a.t("add_document")),
                            1
                          )),
                    ],
                    10,
                    C
                  ),
                  (0, n._)(
                    "form",
                    T,
                    [
                      (0, n._)(
                        "input",
                        {
                          id: a.inputId,
                          ref: "input",
                          name: "files[]",
                          type: "file",
                          accept: i.acceptFileTypes,
                          multiple: "",
                          onChange:
                            t[0] ||
                            (t[0] = (...e) => a.upload && a.upload(...e)),
                        },
                        null,
                        40,
                        M
                      ),
                    ],
                    512
                  ),
                ])
              );
            },
          ],
        ]);
        const E = ["for"],
          L = {
            class:
              "absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center",
          },
          j = { class: "flex flex-col items-center" },
          N = { key: 2, class: "font-medium text-lg mb-1" },
          U = { class: "text-sm" },
          O = { class: "font-medium" },
          P = { ref: "form", class: "hidden" },
          W = ["id", "accept"];
        var Y = i(5798),
          B = {
            name: "FileDropzone",
            components: { IconCloudUpload: Y.Z, IconInnerShadowTop: R.Z },
            inject: ["baseFetch", "t"],
            props: {
              templateId: { type: [Number, String], required: !0 },
              acceptFileTypes: {
                type: String,
                required: !1,
                default: "image/*, application/pdf",
              },
            },
            emits: ["success"],
            data: () => ({ isLoading: !1, isProcessing: !1 }),
            computed: {
              inputId: () => "el" + Math.random().toString(32).split(".")[1],
              message() {
                return this.isLoading
                  ? this.t("uploading")
                  : this.isProcessing
                  ? this.t("processing_")
                  : "image/*, application/pdf" === this.acceptFileTypes
                  ? this.t("add_pdf_documents_or_images")
                  : this.t("add_documents_or_images");
              },
            },
            methods: {
              upload: z.methods.upload,
              onDropFiles(e) {
                "image/*, application/pdf" !== this.acceptFileTypes ||
                [...e.dataTransfer.files].every((e) =>
                  e.type.match(/(?:image\/)|(?:application\/pdf)/)
                )
                  ? ((this.$refs.input.files = e.dataTransfer.files),
                    this.upload())
                  : alert("Only PDF and images are supported.");
              },
            },
          };
        var Z = (0, A.Z)(B, [
          [
            "render",
            function (e, t, i, s, a, r) {
              const d = (0, n.up)("IconInnerShadowTop"),
                u = (0, n.up)("IconCloudUpload");
              return (
                (0, n.wg)(),
                (0, n.iD)(
                  "div",
                  {
                    class: "flex h-60 w-full",
                    onDragover:
                      t[1] || (t[1] = (0, l.iM)(() => {}, ["prevent"])),
                    onDrop:
                      t[2] ||
                      (t[2] = (0, l.iM)(
                        (...e) => r.onDropFiles && r.onDropFiles(...e),
                        ["prevent"]
                      )),
                  },
                  [
                    (0, n._)(
                      "label",
                      {
                        class: (0, o.C_)([
                          "w-full relative hover:bg-base-200/30 rounded-md border border-2 border-base-content/10 border-dashed",
                          { "opacity-50": a.isLoading || a.isProcessing },
                        ]),
                        for: r.inputId,
                      },
                      [
                        (0, n._)("div", L, [
                          (0, n._)("div", j, [
                            a.isLoading || a.isProcessing
                              ? ((0, n.wg)(),
                                (0, n.j4)(d, {
                                  key: 0,
                                  class: "animate-spin",
                                  width: 40,
                                  height: 40,
                                }))
                              : ((0, n.wg)(),
                                (0, n.j4)(u, {
                                  key: 1,
                                  width: 40,
                                  height: 40,
                                })),
                            r.message
                              ? ((0, n.wg)(),
                                (0, n.iD)("div", N, (0, o.zw)(r.message), 1))
                              : (0, n.kq)("", !0),
                            (0, n._)("div", U, [
                              (0, n._)(
                                "span",
                                O,
                                (0, o.zw)(r.t("click_to_upload")),
                                1
                              ),
                              (0, n.Uk)(
                                " " + (0, o.zw)(r.t("or_drag_and_drop_files")),
                                1
                              ),
                            ]),
                          ]),
                        ]),
                        (0, n._)(
                          "form",
                          P,
                          [
                            (0, n._)(
                              "input",
                              {
                                id: r.inputId,
                                ref: "input",
                                type: "file",
                                name: "files[]",
                                accept: i.acceptFileTypes,
                                multiple: "",
                                onChange:
                                  t[0] ||
                                  (t[0] = (...e) => r.upload && r.upload(...e)),
                              },
                              null,
                              40,
                              W
                            ),
                          ],
                          512
                        ),
                      ],
                      10,
                      E
                    ),
                  ],
                  32
                )
              );
            },
          ],
        ]);
        const H = { key: 0 },
          V = (0, n._)("hr", { class: "mb-2" }, null, -1),
          K = ["placeholder"],
          X = (0, n._)("hr", { class: "mb-2" }, null, -1),
          J = {
            key: 0,
            class:
              "top-0 bottom-0 text-center absolute flex items-center justify-center w-full flex-col",
          },
          G = ["onDragstart"],
          Q = {
            class: "flex items-center justify-between relative cursor-grab",
          },
          ee = { class: "flex items-center p-1 space-x-1" },
          te = { class: "block pl-0.5" },
          ie = ["data-tip"],
          se = { key: 1, class: "grid grid-cols-3 gap-1 pb-2" },
          le = ["onDragstart", "onClick"],
          ae = { class: "flex items-center flex-col px-2 py-2" },
          ne = { class: "text-xs mt-1" },
          oe = { class: "w-0 absolute left-0" },
          re = { class: "flex items-center flex-col px-2 py-2" },
          de = { class: "text-xs mt-1" },
          ue = { key: 2, class: "text-xs p-2 border border-base-200 rounded" },
          ce = [
            (0, n._)(
              "ul",
              { class: "list-disc list-outside ml-3" },
              [
                (0, n._)(
                  "li",
                  null,
                  " Draw a text field on the page with a mouse "
                ),
                (0, n._)(
                  "li",
                  null,
                  " Drag & drop any other field type on the page "
                ),
                (0, n._)(
                  "li",
                  null,
                  " Click on the field type above to start drawing it "
                ),
              ],
              -1
            ),
          ];
        const pe = { class: "list-field group mb-2" },
          me = {
            class:
              "flex items-center justify-between relative group/contenteditable-container",
          },
          he = { class: "flex items-center p-1 space-x-1" },
          fe = { key: 0, class: "flex items-center relative" },
          be = ["id"],
          we = ["for"],
          ge = { key: 1, class: "flex items-center space-x-1" },
          ye = ["title"],
          ve = ["title"],
          ke = ["title"],
          xe = ["title"],
          _e = ["title"],
          De = { class: "text-sm w-3.5" },
          Ce = { key: 0, class: "items-center flex w-full" },
          Fe = ["onUpdate:modelValue", "placeholder"],
          Se = ["title", "onClick"],
          qe = ["onUpdate:modelValue", "placeholder", "readonly", "onFocus"],
          Te = ["onClick"],
          Me = { key: 0, class: "pb-1" };
        const Ie = ["contenteditable"];
        var Re = {
          name: "ContenteditableField",
          components: { IconPencil: i(2793).Z },
          inject: ["t"],
          props: {
            modelValue: { type: String, required: !1, default: "" },
            iconInline: { type: Boolean, required: !1, default: !1 },
            iconWidth: { type: Number, required: !1, default: 30 },
            withRequired: { type: Boolean, required: !1, default: !1 },
            selectOnEditClick: { type: Boolean, required: !1, default: !1 },
            editable: { type: Boolean, required: !1, default: !0 },
            iconStrokeWidth: { type: Number, required: !1, default: 2 },
          },
          emits: ["update:model-value", "focus", "blur"],
          data: () => ({ value: "" }),
          watch: {
            modelValue: {
              handler(e) {
                this.value = e;
              },
              immediate: !0,
            },
          },
          methods: {
            selectContent() {
              const e = this.$refs.contenteditable,
                t = document.createRange();
              t.selectNodeContents(e);
              const i = window.getSelection();
              i.removeAllRanges(), i.addRange(t);
            },
            onBlur(e) {
              setTimeout(() => {
                (this.value =
                  this.$refs.contenteditable.innerText.trim() ||
                  this.modelValue),
                  this.$emit("update:model-value", this.value),
                  this.$emit("blur", e);
              }, 1);
            },
            focusContenteditable() {
              this.$refs.contenteditable.focus();
            },
            blurContenteditable() {
              this.$refs.contenteditable.blur();
            },
          },
        };
        var $e = (0, A.Z)(Re, [
          [
            "render",
            function (e, t, i, s, a, r) {
              const d = (0, n.up)("IconPencil");
              return (
                (0, n.wg)(),
                (0, n.iD)(
                  "div",
                  {
                    class: (0, o.C_)([
                      "group/contenteditable relative overflow-visible",
                      { "flex items-center": !i.iconInline },
                    ]),
                  },
                  [
                    (0, n._)(
                      "span",
                      {
                        ref: "contenteditable",
                        dir: "auto",
                        contenteditable: i.editable,
                        style: { "min-width": "2px" },
                        class: (0, o.C_)([
                          i.iconInline ? "inline" : "block",
                          "peer outline-none focus:block",
                        ]),
                        onKeydown:
                          t[0] ||
                          (t[0] = (0, l.D2)(
                            (0, l.iM)(
                              (...e) =>
                                r.blurContenteditable &&
                                r.blurContenteditable(...e),
                              ["prevent"]
                            ),
                            ["enter"]
                          )),
                        onFocus: t[1] || (t[1] = (t) => e.$emit("focus", t)),
                        onBlur:
                          t[2] || (t[2] = (...e) => r.onBlur && r.onBlur(...e)),
                      },
                      (0, o.zw)(a.value),
                      43,
                      Ie
                    ),
                    i.withRequired
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          "span",
                          {
                            key: 0,
                            title: "Required",
                            class: "text-red-500 peer-focus:hidden",
                            onClick:
                              t[3] ||
                              (t[3] = (...e) =>
                                r.focusContenteditable &&
                                r.focusContenteditable(...e)),
                          },
                          " * "
                        ))
                      : (0, n.kq)("", !0),
                    (0, n.Wm)(
                      d,
                      {
                        class: (0, o.C_)([
                          "cursor-pointer flex-none opacity-0 group-hover/contenteditable-container:opacity-100 group-hover/contenteditable:opacity-100 align-middle peer-focus:hidden",
                          {
                            invisible: !i.editable,
                            "ml-1": !i.withRequired,
                            absolute: !i.iconInline,
                            "inline align-bottom": i.iconInline,
                          },
                        ]),
                        style: (0, o.j5)(
                          i.iconInline
                            ? {}
                            : { right: -1.1 * i.iconWidth + "px" }
                        ),
                        title: r.t("edit"),
                        width: i.iconWidth,
                        "stroke-width": i.iconStrokeWidth,
                        onClick:
                          t[4] ||
                          (t[4] = (e) => [
                            r.focusContenteditable(),
                            i.selectOnEditClick && r.selectContent(),
                          ]),
                      },
                      null,
                      8,
                      ["style", "title", "class", "width", "stroke-width"]
                    ),
                  ],
                  2
                )
              );
            },
          ],
        ]);
        const Ae = ["title"],
          ze = { key: 0 },
          Ee = ["onClick"];
        var Le = i(6346),
          je = i(7436),
          Ne = i(8500),
          Ue = i(2430),
          Oe = i(8031),
          Pe = i(3342),
          We = i(6936),
          Ye = i(6039),
          Be = i(2651),
          Ze = i(1414),
          He = i(3247),
          Ve = i(2013),
          Ke = i(5782),
          Xe = i(4513),
          Je = i(627),
          Ge = {
            name: "FiledTypeDropdown",
            inject: ["withPhone", "withPayment", "t", "fieldTypes"],
            props: {
              modelValue: { type: String, required: !0 },
              menuClasses: {
                type: String,
                required: !1,
                default: "mt-1.5 bg-base-100",
              },
              menuStyle: { type: Object, required: !1, default: () => ({}) },
              buttonClasses: { type: String, required: !1, default: "" },
              editable: { type: Boolean, required: !1, default: !0 },
              buttonWidth: { type: Number, required: !1, default: 18 },
            },
            emits: ["update:model-value"],
            data: () => ({ renderDropdown: !1 }),
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
              fieldIcons: () => ({
                text: Le.Z,
                signature: je.Z,
                initials: Ne.Z,
                date: Ue.Z,
                number: Oe.Z,
                image: Pe.Z,
                checkbox: We.Z,
                multiple: Ye.Z,
                file: Be.Z,
                radio: Ze.Z,
                select: He.Z,
                cells: Ve.Z,
                stamp: Ke.Z,
                payment: Xe.Z,
                phone: Je.Z,
              }),
              fieldIconsSorted() {
                return this.fieldTypes.length
                  ? this.fieldTypes.reduce(
                      (e, t) => ((e[t] = this.fieldIcons[t]), e),
                      {}
                    )
                  : this.fieldIcons;
              },
            },
            methods: {
              closeDropdown() {
                document.activeElement.blur();
              },
            },
          };
        var Qe = (0, A.Z)(Ge, [
          [
            "render",
            function (e, t, i, s, a, r) {
              return (
                (0, n.wg)(),
                (0, n.iD)(
                  "span",
                  {
                    class: "dropdown",
                    onMouseenter:
                      t[1] || (t[1] = (e) => (a.renderDropdown = !0)),
                    onTouchstart:
                      t[2] || (t[2] = (e) => (a.renderDropdown = !0)),
                  },
                  [
                    (0, n.WI)(e.$slots, "default", {}, () => [
                      (0, n._)(
                        "label",
                        {
                          tabindex: "0",
                          title: r.fieldNames[i.modelValue],
                          class: "cursor-pointer",
                        },
                        [
                          ((0, n.wg)(),
                          (0, n.j4)(
                            (0, n.LL)(r.fieldIcons[i.modelValue]),
                            {
                              width: i.buttonWidth,
                              class: (0, o.C_)(i.buttonClasses),
                              "stroke-width": 1.6,
                            },
                            null,
                            8,
                            ["width", "class"]
                          )),
                        ],
                        8,
                        Ae
                      ),
                    ]),
                    i.editable && a.renderDropdown
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          "ul",
                          {
                            key: 0,
                            tabindex: "0",
                            class: (0, o.C_)([
                              "dropdown-content menu menu-xs p-2 shadow rounded-box w-52 z-10 mb-3",
                              i.menuClasses,
                            ]),
                            style: (0, o.j5)(i.menuStyle),
                            onClick:
                              t[0] ||
                              (t[0] = (...e) =>
                                r.closeDropdown && r.closeDropdown(...e)),
                          },
                          [
                            ((0, n.wg)(!0),
                            (0, n.iD)(
                              n.HY,
                              null,
                              (0, n.Ko)(
                                r.fieldIconsSorted,
                                (t, s) => (
                                  (0, n.wg)(),
                                  (0, n.iD)(
                                    n.HY,
                                    { key: s },
                                    [
                                      (0 !== r.fieldTypes.length &&
                                        !r.fieldTypes.includes(s)) ||
                                      (!r.withPhone && "phone" == s) ||
                                      (!r.withPayment && "payment" == s)
                                        ? (0, n.kq)("", !0)
                                        : ((0, n.wg)(),
                                          (0, n.iD)("li", ze, [
                                            (0, n._)(
                                              "a",
                                              {
                                                href: "#",
                                                class: (0, o.C_)([
                                                  "text-sm py-1 px-2",
                                                  {
                                                    active: s === i.modelValue,
                                                  },
                                                ]),
                                                onClick: (0, l.iM)(
                                                  (t) =>
                                                    e.$emit(
                                                      "update:model-value",
                                                      s
                                                    ),
                                                  ["prevent"]
                                                ),
                                              },
                                              [
                                                ((0, n.wg)(),
                                                (0, n.j4)((0, n.LL)(t), {
                                                  "stroke-width": 1.6,
                                                  width: 20,
                                                })),
                                                (0, n.Uk)(
                                                  " " +
                                                    (0, o.zw)(r.fieldNames[s]),
                                                  1
                                                ),
                                              ],
                                              10,
                                              Ee
                                            ),
                                          ])),
                                    ],
                                    64
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          6
                        ))
                      : (0, n.kq)("", !0),
                  ],
                  32
                )
              );
            },
          ],
        ]);
        const et = ["title"],
          tt = ["value"],
          it = { key: 0, class: "text-sm text-center" },
          st = {
            key: 1,
            "data-turbo": "false",
            action: "/auth/stripe_connect",
            "accept-charset": "UTF-8",
            target: "_blank",
            method: "post",
          },
          lt = ["value"],
          at = ["value"],
          nt = (0, n._)(
            "input",
            {
              type: "hidden",
              name: "scope",
              value: "read_write",
              autocomplete: "off",
            },
            null,
            -1
          ),
          ot = ["value"],
          rt = ["disabled"],
          dt = { key: 0, class: "flex items-center space-x-1" },
          ut = (0, n._)("span", null, " Connect Stripe ", -1),
          ct = { key: 1, class: "flex items-center space-x-1" },
          pt = (0, n._)("span", null, " Connect Stripe ", -1),
          mt = {
            key: 2,
            class: "block link text-center mt-1",
            href: "https://www.uvtsign.co/blog/accept-payments-and-request-signatures-with-ease",
            target: "_blank",
            "data-turbo": "false",
          };
        var ht = i(2154),
          ft = i(1432),
          bt = i(2532);
        const wt = (0, a.iH)(!1);
        var gt = {
          name: "PaymentSettings",
          components: {
            IconSettings: ht.Z,
            IconCircleCheck: ft.Z,
            IconInnerShadowTop: R.Z,
            IconBrandStripe: bt.Z,
          },
          inject: [
            "backgroundColor",
            "save",
            "currencies",
            "t",
            "isPaymentConnected",
          ],
          props: { field: { type: Object, required: !0 } },
          data: () => ({ isLoading: !1 }),
          computed: {
            isConnected: () => wt.value,
            isOauthSuccess: () =>
              document.location.search?.includes("stripe_connect_success"),
            redirectUri: () =>
              document.location.origin + "/auth/stripe_connect/callback",
            defaultCurrencies: () => ["USD", "EUR", "GBP"],
            currenciesList() {
              return this.currencies.length
                ? this.currencies
                : this.defaultCurrencies;
            },
            authenticityToken: () =>
              document.querySelector('meta[name="csrf-token"]')?.content,
            oauthState() {
              const e = new URLSearchParams("");
              return e.set("redir", document.location.href), e.toString();
            },
            defaultCurrency() {
              const e = Intl.DateTimeFormat().resolvedOptions().timeZone;
              return e.startsWith("Europe")
                ? "EUR"
                : e.includes("London") || e.includes("Belfast")
                ? "GBP"
                : "USD";
            },
          },
          created() {
            this.field.preferences ||= {};
          },
          mounted() {
            (this.field.preferences.currency ||= this.defaultCurrency),
              (wt.value ||= this.isPaymentConnected),
              this.isConnected || this.checkStatus();
          },
          methods: {
            checkStatus() {
              (this.isLoading = !0),
                fetch("/api/stripe_connect")
                  .then(async (e) => {
                    const { status: t } = await e.json();
                    "connected" === t && (wt.value = !0);
                  })
                  .finally(() => {
                    this.isLoading = !1;
                  });
            },
            closeDropdown() {
              document.activeElement.blur();
            },
          },
        };
        var yt = (0, A.Z)(gt, [
          [
            "render",
            function (e, t, i, s, a, r) {
              const d = (0, n.up)("IconSettings"),
                u = (0, n.up)("IconCircleCheck"),
                c = (0, n.up)("IconInnerShadowTop"),
                p = (0, n.up)("IconBrandStripe");
              return (
                (0, n.wg)(),
                (0, n.iD)(
                  "span",
                  {
                    class: (0, o.C_)([
                      "dropdown dropdown-end",
                      {
                        "dropdown-open":
                          (!i.field.preferences?.price || !r.isConnected) &&
                          !a.isLoading,
                      },
                    ]),
                  },
                  [
                    (0, n._)(
                      "label",
                      {
                        tabindex: "0",
                        title: r.t("settings"),
                        class:
                          "cursor-pointer text-transparent group-hover:text-base-content",
                      },
                      [(0, n.Wm)(d, { width: 18, "stroke-width": 1.6 })],
                      8,
                      et
                    ),
                    (0, n._)(
                      "ul",
                      {
                        tabindex: "0",
                        class:
                          "mt-1.5 dropdown-content menu menu-xs p-2 shadow bg-base-100 rounded-box w-52 z-10",
                        draggable: "true",
                        onDragstart:
                          t[7] ||
                          (t[7] = (0, l.iM)(() => {}, ["prevent", "stop"])),
                        onClick:
                          t[8] ||
                          (t[8] = (...e) =>
                            r.closeDropdown && r.closeDropdown(...e)),
                      },
                      [
                        (0, n._)(
                          "div",
                          {
                            class: "py-1.5 px-1 relative",
                            onClick:
                              t[2] || (t[2] = (0, l.iM)(() => {}, ["stop"])),
                          },
                          [
                            (0, n.wy)(
                              (0, n._)(
                                "select",
                                {
                                  "onUpdate:modelValue":
                                    t[0] ||
                                    (t[0] = (e) =>
                                      (i.field.preferences.currency = e)),
                                  placeholder: "Price",
                                  class:
                                    "select select-bordered select-xs font-normal w-full max-w-xs !h-7 !outline-0",
                                  onChange:
                                    t[1] ||
                                    (t[1] = (...e) => r.save && r.save(...e)),
                                },
                                [
                                  ((0, n.wg)(!0),
                                  (0, n.iD)(
                                    n.HY,
                                    null,
                                    (0, n.Ko)(
                                      r.currenciesList,
                                      (e) => (
                                        (0, n.wg)(),
                                        (0, n.iD)(
                                          "option",
                                          { key: e, value: e },
                                          (0, o.zw)(e),
                                          9,
                                          tt
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                544
                              ),
                              [[l.bM, i.field.preferences.currency]]
                            ),
                            (0, n._)(
                              "label",
                              {
                                style: (0, o.j5)([
                                  { backgroundColor: r.backgroundColor },
                                  { "font-size": "8px" },
                                ]),
                                class: "absolute -top-1 left-2.5 px-1 h-4",
                              },
                              " Currency ",
                              4
                            ),
                          ]
                        ),
                        (0, n._)(
                          "div",
                          {
                            class: "py-1.5 px-1 relative",
                            onClick:
                              t[5] || (t[5] = (0, l.iM)(() => {}, ["stop"])),
                          },
                          [
                            (0, n.wy)(
                              (0, n._)(
                                "input",
                                {
                                  "onUpdate:modelValue":
                                    t[3] ||
                                    (t[3] = (e) =>
                                      (i.field.preferences.price = e)),
                                  type: "number",
                                  placeholder: "Price",
                                  class:
                                    "input input-bordered input-xs w-full max-w-xs h-7 !outline-0",
                                  onBlur:
                                    t[4] ||
                                    (t[4] = (...e) => r.save && r.save(...e)),
                                },
                                null,
                                544
                              ),
                              [[l.nr, i.field.preferences.price]]
                            ),
                            i.field.preferences.price
                              ? ((0, n.wg)(),
                                (0, n.iD)(
                                  "label",
                                  {
                                    key: 0,
                                    style: (0, o.j5)([
                                      { backgroundColor: r.backgroundColor },
                                      { "font-size": "8px" },
                                    ]),
                                    class: "absolute -top-1 left-2.5 px-1 h-4",
                                  },
                                  " Price ",
                                  4
                                ))
                              : (0, n.kq)("", !0),
                          ]
                        ),
                        !r.isConnected || r.isOauthSuccess
                          ? ((0, n.wg)(),
                            (0, n.iD)(
                              "div",
                              {
                                key: 0,
                                class: "py-1.5 px-1 relative",
                                onClick:
                                  t[6] ||
                                  (t[6] = (0, l.iM)(() => {}, ["stop"])),
                              },
                              [
                                r.isConnected && r.isOauthSuccess
                                  ? ((0, n.wg)(),
                                    (0, n.iD)("div", it, [
                                      (0, n.Wm)(u, {
                                        class: "inline text-green-600 w-4 h-4",
                                      }),
                                      (0, n.Uk)(" Stripe Connected "),
                                    ]))
                                  : (0, n.kq)("", !0),
                                r.isConnected
                                  ? (0, n.kq)("", !0)
                                  : ((0, n.wg)(),
                                    (0, n.iD)("form", st, [
                                      (0, n._)(
                                        "input",
                                        {
                                          type: "hidden",
                                          name: "state",
                                          value: r.oauthState,
                                          autocomplete: "off",
                                        },
                                        null,
                                        8,
                                        lt
                                      ),
                                      (0, n._)(
                                        "input",
                                        {
                                          type: "hidden",
                                          name: "redirect_uri",
                                          value: r.redirectUri,
                                          autocomplete: "off",
                                        },
                                        null,
                                        8,
                                        at
                                      ),
                                      nt,
                                      (0, n._)(
                                        "input",
                                        {
                                          type: "hidden",
                                          name: "authenticity_token",
                                          value: r.authenticityToken,
                                          autocomplete: "off",
                                        },
                                        null,
                                        8,
                                        ot
                                      ),
                                      (0, n._)(
                                        "button",
                                        {
                                          type: "submit",
                                          disabled: a.isLoading,
                                          class:
                                            "btn bg-[#7B73FF] hover:bg-[#0A2540] btn-sm text-white w-full",
                                        },
                                        [
                                          a.isLoading
                                            ? ((0, n.wg)(),
                                              (0, n.iD)("span", dt, [
                                                (0, n.Wm)(c, {
                                                  class:
                                                    "w-4 h-4 animate-spin inline",
                                                }),
                                                ut,
                                              ]))
                                            : ((0, n.wg)(),
                                              (0, n.iD)("span", ct, [
                                                (0, n.Wm)(p, {
                                                  class: "w-4 h-4 inline",
                                                }),
                                                pt,
                                              ])),
                                        ],
                                        8,
                                        rt
                                      ),
                                    ])),
                                r.isConnected
                                  ? (0, n.kq)("", !0)
                                  : ((0, n.wg)(),
                                    (0, n.iD)("a", mt, "Learn more")),
                              ]
                            ))
                          : (0, n.kq)("", !0),
                      ],
                      32
                    ),
                  ],
                  2
                )
              );
            },
          ],
        ]);
        const vt = ["placeholder"],
          kt = ["value", "selected"],
          xt = ["selected", "value"],
          _t = ["placeholder", "type"],
          Dt = ["placeholder"],
          Ct = ["value"],
          Ft = ["placeholder"],
          St = ["selected"],
          qt = ["selected"],
          Tt = ["selected"],
          Mt = { class: "cursor-pointer py-1.5" },
          It = ["disabled"],
          Rt = { class: "label-text" },
          $t = { class: "cursor-pointer py-1.5" },
          At = ["checked"],
          zt = { class: "label-text" },
          Et = { class: "cursor-pointer py-1.5" },
          Lt = { class: "label-text" },
          jt = { class: "cursor-pointer py-1.5" },
          Nt = { class: "label-text" },
          Ut = { class: "cursor-pointer py-1.5" },
          Ot = { class: "label-text" },
          Pt = { key: 10, class: "pb-0.5 mt-0.5" },
          Wt = { key: 11 },
          Yt = { class: "text-sm" },
          Bt = { key: 12 },
          Zt = { class: "text-sm" },
          Ht = { key: 13 },
          Vt = { class: "text-sm" },
          Kt = (0, n._)("hr", { class: "pb-0.5 mt-0.5" }, null, -1),
          Xt = ["onClick"],
          Jt = { key: 0 },
          Gt = { key: 15 };
        var Qt = i(7175),
          ei = i(8060),
          ti = i(4479),
          ii = i(2033),
          si = i(1911),
          li = i(4275),
          ai = {
            name: "FieldSettings",
            components: {
              IconShape: Qt.Z,
              IconInfoCircle: ei.Z,
              IconMathFunction: ti.Z,
              IconRouteAltLeft: ii.Z,
              IconCopy: si.Z,
              IconNewSection: li.Z,
            },
            inject: ["template", "save", "t"],
            props: {
              field: { type: Object, required: !0 },
              backgroundColor: { type: String, required: !1, default: null },
              defaultField: { type: Object, required: !1, default: null },
              withRequired: { type: Boolean, required: !1, default: !0 },
              withAreas: { type: Boolean, required: !1, default: !0 },
              editable: { type: Boolean, required: !1, default: !0 },
            },
            emits: [
              "set-draw",
              "scroll-to",
              "click-formula",
              "click-description",
              "click-condition",
            ],
            data: () => ({}),
            computed: {
              schemaAttachmentsIndexes() {
                return (this.template.schema || []).reduce(
                  (e, t, i) => ((e[t.attachment_uuid] = i), e),
                  {}
                );
              },
              numberFormats: () => ["none", "comma", "dot", "space"],
              dateFormats() {
                const e = [
                  "MM/DD/YYYY",
                  "DD/MM/YYYY",
                  "YYYY-MM-DD",
                  "DD-MM-YYYY",
                  "DD.MM.YYYY",
                  "MMM D, YYYY",
                  "MMMM D, YYYY",
                  "D MMM YYYY",
                  "D MMMM YYYY",
                ];
                return (
                  (Intl.DateTimeFormat()
                    .resolvedOptions()
                    .timeZone?.includes("Seoul") ||
                    navigator.language?.startsWith("ko")) &&
                    e.push("YYYY\ub144 MM\uc6d4 DD\uc77c"),
                  this.field.preferences?.format &&
                    !e.includes(this.field.preferences.format) &&
                    e.unshift(this.field.preferences.format),
                  e
                );
              },
              sortedAreas() {
                return (this.field.areas || []).sort(
                  (e, t) =>
                    this.schemaAttachmentsIndexes[e.attachment_uuid] -
                    this.schemaAttachmentsIndexes[t.attachment_uuid]
                );
              },
            },
            methods: {
              copyToAllPages(e) {
                const t = JSON.stringify(e.areas[0]);
                this.template.documents.forEach((i) => {
                  const s =
                    i.metadata?.pdf?.number_of_pages || i.preview_images.length;
                  for (let l = 0; l <= s - 1; l++)
                    e.areas.find(
                      (e) => e.attachment_uuid === i.uuid && e.page === l
                    ) ||
                      e.areas.push({
                        ...JSON.parse(t),
                        attachment_uuid: i.uuid,
                        page: l,
                      });
                }),
                  this.$emit(
                    "scroll-to",
                    this.field.areas[this.field.areas.length - 1]
                  ),
                  this.save();
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
                  year: { YYYY: "numeric", YY: "2-digit" }[t.match(/Y+/)],
                }).formatToParts(e);
                return t
                  .replace(/D+/, i.find((e) => "day" === e.type).value)
                  .replace(/M+/, i.find((e) => "month" === e.type).value)
                  .replace(/Y+/, i.find((e) => "year" === e.type).value);
              },
            },
          };
        var ni = (0, A.Z)(ai, [
          [
            "render",
            function (e, t, i, s, a, r) {
              const d = (0, n.up)("IconInfoCircle"),
                u = (0, n.up)("IconRouteAltLeft"),
                c = (0, n.up)("IconMathFunction"),
                p = (0, n.up)("IconShape"),
                m = (0, n.up)("IconNewSection"),
                h = (0, n.up)("IconCopy");
              return (
                (0, n.wg)(),
                (0, n.iD)(
                  n.HY,
                  null,
                  [
                    "number" === i.field.type
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          "div",
                          {
                            key: 0,
                            class: "py-1.5 px-1 relative",
                            onClick:
                              t[1] || (t[1] = (0, l.iM)(() => {}, ["stop"])),
                          },
                          [
                            (0, n._)(
                              "select",
                              {
                                placeholder: r.t("format"),
                                class:
                                  "select select-bordered select-xs font-normal w-full max-w-xs !h-7 !outline-0 bg-transparent",
                                onChange:
                                  t[0] ||
                                  (t[0] = (e) => [
                                    (i.field.preferences ||= {}),
                                    (i.field.preferences.format =
                                      e.target.value),
                                    r.save(),
                                  ]),
                              },
                              [
                                ((0, n.wg)(!0),
                                (0, n.iD)(
                                  n.HY,
                                  null,
                                  (0, n.Ko)(
                                    r.numberFormats,
                                    (e) => (
                                      (0, n.wg)(),
                                      (0, n.iD)(
                                        "option",
                                        {
                                          key: e,
                                          value: e,
                                          selected:
                                            e === i.field.preferences?.format ||
                                            ("none" === e &&
                                              !i.field.preferences?.format),
                                        },
                                        (0, o.zw)(
                                          r.formatNumber(123456789.567, e)
                                        ),
                                        9,
                                        kt
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ],
                              40,
                              vt
                            ),
                            (0, n._)(
                              "label",
                              {
                                style: (0, o.j5)([
                                  { backgroundColor: i.backgroundColor },
                                  { "font-size": "8px" },
                                ]),
                                class: "absolute -top-1 left-2.5 px-1 h-4",
                              },
                              (0, o.zw)(r.t("format")),
                              5
                            ),
                          ]
                        ))
                      : (0, n.kq)("", !0),
                    ["number"].includes(i.field.type)
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          "div",
                          {
                            key: 1,
                            class: "py-1.5 px-1 relative",
                            onClick:
                              t[3] || (t[3] = (0, l.iM)(() => {}, ["stop"])),
                          },
                          [
                            (0, n._)(
                              "select",
                              {
                                class:
                                  "select select-bordered select-xs w-full max-w-xs h-7 !outline-0 font-normal bg-transparent",
                                onChange:
                                  t[2] ||
                                  (t[2] = (e) => [
                                    (i.field.preferences ||= {}),
                                    (i.field.preferences.align =
                                      e.target.value),
                                    r.save(),
                                  ]),
                              },
                              [
                                ((0, n.wg)(),
                                (0, n.iD)(
                                  n.HY,
                                  null,
                                  (0, n.Ko)(["left", "right", "center"], (e) =>
                                    (0, n._)(
                                      "option",
                                      {
                                        key: e,
                                        selected: i.field.preferences?.align
                                          ? e === i.field.preferences.align
                                          : "left" === e,
                                        value: e,
                                      },
                                      (0, o.zw)(r.t(e)),
                                      9,
                                      xt
                                    )
                                  ),
                                  64
                                )),
                              ],
                              32
                            ),
                            (0, n._)(
                              "label",
                              {
                                style: (0, o.j5)([
                                  { backgroundColor: i.backgroundColor },
                                  { "font-size": "8px" },
                                ]),
                                class: "absolute -top-1 left-2.5 px-1 h-4",
                              },
                              (0, o.zw)(r.t("align")),
                              5
                            ),
                          ]
                        ))
                      : (0, n.kq)("", !0),
                    ["text", "number"].includes(i.field.type) && !i.defaultField
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          "div",
                          {
                            key: 2,
                            class: "py-1.5 px-1 relative",
                            onClick:
                              t[6] || (t[6] = (0, l.iM)(() => {}, ["stop"])),
                          },
                          [
                            (0, n.wy)(
                              (0, n._)(
                                "input",
                                {
                                  "onUpdate:modelValue":
                                    t[4] ||
                                    (t[4] = (e) => (i.field.default_value = e)),
                                  placeholder: r.t("default_value"),
                                  dir: "auto",
                                  type: i.field.type,
                                  class:
                                    "input input-bordered input-xs w-full max-w-xs h-7 !outline-0 bg-transparent",
                                  onBlur:
                                    t[5] ||
                                    (t[5] = (...e) => r.save && r.save(...e)),
                                },
                                null,
                                40,
                                _t
                              ),
                              [[l.YZ, i.field.default_value]]
                            ),
                            i.field.default_value
                              ? ((0, n.wg)(),
                                (0, n.iD)(
                                  "label",
                                  {
                                    key: 0,
                                    style: (0, o.j5)([
                                      { backgroundColor: i.backgroundColor },
                                      { "font-size": "8px" },
                                    ]),
                                    class: "absolute -top-1 left-2.5 px-1 h-4",
                                  },
                                  (0, o.zw)(r.t("default_value")),
                                  5
                                ))
                              : (0, n.kq)("", !0),
                          ]
                        ))
                      : (0, n.kq)("", !0),
                    "date" === i.field.type
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          "div",
                          {
                            key: 3,
                            class: "py-1.5 px-1 relative",
                            onClick:
                              t[9] || (t[9] = (0, l.iM)(() => {}, ["stop"])),
                          },
                          [
                            (0, n.wy)(
                              (0, n._)(
                                "select",
                                {
                                  "onUpdate:modelValue":
                                    t[7] ||
                                    (t[7] = (e) =>
                                      (i.field.preferences.format = e)),
                                  placeholder: r.t("format"),
                                  class:
                                    "select select-bordered select-xs font-normal w-full max-w-xs !h-7 !outline-0 bg-transparent",
                                  onChange:
                                    t[8] ||
                                    (t[8] = (...e) => r.save && r.save(...e)),
                                },
                                [
                                  ((0, n.wg)(!0),
                                  (0, n.iD)(
                                    n.HY,
                                    null,
                                    (0, n.Ko)(
                                      r.dateFormats,
                                      (e) => (
                                        (0, n.wg)(),
                                        (0, n.iD)(
                                          "option",
                                          { key: e, value: e },
                                          (0, o.zw)(
                                            r.formatDate(new Date(), e)
                                          ),
                                          9,
                                          Ct
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                40,
                                Dt
                              ),
                              [[l.bM, i.field.preferences.format]]
                            ),
                            (0, n._)(
                              "label",
                              {
                                style: (0, o.j5)([
                                  { backgroundColor: i.backgroundColor },
                                  { "font-size": "8px" },
                                ]),
                                class: "absolute -top-1 left-2.5 px-1 h-4",
                              },
                              (0, o.zw)(r.t("format")),
                              5
                            ),
                          ]
                        ))
                      : (0, n.kq)("", !0),
                    "signature" === i.field.type
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          "div",
                          {
                            key: 4,
                            class: "py-1.5 px-1 relative",
                            onClick:
                              t[11] || (t[11] = (0, l.iM)(() => {}, ["stop"])),
                          },
                          [
                            (0, n._)(
                              "select",
                              {
                                placeholder: r.t("format"),
                                class:
                                  "select select-bordered select-xs font-normal w-full max-w-xs !h-7 !outline-0 bg-transparent",
                                onChange:
                                  t[10] ||
                                  (t[10] = (e) => [
                                    (i.field.preferences.format =
                                      e.target.value),
                                    r.save(),
                                  ]),
                              },
                              [
                                (0, n._)(
                                  "option",
                                  {
                                    value: "any",
                                    selected:
                                      !i.field.preferences?.format ||
                                      "any" === i.field.preferences.format,
                                  },
                                  (0, o.zw)(r.t("any")),
                                  9,
                                  St
                                ),
                                (0, n._)(
                                  "option",
                                  {
                                    value: "drawn",
                                    selected:
                                      "drawn" === i.field.preferences?.format,
                                  },
                                  (0, o.zw)(r.t("drawn")),
                                  9,
                                  qt
                                ),
                                (0, n._)(
                                  "option",
                                  {
                                    value: "typed",
                                    selected:
                                      "typed" === i.field.preferences?.format,
                                  },
                                  (0, o.zw)(r.t("typed")),
                                  9,
                                  Tt
                                ),
                              ],
                              40,
                              Ft
                            ),
                            (0, n._)(
                              "label",
                              {
                                style: (0, o.j5)([
                                  { backgroundColor: i.backgroundColor },
                                  { "font-size": "8px" },
                                ]),
                                class: "absolute -top-1 left-2.5 px-1 h-4",
                              },
                              (0, o.zw)(r.t("format")),
                              5
                            ),
                          ]
                        ))
                      : (0, n.kq)("", !0),
                    i.withRequired &&
                    "phone" != i.field.type &&
                    "stamp" != i.field.type
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          "li",
                          {
                            key: 5,
                            onClick:
                              t[14] || (t[14] = (0, l.iM)(() => {}, ["stop"])),
                          },
                          [
                            (0, n._)("label", Mt, [
                              (0, n.wy)(
                                (0, n._)(
                                  "input",
                                  {
                                    "onUpdate:modelValue": [
                                      t[12] ||
                                        (t[12] = (e) => (i.field.required = e)),
                                      t[13] ||
                                        (t[13] = (...e) =>
                                          r.save && r.save(...e)),
                                    ],
                                    type: "checkbox",
                                    disabled: !i.editable || i.defaultField,
                                    class: "toggle toggle-xs",
                                  },
                                  null,
                                  8,
                                  It
                                ),
                                [[l.e8, i.field.required]]
                              ),
                              (0, n._)(
                                "span",
                                Rt,
                                (0, o.zw)(r.t("required")),
                                1
                              ),
                            ]),
                          ]
                        ))
                      : (0, n.kq)("", !0),
                    "stamp" == i.field.type
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          "li",
                          {
                            key: 6,
                            onClick:
                              t[16] || (t[16] = (0, l.iM)(() => {}, ["stop"])),
                          },
                          [
                            (0, n._)("label", $t, [
                              (0, n._)(
                                "input",
                                {
                                  checked: 0 != i.field.preferences?.with_logo,
                                  type: "checkbox",
                                  class: "toggle toggle-xs",
                                  onChange:
                                    t[15] ||
                                    (t[15] = (e) => [
                                      (i.field.preferences ||= {}),
                                      (i.field.preferences.with_logo =
                                        0 == i.field.preferences.with_logo),
                                      r.save(),
                                    ]),
                                },
                                null,
                                40,
                                At
                              ),
                              (0, n._)(
                                "span",
                                zt,
                                (0, o.zw)(r.t("with_logo")),
                                1
                              ),
                            ]),
                          ]
                        ))
                      : (0, n.kq)("", !0),
                    "checkbox" == i.field.type
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          "li",
                          {
                            key: 7,
                            onClick:
                              t[19] || (t[19] = (0, l.iM)(() => {}, ["stop"])),
                          },
                          [
                            (0, n._)("label", Et, [
                              (0, n.wy)(
                                (0, n._)(
                                  "input",
                                  {
                                    "onUpdate:modelValue": [
                                      t[17] ||
                                        (t[17] = (e) =>
                                          (i.field.default_value = e)),
                                      t[18] ||
                                        (t[18] = (e) => [
                                          (i.field.default_value = e),
                                          (i.field.readonly = e),
                                          r.save(),
                                        ]),
                                    ],
                                    type: "checkbox",
                                    class: "toggle toggle-xs",
                                  },
                                  null,
                                  512
                                ),
                                [[l.e8, i.field.default_value]]
                              ),
                              (0, n._)(
                                "span",
                                Lt,
                                (0, o.zw)(r.t("checked")),
                                1
                              ),
                            ]),
                          ]
                        ))
                      : (0, n.kq)("", !0),
                    "date" == i.field.type
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          "li",
                          {
                            key: 8,
                            onClick:
                              t[22] || (t[22] = (0, l.iM)(() => {}, ["stop"])),
                          },
                          [
                            (0, n._)("label", jt, [
                              (0, n.wy)(
                                (0, n._)(
                                  "input",
                                  {
                                    "onUpdate:modelValue": [
                                      t[20] ||
                                        (t[20] = (e) => (i.field.readonly = e)),
                                      t[21] ||
                                        (t[21] = (e) => [
                                          (i.field.default_value = e
                                            ? "{{date}}"
                                            : null),
                                          (i.field.readonly = e),
                                          r.save(),
                                        ]),
                                    ],
                                    type: "checkbox",
                                    class: "toggle toggle-xs",
                                  },
                                  null,
                                  512
                                ),
                                [[l.e8, i.field.readonly]]
                              ),
                              (0, n._)(
                                "span",
                                Nt,
                                (0, o.zw)(r.t("set_signing_date")),
                                1
                              ),
                            ]),
                          ]
                        ))
                      : (0, n.kq)("", !0),
                    ["text", "number"].includes(i.field.type) && !i.defaultField
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          "li",
                          {
                            key: 9,
                            onClick:
                              t[25] || (t[25] = (0, l.iM)(() => {}, ["stop"])),
                          },
                          [
                            (0, n._)("label", Ut, [
                              (0, n.wy)(
                                (0, n._)(
                                  "input",
                                  {
                                    "onUpdate:modelValue": [
                                      t[23] ||
                                        (t[23] = (e) => (i.field.readonly = e)),
                                      t[24] ||
                                        (t[24] = (...e) =>
                                          r.save && r.save(...e)),
                                    ],
                                    type: "checkbox",
                                    class: "toggle toggle-xs",
                                  },
                                  null,
                                  512
                                ),
                                [[l.e8, i.field.readonly]]
                              ),
                              (0, n._)(
                                "span",
                                Ot,
                                (0, o.zw)(r.t("read_only")),
                                1
                              ),
                            ]),
                          ]
                        ))
                      : (0, n.kq)("", !0),
                    "stamp" != i.field.type
                      ? ((0, n.wg)(), (0, n.iD)("hr", Pt))
                      : (0, n.kq)("", !0),
                    "stamp" != i.field.type
                      ? ((0, n.wg)(),
                        (0, n.iD)("li", Wt, [
                          (0, n._)(
                            "label",
                            {
                              class:
                                "label-text cursor-pointer text-center w-full flex items-center",
                              onClick:
                                t[26] ||
                                (t[26] = (t) => e.$emit("click-description")),
                            },
                            [
                              (0, n.Wm)(d, { width: "18" }),
                              (0, n._)(
                                "span",
                                Yt,
                                (0, o.zw)(r.t("description")),
                                1
                              ),
                            ]
                          ),
                        ]))
                      : (0, n.kq)("", !0),
                    "stamp" != i.field.type
                      ? ((0, n.wg)(),
                        (0, n.iD)("li", Bt, [
                          (0, n._)(
                            "label",
                            {
                              class:
                                "label-text cursor-pointer text-center w-full flex items-center",
                              onClick:
                                t[27] ||
                                (t[27] = (t) => e.$emit("click-condition")),
                            },
                            [
                              (0, n.Wm)(u, { width: "18" }),
                              (0, n._)(
                                "span",
                                Zt,
                                (0, o.zw)(r.t("condition")),
                                1
                              ),
                            ]
                          ),
                        ]))
                      : (0, n.kq)("", !0),
                    "number" == i.field.type
                      ? ((0, n.wg)(),
                        (0, n.iD)("li", Ht, [
                          (0, n._)(
                            "label",
                            {
                              class:
                                "label-text cursor-pointer text-center w-full flex items-center",
                              onClick:
                                t[28] ||
                                (t[28] = (t) => e.$emit("click-formula")),
                            },
                            [
                              (0, n.Wm)(c, { width: "18" }),
                              (0, n._)(
                                "span",
                                Vt,
                                (0, o.zw)(r.t("formula")),
                                1
                              ),
                            ]
                          ),
                        ]))
                      : (0, n.kq)("", !0),
                    Kt,
                    i.withAreas
                      ? ((0, n.wg)(),
                        (0, n.iD)(
                          n.HY,
                          { key: 14 },
                          [
                            ((0, n.wg)(!0),
                            (0, n.iD)(
                              n.HY,
                              null,
                              (0, n.Ko)(
                                r.sortedAreas,
                                (t, i) => (
                                  (0, n.wg)(),
                                  (0, n.iD)("li", { key: i }, [
                                    (0, n._)(
                                      "a",
                                      {
                                        href: "#",
                                        class: "text-sm py-1 px-2",
                                        onClick: (0, l.iM)(
                                          (i) => e.$emit("scroll-to", t),
                                          ["prevent"]
                                        ),
                                      },
                                      [
                                        (0, n.Wm)(p, {
                                          width: 20,
                                          "stroke-width": 1.6,
                                        }),
                                        (0, n.Uk)(
                                          " " + (0, o.zw)(r.t("page")) + " ",
                                          1
                                        ),
                                        r.template.schema.length > 1
                                          ? ((0, n.wg)(),
                                            (0, n.iD)(
                                              n.HY,
                                              { key: 0 },
                                              [
                                                (0, n.Uk)(
                                                  (0, o.zw)(
                                                    r.template.schema.findIndex(
                                                      (e) =>
                                                        e.attachment_uuid ===
                                                        t.attachment_uuid
                                                    ) + 1
                                                  ) + "-",
                                                  1
                                                ),
                                              ],
                                              64
                                            ))
                                          : (0, n.kq)("", !0),
                                        (0, n.Uk)((0, o.zw)(t.page + 1), 1),
                                      ],
                                      8,
                                      Xt
                                    ),
                                  ])
                                )
                              ),
                              128
                            )),
                            i.field.areas?.length &&
                            ["radio", "multiple"].includes(i.field.type)
                              ? (0, n.kq)("", !0)
                              : ((0, n.wg)(),
                                (0, n.iD)("li", Jt, [
                                  (0, n._)(
                                    "a",
                                    {
                                      href: "#",
                                      class: "text-sm py-1 px-2",
                                      onClick:
                                        t[29] ||
                                        (t[29] = (0, l.iM)(
                                          (t) =>
                                            e.$emit("set-draw", {
                                              field: i.field,
                                            }),
                                          ["prevent"]
                                        )),
                                    },
                                    [
                                      (0, n.Wm)(m, {
                                        width: 20,
                                        "stroke-width": 1.6,
                                      }),
                                      (0, n.Uk)(
                                        " " + (0, o.zw)(r.t("draw_new_area")),
                                        1
                                      ),
                                    ]
                                  ),
                                ])),
                          ],
                          64
                        ))
                      : (0, n.kq)("", !0),
                    1 === i.field.areas?.length &&
                    ["date", "signature", "initials", "text", "cells"].includes(
                      i.field.type
                    )
                      ? ((0, n.wg)(),
                        (0, n.iD)("li", Gt, [
                          (0, n._)(
                            "a",
                            {
                              href: "#",
                              class: "text-sm py-1 px-2",
                              onClick:
                                t[30] ||
                                (t[30] = (0, l.iM)(
                                  (e) => r.copyToAllPages(i.field),
                                  ["prevent"]
                                )),
                            },
                            [
                              (0, n.Wm)(h, { width: 20, "stroke-width": 1.6 }),
                              (0, n.Uk)(
                                " " + (0, o.zw)(r.t("copy_to_all_pages")),
                                1
                              ),
                            ]
                          ),
                        ]))
                      : (0, n.kq)("", !0),
                  ],
                  64
                )
              );
            },
          ],
        ]);
        const oi = {
            class: "modal modal-open items-start !animate-none overflow-y-auto",
          },
          ri = {
            class: "modal-box pt-4 pb-6 px-6 mt-20 max-h-none w-full max-w-xl",
          },
          di = {
            class:
              "flex justify-between items-center border-b pb-2 mb-2 font-medium",
          },
          ui = {
            key: 0,
            class: "bg-base-300 rounded-xl py-2 px-3 text-center",
          },
          ci = [
            (0, n._)(
              "a",
              {
                href: "https://www.uvtsign.co/pricing",
                target: "_blank",
                class: "link",
              },
              "Available in Pro",
              -1
            ),
          ],
          pi = { class: "flex-inline mb-2 gap-2 space-y-1" },
          mi = ["onClick"],
          hi = { class: "flex" },
          fi = ["readonly"],
          bi = { class: "mb-3 mt-1" },
          wi = { target: "blank", class: "text-sm mb-2 inline space-x-2" };
        var gi = {
          name: "FormulaModal",
          components: { IconCodePlus: i(7628).Z },
          inject: ["t", "save", "template", "withFormula"],
          props: {
            field: { type: Object, required: !0 },
            editable: { type: Boolean, required: !1, default: !0 },
            buildDefaultName: { type: Function, required: !0 },
          },
          emits: ["close"],
          data: () => ({ formula: "" }),
          computed: {
            fields() {
              return this.template.fields.reduce(
                (e, t) => (
                  t !== this.field &&
                    t.submitter_uuid === this.field.submitter_uuid &&
                    ["number"].includes(t.type) &&
                    !t.preferences?.formula &&
                    e.push(t),
                  e
                ),
                []
              );
            },
          },
          created() {
            this.field.preferences ||= {};
          },
          mounted() {
            this.formula = this.humanizeFormula(
              this.field.preferences.formula || ""
            );
          },
          methods: {
            humanizeFormula(e) {
              return e.replace(/{{(.*?)}}/g, (e, t) => {
                const i = this.fields.find((e) => e.uuid === t);
                return i
                  ? `{{${
                      i.name || this.buildDefaultName(i, this.template.fields)
                    }}}`
                  : "{{FIELD NOT FOUND}}";
              });
            },
            normalizeFormula(e) {
              return e.replace(/{{(.*?)}}/g, (e, t) => {
                const i = this.fields.find(
                  (e) =>
                    (
                      e.name || this.buildDefaultName(e, this.template.fields)
                    ).trim() === t.trim()
                );
                return i ? `{{${i.uuid}}}` : "{{FIELD NOT FOUND}}";
              });
            },
            validateSaveAndClose() {
              if (!this.withFormula) return alert("Available only in Pro");
              const e = this.normalizeFormula(this.formula);
              e.includes("FIELD NOT FOUND")
                ? alert("Some fields are missing in the formula.")
                : ((this.field.preferences.formula = e),
                  (this.field.readonly = !!e),
                  this.save(),
                  this.$emit("close"));
            },
            insertTextUnderCursor(e) {
              const t = this.$refs.textarea,
                i = t.selectionEnd,
                s = t.value.substring(0, i) + e + t.value.substring(i);
              (this.formula = s),
                t.setSelectionRange(i + e.length, i + e.length),
                t.focus();
            },
            resizeTextarea() {
              const e = this.$refs.textarea;
              (e.style.height = "auto"),
                (e.style.height = e.scrollHeight + "px");
            },
          },
        };
        var yi = (0, A.Z)(gi, [
          [
            "render",
            function (e, t, i, s, a, r) {
              const d = (0, n.up)("IconCodePlus");
              return (
                (0, n.wg)(),
                (0, n.iD)("div", oi, [
                  (0, n._)("div", {
                    class: "absolute top-0 bottom-0 right-0 left-0",
                    onClick:
                      t[0] ||
                      (t[0] = (0, l.iM)((t) => e.$emit("close"), ["prevent"])),
                  }),
                  (0, n._)("div", ri, [
                    (0, n._)("div", di, [
                      (0, n._)(
                        "span",
                        null,
                        (0, o.zw)(r.t("formula")) +
                          " - " +
                          (0, o.zw)(
                            i.field.name ||
                              i.buildDefaultName(i.field, r.template.fields)
                          ),
                        1
                      ),
                      (0, n._)(
                        "a",
                        {
                          href: "#",
                          class: "text-xl",
                          onClick:
                            t[1] ||
                            (t[1] = (0, l.iM)(
                              (t) => e.$emit("close"),
                              ["prevent"]
                            )),
                        },
                        "\xd7"
                      ),
                    ]),
                    (0, n._)("div", null, [
                      r.withFormula
                        ? (0, n.kq)("", !0)
                        : ((0, n.wg)(), (0, n.iD)("div", ui, ci)),
                      (0, n._)("div", pi, [
                        ((0, n.wg)(!0),
                        (0, n.iD)(
                          n.HY,
                          null,
                          (0, n.Ko)(
                            r.fields,
                            (e) => (
                              (0, n.wg)(),
                              (0, n.iD)(
                                "button",
                                {
                                  key: e.uuid,
                                  class:
                                    "mr-1 btn btn-neutral btn-outline border-base-content/20 btn-sm normal-case font-normal bg-white !rounded-xl",
                                  onClick: (0, l.iM)(
                                    (t) =>
                                      r.insertTextUnderCursor(
                                        `{{${
                                          e.name ||
                                          i.buildDefaultName(
                                            e,
                                            r.template.fields
                                          )
                                        }}}`
                                      ),
                                    ["prevent"]
                                  ),
                                },
                                [
                                  (0, n.Wm)(d, {
                                    width: "20",
                                    height: "20",
                                    "stroke-width": "1.5",
                                  }),
                                  (0, n.Uk)(
                                    " " +
                                      (0, o.zw)(
                                        e.name ||
                                          i.buildDefaultName(
                                            e,
                                            r.template.fields
                                          )
                                      ),
                                    1
                                  ),
                                ],
                                8,
                                mi
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      (0, n._)("div", null, [
                        (0, n._)("div", hi, [
                          (0, n.wy)(
                            (0, n._)(
                              "textarea",
                              {
                                ref: "textarea",
                                "onUpdate:modelValue":
                                  t[2] || (t[2] = (e) => (a.formula = e)),
                                class:
                                  "base-textarea !rounded-xl !text-base font-mono w-full !outline-0 !ring-0 !px-3",
                                readonly: !i.editable,
                                required: "true",
                                onInput:
                                  t[3] ||
                                  (t[3] = (...e) =>
                                    r.resizeTextarea && r.resizeTextarea(...e)),
                              },
                              null,
                              40,
                              fi
                            ),
                            [[l.nr, a.formula]]
                          ),
                        ]),
                        (0, n._)("div", bi, [
                          (0, n._)("div", wi, [
                            (0, n._)(
                              "button",
                              {
                                class: "bg-base-200 px-2 rounded-xl",
                                onClick:
                                  t[4] ||
                                  (t[4] = (e) =>
                                    r.insertTextUnderCursor(" + ")),
                              },
                              " + "
                            ),
                            (0, n._)(
                              "button",
                              {
                                class: "bg-base-200 px-2 rounded-xl",
                                onClick:
                                  t[5] ||
                                  (t[5] = (e) =>
                                    r.insertTextUnderCursor(" - ")),
                              },
                              " - "
                            ),
                            (0, n._)(
                              "button",
                              {
                                class: "bg-base-200 px-2 rounded-xl",
                                onClick:
                                  t[6] ||
                                  (t[6] = (e) =>
                                    r.insertTextUnderCursor(" * ")),
                              },
                              " * "
                            ),
                            (0, n._)(
                              "button",
                              {
                                class: "bg-base-200 px-2 rounded-xl",
                                onClick:
                                  t[7] ||
                                  (t[7] = (e) =>
                                    r.insertTextUnderCursor(" / ")),
                              },
                              " / "
                            ),
                            (0, n._)(
                              "button",
                              {
                                class: "bg-base-200 px-2 rounded-xl",
                                onClick:
                                  t[8] ||
                                  (t[8] = (e) =>
                                    r.insertTextUnderCursor(" % ")),
                              },
                              " % "
                            ),
                            (0, n._)(
                              "button",
                              {
                                class: "bg-base-200 px-2 rounded-xl",
                                onClick:
                                  t[9] ||
                                  (t[9] = (e) => r.insertTextUnderCursor("^")),
                              },
                              " ^ "
                            ),
                            (0, n._)(
                              "button",
                              {
                                class: "bg-base-200 px-2 rounded-xl",
                                onClick:
                                  t[10] ||
                                  (t[10] = (e) =>
                                    r.insertTextUnderCursor("round()")),
                              },
                              " round(n, d) "
                            ),
                            (0, n._)(
                              "button",
                              {
                                class: "bg-base-200 px-2 rounded-xl",
                                onClick:
                                  t[11] ||
                                  (t[11] = (e) =>
                                    r.insertTextUnderCursor("abs()")),
                              },
                              " abs(n) "
                            ),
                          ]),
                        ]),
                      ]),
                      (0, n._)(
                        "button",
                        {
                          class: "base-button w-full",
                          onClick:
                            t[12] ||
                            (t[12] = (0, l.iM)(
                              (...e) =>
                                r.validateSaveAndClose &&
                                r.validateSaveAndClose(...e),
                              ["prevent"]
                            )),
                        },
                        (0, o.zw)(r.t("save")),
                        1
                      ),
                    ]),
                  ]),
                ])
              );
            },
          ],
        ]);
        const vi = {
            class: "modal modal-open items-start !animate-none overflow-y-auto",
          },
          ki = {
            class: "modal-box pt-4 pb-6 px-6 mt-20 max-h-none w-full max-w-xl",
          },
          xi = {
            class:
              "flex justify-between items-center border-b pb-2 mb-2 font-medium",
          },
          _i = {
            key: 0,
            class: "bg-base-300 rounded-xl py-2 px-3 text-center",
          },
          Di = [
            (0, n._)(
              "a",
              {
                href: "https://www.uvtsign.co/pricing",
                target: "_blank",
                class: "link",
              },
              "Available in Pro",
              -1
            ),
          ],
          Ci = { class: "my-4" },
          Fi = { class: "space-y-4" },
          Si = ["selected"],
          qi = ["value", "selected"],
          Ti = ["required"],
          Mi = ["value"],
          Ii = { value: "", disabled: "", selected: "" },
          Ri = ["value", "selected"],
          $i = { class: "base-button w-full mt-2" },
          Ai = { key: 1, class: "text-center w-full mt-4" };
        var zi = {
          name: "ConditionModal",
          inject: ["t", "save", "template", "withConditions"],
          props: {
            field: { type: Object, required: !0 },
            buildDefaultName: { type: Function, required: !0 },
          },
          emits: ["close"],
          data() {
            return { newCondition: this.field.conditions?.[0] || {} };
          },
          computed: {
            conditionField() {
              return this.fields.find(
                (e) => e.uuid === this.newCondition.field_uuid
              );
            },
            conditionActions() {
              return this.fieldActions(this.conditionField);
            },
            fields() {
              return this.template.fields.reduce(
                (e, t) => (
                  t !== this.field &&
                    t.submitter_uuid === this.field.submitter_uuid &&
                    e.push(t),
                  e
                ),
                []
              );
            },
          },
          created() {
            this.field.conditions ||= [];
          },
          methods: {
            fieldActions(e) {
              const t = [];
              return e
                ? ("checkbox" === e.type
                    ? t.push("checked", "unchecked")
                    : ["radio", "select"].includes(e.type)
                    ? t.push("equal", "not_equal")
                    : ["multiple"].includes(e.type)
                    ? t.push("contains", "does_not_contain")
                    : t.push("not_empty", "empty"),
                  t)
                : t;
            },
            validateSaveAndClose() {
              if (!this.withConditions) return alert("Available only in Pro");
              this.newCondition.field_uuid
                ? (this.field.conditions = [this.newCondition])
                : delete this.field.conditions,
                this.save(),
                this.$emit("close");
            },
          },
        };
        var Ei = (0, A.Z)(zi, [
          [
            "render",
            function (e, t, i, s, a, r) {
              return (
                (0, n.wg)(),
                (0, n.iD)("div", vi, [
                  (0, n._)("div", {
                    class: "absolute top-0 bottom-0 right-0 left-0",
                    onClick:
                      t[0] ||
                      (t[0] = (0, l.iM)((t) => e.$emit("close"), ["prevent"])),
                  }),
                  (0, n._)("div", ki, [
                    (0, n._)("div", xi, [
                      (0, n._)(
                        "span",
                        null,
                        (0, o.zw)(r.t("condition")) +
                          " - " +
                          (0, o.zw)(
                            i.field.name ||
                              i.buildDefaultName(i.field, r.template.fields)
                          ),
                        1
                      ),
                      (0, n._)(
                        "a",
                        {
                          href: "#",
                          class: "text-xl",
                          onClick:
                            t[1] ||
                            (t[1] = (0, l.iM)(
                              (t) => e.$emit("close"),
                              ["prevent"]
                            )),
                        },
                        "\xd7"
                      ),
                    ]),
                    (0, n._)("div", null, [
                      r.withConditions
                        ? (0, n.kq)("", !0)
                        : ((0, n.wg)(), (0, n.iD)("div", _i, Di)),
                      (0, n._)(
                        "form",
                        {
                          onSubmit:
                            t[5] ||
                            (t[5] = (0, l.iM)(
                              (...e) =>
                                r.validateSaveAndClose &&
                                r.validateSaveAndClose(...e),
                              ["prevent"]
                            )),
                        },
                        [
                          (0, n._)("div", Ci, [
                            (0, n._)("div", Fi, [
                              (0, n._)(
                                "select",
                                {
                                  class:
                                    "select select-bordered select-sm w-full bg-white h-11 pl-4 text-base font-normal",
                                  required: "",
                                  onChange:
                                    t[2] ||
                                    (t[2] = (e) => [
                                      (a.newCondition.field_uuid =
                                        e.target.value),
                                      delete a.newCondition.value,
                                      r.conditionActions.includes(
                                        a.newCondition.action
                                      )
                                        ? ""
                                        : (a.newCondition.action =
                                            r.conditionActions[0]),
                                    ]),
                                },
                                [
                                  (0, n._)(
                                    "option",
                                    {
                                      value: "",
                                      disabled: "",
                                      selected: !a.newCondition.field_uuid,
                                    },
                                    (0, o.zw)(r.t("select_field_")),
                                    9,
                                    Si
                                  ),
                                  ((0, n.wg)(!0),
                                  (0, n.iD)(
                                    n.HY,
                                    null,
                                    (0, n.Ko)(
                                      r.fields,
                                      (e) => (
                                        (0, n.wg)(),
                                        (0, n.iD)(
                                          "option",
                                          {
                                            key: e.uuid,
                                            value: e.uuid,
                                            selected:
                                              a.newCondition.field_uuid ===
                                              e.uuid,
                                          },
                                          (0, o.zw)(
                                            e.name ||
                                              i.buildDefaultName(
                                                e,
                                                r.template.fields
                                              )
                                          ),
                                          9,
                                          qi
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                32
                              ),
                              (0, n.wy)(
                                (0, n._)(
                                  "select",
                                  {
                                    "onUpdate:modelValue":
                                      t[3] ||
                                      (t[3] = (e) =>
                                        (a.newCondition.action = e)),
                                    class: (0, o.C_)([
                                      "select select-bordered select-sm w-full h-11 pl-4 text-base font-normal",
                                      {
                                        "bg-white": a.newCondition.field_uuid,
                                        "bg-base-300":
                                          !a.newCondition.field_uuid,
                                      },
                                    ]),
                                    required: a.newCondition.field_uuid,
                                  },
                                  [
                                    ((0, n.wg)(!0),
                                    (0, n.iD)(
                                      n.HY,
                                      null,
                                      (0, n.Ko)(
                                        r.conditionActions,
                                        (e) => (
                                          (0, n.wg)(),
                                          (0, n.iD)(
                                            "option",
                                            { key: e, value: e },
                                            (0, o.zw)(r.t(e)),
                                            9,
                                            Mi
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ],
                                  10,
                                  Ti
                                ),
                                [[l.bM, a.newCondition.action]]
                              ),
                              r.conditionField?.options?.length
                                ? ((0, n.wg)(),
                                  (0, n.iD)(
                                    "select",
                                    {
                                      key: 0,
                                      class:
                                        "select select-bordered select-sm w-full bg-white h-11 pl-4 text-base font-normal",
                                      required: "",
                                      onChange:
                                        t[4] ||
                                        (t[4] = (e) =>
                                          (a.newCondition.value =
                                            e.target.value)),
                                    },
                                    [
                                      (0, n._)(
                                        "option",
                                        Ii,
                                        (0, o.zw)(r.t("select_value_")),
                                        1
                                      ),
                                      ((0, n.wg)(!0),
                                      (0, n.iD)(
                                        n.HY,
                                        null,
                                        (0, n.Ko)(
                                          r.conditionField.options,
                                          (e, t) => (
                                            (0, n.wg)(),
                                            (0, n.iD)(
                                              "option",
                                              {
                                                key: e.uuid,
                                                value: e.uuid,
                                                selected:
                                                  a.newCondition.value ===
                                                  e.uuid,
                                              },
                                              (0, o.zw)(
                                                e.value ||
                                                  `${r.t("option")} ${t + 1}`
                                              ),
                                              9,
                                              Ri
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ],
                                    32
                                  ))
                                : (0, n.kq)("", !0),
                            ]),
                          ]),
                          (0, n._)("button", $i, (0, o.zw)(r.t("save")), 1),
                        ],
                        32
                      ),
                      i.field.conditions?.[0]?.field_uuid
                        ? ((0, n.wg)(),
                          (0, n.iD)("div", Ai, [
                            (0, n._)(
                              "button",
                              {
                                class: "link",
                                onClick:
                                  t[6] ||
                                  (t[6] = (e) => [
                                    (a.newCondition.field_uuid = null),
                                    delete i.field.conditions,
                                    r.validateSaveAndClose(),
                                  ]),
                              },
                              (0, o.zw)(r.t("remove_condition")),
                              1
                            ),
                          ]))
                        : (0, n.kq)("", !0),
                    ]),
                  ]),
                ])
              );
            },
          ],
        ]);
        const Li = {
            class: "modal modal-open items-start !animate-none overflow-y-auto",
          },
          ji = {
            class: "modal-box pt-4 pb-6 px-6 mt-20 max-h-none w-full max-w-xl",
          },
          Ni = {
            class:
              "flex justify-between items-center border-b pb-2 mb-2 font-medium",
          },
          Ui = { class: "space-y-1 mb-1" },
          Oi = {
            dir: "auto",
            class: "label text-sm",
            for: "description_field",
          },
          Pi = ["readonly"],
          Wi = { dir: "auto", class: "label text-sm", for: "title_field" },
          Yi = ["readonly"],
          Bi = { class: "base-button w-full mt-4" };
        var Zi = {
          name: "DescriptionModal",
          inject: ["t", "save", "template"],
          props: {
            field: { type: Object, required: !0 },
            editable: { type: Boolean, required: !1, default: !0 },
            buildDefaultName: { type: Function, required: !0 },
          },
          emits: ["close"],
          data() {
            return {
              description: this.field.description,
              title: this.field.title,
            };
          },
          mounted() {
            this.resizeTextarea();
          },
          methods: {
            saveAndClose() {
              (this.field.description = this.description),
                (this.field.title = this.title),
                this.save(),
                this.$emit("close");
            },
            resizeTextarea() {
              const e = this.$refs.textarea;
              (e.style.height = "auto"),
                (e.style.height = e.scrollHeight + "px");
            },
          },
        };
        var Hi = (0, A.Z)(Zi, [
            [
              "render",
              function (e, t, i, s, a, r) {
                return (
                  (0, n.wg)(),
                  (0, n.iD)("div", Li, [
                    (0, n._)("div", {
                      class: "absolute top-0 bottom-0 right-0 left-0",
                      onClick:
                        t[0] ||
                        (t[0] = (0, l.iM)(
                          (t) => e.$emit("close"),
                          ["prevent"]
                        )),
                    }),
                    (0, n._)("div", ji, [
                      (0, n._)("div", Ni, [
                        (0, n._)(
                          "span",
                          null,
                          (0, o.zw)(
                            i.field.name ||
                              i.buildDefaultName(i.field, r.template.fields)
                          ),
                          1
                        ),
                        (0, n._)(
                          "a",
                          {
                            href: "#",
                            class: "text-xl",
                            onClick:
                              t[1] ||
                              (t[1] = (0, l.iM)(
                                (t) => e.$emit("close"),
                                ["prevent"]
                              )),
                          },
                          "\xd7"
                        ),
                      ]),
                      (0, n._)("div", null, [
                        (0, n._)(
                          "form",
                          {
                            onSubmit:
                              t[5] ||
                              (t[5] = (0, l.iM)(
                                (...e) =>
                                  r.saveAndClose && r.saveAndClose(...e),
                                ["prevent"]
                              )),
                          },
                          [
                            (0, n._)("div", Ui, [
                              (0, n._)("div", null, [
                                (0, n._)(
                                  "label",
                                  Oi,
                                  (0, o.zw)(r.t("description")),
                                  1
                                ),
                                (0, n.wy)(
                                  (0, n._)(
                                    "textarea",
                                    {
                                      id: "description_field",
                                      ref: "textarea",
                                      "onUpdate:modelValue":
                                        t[2] ||
                                        (t[2] = (e) => (a.description = e)),
                                      dir: "auto",
                                      class: "base-textarea !text-base w-full",
                                      readonly: !i.editable,
                                      onInput:
                                        t[3] ||
                                        (t[3] = (...e) =>
                                          r.resizeTextarea &&
                                          r.resizeTextarea(...e)),
                                    },
                                    null,
                                    40,
                                    Pi
                                  ),
                                  [[l.nr, a.description]]
                                ),
                              ]),
                              (0, n._)("div", null, [
                                (0, n._)(
                                  "label",
                                  Wi,
                                  (0, o.zw)(r.t("display_title")) +
                                    " (" +
                                    (0, o.zw)(r.t("optional")) +
                                    ") ",
                                  1
                                ),
                                (0, n.wy)(
                                  (0, n._)(
                                    "input",
                                    {
                                      id: "title_field",
                                      "onUpdate:modelValue":
                                        t[4] || (t[4] = (e) => (a.title = e)),
                                      dir: "auto",
                                      readonly: !i.editable,
                                      class: "base-input !text-base w-full",
                                    },
                                    null,
                                    8,
                                    Yi
                                  ),
                                  [[l.nr, a.title]]
                                ),
                              ]),
                            ]),
                            (0, n._)("button", Bi, (0, o.zw)(r.t("save")), 1),
                          ],
                          32
                        ),
                      ]),
                    ]),
                  ])
                );
              },
            ],
          ]),
          Vi = i(1381),
          Ki = i(8721),
          Xi = {
            name: "TemplateField",
            components: {
              Contenteditable: $e,
              IconSettings: ht.Z,
              FieldSettings: ni,
              PaymentSettings: yt,
              IconNewSection: li.Z,
              FormulaModal: yi,
              DescriptionModal: Hi,
              ConditionsModal: Ei,
              IconRouteAltLeft: ii.Z,
              IconTrashX: Vi.Z,
              IconMathFunction: ti.Z,
              FieldType: Qe,
            },
            inject: [
              "template",
              "save",
              "backgroundColor",
              "selectedAreaRef",
              "t",
            ],
            props: {
              field: { type: Object, required: !0 },
              defaultField: { type: Object, required: !1, default: null },
              editable: { type: Boolean, required: !1, default: !0 },
            },
            emits: ["set-draw", "remove", "scroll-to"],
            data: () => ({
              isNameFocus: !1,
              showPaymentModal: !1,
              isShowFormulaModal: !1,
              isShowConditionsModal: !1,
              isShowDescriptionModal: !1,
              renderDropdown: !1,
            }),
            computed: {
              fieldNames: Qe.computed.fieldNames,
              dropdownBgColor() {
                return ["", null, "transparent"].includes(this.backgroundColor)
                  ? "white"
                  : this.backgroundColor;
              },
              schemaAttachmentsIndexes() {
                return (this.template.schema || []).reduce(
                  (e, t, i) => ((e[t.attachment_uuid] = i), e),
                  {}
                );
              },
              sortedAreas() {
                return (this.field.areas || []).sort(
                  (e, t) =>
                    this.schemaAttachmentsIndexes[e.attachment_uuid] -
                    this.schemaAttachmentsIndexes[t.attachment_uuid]
                );
              },
              modalContainerEl() {
                return this.$el
                  .getRootNode()
                  .querySelector("#uvtsign_modal_container");
              },
              defaultName() {
                return this.buildDefaultName(this.field, this.template.fields);
              },
              areas() {
                return this.field.areas || [];
              },
            },
            created() {
              (this.field.preferences ||= {}),
                "date" === this.field.type &&
                  (this.field.preferences.format ||= Intl.DateTimeFormat()
                    .resolvedOptions()
                    .locale.endsWith("-US")
                    ? "MM/DD/YYYY"
                    : "DD/MM/YYYY");
            },
            methods: {
              buildDefaultName(e, t) {
                if ("payment" === e.type && e.preferences?.price) {
                  const { price: t, currency: i } = e.preferences || {},
                    s = new Intl.NumberFormat([], {
                      style: "currency",
                      currency: i,
                    }).format(t);
                  return `${this.fieldNames[e.type]} ${s}`;
                }
                {
                  const i = t.filter((t) => t.type === e.type).indexOf(e),
                    s =
                      { multiple: this.t("select"), radio: this.t("group") }[
                        e.type
                      ] || this.t("field");
                  return `${this.fieldNames[e.type]} ${s} ${i + 1}`;
                }
              },
              onNameFocus(e) {
                (this.isNameFocus = !0),
                  this.field.name ||
                    setTimeout(() => {
                      this.$refs.name.$refs.contenteditable.innerText = " ";
                    }, 1);
              },
              maybeFocusOnOptionArea(e) {
                const t = this.field.areas.find(
                  (t) => t.option_uuid === e.uuid
                );
                t && (this.selectedAreaRef.value = t);
              },
              scrollToFirstArea() {
                return (
                  this.sortedAreas[0] &&
                  this.$emit("scroll-to", this.sortedAreas[0])
                );
              },
              closeDropdown() {
                document.activeElement.blur();
              },
              addOption() {
                this.field.options.push({ value: "", uuid: (0, Ki.Z)() }),
                  this.$nextTick(() => {
                    const e = this.$refs.options.querySelectorAll("input");
                    e[e.length - 1]?.focus();
                  }),
                  this.save();
              },
              removeOption(e) {
                this.field.options.splice(this.field.options.indexOf(e), 1);
                -1 !==
                  this.field.areas.findIndex((t) => t.option_uuid === e.uuid) &&
                  this.field.areas.splice(
                    this.field.areas.findIndex((t) => t.option_uuid === e.uuid),
                    1
                  ),
                  this.save();
              },
              maybeUpdateOptions() {
                delete this.field.default_value,
                  ["radio", "multiple", "select"].includes(this.field.type) ||
                    delete this.field.options,
                  ["radio", "multiple", "select"].includes(this.field.type) &&
                    (this.field.options ||= [{ value: "", uuid: (0, Ki.Z)() }]),
                  (this.field.areas || []).forEach((e) => {
                    "cells" === this.field.type
                      ? (e.cell_w = (2 * e.w) / Math.floor(e.w / e.h))
                      : delete e.cell_w;
                  });
              },
              onNameBlur(e) {
                const t =
                  this.$refs.name.$refs.contenteditable.innerText.trim();
                t
                  ? (this.field.name = t)
                  : ((this.field.name = ""),
                    (this.$refs.name.$refs.contenteditable.innerText =
                      this.defaultName)),
                  (this.isNameFocus = !1),
                  this.save();
              },
            },
          };
        var Ji = (0, A.Z)(Xi, [
          [
            "render",
            function (e, t, i, s, a, r) {
              const d = (0, n.up)("FieldType"),
                u = (0, n.up)("Contenteditable"),
                c = (0, n.up)("IconNewSection"),
                p = (0, n.up)("IconMathFunction"),
                m = (0, n.up)("IconRouteAltLeft"),
                h = (0, n.up)("PaymentSettings"),
                f = (0, n.up)("IconSettings"),
                b = (0, n.up)("FieldSettings"),
                w = (0, n.up)("IconTrashX"),
                g = (0, n.up)("FormulaModal"),
                y = (0, n.up)("ConditionsModal"),
                v = (0, n.up)("DescriptionModal");
              return (
                (0, n.wg)(),
                (0, n.iD)("div", pe, [
                  (0, n._)(
                    "div",
                    {
                      class:
                        "border border-base-300 rounded rounded-tr-none relative group",
                      style: (0, o.j5)({ backgroundColor: r.backgroundColor }),
                    },
                    [
                      (0, n._)("div", me, [
                        (0, n._)("div", {
                          class:
                            "absolute top-0 bottom-0 right-0 left-0 cursor-pointer",
                          onClick:
                            t[0] ||
                            (t[0] = (...e) =>
                              r.scrollToFirstArea && r.scrollToFirstArea(...e)),
                        }),
                        (0, n._)("div", he, [
                          (0, n.Wm)(
                            d,
                            {
                              modelValue: i.field.type,
                              "onUpdate:modelValue": [
                                t[1] || (t[1] = (e) => (i.field.type = e)),
                                t[2] ||
                                  (t[2] = (e) => [
                                    r.maybeUpdateOptions(),
                                    r.save(),
                                  ]),
                              ],
                              editable: i.editable && !i.defaultField,
                              "button-width": 20,
                              "menu-classes": "mt-1.5",
                              "menu-style": {
                                backgroundColor: r.dropdownBgColor,
                              },
                              onClick: r.scrollToFirstArea,
                            },
                            null,
                            8,
                            ["modelValue", "editable", "menu-style", "onClick"]
                          ),
                          (0, n.Wm)(
                            u,
                            {
                              ref: "name",
                              "model-value":
                                (i.defaultField && i.field.title) ||
                                i.field.name ||
                                r.defaultName,
                              editable: i.editable && !i.defaultField,
                              "icon-inline": !0,
                              "icon-width": 18,
                              "icon-stroke-width": 1.6,
                              onFocus:
                                t[3] ||
                                (t[3] = (e) => [
                                  r.onNameFocus(),
                                  r.scrollToFirstArea(),
                                ]),
                              onBlur: r.onNameBlur,
                            },
                            null,
                            8,
                            ["model-value", "editable", "onBlur"]
                          ),
                        ]),
                        a.isNameFocus
                          ? ((0, n.wg)(),
                            (0, n.iD)("div", fe, [
                              "phone" != i.field.type
                                ? ((0, n.wg)(),
                                  (0, n.iD)(
                                    n.HY,
                                    { key: 0 },
                                    [
                                      (0, n.wy)(
                                        (0, n._)(
                                          "input",
                                          {
                                            id: `required-checkbox-${i.field.uuid}`,
                                            "onUpdate:modelValue":
                                              t[4] ||
                                              (t[4] = (e) =>
                                                (i.field.required = e)),
                                            type: "checkbox",
                                            class:
                                              "checkbox checkbox-xs no-animation rounded",
                                            onMousedown:
                                              t[5] ||
                                              (t[5] = (0, l.iM)(() => {}, [
                                                "prevent",
                                              ])),
                                          },
                                          null,
                                          40,
                                          be
                                        ),
                                        [[l.e8, i.field.required]]
                                      ),
                                      (0, n._)(
                                        "label",
                                        {
                                          for: `required-checkbox-${i.field.uuid}`,
                                          class: "label text-xs",
                                          onClick:
                                            t[6] ||
                                            (t[6] = (0, l.iM)(
                                              (e) =>
                                                (i.field.required =
                                                  !i.field.required),
                                              ["prevent"]
                                            )),
                                          onMousedown:
                                            t[7] ||
                                            (t[7] = (0, l.iM)(() => {}, [
                                              "prevent",
                                            ])),
                                        },
                                        (0, o.zw)(r.t("required")),
                                        41,
                                        we
                                      ),
                                    ],
                                    64
                                  ))
                                : (0, n.kq)("", !0),
                            ]))
                          : i.editable
                          ? ((0, n.wg)(),
                            (0, n.iD)("div", ge, [
                              i.field && !i.field.areas?.length
                                ? ((0, n.wg)(),
                                  (0, n.iD)(
                                    "button",
                                    {
                                      key: 0,
                                      title: r.t("draw"),
                                      class:
                                        "relative cursor-pointer text-transparent group-hover:text-base-content",
                                      onClick:
                                        t[8] ||
                                        (t[8] = (t) =>
                                          e.$emit("set-draw", {
                                            field: i.field,
                                          })),
                                    },
                                    [
                                      (0, n.Wm)(c, {
                                        width: 18,
                                        "stroke-width": 1.6,
                                      }),
                                    ],
                                    8,
                                    ye
                                  ))
                                : (0, n.kq)("", !0),
                              i.field.preferences?.formula
                                ? ((0, n.wg)(),
                                  (0, n.iD)(
                                    "button",
                                    {
                                      key: 1,
                                      class:
                                        "relative cursor-pointer text-transparent group-hover:text-base-content",
                                      title: r.t("formula"),
                                      onClick:
                                        t[9] ||
                                        (t[9] = (e) =>
                                          (a.isShowFormulaModal = !0)),
                                    },
                                    [
                                      (0, n.Wm)(p, {
                                        width: 18,
                                        "stroke-width": 1.6,
                                      }),
                                    ],
                                    8,
                                    ve
                                  ))
                                : (0, n.kq)("", !0),
                              i.field.conditions?.length
                                ? ((0, n.wg)(),
                                  (0, n.iD)(
                                    "button",
                                    {
                                      key: 2,
                                      class:
                                        "relative cursor-pointer text-transparent group-hover:text-base-content",
                                      title: r.t("condition"),
                                      onClick:
                                        t[10] ||
                                        (t[10] = (e) =>
                                          (a.isShowConditionsModal = !0)),
                                    },
                                    [
                                      (0, n.Wm)(m, {
                                        width: 18,
                                        "stroke-width": 1.6,
                                      }),
                                    ],
                                    8,
                                    ke
                                  ))
                                : (0, n.kq)("", !0),
                              "payment" === i.field.type
                                ? ((0, n.wg)(),
                                  (0, n.j4)(
                                    h,
                                    { key: 3, field: i.field },
                                    null,
                                    8,
                                    ["field"]
                                  ))
                                : ((0, n.wg)(),
                                  (0, n.iD)(
                                    "span",
                                    {
                                      key: 4,
                                      class: "dropdown dropdown-end",
                                      onMouseenter:
                                        t[18] ||
                                        (t[18] = (e) =>
                                          (a.renderDropdown = !0)),
                                      onTouchstart:
                                        t[19] ||
                                        (t[19] = (e) =>
                                          (a.renderDropdown = !0)),
                                    },
                                    [
                                      (0, n._)(
                                        "label",
                                        {
                                          tabindex: "0",
                                          title: r.t("settings"),
                                          class:
                                            "cursor-pointer text-transparent group-hover:text-base-content",
                                        },
                                        [
                                          (0, n.Wm)(f, {
                                            width: 18,
                                            "stroke-width": 1.6,
                                          }),
                                        ],
                                        8,
                                        xe
                                      ),
                                      a.renderDropdown
                                        ? ((0, n.wg)(),
                                          (0, n.iD)(
                                            "ul",
                                            {
                                              key: 0,
                                              tabindex: "0",
                                              class:
                                                "mt-1.5 dropdown-content menu menu-xs p-2 shadow rounded-box w-52 z-10",
                                              style: (0, o.j5)({
                                                backgroundColor:
                                                  r.dropdownBgColor,
                                              }),
                                              draggable: "true",
                                              onDragstart:
                                                t[16] ||
                                                (t[16] = (0, l.iM)(() => {}, [
                                                  "prevent",
                                                  "stop",
                                                ])),
                                              onClick:
                                                t[17] ||
                                                (t[17] = (...e) =>
                                                  r.closeDropdown &&
                                                  r.closeDropdown(...e)),
                                            },
                                            [
                                              (0, n.Wm)(
                                                b,
                                                {
                                                  field: i.field,
                                                  "default-field":
                                                    i.defaultField,
                                                  editable: i.editable,
                                                  "background-color":
                                                    r.dropdownBgColor,
                                                  onClickFormula:
                                                    t[11] ||
                                                    (t[11] = (e) =>
                                                      (a.isShowFormulaModal =
                                                        !0)),
                                                  onClickDescription:
                                                    t[12] ||
                                                    (t[12] = (e) =>
                                                      (a.isShowDescriptionModal =
                                                        !0)),
                                                  onClickCondition:
                                                    t[13] ||
                                                    (t[13] = (e) =>
                                                      (a.isShowConditionsModal =
                                                        !0)),
                                                  onSetDraw:
                                                    t[14] ||
                                                    (t[14] = (t) =>
                                                      e.$emit("set-draw", t)),
                                                  onScrollTo:
                                                    t[15] ||
                                                    (t[15] = (t) =>
                                                      e.$emit("scroll-to", t)),
                                                },
                                                null,
                                                8,
                                                [
                                                  "field",
                                                  "default-field",
                                                  "editable",
                                                  "background-color",
                                                ]
                                              ),
                                            ],
                                            36
                                          ))
                                        : (0, n.kq)("", !0),
                                    ],
                                    32
                                  )),
                              (0, n._)(
                                "button",
                                {
                                  class:
                                    "relative text-transparent group-hover:text-base-content pr-1",
                                  title: r.t("remove"),
                                  onClick:
                                    t[20] ||
                                    (t[20] = (t) => e.$emit("remove", i.field)),
                                },
                                [
                                  (0, n.Wm)(w, {
                                    width: 18,
                                    "stroke-width": 1.6,
                                  }),
                                ],
                                8,
                                _e
                              ),
                            ]))
                          : (0, n.kq)("", !0),
                      ]),
                      i.field.options
                        ? ((0, n.wg)(),
                          (0, n.iD)(
                            "div",
                            {
                              key: 0,
                              ref: "options",
                              class:
                                "border-t border-base-300 mx-2 pt-2 space-y-1.5",
                              draggable: "true",
                              onDragstart:
                                t[24] ||
                                (t[24] = (0, l.iM)(() => {}, [
                                  "prevent",
                                  "stop",
                                ])),
                            },
                            [
                              ((0, n.wg)(!0),
                              (0, n.iD)(
                                n.HY,
                                null,
                                (0, n.Ko)(
                                  i.field.options,
                                  (s, a) => (
                                    (0, n.wg)(),
                                    (0, n.iD)(
                                      "div",
                                      {
                                        key: s.uuid,
                                        class: "flex space-x-1.5 items-center",
                                      },
                                      [
                                        (0, n._)(
                                          "span",
                                          De,
                                          (0, o.zw)(a + 1) + ". ",
                                          1
                                        ),
                                        i.editable &&
                                        ["radio", "multiple"].includes(
                                          i.field.type
                                        ) &&
                                        (a > 0 ||
                                          i.field.areas.find(
                                            (e) => e.option_uuid
                                          ) ||
                                          !i.field.areas.length) &&
                                        !i.field.areas.find(
                                          (e) => e.option_uuid === s.uuid
                                        )
                                          ? ((0, n.wg)(),
                                            (0, n.iD)("div", Ce, [
                                              (0, n.wy)(
                                                (0, n._)(
                                                  "input",
                                                  {
                                                    "onUpdate:modelValue": (
                                                      e
                                                    ) => (s.value = e),
                                                    class:
                                                      "w-full input input-primary input-xs text-sm bg-transparent !pr-7 -mr-6",
                                                    type: "text",
                                                    dir: "auto",
                                                    required: "",
                                                    placeholder: `${r.t(
                                                      "option"
                                                    )} ${a + 1}`,
                                                    onBlur:
                                                      t[21] ||
                                                      (t[21] = (...e) =>
                                                        r.save && r.save(...e)),
                                                  },
                                                  null,
                                                  40,
                                                  Fe
                                                ),
                                                [[l.nr, s.value]]
                                              ),
                                              (0, n._)(
                                                "button",
                                                {
                                                  title: r.t("draw"),
                                                  tabindex: "-1",
                                                  onClick: (0, l.iM)(
                                                    (t) =>
                                                      e.$emit("set-draw", {
                                                        field: i.field,
                                                        option: s,
                                                      }),
                                                    ["prevent"]
                                                  ),
                                                },
                                                [
                                                  (0, n.Wm)(c, {
                                                    width: 18,
                                                    "stroke-width": 1.6,
                                                  }),
                                                ],
                                                8,
                                                Se
                                              ),
                                            ]))
                                          : (0, n.wy)(
                                              ((0, n.wg)(),
                                              (0, n.iD)(
                                                "input",
                                                {
                                                  key: 1,
                                                  "onUpdate:modelValue": (e) =>
                                                    (s.value = e),
                                                  class:
                                                    "w-full input input-primary input-xs text-sm bg-transparent",
                                                  placeholder: `${r.t(
                                                    "option"
                                                  )} ${a + 1}`,
                                                  type: "text",
                                                  readonly: !i.editable,
                                                  required: "",
                                                  dir: "auto",
                                                  onFocus: (e) =>
                                                    r.maybeFocusOnOptionArea(s),
                                                  onBlur:
                                                    t[22] ||
                                                    (t[22] = (...e) =>
                                                      r.save && r.save(...e)),
                                                },
                                                null,
                                                40,
                                                qe
                                              )),
                                              [[l.nr, s.value]]
                                            ),
                                        i.editable
                                          ? ((0, n.wg)(),
                                            (0, n.iD)(
                                              "button",
                                              {
                                                key: 2,
                                                class: "text-sm w-3.5",
                                                tabindex: "-1",
                                                onClick: (e) =>
                                                  r.removeOption(s),
                                              },
                                              " \xd7 ",
                                              8,
                                              Te
                                            ))
                                          : (0, n.kq)("", !0),
                                      ]
                                    )
                                  )
                                ),
                                128
                              )),
                              i.field.options && !i.editable
                                ? ((0, n.wg)(), (0, n.iD)("div", Me))
                                : i.field.options && i.editable
                                ? ((0, n.wg)(),
                                  (0, n.iD)(
                                    "button",
                                    {
                                      key: 1,
                                      class: "text-center text-sm w-full pb-1",
                                      onClick:
                                        t[23] ||
                                        (t[23] = (...e) =>
                                          r.addOption && r.addOption(...e)),
                                    },
                                    " + " + (0, o.zw)(r.t("add_option")),
                                    1
                                  ))
                                : (0, n.kq)("", !0),
                            ],
                            544
                          ))
                        : (0, n.kq)("", !0),
                    ],
                    4
                  ),
                  a.isShowFormulaModal
                    ? ((0, n.wg)(),
                      (0, n.j4)(
                        n.lR,
                        { key: 0, to: r.modalContainerEl },
                        [
                          (0, n.Wm)(
                            g,
                            {
                              field: i.field,
                              editable: i.editable && !i.defaultField,
                              "build-default-name": r.buildDefaultName,
                              onClose:
                                t[25] ||
                                (t[25] = (e) => (a.isShowFormulaModal = !1)),
                            },
                            null,
                            8,
                            ["field", "editable", "build-default-name"]
                          ),
                        ],
                        8,
                        ["to"]
                      ))
                    : (0, n.kq)("", !0),
                  a.isShowConditionsModal
                    ? ((0, n.wg)(),
                      (0, n.j4)(
                        n.lR,
                        { key: 1, to: r.modalContainerEl },
                        [
                          (0, n.Wm)(
                            y,
                            {
                              field: i.field,
                              "build-default-name": r.buildDefaultName,
                              onClose:
                                t[26] ||
                                (t[26] = (e) => (a.isShowConditionsModal = !1)),
                            },
                            null,
                            8,
                            ["field", "build-default-name"]
                          ),
                        ],
                        8,
                        ["to"]
                      ))
                    : (0, n.kq)("", !0),
                  a.isShowDescriptionModal
                    ? ((0, n.wg)(),
                      (0, n.j4)(
                        n.lR,
                        { key: 2, to: r.modalContainerEl },
                        [
                          (0, n.Wm)(
                            v,
                            {
                              field: i.field,
                              editable: i.editable && !i.defaultField,
                              "build-default-name": r.buildDefaultName,
                              onClose:
                                t[27] ||
                                (t[27] = (e) =>
                                  (a.isShowDescriptionModal = !1)),
                            },
                            null,
                            8,
                            ["field", "editable", "build-default-name"]
                          ),
                        ],
                        8,
                        ["to"]
                      ))
                    : (0, n.kq)("", !0),
                ])
              );
            },
          ],
        ]);
        const Gi = { class: "flex space-x-2 items-end" },
          Qi = {
            class:
              "group/contenteditable-container bg-base-100 rounded-md p-2 border border-base-300 w-full flex justify-between items-end",
          },
          es = { class: "flex items-center space-x-2" },
          ts = { class: "dropdown dropdown-top dropdown-end" },
          is = {
            tabindex: "0",
            class:
              "bg-base-100 cursor-pointer rounded-md p-2 border border-base-300 w-full flex justify-center",
          },
          ss = ["onClick"],
          ls = { class: "py-1 flex items-center" },
          as = ["onClick"],
          ns = { key: 0 },
          os = { class: "py-1" },
          rs = ["title"],
          ds = {
            key: 1,
            ref: "label",
            tabindex: "0",
            class:
              "group cursor-pointer group/contenteditable-container rounded-md p-2 border border-base-300 hover:border-content w-full flex justify-between",
          },
          us = { class: "flex items-center space-x-2" },
          cs = {
            class:
              "flex items-center transition-all duration-75 group-hover:border border-base-content/20 border-dashed w-6 h-6 flex justify-center items-center rounded",
          },
          ps = ["onClick"],
          ms = { class: "py-1 flex items-center" },
          hs = { key: 0, class: "flex" },
          fs = { class: "flex-col pr-1 hidden group-hover:flex -mt-1 h-0" },
          bs = ["title", "onClick"],
          ws = ["title", "onClick"],
          gs = ["onClick"],
          ys = { key: 0 },
          vs = { class: "py-1" };
        var ks = i(7208),
          xs = i(8434),
          _s = i(7967),
          Ds = i(750),
          Cs = {
            name: "FieldSubmitter",
            components: {
              IconUserPlus: ks.Z,
              IconChevronDown: xs.Z,
              Contenteditable: $e,
              IconPlus: _s.Z,
              IconTrashX: Vi.Z,
              IconChevronUp: Ds.Z,
            },
            inject: ["t", "save"],
            props: {
              submitters: { type: Array, required: !0 },
              editable: { type: Boolean, required: !1, default: !0 },
              compact: { type: Boolean, required: !1, default: !1 },
              mobileView: { type: Boolean, required: !1, default: !1 },
              allowAddNew: { type: Boolean, required: !1, default: !0 },
              modelValue: { type: String, required: !0 },
              menuStyle: { type: Object, required: !1, default: () => ({}) },
              menuClasses: {
                type: String,
                required: !1,
                default:
                  "dropdown-content menu p-2 shadow rounded-box w-full z-10",
              },
            },
            emits: [
              "update:model-value",
              "remove",
              "new-submitter",
              "name-change",
            ],
            data: () => ({ renderDropdown: !1 }),
            computed: {
              colors: () => [
                "bg-red-500",
                "bg-sky-500",
                "bg-emerald-500",
                "bg-yellow-300",
                "bg-purple-600",
                "bg-pink-500",
                "bg-cyan-500",
                "bg-orange-500",
                "bg-lime-500",
                "bg-indigo-500",
                "bg-red-500",
                "bg-sky-500",
                "bg-emerald-500",
                "bg-yellow-300",
                "bg-purple-600",
                "bg-pink-500",
                "bg-cyan-500",
                "bg-orange-500",
                "bg-lime-500",
                "bg-indigo-500",
              ],
              names() {
                return [
                  this.t("first_party"),
                  this.t("second_party"),
                  this.t("third_party"),
                  this.t("fourth_party"),
                  this.t("fifth_party"),
                  this.t("sixth_party"),
                  this.t("seventh_party"),
                  this.t("eighth_party"),
                  this.t("ninth_party"),
                  this.t("tenth_party"),
                  this.t("eleventh_party"),
                  this.t("twelfth_party"),
                  this.t("thirteenth_party"),
                  this.t("fourteenth_party"),
                  this.t("fifteenth_party"),
                  this.t("sixteenth_party"),
                  this.t("seventeenth_party"),
                  this.t("eighteenth_party"),
                  this.t("nineteenth_party"),
                  this.t("twentieth_party"),
                ];
              },
              selectedSubmitter() {
                return this.submitters.find((e) => e.uuid === this.modelValue);
              },
            },
            methods: {
              selectSubmitter(e) {
                this.$emit("update:model-value", e.uuid);
              },
              remove(e) {
                window.confirm(this.t("are_you_sure")) &&
                  this.$emit("remove", e);
              },
              move(e, t) {
                const i = this.submitters.indexOf(e);
                this.submitters.splice(i, 1),
                  i + t > this.submitters.length
                    ? this.submitters.unshift(e)
                    : i + t < 0
                    ? this.submitters.push(e)
                    : this.submitters.splice(i + t, 0, e),
                  this.selectSubmitter(e),
                  this.save();
              },
              addSubmitter() {
                const e = {
                  name: this.names[this.submitters.length],
                  uuid: (0, Ki.Z)(),
                };
                this.submitters.push(e),
                  this.$emit("update:model-value", e.uuid),
                  this.$emit("new-submitter", e);
              },
              closeDropdown() {
                document.activeElement.blur();
              },
            },
          };
        var Fs = (0, A.Z)(Cs, [
            [
              "render",
              function (e, t, i, s, a, r) {
                const d = (0, n.up)("Contenteditable"),
                  u = (0, n.up)("IconChevronUp"),
                  c = (0, n.up)("IconTrashX"),
                  p = (0, n.up)("IconUserPlus");
                return i.mobileView
                  ? ((0, n.wg)(),
                    (0, n.iD)(
                      "div",
                      {
                        key: 0,
                        onMouseenter:
                          t[4] || (t[4] = (e) => (a.renderDropdown = !0)),
                        onTouchstart:
                          t[5] || (t[5] = (e) => (a.renderDropdown = !0)),
                      },
                      [
                        (0, n._)("div", Gi, [
                          (0, n._)("div", Qi, [
                            (0, n._)("div", es, [
                              (0, n._)(
                                "span",
                                {
                                  class: (0, o.C_)([
                                    "w-3 h-3 flex-shrink-0 rounded-full",
                                    r.colors[
                                      i.submitters.indexOf(r.selectedSubmitter)
                                    ],
                                  ]),
                                },
                                null,
                                2
                              ),
                              (0, n.Wm)(
                                d,
                                {
                                  modelValue: r.selectedSubmitter.name,
                                  "onUpdate:modelValue": [
                                    t[0] ||
                                      (t[0] = (e) =>
                                        (r.selectedSubmitter.name = e)),
                                    t[1] ||
                                      (t[1] = (t) =>
                                        e.$emit(
                                          "name-change",
                                          r.selectedSubmitter
                                        )),
                                  ],
                                  class: "cursor-text",
                                  "icon-inline": !0,
                                  editable: i.editable,
                                  "select-on-edit-click": !0,
                                  "icon-width": 18,
                                },
                                null,
                                8,
                                ["modelValue", "editable"]
                              ),
                            ]),
                          ]),
                          (0, n._)("div", ts, [
                            (0, n._)("label", is, [
                              (0, n.Wm)(u, { width: "24", height: "24" }),
                            ]),
                            i.editable && a.renderDropdown
                              ? ((0, n.wg)(),
                                (0, n.iD)(
                                  "ul",
                                  {
                                    key: 0,
                                    tabindex: "0",
                                    class: (0, o.C_)([
                                      "rounded-md min-w-max mb-2",
                                      i.menuClasses,
                                    ]),
                                    style: (0, o.j5)(i.menuStyle),
                                    onClick:
                                      t[3] ||
                                      (t[3] = (...e) =>
                                        r.closeDropdown &&
                                        r.closeDropdown(...e)),
                                  },
                                  [
                                    ((0, n.wg)(!0),
                                    (0, n.iD)(
                                      n.HY,
                                      null,
                                      (0, n.Ko)(
                                        i.submitters,
                                        (e, t) => (
                                          (0, n.wg)(),
                                          (0, n.iD)("li", { key: e.uuid }, [
                                            (0, n._)(
                                              "a",
                                              {
                                                href: "#",
                                                class: (0, o.C_)([
                                                  "flex px-2 group justify-between items-center",
                                                  {
                                                    active:
                                                      e === r.selectedSubmitter,
                                                  },
                                                ]),
                                                onClick: (0, l.iM)(
                                                  (t) => r.selectSubmitter(e),
                                                  ["prevent"]
                                                ),
                                              },
                                              [
                                                (0, n._)("span", ls, [
                                                  (0, n._)(
                                                    "span",
                                                    {
                                                      class: (0, o.C_)([
                                                        "rounded-full w-3 h-3 ml-1 mr-3",
                                                        r.colors[t],
                                                      ]),
                                                    },
                                                    null,
                                                    2
                                                  ),
                                                  (0, n._)(
                                                    "span",
                                                    null,
                                                    (0, o.zw)(e.name),
                                                    1
                                                  ),
                                                ]),
                                                i.submitters.length > 1 &&
                                                i.editable
                                                  ? ((0, n.wg)(),
                                                    (0, n.iD)(
                                                      "button",
                                                      {
                                                        key: 0,
                                                        class: "px-2",
                                                        onClick: (0, l.iM)(
                                                          (t) => r.remove(e),
                                                          ["prevent", "stop"]
                                                        ),
                                                      },
                                                      [
                                                        (0, n.Wm)(c, {
                                                          width: 18,
                                                        }),
                                                      ],
                                                      8,
                                                      as
                                                    ))
                                                  : (0, n.kq)("", !0),
                                              ],
                                              10,
                                              ss
                                            ),
                                          ])
                                        )
                                      ),
                                      128
                                    )),
                                    i.submitters.length < r.names.length &&
                                    i.editable
                                      ? ((0, n.wg)(),
                                        (0, n.iD)("li", ns, [
                                          (0, n._)(
                                            "a",
                                            {
                                              href: "#",
                                              class: "flex px-2",
                                              onClick:
                                                t[2] ||
                                                (t[2] = (0, l.iM)(
                                                  (...e) =>
                                                    r.addSubmitter &&
                                                    r.addSubmitter(...e),
                                                  ["prevent"]
                                                )),
                                            },
                                            [
                                              (0, n.Wm)(p, {
                                                width: 20,
                                                "stroke-width": 1.6,
                                              }),
                                              (0, n._)(
                                                "span",
                                                os,
                                                (0, o.zw)(r.t("add")) +
                                                  " " +
                                                  (0, o.zw)(
                                                    r.names[i.submitters.length]
                                                  ),
                                                1
                                              ),
                                            ]
                                          ),
                                        ]))
                                      : (0, n.kq)("", !0),
                                  ],
                                  6
                                ))
                              : (0, n.kq)("", !0),
                          ]),
                        ]),
                      ],
                      32
                    ))
                  : ((0, n.wg)(),
                    (0, n.iD)(
                      "div",
                      {
                        key: 1,
                        class: "dropdown",
                        onMouseenter:
                          t[10] || (t[10] = (e) => (a.renderDropdown = !0)),
                        onTouchstart:
                          t[11] || (t[11] = (e) => (a.renderDropdown = !0)),
                      },
                      [
                        i.compact
                          ? ((0, n.wg)(),
                            (0, n.iD)(
                              "label",
                              {
                                key: 0,
                                tabindex: "0",
                                title: r.selectedSubmitter?.name,
                                class:
                                  "cursor-pointer text-base-100 flex h-full items-center justify-center",
                              },
                              [
                                (0, n._)(
                                  "button",
                                  {
                                    class: (0, o.C_)([
                                      "mx-1 w-3 h-3 rounded-full",
                                      r.colors[
                                        i.submitters.indexOf(
                                          r.selectedSubmitter
                                        )
                                      ],
                                    ]),
                                  },
                                  null,
                                  2
                                ),
                              ],
                              8,
                              rs
                            ))
                          : ((0, n.wg)(),
                            (0, n.iD)(
                              "label",
                              ds,
                              [
                                (0, n._)("div", us, [
                                  (0, n._)(
                                    "span",
                                    {
                                      class: (0, o.C_)([
                                        "w-3 h-3 rounded-full",
                                        r.colors[
                                          i.submitters.indexOf(
                                            r.selectedSubmitter
                                          )
                                        ],
                                      ]),
                                    },
                                    null,
                                    2
                                  ),
                                  (0, n.Wm)(
                                    d,
                                    {
                                      modelValue: r.selectedSubmitter.name,
                                      "onUpdate:modelValue": [
                                        t[6] ||
                                          (t[6] = (e) =>
                                            (r.selectedSubmitter.name = e)),
                                        t[7] ||
                                          (t[7] = (t) =>
                                            e.$emit(
                                              "name-change",
                                              r.selectedSubmitter
                                            )),
                                      ],
                                      class: "cursor-text",
                                      "icon-inline": !0,
                                      editable: i.editable,
                                      "select-on-edit-click": !0,
                                      "icon-width": 18,
                                    },
                                    null,
                                    8,
                                    ["modelValue", "editable"]
                                  ),
                                ]),
                                (0, n._)("span", cs, [
                                  ((0, n.wg)(),
                                  (0, n.j4)(
                                    (0, n.LL)(
                                      i.editable
                                        ? "IconPlus"
                                        : "IconChevronDown"
                                    ),
                                    { width: "18", height: "18" }
                                  )),
                                ]),
                              ],
                              512
                            )),
                        (!i.editable && i.compact) || !a.renderDropdown
                          ? (0, n.kq)("", !0)
                          : ((0, n.wg)(),
                            (0, n.iD)(
                              "ul",
                              {
                                key: 2,
                                tabindex: "0",
                                class: (0, o.C_)(i.menuClasses),
                                style: (0, o.j5)(i.menuStyle),
                                onClick:
                                  t[9] ||
                                  (t[9] = (...e) =>
                                    r.closeDropdown && r.closeDropdown(...e)),
                              },
                              [
                                ((0, n.wg)(!0),
                                (0, n.iD)(
                                  n.HY,
                                  null,
                                  (0, n.Ko)(
                                    i.submitters,
                                    (t, s) => (
                                      (0, n.wg)(),
                                      (0, n.iD)("li", { key: t.uuid }, [
                                        (0, n._)(
                                          "a",
                                          {
                                            href: "#",
                                            class: (0, o.C_)([
                                              "flex px-2 group justify-between items-center",
                                              {
                                                active:
                                                  t === r.selectedSubmitter,
                                                "py-0.5":
                                                  i.submitters.length > 8,
                                              },
                                            ]),
                                            onClick: (0, l.iM)(
                                              (e) => r.selectSubmitter(t),
                                              ["prevent"]
                                            ),
                                          },
                                          [
                                            (0, n._)("span", ms, [
                                              (0, n._)(
                                                "span",
                                                {
                                                  class: (0, o.C_)([
                                                    "rounded-full w-3 h-3 ml-1 mr-3",
                                                    r.colors[s],
                                                  ]),
                                                },
                                                null,
                                                2
                                              ),
                                              (0, n._)(
                                                "span",
                                                null,
                                                (0, o.zw)(t.name),
                                                1
                                              ),
                                            ]),
                                            !i.compact &&
                                            i.submitters.length > 1 &&
                                            i.editable
                                              ? ((0, n.wg)(),
                                                (0, n.iD)("div", hs, [
                                                  (0, n._)("div", fs, [
                                                    (0, n._)(
                                                      "button",
                                                      {
                                                        title: r.t("up"),
                                                        class: "relative w-2",
                                                        style: {
                                                          "font-size": "10px",
                                                          "margin-bottom":
                                                            "-4px",
                                                        },
                                                        onClick: (0, l.iM)(
                                                          (i) => [
                                                            r.move(t, -1),
                                                            e.$refs.label.focus(),
                                                          ],
                                                          ["prevent", "stop"]
                                                        ),
                                                      },
                                                      " \u25b2 ",
                                                      8,
                                                      bs
                                                    ),
                                                    (0, n._)(
                                                      "button",
                                                      {
                                                        title: r.t("down"),
                                                        class: "relative w-2",
                                                        style: {
                                                          "font-size": "10px",
                                                          "margin-top": "-4px",
                                                        },
                                                        onClick: (0, l.iM)(
                                                          (i) => [
                                                            r.move(t, 1),
                                                            e.$refs.label.focus(),
                                                          ],
                                                          ["prevent", "stop"]
                                                        ),
                                                      },
                                                      " \u25bc ",
                                                      8,
                                                      ws
                                                    ),
                                                  ]),
                                                  !i.compact &&
                                                  i.submitters.length > 1 &&
                                                  i.editable
                                                    ? ((0, n.wg)(),
                                                      (0, n.iD)(
                                                        "button",
                                                        {
                                                          key: 0,
                                                          class:
                                                            "hidden group-hover:block px-2",
                                                          onClick: (0, l.iM)(
                                                            (e) => r.remove(t),
                                                            ["prevent", "stop"]
                                                          ),
                                                        },
                                                        [
                                                          (0, n.Wm)(c, {
                                                            width: 18,
                                                          }),
                                                        ],
                                                        8,
                                                        gs
                                                      ))
                                                    : (0, n.kq)("", !0),
                                                ]))
                                              : (0, n.kq)("", !0),
                                          ],
                                          10,
                                          ps
                                        ),
                                      ])
                                    )
                                  ),
                                  128
                                )),
                                i.submitters.length < r.names.length &&
                                i.editable &&
                                i.allowAddNew
                                  ? ((0, n.wg)(),
                                    (0, n.iD)("li", ys, [
                                      (0, n._)(
                                        "a",
                                        {
                                          href: "#",
                                          class: "flex px-2",
                                          onClick:
                                            t[8] ||
                                            (t[8] = (0, l.iM)(
                                              (...e) =>
                                                r.addSubmitter &&
                                                r.addSubmitter(...e),
                                              ["prevent"]
                                            )),
                                        },
                                        [
                                          (0, n.Wm)(p, {
                                            width: 20,
                                            "stroke-width": 1.6,
                                          }),
                                          (0, n._)(
                                            "span",
                                            vs,
                                            (0, o.zw)(r.t("add")) +
                                              " " +
                                              (0, o.zw)(
                                                r.names[i.submitters.length]
                                              ),
                                            1
                                          ),
                                        ]
                                      ),
                                    ]))
                                  : (0, n.kq)("", !0),
                              ],
                              6
                            )),
                      ],
                      32
                    ));
              },
            ],
          ]),
          Ss = i(3098),
          qs = i(2676);
        const Ts = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            fill: "none",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
          },
          Ms = [
            (0, n.uE)(
              '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>',
              7
            ),
          ];
        var Is = { name: "DragIcon" };
        var Rs = (0, A.Z)(Is, [
            [
              "render",
              function (e, t, i, s, l, a) {
                return (0, n.wg)(), (0, n.iD)("svg", Ts, Ms);
              },
            ],
          ]),
          $s = {
            name: "TemplateFields",
            components: {
              Field: Ji,
              FieldType: Qe,
              IconCirclePlus: Ss.Z,
              FieldSubmitter: Fs,
              IconDrag: Rs,
              IconLock: qs.Z,
            },
            inject: [
              "save",
              "backgroundColor",
              "withPhone",
              "withPayment",
              "t",
              "fieldsDragFieldRef",
            ],
            props: {
              fields: { type: Array, required: !0 },
              withHelp: { type: Boolean, required: !1, default: !0 },
              editable: { type: Boolean, required: !1, default: !0 },
              defaultFields: { type: Array, required: !1, default: () => [] },
              defaultRequiredFields: {
                type: Array,
                required: !1,
                default: () => [],
              },
              onlyDefinedFields: { type: Boolean, required: !1, default: !0 },
              drawFieldType: { type: String, required: !1, default: "" },
              defaultSubmitters: {
                type: Array,
                required: !1,
                default: () => [],
              },
              withStickySubmitters: {
                type: Boolean,
                required: !1,
                default: !0,
              },
              fieldTypes: { type: Array, required: !1, default: () => [] },
              submitters: { type: Array, required: !0 },
              selectedSubmitter: { type: Object, required: !0 },
            },
            emits: [
              "add-field",
              "set-draw",
              "set-draw-type",
              "set-drag",
              "drag-end",
              "scroll-to-area",
              "change-submitter",
            ],
            data: () => ({ defaultFieldsSearch: "" }),
            computed: {
              fieldNames: Qe.computed.fieldNames,
              fieldIcons: Qe.computed.fieldIcons,
              isShowFieldSearch() {
                return this.submitterDefaultFields.length > 15;
              },
              fieldIconsSorted() {
                return this.fieldTypes.length
                  ? this.fieldTypes.reduce(
                      (e, t) => ((e[t] = this.fieldIcons[t]), e),
                      {}
                    )
                  : this.fieldIcons;
              },
              submitterFields() {
                return this.fields.filter(
                  (e) => e.submitter_uuid === this.selectedSubmitter.uuid
                );
              },
              submitterDefaultFields() {
                return this.defaultFields.filter(
                  (e) =>
                    !this.submitterFields.find((t) => t.name === e.name) &&
                    (!e.role || e.role === this.selectedSubmitter.name)
                );
              },
              filteredSubmitterDefaultFields() {
                return this.defaultFieldsSearch
                  ? this.submitterDefaultFields.filter((e) =>
                      e.name
                        .toLowerCase()
                        .includes(this.defaultFieldsSearch.toLowerCase())
                    )
                  : this.submitterDefaultFields;
              },
            },
            methods: {
              onDragstart(e) {
                this.$emit("set-drag", e);
              },
              onFieldDragover(e) {
                const t = e.target.closest("[data-uuid]"),
                  i = this.$refs.fields.querySelector(
                    `[data-uuid="${this.fieldsDragFieldRef.value.uuid}"]`
                  );
                if (i && t && t !== i) {
                  const e = Array.from(this.$refs.fields.children);
                  e.indexOf(i) < e.indexOf(t) ? t.after(i) : t.before(i);
                }
              },
              reorderFields() {
                Array.from(this.$refs.fields.children).forEach((e, t) => {
                  if (e.dataset.uuid !== this.fields[t].uuid) {
                    const i = this.fields.find(
                      (t) => t.uuid === e.dataset.uuid
                    );
                    this.fields.splice(this.fields.indexOf(i), 1),
                      this.fields.splice(t, 0, i);
                  }
                }),
                  this.save();
              },
              removeSubmitter(e) {
                [...this.fields].forEach((t) => {
                  t.submitter_uuid === e.uuid && this.removeField(t);
                }),
                  this.submitters.splice(this.submitters.indexOf(e), 1),
                  this.selectedSubmitter === e &&
                    this.$emit("change-submitter", this.submitters[0]),
                  this.save();
              },
              removeField(e) {
                this.fields.splice(this.fields.indexOf(e), 1),
                  this.fields.forEach((t) => {
                    (t.conditions || []).forEach((i) => {
                      i.field_uuid === e.uuid &&
                        t.conditions.splice(t.conditions.indexOf(i), 1);
                    });
                  }),
                  this.save();
              },
            },
          };
        const As = (0, A.Z)($s, [
          [
            "render",
            function (e, t, i, s, a, r) {
              const d = (0, n.up)("FieldSubmitter"),
                u = (0, n.up)("Field"),
                c = (0, n.up)("IconDrag"),
                p = (0, n.up)("FieldType"),
                m = (0, n.up)("IconLock");
              return (
                (0, n.wg)(),
                (0, n.iD)(
                  n.HY,
                  null,
                  [
                    (0, n._)(
                      "div",
                      {
                        class: (0, o.C_)(
                          i.withStickySubmitters ? "sticky top-0 z-10" : ""
                        ),
                      },
                      [
                        (0, n.Wm)(
                          d,
                          {
                            "model-value": i.selectedSubmitter.uuid,
                            class: "roles-dropdown w-full rounded-lg",
                            style: (0, o.j5)(
                              i.withStickySubmitters
                                ? { backgroundColor: r.backgroundColor }
                                : {}
                            ),
                            submitters: i.submitters,
                            "menu-style": {
                              backgroundColor: [
                                "",
                                null,
                                "transparent",
                              ].includes(r.backgroundColor)
                                ? "white"
                                : r.backgroundColor,
                            },
                            editable: i.editable && !i.defaultSubmitters.length,
                            onNewSubmitter: r.save,
                            onRemove: r.removeSubmitter,
                            onNameChange: r.save,
                            "onUpdate:modelValue":
                              t[0] ||
                              (t[0] = (t) =>
                                e.$emit(
                                  "change-submitter",
                                  i.submitters.find((e) => e.uuid === t)
                                )),
                          },
                          null,
                          8,
                          [
                            "model-value",
                            "style",
                            "submitters",
                            "menu-style",
                            "editable",
                            "onNewSubmitter",
                            "onRemove",
                            "onNameChange",
                          ]
                        ),
                      ],
                      2
                    ),
                    (0, n._)(
                      "div",
                      {
                        ref: "fields",
                        class: "fields mb-1 mt-2",
                        onDragover:
                          t[4] ||
                          (t[4] = (0, l.iM)(
                            (...e) =>
                              r.onFieldDragover && r.onFieldDragover(...e),
                            ["prevent"]
                          )),
                        onDrop:
                          t[5] ||
                          (t[5] = (...e) =>
                            r.reorderFields && r.reorderFields(...e)),
                      },
                      [
                        ((0, n.wg)(!0),
                        (0, n.iD)(
                          n.HY,
                          null,
                          (0, n.Ko)(
                            r.submitterFields,
                            (s) => (
                              (0, n.wg)(),
                              (0, n.j4)(
                                u,
                                {
                                  key: s.uuid,
                                  "data-uuid": s.uuid,
                                  field: s,
                                  "type-index": i.fields
                                    .filter((e) => e.type === s.type)
                                    .indexOf(s),
                                  editable:
                                    i.editable &&
                                    (!r.fieldsDragFieldRef.value ||
                                      r.fieldsDragFieldRef.value !== s),
                                  "default-field": i.defaultFields.find(
                                    (e) => e.name === s.name
                                  ),
                                  draggable: i.editable,
                                  onDragstart: (e) =>
                                    (r.fieldsDragFieldRef.value = s),
                                  onDragend:
                                    t[1] ||
                                    (t[1] = (e) =>
                                      (r.fieldsDragFieldRef.value = null)),
                                  onRemove: r.removeField,
                                  onScrollTo:
                                    t[2] ||
                                    (t[2] = (t) =>
                                      e.$emit("scroll-to-area", t)),
                                  onSetDraw:
                                    t[3] ||
                                    (t[3] = (t) => e.$emit("set-draw", t)),
                                },
                                null,
                                8,
                                [
                                  "data-uuid",
                                  "field",
                                  "type-index",
                                  "editable",
                                  "default-field",
                                  "draggable",
                                  "onDragstart",
                                  "onRemove",
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ],
                      544
                    ),
                    r.submitterDefaultFields.length && i.editable
                      ? ((0, n.wg)(),
                        (0, n.iD)("div", H, [
                          V,
                          r.isShowFieldSearch
                            ? ((0, n.wg)(),
                              (0, n.iD)(
                                n.HY,
                                { key: 0 },
                                [
                                  (0, n.wy)(
                                    (0, n._)(
                                      "input",
                                      {
                                        "onUpdate:modelValue":
                                          t[6] ||
                                          (t[6] = (e) =>
                                            (a.defaultFieldsSearch = e)),
                                        placeholder: r.t("search_field"),
                                        class:
                                          "input input-ghost input-xs px-0 text-base mb-2 !outline-0 !rounded bg-transparent w-full",
                                      },
                                      null,
                                      8,
                                      K
                                    ),
                                    [[l.nr, a.defaultFieldsSearch]]
                                  ),
                                  X,
                                ],
                                64
                              ))
                            : (0, n.kq)("", !0),
                          (0, n._)(
                            "div",
                            {
                              class: "overflow-auto relative",
                              style: (0, o.j5)({
                                maxHeight: r.isShowFieldSearch ? "210px" : "",
                                minHeight: r.isShowFieldSearch ? "210px" : "",
                              }),
                            },
                            [
                              !r.filteredSubmitterDefaultFields.length &&
                              a.defaultFieldsSearch
                                ? ((0, n.wg)(),
                                  (0, n.iD)("div", J, [
                                    (0, n._)(
                                      "div",
                                      null,
                                      (0, o.zw)(r.t("field_not_found")),
                                      1
                                    ),
                                    (0, n._)(
                                      "a",
                                      {
                                        href: "#",
                                        class: "link",
                                        onClick:
                                          t[7] ||
                                          (t[7] = (0, l.iM)(
                                            (e) => (a.defaultFieldsSearch = ""),
                                            ["prevent"]
                                          )),
                                      },
                                      (0, o.zw)(r.t("clear")),
                                      1
                                    ),
                                  ]))
                                : (0, n.kq)("", !0),
                              ((0, n.wg)(!0),
                              (0, n.iD)(
                                n.HY,
                                null,
                                (0, n.Ko)(
                                  r.filteredSubmitterDefaultFields,
                                  (s) => (
                                    (0, n.wg)(),
                                    (0, n.iD)(
                                      "div",
                                      {
                                        key: s.name,
                                        style: (0, o.j5)({
                                          backgroundColor: r.backgroundColor,
                                        }),
                                        draggable: "true",
                                        class:
                                          "default-field border border-base-300 rounded rounded-tr-none relative group mb-2",
                                        onDragstart: (e) =>
                                          r.onDragstart({ type: "text", ...s }),
                                        onDragend:
                                          t[8] ||
                                          (t[8] = (t) => e.$emit("drag-end")),
                                      },
                                      [
                                        (0, n._)("div", Q, [
                                          (0, n._)("div", ee, [
                                            (0, n.Wm)(c),
                                            (0, n.Wm)(
                                              p,
                                              {
                                                "model-value": s.type || "text",
                                                editable: !1,
                                                "button-width": 20,
                                              },
                                              null,
                                              8,
                                              ["model-value"]
                                            ),
                                            (0, n._)(
                                              "span",
                                              te,
                                              (0, o.zw)(s.title || s.name),
                                              1
                                            ),
                                          ]),
                                          i.defaultRequiredFields.includes(s)
                                            ? ((0, n.wg)(),
                                              (0, n.iD)(
                                                "span",
                                                {
                                                  key: 0,
                                                  "data-tip": r.t("required"),
                                                  class:
                                                    "text-red-400 text-3xl pr-1.5 tooltip tooltip-left h-8",
                                                },
                                                " * ",
                                                8,
                                                ie
                                              ))
                                            : (0, n.kq)("", !0),
                                        ]),
                                      ],
                                      44,
                                      G
                                    )
                                  )
                                ),
                                128
                              )),
                            ],
                            4
                          ),
                        ]))
                      : (0, n.kq)("", !0),
                    i.editable && !i.onlyDefinedFields
                      ? ((0, n.wg)(),
                        (0, n.iD)("div", se, [
                          ((0, n.wg)(!0),
                          (0, n.iD)(
                            n.HY,
                            null,
                            (0, n.Ko)(
                              r.fieldIconsSorted,
                              (s, l) => (
                                (0, n.wg)(),
                                (0, n.iD)(
                                  n.HY,
                                  { key: l },
                                  [
                                    (0 !== i.fieldTypes.length &&
                                      !i.fieldTypes.includes(l)) ||
                                    (!r.withPhone && "phone" == l) ||
                                    (!r.withPayment && "payment" == l)
                                      ? "phone" != l ||
                                        (0 !== i.fieldTypes.length &&
                                          !i.fieldTypes.includes(l))
                                        ? (0, n.kq)("", !0)
                                        : ((0, n.wg)(),
                                          (0, n.iD)(
                                            "div",
                                            {
                                              key: 1,
                                              class: (0, o.C_)([
                                                "tooltip tooltip-bottom flex",
                                                {
                                                  "tooltip-bottom-end":
                                                    r.withPayment,
                                                  "tooltip-bottom":
                                                    !r.withPayment,
                                                },
                                              ]),
                                              "data-tip":
                                                "Unlock SMS-verified phone number field with paid plan. Use text field for phone numbers without verification.",
                                            },
                                            [
                                              (0, n._)(
                                                "a",
                                                {
                                                  href: "https://www.uvtsign.co/pricing",
                                                  target: "_blank",
                                                  class:
                                                    "opacity-50 flex items-center justify-center border border-dashed border-base-300 w-full rounded relative",
                                                  style: (0, o.j5)({
                                                    backgroundColor:
                                                      r.backgroundColor,
                                                  }),
                                                },
                                                [
                                                  (0, n._)("div", oe, [
                                                    (0, n.Wm)(m, {
                                                      width: "18",
                                                      height: "18",
                                                      "stroke-width": "1.5",
                                                    }),
                                                  ]),
                                                  (0, n._)("div", re, [
                                                    ((0, n.wg)(),
                                                    (0, n.j4)((0, n.LL)(s))),
                                                    (0, n._)(
                                                      "span",
                                                      de,
                                                      (0, o.zw)(
                                                        r.fieldNames[l]
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                ],
                                                4
                                              ),
                                            ],
                                            2
                                          ))
                                      : ((0, n.wg)(),
                                        (0, n.iD)(
                                          "button",
                                          {
                                            key: 0,
                                            draggable: "true",
                                            class: (0, o.C_)([
                                              "field-type-button group flex items-center justify-center border border-dashed w-full rounded relative",
                                              i.drawFieldType === l
                                                ? "border-base-content/40"
                                                : "border-base-300 hover:border-base-content/20",
                                            ]),
                                            style: (0, o.j5)({
                                              backgroundColor:
                                                r.backgroundColor,
                                            }),
                                            onDragstart: (e) =>
                                              r.onDragstart({ type: l }),
                                            onDragend:
                                              t[9] ||
                                              (t[9] = (t) =>
                                                e.$emit("drag-end")),
                                            onClick: (t) =>
                                              ["file", "payment"].includes(l)
                                                ? e.$emit("add-field", l)
                                                : e.$emit("set-draw-type", l),
                                          },
                                          [
                                            (0, n._)(
                                              "div",
                                              {
                                                class: (0, o.C_)([
                                                  "flex items-console transition-all cursor-grab h-full absolute left-0",
                                                  i.drawFieldType === l
                                                    ? "bg-base-200/50"
                                                    : "group-hover:bg-base-200/50",
                                                ]),
                                              },
                                              [
                                                (0, n.Wm)(c, {
                                                  class: "my-auto",
                                                }),
                                              ],
                                              2
                                            ),
                                            (0, n._)("div", ae, [
                                              ((0, n.wg)(),
                                              (0, n.j4)((0, n.LL)(s))),
                                              (0, n._)(
                                                "span",
                                                ne,
                                                (0, o.zw)(r.fieldNames[l]),
                                                1
                                              ),
                                            ]),
                                          ],
                                          46,
                                          le
                                        )),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : (0, n.kq)("", !0),
                    i.fields.length < 4 && i.editable && i.withHelp
                      ? ((0, n.wg)(), (0, n.iD)("div", ue, ce))
                      : (0, n.kq)("", !0),
                  ],
                  64
                )
              );
            },
          ],
        ]);
        var zs = As;
        const Es = { class: "absolute text-center w-full bottom-0 pr-3 mb-4" },
          Ls = {
            class:
              "w-full bg-base-200 px-4 py-2 rounded-md inline-flex space-x-2 mx-auto items-center justify-between mb-2 z-20 md:hidden",
          },
          js = { class: "flex items-center space-x-2" };
        var Ns = {
          name: "MobileDrawField",
          components: { Field: Ji, FieldSubmitter: Fs },
          inject: ["save", "t", "backgroundColor"],
          props: {
            drawField: { type: Object, required: !0 },
            editable: { type: Boolean, required: !1, default: !0 },
            submitters: { type: Array, required: !0 },
            fields: { type: Array, required: !0 },
            selectedSubmitter: { type: Object, required: !0 },
          },
          emits: ["change-submitter", "cancel"],
          computed: {
            fieldNames: Qe.computed.fieldNames,
            fieldIcons: Qe.computed.fieldIcons,
          },
          methods: {
            removeSubmitter(e) {
              [...this.fields].forEach((t) => {
                t.submitter_uuid === e.uuid && this.removeField(t);
              }),
                this.submitters.splice(this.submitters.indexOf(e), 1),
                this.selectedSubmitter === e &&
                  this.$emit("change-submitter", this.submitters[0]),
                this.save();
            },
            removeField(e) {
              this.fields.splice(this.fields.indexOf(e), 1), this.save();
            },
          },
        };
        var Us = (0, A.Z)(Ns, [
          [
            "render",
            function (e, t, i, s, a, r) {
              const d = (0, n.up)("FieldSubmitter");
              return (
                (0, n.wg)(),
                (0, n.iD)("div", Es, [
                  (0, n._)("span", Ls, [
                    (0, n._)("div", js, [
                      ((0, n.wg)(),
                      (0, n.j4)((0, n.LL)(r.fieldIcons[i.drawField.type]), {
                        width: 20,
                        height: 20,
                        class: "inline",
                        "stroke-width": 1.6,
                      })),
                      (0, n._)(
                        "span",
                        null,
                        (0, o.zw)(
                          r
                            .t("draw_field")
                            .replace("{field}", r.fieldNames[i.drawField.type])
                        ),
                        1
                      ),
                    ]),
                    (0, n._)(
                      "a",
                      {
                        href: "#",
                        class: "link block text-center",
                        onClick:
                          t[0] ||
                          (t[0] = (0, l.iM)(
                            (t) => e.$emit("cancel"),
                            ["prevent"]
                          )),
                      },
                      (0, o.zw)(r.t("cancel")),
                      1
                    ),
                  ]),
                  (0, n.Wm)(
                    d,
                    {
                      "model-value": i.selectedSubmitter.uuid,
                      submitters: i.submitters,
                      editable: i.editable,
                      "mobile-view": !0,
                      "menu-style": {
                        backgroundColor: ["", null, "transparent"].includes(
                          r.backgroundColor
                        )
                          ? "white"
                          : r.backgroundColor,
                      },
                      onNewSubmitter: r.save,
                      onRemove: r.removeSubmitter,
                      onNameChange: r.save,
                      "onUpdate:modelValue":
                        t[1] ||
                        (t[1] = (t) =>
                          e.$emit(
                            "change-submitter",
                            i.submitters.find((e) => e.uuid === t)
                          )),
                    },
                    null,
                    8,
                    [
                      "model-value",
                      "submitters",
                      "editable",
                      "menu-style",
                      "onNewSubmitter",
                      "onRemove",
                      "onNameChange",
                    ]
                  ),
                ])
              );
            },
          ],
        ]);
        const Os = ["src", "width", "height"];
        const Ps = { key: 1, class: "top-0 bottom-0 right-0 left-0 absolute" },
          Ws = ["contenteditable"],
          Ys = { key: 1, class: "flex items-center ml-1.5" },
          Bs = ["id"],
          Zs = ["for"],
          Hs = ["title"],
          Vs = ["title"],
          Ks = { key: 1, class: "whitespace-pre-wrap" },
          Xs = { key: 2, class: "whitespace-pre-wrap" },
          Js = {
            ref: "touchTarget",
            class: "absolute top-0 bottom-0 right-0 left-0 cursor-pointer",
          };
        var Gs = i(3361),
          Qs = i(3245),
          el = i(4762),
          tl = {
            name: "FieldArea",
            components: {
              FieldType: Qe,
              IconCheck: Gs.Z,
              FieldSettings: ni,
              FormulaModal: yi,
              IconDotsVertical: Qs.Z,
              DescriptionModal: Hi,
              ConditionsModal: Ei,
              FieldSubmitter: Fs,
              IconX: el.Z,
            },
            inject: ["template", "selectedAreaRef", "save", "t"],
            props: {
              area: { type: Object, required: !0 },
              isDraw: { type: Boolean, required: !1, default: !1 },
              defaultField: { type: Object, required: !1, default: null },
              defaultSubmitters: {
                type: Array,
                required: !1,
                default: () => [],
              },
              editable: { type: Boolean, required: !1, default: !0 },
              field: { type: Object, required: !1, default: null },
            },
            emits: [
              "start-resize",
              "stop-resize",
              "start-drag",
              "stop-drag",
              "remove",
              "scroll-to",
            ],
            data: () => ({
              isShowFormulaModal: !1,
              isShowConditionsModal: !1,
              isSettingsFocus: !1,
              isShowDescriptionModal: !1,
              isResize: !1,
              isDragged: !1,
              renderDropdown: !1,
              isNameFocus: !1,
              textOverflowChars: 0,
              dragFrom: { x: 0, y: 0 },
            }),
            computed: {
              fieldNames: Qe.computed.fieldNames,
              fieldIcons: Qe.computed.fieldIcons,
              modalContainerEl() {
                return this.$el
                  .getRootNode()
                  .querySelector("#uvtsign_modal_container");
              },
              defaultName() {
                return this.buildDefaultName(this.field, this.template.fields);
              },
              alignClasses: () => ({
                center: "justify-center",
                left: "justify-start",
                right: "justify-end",
              }),
              optionIndexText() {
                return this.area.option_uuid && this.field.options
                  ? `${
                      this.field.options.findIndex(
                        (e) => e.uuid === this.area.option_uuid
                      ) + 1
                    }.`
                  : "";
              },
              cells() {
                const e = [];
                let t = 0;
                for (
                  ;
                  t + (this.area.cell_w + this.area.cell_w / 4) < this.area.w;

                )
                  (t += this.area.cell_w || 9999999), e.push(t);
                return e;
              },
              submitter() {
                return this.template.submitters.find(
                  (e) => e.uuid === this.field.submitter_uuid
                );
              },
              submitterIndex() {
                return this.template.submitters.indexOf(this.submitter);
              },
              borderColors: () => [
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
              ],
              bgColors: () => [
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
              ],
              isSelected() {
                return this.selectedAreaRef.value === this.area;
              },
              positionStyle() {
                const { x: e, y: t, w: i, h: s } = this.area;
                return {
                  top: 100 * t + "%",
                  left: 100 * e + "%",
                  width: 100 * i + "%",
                  height: 100 * s + "%",
                };
              },
            },
            watch: {
              "field.default_value"() {
                this.$nextTick(() => {
                  ["date", "text", "number"].includes(this.field.type) &&
                    this.field.default_value &&
                    this.$refs.textContainer &&
                    (0 === this.textOverflowChars ||
                      this.textOverflowChars - 4 >
                        `${this.field.default_value}`.length) &&
                    (this.textOverflowChars =
                      this.$el.clientHeight <
                      this.$refs.textContainer.clientHeight
                        ? `${this.field.default_value}`.length
                        : 0);
                });
              },
            },
            mounted() {
              this.$nextTick(() => {
                ["date", "text", "number"].includes(this.field.type) &&
                  this.field.default_value &&
                  this.$refs.textContainer &&
                  (0 === this.textOverflowChars ||
                    this.textOverflowChars - 4 >
                      `${this.field.default_value}`.length) &&
                  (this.textOverflowChars =
                    this.$el.clientHeight <
                    this.$refs.textContainer.clientHeight
                      ? `${this.field.default_value}`.length
                      : 0);
              });
            },
            methods: {
              buildDefaultName: Ji.methods.buildDefaultName,
              closeDropdown() {
                document.activeElement.blur();
              },
              formatNumber: (e, t) =>
                "comma" === t
                  ? new Intl.NumberFormat("en-US").format(e)
                  : "dot" === t
                  ? new Intl.NumberFormat("de-DE").format(e)
                  : "space" === t
                  ? new Intl.NumberFormat("fr-FR").format(e)
                  : e,
              maybeBlurSettings(e) {
                (e.relatedTarget &&
                  this.$refs.settingsDropdown.contains(e.relatedTarget)) ||
                  (this.isSettingsFocus = !1);
              },
              onNameFocus(e) {
                (this.selectedAreaRef.value = this.area),
                  (this.isNameFocus = !0),
                  (this.$refs.name.style.minWidth =
                    this.$refs.name.clientWidth + "px"),
                  this.field.name ||
                    setTimeout(() => {
                      this.$refs.name.innerText = " ";
                    }, 1);
              },
              startResizeCell(e) {
                this.$el
                  .getRootNode()
                  .addEventListener("mousemove", this.onResizeCell),
                  this.$el
                    .getRootNode()
                    .addEventListener("mouseup", this.stopResizeCell),
                  this.$emit("start-resize", "ew");
              },
              stopResizeCell(e) {
                this.$el
                  .getRootNode()
                  .removeEventListener("mousemove", this.onResizeCell),
                  this.$el
                    .getRootNode()
                    .removeEventListener("mouseup", this.stopResizeCell),
                  this.$emit("stop-resize"),
                  this.save();
              },
              onResizeCell(e) {
                if ("mask" === e.target.id) {
                  const t = e.offsetX / (e.target.clientWidth - 1);
                  t > this.area.x && (this.area.cell_w = t - this.area.x);
                }
              },
              maybeUpdateOptions() {
                delete this.field.default_value,
                  ["radio", "multiple", "select"].includes(this.field.type) ||
                    delete this.field.options,
                  ["select", "multiple", "radio"].includes(this.field.type) &&
                    (this.field.options ||= [{ value: "", uuid: (0, Ki.Z)() }]),
                  (this.field.areas || []).forEach((e) => {
                    "cells" === this.field.type
                      ? (e.cell_w = (2 * e.w) / Math.floor(e.w / e.h))
                      : delete e.cell_w;
                  });
              },
              onNameBlur(e) {
                e.relatedTarget === this.$refs.settingsButton &&
                  (this.isSettingsFocus = !0);
                const t = this.$refs.name.innerText.trim();
                (this.isNameFocus = !1),
                  (this.$refs.name.style.minWidth = ""),
                  t
                    ? (this.field.name = t)
                    : ((this.field.name = ""),
                      (this.$refs.name.innerText = this.defaultName)),
                  this.save();
              },
              onNameEnter(e) {
                this.$refs.name.blur();
              },
              resize(e) {
                "mask" === e.target.id &&
                  ((this.area.w =
                    e.offsetX / e.target.clientWidth - this.area.x),
                  (this.area.h =
                    e.offsetY / e.target.clientHeight - this.area.y));
              },
              drag(e) {
                "mask" === e.target.id &&
                  ((this.isDragged = !0),
                  (this.area.x =
                    (e.offsetX - this.dragFrom.x) / e.target.clientWidth),
                  (this.area.y =
                    (e.offsetY - this.dragFrom.y) / e.target.clientHeight));
              },
              startDrag(e) {
                if (((this.selectedAreaRef.value = this.area), !this.editable))
                  return;
                const t = e.target.getBoundingClientRect();
                (this.dragFrom = {
                  x: e.clientX - t.left,
                  y: e.clientY - t.top,
                }),
                  this.$el
                    .getRootNode()
                    .addEventListener("mousemove", this.drag),
                  this.$el
                    .getRootNode()
                    .addEventListener("mouseup", this.stopDrag),
                  this.$emit("start-drag");
              },
              startTouchDrag(e) {
                if (e.target !== this.$refs.touchTarget) return;
                this.$refs?.name?.blur(),
                  e.preventDefault(),
                  (this.isDragged = !0);
                const t = e.target.getBoundingClientRect();
                (this.selectedAreaRef.value = this.area),
                  (this.dragFrom = {
                    x: t.left - e.touches[0].clientX,
                    y: t.top - e.touches[0].clientY,
                  }),
                  this.$el
                    .getRootNode()
                    .addEventListener("touchmove", this.touchDrag),
                  this.$el
                    .getRootNode()
                    .addEventListener("touchend", this.stopTouchDrag),
                  this.$emit("start-drag");
              },
              touchDrag(e) {
                const t =
                  this.$parent.$refs.mask.previousSibling.getBoundingClientRect();
                (this.area.x =
                  (this.dragFrom.x + e.touches[0].clientX - t.left) / t.width),
                  (this.area.y =
                    (this.dragFrom.y + e.touches[0].clientY - t.top) /
                    t.height);
              },
              stopTouchDrag() {
                this.$el
                  .getRootNode()
                  .removeEventListener("touchmove", this.touchDrag),
                  this.$el
                    .getRootNode()
                    .removeEventListener("touchend", this.stopTouchDrag),
                  this.isDragged && this.save(),
                  (this.isDragged = !1),
                  this.$emit("stop-drag");
              },
              stopDrag() {
                this.$el
                  .getRootNode()
                  .removeEventListener("mousemove", this.drag),
                  this.$el
                    .getRootNode()
                    .removeEventListener("mouseup", this.stopDrag),
                  this.isDragged && this.save(),
                  (this.isDragged = !1),
                  this.$emit("stop-drag");
              },
              startResize() {
                (this.selectedAreaRef.value = this.area),
                  this.$el
                    .getRootNode()
                    .addEventListener("mousemove", this.resize),
                  this.$el
                    .getRootNode()
                    .addEventListener("mouseup", this.stopResize),
                  this.$emit("start-resize", "nwse");
              },
              stopResize() {
                this.$el
                  .getRootNode()
                  .removeEventListener("mousemove", this.resize),
                  this.$el
                    .getRootNode()
                    .removeEventListener("mouseup", this.stopResize),
                  this.$emit("stop-resize"),
                  this.save();
              },
              startTouchResize(e) {
                (this.selectedAreaRef.value = this.area),
                  this.$refs?.name?.blur(),
                  e.preventDefault(),
                  this.$el
                    .getRootNode()
                    .addEventListener("touchmove", this.touchResize),
                  this.$el
                    .getRootNode()
                    .addEventListener("touchend", this.stopTouchResize),
                  this.$emit("start-resize", "nwse");
              },
              touchResize(e) {
                const t =
                  this.$parent.$refs.mask.previousSibling.getBoundingClientRect();
                (this.area.w =
                  (e.touches[0].clientX - t.left) / t.width - this.area.x),
                  (this.area.h =
                    (e.touches[0].clientY - t.top) / t.height - this.area.y);
              },
              stopTouchResize() {
                this.$el
                  .getRootNode()
                  .removeEventListener("touchmove", this.touchResize),
                  this.$el
                    .getRootNode()
                    .removeEventListener("touchend", this.stopTouchResize),
                  this.$emit("stop-resize"),
                  this.save();
              },
            },
          };
        var il = {
          name: "TemplatePage",
          components: {
            FieldArea: (0, A.Z)(tl, [
              [
                "render",
                function (e, t, i, s, a, r) {
                  const d = (0, n.up)("FieldSubmitter"),
                    u = (0, n.up)("FieldType"),
                    c = (0, n.up)("IconDotsVertical"),
                    p = (0, n.up)("FieldSettings"),
                    m = (0, n.up)("IconX"),
                    h = (0, n.up)("IconCheck"),
                    f = (0, n.up)("FormulaModal"),
                    b = (0, n.up)("ConditionsModal"),
                    w = (0, n.up)("DescriptionModal");
                  return (
                    (0, n.wg)(),
                    (0, n.iD)(
                      "div",
                      {
                        class: "absolute overflow-visible group",
                        style: (0, o.j5)(r.positionStyle),
                        onPointerdown:
                          t[32] || (t[32] = (0, l.iM)(() => {}, ["stop"])),
                        onMousedown:
                          t[33] ||
                          (t[33] = (0, l.iM)(
                            (...e) => r.startDrag && r.startDrag(...e),
                            ["stop"]
                          )),
                        onTouchstart:
                          t[34] ||
                          (t[34] = (...e) =>
                            r.startTouchDrag && r.startTouchDrag(...e)),
                      },
                      [
                        r.isSelected || i.isDraw
                          ? ((0, n.wg)(),
                            (0, n.iD)(
                              "div",
                              {
                                key: 0,
                                class: (0, o.C_)([
                                  "top-0 bottom-0 right-0 left-0 absolute border border-1.5 pointer-events-none",
                                  r.borderColors[r.submitterIndex],
                                ]),
                              },
                              null,
                              2
                            ))
                          : (0, n.kq)("", !0),
                        "cells" === i.field.type && (r.isSelected || i.isDraw)
                          ? ((0, n.wg)(),
                            (0, n.iD)("div", Ps, [
                              ((0, n.wg)(!0),
                              (0, n.iD)(
                                n.HY,
                                null,
                                (0, n.Ko)(
                                  r.cells,
                                  (e, s) => (
                                    (0, n.wg)(),
                                    (0, n.iD)(
                                      "div",
                                      {
                                        key: s,
                                        class: (0, o.C_)([
                                          "absolute top-0 bottom-0 border-r",
                                          r.borderColors[r.submitterIndex],
                                        ]),
                                        style: (0, o.j5)({
                                          left: (e / i.area.w) * 100 + "%",
                                        }),
                                      },
                                      [
                                        0 === s && i.editable
                                          ? ((0, n.wg)(),
                                            (0, n.iD)(
                                              "span",
                                              {
                                                key: 0,
                                                class:
                                                  "h-2.5 w-2.5 rounded-full -bottom-1 border-gray-400 bg-white shadow-md border absolute cursor-ew-resize z-10",
                                                style: { left: "-4px" },
                                                onMousedown:
                                                  t[0] ||
                                                  (t[0] = (0, l.iM)(
                                                    (...e) =>
                                                      r.startResizeCell &&
                                                      r.startResizeCell(...e),
                                                    ["stop"]
                                                  )),
                                              },
                                              null,
                                              32
                                            ))
                                          : (0, n.kq)("", !0),
                                      ],
                                      6
                                    )
                                  )
                                ),
                                128
                              )),
                            ]))
                          : (0, n.kq)("", !0),
                        i.field?.type
                          ? ((0, n.wg)(),
                            (0, n.iD)(
                              "div",
                              {
                                key: 2,
                                class: (0, o.C_)([
                                  "absolute bg-white rounded-t border overflow-visible whitespace-nowrap group-hover:flex group-hover:z-10",
                                  {
                                    "flex z-10": a.isNameFocus || r.isSelected,
                                    invisible: !a.isNameFocus && !r.isSelected,
                                  },
                                ]),
                                style: { top: "-25px", height: "25px" },
                                onMousedown:
                                  t[25] ||
                                  (t[25] = (0, l.iM)(() => {}, ["stop"])),
                                onPointerdown:
                                  t[26] ||
                                  (t[26] = (0, l.iM)(() => {}, ["stop"])),
                              },
                              [
                                (0, n.Wm)(
                                  d,
                                  {
                                    modelValue: i.field.submitter_uuid,
                                    "onUpdate:modelValue": [
                                      t[1] ||
                                        (t[1] = (e) =>
                                          (i.field.submitter_uuid = e)),
                                      r.save,
                                    ],
                                    class: "border-r",
                                    compact: !0,
                                    editable:
                                      i.editable &&
                                      (!i.defaultField ||
                                        i.defaultField.role !==
                                          r.submitter?.name),
                                    "allow-add-new":
                                      !i.defaultSubmitters.length,
                                    "menu-classes":
                                      "dropdown-content bg-white menu menu-xs p-2 shadow rounded-box w-52 rounded-t-none -left-[1px] mt-[1px]",
                                    submitters: r.template.submitters,
                                    onClick:
                                      t[2] ||
                                      (t[2] = (e) =>
                                        (r.selectedAreaRef.value = i.area)),
                                  },
                                  null,
                                  8,
                                  [
                                    "modelValue",
                                    "editable",
                                    "allow-add-new",
                                    "submitters",
                                    "onUpdate:modelValue",
                                  ]
                                ),
                                (0, n.Wm)(
                                  u,
                                  {
                                    modelValue: i.field.type,
                                    "onUpdate:modelValue": [
                                      t[3] ||
                                        (t[3] = (e) => (i.field.type = e)),
                                      t[4] ||
                                        (t[4] = (e) => [
                                          r.maybeUpdateOptions(),
                                          r.save(),
                                        ]),
                                    ],
                                    "button-width": 27,
                                    editable: i.editable && !i.defaultField,
                                    "button-classes": "px-1",
                                    "menu-classes": "bg-white rounded-t-none",
                                    onClick:
                                      t[5] ||
                                      (t[5] = (e) =>
                                        (r.selectedAreaRef.value = i.area)),
                                  },
                                  null,
                                  8,
                                  ["modelValue", "editable"]
                                ),
                                "checkbox" !== i.field.type || i.field.name
                                  ? ((0, n.wg)(),
                                    (0, n.iD)(
                                      "span",
                                      {
                                        key: 0,
                                        ref: "name",
                                        contenteditable:
                                          i.editable && !i.defaultField,
                                        dir: "auto",
                                        class:
                                          "pr-1 cursor-text outline-none block",
                                        style: { "min-width": "2px" },
                                        onKeydown:
                                          t[6] ||
                                          (t[6] = (0, l.D2)(
                                            (0, l.iM)(
                                              (...e) =>
                                                r.onNameEnter &&
                                                r.onNameEnter(...e),
                                              ["prevent"]
                                            ),
                                            ["enter"]
                                          )),
                                        onFocus:
                                          t[7] ||
                                          (t[7] = (...e) =>
                                            r.onNameFocus &&
                                            r.onNameFocus(...e)),
                                        onBlur:
                                          t[8] ||
                                          (t[8] = (...e) =>
                                            r.onNameBlur && r.onNameBlur(...e)),
                                      },
                                      (0, o.zw)(r.optionIndexText) +
                                        " " +
                                        (0, o.zw)(
                                          (i.defaultField && i.field.title) ||
                                            i.field.name ||
                                            r.defaultName
                                        ),
                                      41,
                                      Ws
                                    ))
                                  : (0, n.kq)("", !0),
                                a.isSettingsFocus ||
                                (a.isNameFocus &&
                                  !["checkbox", "phone"].includes(i.field.type))
                                  ? ((0, n.wg)(),
                                    (0, n.iD)("div", Ys, [
                                      (0, n.wy)(
                                        (0, n._)(
                                          "input",
                                          {
                                            id: `required-checkbox-${i.field.uuid}`,
                                            "onUpdate:modelValue":
                                              t[9] ||
                                              (t[9] = (e) =>
                                                (i.field.required = e)),
                                            type: "checkbox",
                                            class:
                                              "checkbox checkbox-xs no-animation rounded",
                                            onMousedown:
                                              t[10] ||
                                              (t[10] = (0, l.iM)(() => {}, [
                                                "prevent",
                                              ])),
                                          },
                                          null,
                                          40,
                                          Bs
                                        ),
                                        [[l.e8, i.field.required]]
                                      ),
                                      (0, n._)(
                                        "label",
                                        {
                                          for: `required-checkbox-${i.field.uuid}`,
                                          class: "label text-xs",
                                          onClick:
                                            t[11] ||
                                            (t[11] = (0, l.iM)(
                                              (e) =>
                                                (i.field.required =
                                                  !i.field.required),
                                              ["prevent"]
                                            )),
                                          onMousedown:
                                            t[12] ||
                                            (t[12] = (0, l.iM)(() => {}, [
                                              "prevent",
                                            ])),
                                        },
                                        (0, o.zw)(r.t("required")),
                                        41,
                                        Zs
                                      ),
                                      "payment" !== i.field.type
                                        ? ((0, n.wg)(),
                                          (0, n.iD)(
                                            "span",
                                            {
                                              key: 0,
                                              class: "dropdown dropdown-end",
                                              onMouseenter:
                                                t[22] ||
                                                (t[22] = (e) =>
                                                  (a.renderDropdown = !0)),
                                              onTouchstart:
                                                t[23] ||
                                                (t[23] = (e) =>
                                                  (a.renderDropdown = !0)),
                                            },
                                            [
                                              (0, n._)(
                                                "label",
                                                {
                                                  ref: "settingsButton",
                                                  tabindex: "0",
                                                  title: r.t("settings"),
                                                  class:
                                                    "cursor-pointer flex items-center",
                                                  style: { height: "25px" },
                                                  onFocus:
                                                    t[13] ||
                                                    (t[13] = (e) =>
                                                      (a.isSettingsFocus = !0)),
                                                  onBlur:
                                                    t[14] ||
                                                    (t[14] = (...e) =>
                                                      r.maybeBlurSettings &&
                                                      r.maybeBlurSettings(
                                                        ...e
                                                      )),
                                                },
                                                [
                                                  (0, n.Wm)(c, {
                                                    class: "w-5 h-5",
                                                  }),
                                                ],
                                                40,
                                                Hs
                                              ),
                                              a.renderDropdown
                                                ? ((0, n.wg)(),
                                                  (0, n.iD)(
                                                    "ul",
                                                    {
                                                      key: 0,
                                                      ref: "settingsDropdown",
                                                      tabindex: "0",
                                                      class:
                                                        "dropdown-content menu menu-xs px-2 pb-2 pt-1 shadow rounded-box w-52 z-10 rounded-t-none",
                                                      style: {
                                                        backgroundColor:
                                                          "white",
                                                      },
                                                      onDragstart:
                                                        t[19] ||
                                                        (t[19] = (0,
                                                        l.iM)(() => {}, [
                                                          "prevent",
                                                          "stop",
                                                        ])),
                                                      onClick:
                                                        t[20] ||
                                                        (t[20] = (...e) =>
                                                          r.closeDropdown &&
                                                          r.closeDropdown(
                                                            ...e
                                                          )),
                                                      onFocusout:
                                                        t[21] ||
                                                        (t[21] = (...e) =>
                                                          r.maybeBlurSettings &&
                                                          r.maybeBlurSettings(
                                                            ...e
                                                          )),
                                                    },
                                                    [
                                                      (0, n.Wm)(
                                                        p,
                                                        {
                                                          field: i.field,
                                                          "default-field":
                                                            i.defaultField,
                                                          editable: i.editable,
                                                          "background-color":
                                                            "white",
                                                          "with-required": !1,
                                                          "with-areas": !1,
                                                          onClickFormula:
                                                            t[15] ||
                                                            (t[15] = (e) =>
                                                              (a.isShowFormulaModal =
                                                                !0)),
                                                          onClickDescription:
                                                            t[16] ||
                                                            (t[16] = (e) =>
                                                              (a.isShowDescriptionModal =
                                                                !0)),
                                                          onClickCondition:
                                                            t[17] ||
                                                            (t[17] = (e) =>
                                                              (a.isShowConditionsModal =
                                                                !0)),
                                                          onScrollTo:
                                                            t[18] ||
                                                            (t[18] = (t) => [
                                                              (r.selectedAreaRef.value =
                                                                t),
                                                              e.$emit(
                                                                "scroll-to",
                                                                t
                                                              ),
                                                            ]),
                                                        },
                                                        null,
                                                        8,
                                                        [
                                                          "field",
                                                          "default-field",
                                                          "editable",
                                                        ]
                                                      ),
                                                    ],
                                                    544
                                                  ))
                                                : (0, n.kq)("", !0),
                                            ],
                                            32
                                          ))
                                        : (0, n.kq)("", !0),
                                    ]))
                                  : i.editable
                                  ? ((0, n.wg)(),
                                    (0, n.iD)(
                                      "button",
                                      {
                                        key: 2,
                                        class: "pr-1",
                                        title: r.t("remove"),
                                        onClick:
                                          t[24] ||
                                          (t[24] = (0, l.iM)(
                                            (t) => e.$emit("remove"),
                                            ["prevent"]
                                          )),
                                      },
                                      [(0, n.Wm)(m, { width: "14" })],
                                      8,
                                      Vs
                                    ))
                                  : (0, n.kq)("", !0),
                              ],
                              34
                            ))
                          : (0, n.kq)("", !0),
                        (0, n._)(
                          "div",
                          {
                            class: (0, o.C_)([
                              "flex items-center h-full w-full",
                              [
                                r.bgColors[r.submitterIndex],
                                i.field?.default_value
                                  ? r.alignClasses[
                                      i.field.preferences?.align
                                    ] || ""
                                  : "justify-center",
                              ],
                            ]),
                            dir: "auto",
                          },
                          [
                            i.field
                              ? ((0, n.wg)(),
                                (0, n.iD)(
                                  "span",
                                  {
                                    key: 0,
                                    class: (0, o.C_)([
                                      "flex justify-center items-center space-x-1 h-full",
                                      {
                                        "w-full h-full":
                                          "checkbox" == i.field.type,
                                      },
                                    ]),
                                  },
                                  [
                                    i.field?.default_value
                                      ? ((0, n.wg)(),
                                        (0, n.iD)(
                                          "div",
                                          {
                                            key: 0,
                                            class: (0, o.C_)({
                                              "w-full h-full":
                                                "checkbox" == i.field.type,
                                              "text-[1.5vw] lg:text-base":
                                                !a.textOverflowChars,
                                              "text-[1.0vw] lg:text-xs":
                                                a.textOverflowChars,
                                            }),
                                          },
                                          [
                                            (0, n._)(
                                              "div",
                                              {
                                                ref: "textContainer",
                                                class: (0, o.C_)([
                                                  "flex items-center px-0.5",
                                                  {
                                                    "w-full h-full":
                                                      "checkbox" ==
                                                      i.field.type,
                                                  },
                                                ]),
                                              },
                                              [
                                                "checkbox" == i.field.type
                                                  ? ((0, n.wg)(),
                                                    (0, n.j4)(
                                                      h,
                                                      {
                                                        key: 0,
                                                        class: (0, o.C_)([
                                                          "aspect-square mx-auto",
                                                          {
                                                            "!w-auto !h-full":
                                                              i.area.w >
                                                              i.area.h,
                                                            "!w-full !h-auto":
                                                              i.area.w <=
                                                              i.area.h,
                                                          },
                                                        ]),
                                                      },
                                                      null,
                                                      8,
                                                      ["class"]
                                                    ))
                                                  : "number" === i.field.type
                                                  ? ((0, n.wg)(),
                                                    (0, n.iD)(
                                                      "span",
                                                      Ks,
                                                      (0, o.zw)(
                                                        r.formatNumber(
                                                          i.field.default_value,
                                                          i.field.preferences
                                                            ?.format
                                                        )
                                                      ),
                                                      1
                                                    ))
                                                  : ((0, n.wg)(),
                                                    (0, n.iD)(
                                                      "span",
                                                      Xs,
                                                      (0, o.zw)(
                                                        i.field.default_value
                                                      ),
                                                      1
                                                    )),
                                              ],
                                              2
                                            ),
                                          ],
                                          2
                                        ))
                                      : ((0, n.wg)(),
                                        (0, n.j4)(
                                          (0, n.LL)(r.fieldIcons[i.field.type]),
                                          {
                                            key: 1,
                                            width: "100%",
                                            height: "100%",
                                            class: "max-h-10 opacity-50",
                                          }
                                        )),
                                  ],
                                  2
                                ))
                              : (0, n.kq)("", !0),
                          ],
                          2
                        ),
                        (0, n._)("div", Js, null, 512),
                        i.field?.type && i.editable
                          ? ((0, n.wg)(),
                            (0, n.iD)(
                              "span",
                              {
                                key: 3,
                                class:
                                  "h-4 w-4 md:h-2.5 md:w-2.5 -right-1 rounded-full -bottom-1 border-gray-400 bg-white shadow-md border absolute cursor-nwse-resize",
                                onMousedown:
                                  t[27] ||
                                  (t[27] = (0, l.iM)(
                                    (...e) =>
                                      r.startResize && r.startResize(...e),
                                    ["stop"]
                                  )),
                                onTouchstart:
                                  t[28] ||
                                  (t[28] = (...e) =>
                                    r.startTouchResize &&
                                    r.startTouchResize(...e)),
                              },
                              null,
                              32
                            ))
                          : (0, n.kq)("", !0),
                        a.isShowFormulaModal
                          ? ((0, n.wg)(),
                            (0, n.j4)(
                              n.lR,
                              { key: 4, to: r.modalContainerEl },
                              [
                                (0, n.Wm)(
                                  f,
                                  {
                                    field: i.field,
                                    editable: i.editable && !i.defaultField,
                                    "build-default-name": r.buildDefaultName,
                                    onClose:
                                      t[29] ||
                                      (t[29] = (e) =>
                                        (a.isShowFormulaModal = !1)),
                                  },
                                  null,
                                  8,
                                  ["field", "editable", "build-default-name"]
                                ),
                              ],
                              8,
                              ["to"]
                            ))
                          : (0, n.kq)("", !0),
                        a.isShowConditionsModal
                          ? ((0, n.wg)(),
                            (0, n.j4)(
                              n.lR,
                              { key: 5, to: r.modalContainerEl },
                              [
                                (0, n.Wm)(
                                  b,
                                  {
                                    field: i.field,
                                    "build-default-name": r.buildDefaultName,
                                    onClose:
                                      t[30] ||
                                      (t[30] = (e) =>
                                        (a.isShowConditionsModal = !1)),
                                  },
                                  null,
                                  8,
                                  ["field", "build-default-name"]
                                ),
                              ],
                              8,
                              ["to"]
                            ))
                          : (0, n.kq)("", !0),
                        a.isShowDescriptionModal
                          ? ((0, n.wg)(),
                            (0, n.j4)(
                              n.lR,
                              { key: 6, to: r.modalContainerEl },
                              [
                                (0, n.Wm)(
                                  w,
                                  {
                                    field: i.field,
                                    editable: i.editable && !i.defaultField,
                                    "build-default-name": r.buildDefaultName,
                                    onClose:
                                      t[31] ||
                                      (t[31] = (e) =>
                                        (a.isShowDescriptionModal = !1)),
                                  },
                                  null,
                                  8,
                                  ["field", "editable", "build-default-name"]
                                ),
                              ],
                              8,
                              ["to"]
                            ))
                          : (0, n.kq)("", !0),
                      ],
                      36
                    )
                  );
                },
              ],
            ]),
          },
          inject: ["fieldTypes", "defaultDrawFieldType", "fieldsDragFieldRef"],
          props: {
            image: { type: Object, required: !0 },
            areas: { type: Array, required: !1, default: () => [] },
            defaultFields: { type: Array, required: !1, default: () => [] },
            drawFieldType: { type: String, required: !1, default: "" },
            allowDraw: { type: Boolean, required: !1, default: !0 },
            selectedSubmitter: { type: Object, required: !0 },
            defaultSubmitters: { type: Array, required: !1, default: () => [] },
            drawField: { type: Object, required: !1, default: null },
            editable: { type: Boolean, required: !1, default: !0 },
            isDrag: { type: Boolean, required: !1, default: !1 },
            number: { type: Number, required: !0 },
          },
          emits: ["draw", "drop-field", "remove-area", "scroll-to"],
          data: () => ({
            areaRefs: [],
            showMask: !1,
            isMove: !1,
            resizeDirection: null,
            newArea: null,
          }),
          computed: {
            defaultFieldType() {
              return this.drawFieldType
                ? this.drawFieldType
                : this.defaultDrawFieldType &&
                  "text" !== this.defaultDrawFieldType
                ? this.defaultDrawFieldType
                : 0 === this.fieldTypes.length ||
                  this.fieldTypes.includes("text")
                ? "text"
                : this.fieldTypes[0];
            },
            isMobile: () => /android|iphone|ipad/i.test(navigator.userAgent),
            resizeDirectionClasses: () => ({
              nwse: "cursor-nwse-resize",
              ew: "cursor-ew-resize",
            }),
            width() {
              return this.image.metadata.width;
            },
            height() {
              return this.image.metadata.height;
            },
          },
          beforeUpdate() {
            this.areaRefs = [];
          },
          methods: {
            onImageLoad(e) {
              e.target.setAttribute("width", e.target.naturalWidth),
                e.target.setAttribute("height", e.target.naturalHeight);
            },
            setAreaRefs(e) {
              e && this.areaRefs.push(e);
            },
            onDrop(e) {
              this.$emit("drop-field", {
                x: e.offsetX,
                y: e.offsetY,
                maskW: this.$refs.mask.clientWidth,
                maskH: this.$refs.mask.clientHeight,
                page: this.number,
              });
            },
            onStartDraw(e) {
              this.allowDraw &&
                ((this.isMobile && !this.drawField) ||
                  (this.editable &&
                    ((this.showMask = !0),
                    this.$nextTick(() => {
                      this.newArea = {
                        initialX: e.offsetX / this.$refs.mask.clientWidth,
                        initialY: e.offsetY / this.$refs.mask.clientHeight,
                        x: e.offsetX / this.$refs.mask.clientWidth,
                        y: e.offsetY / this.$refs.mask.clientHeight,
                        w: 0,
                        h: 0,
                      };
                    }))));
            },
            onPointermove(e) {
              if (this.newArea) {
                const t =
                    e.offsetX / this.$refs.mask.clientWidth -
                    this.newArea.initialX,
                  i =
                    e.offsetY / this.$refs.mask.clientHeight -
                    this.newArea.initialY;
                (this.newArea.x =
                  t > 0
                    ? this.newArea.initialX
                    : e.offsetX / this.$refs.mask.clientWidth),
                  (this.newArea.y =
                    i > 0
                      ? this.newArea.initialY
                      : e.offsetY / this.$refs.mask.clientHeight),
                  "cells" === (this.drawField?.type || this.drawFieldType) &&
                    (this.newArea.cell_w =
                      this.newArea.h *
                      (this.$refs.mask.clientHeight /
                        this.$refs.mask.clientWidth)),
                  (this.newArea.w = Math.abs(t)),
                  (this.newArea.h = Math.abs(i));
              }
            },
            onPointerup(e) {
              if (this.newArea) {
                const e = {
                  x: this.newArea.x,
                  y: this.newArea.y,
                  w: this.newArea.w,
                  h: this.newArea.h,
                  page: this.number,
                };
                "cell_w" in this.newArea && (e.cell_w = this.newArea.cell_w),
                  this.$emit("draw", e);
              }
              (this.showMask = !1), (this.newArea = null);
            },
          },
        };
        var sl = {
          name: "TemplateDocument",
          components: {
            Page: (0, A.Z)(il, [
              [
                "render",
                function (e, t, i, s, a, r) {
                  const d = (0, n.up)("FieldArea");
                  return (
                    (0, n.wg)(),
                    (0, n.iD)(
                      "div",
                      {
                        class: "relative cursor-crosshair select-none",
                        style: (0, o.j5)(
                          i.drawField ? "touch-action: none" : ""
                        ),
                      },
                      [
                        (0, n._)(
                          "img",
                          {
                            ref: "image",
                            loading: "lazy",
                            src: i.image.url,
                            width: r.width,
                            height: r.height,
                            class: "border rounded mb-4",
                            onLoad:
                              t[0] ||
                              (t[0] = (...e) =>
                                r.onImageLoad && r.onImageLoad(...e)),
                          },
                          null,
                          40,
                          Os
                        ),
                        (0, n._)(
                          "div",
                          {
                            class: "top-0 bottom-0 left-0 right-0 absolute",
                            onPointerdown:
                              t[6] ||
                              (t[6] = (...e) =>
                                r.onStartDraw && r.onStartDraw(...e)),
                          },
                          [
                            ((0, n.wg)(!0),
                            (0, n.iD)(
                              n.HY,
                              null,
                              (0, n.Ko)(
                                i.areas,
                                (s, l) => (
                                  (0, n.wg)(),
                                  (0, n.j4)(
                                    d,
                                    {
                                      key: l,
                                      ref_for: !0,
                                      ref: r.setAreaRefs,
                                      area: s.area,
                                      field: s.field,
                                      editable: i.editable,
                                      "default-field": i.defaultFields.find(
                                        (e) => e.name === s.field.name
                                      ),
                                      "default-submitters": i.defaultSubmitters,
                                      onStartResize:
                                        t[1] ||
                                        (t[1] = (e) => (a.resizeDirection = e)),
                                      onStopResize:
                                        t[2] ||
                                        (t[2] = (e) =>
                                          (a.resizeDirection = null)),
                                      onStartDrag:
                                        t[3] || (t[3] = (e) => (a.isMove = !0)),
                                      onStopDrag:
                                        t[4] || (t[4] = (e) => (a.isMove = !1)),
                                      onRemove: (t) =>
                                        e.$emit("remove-area", s.area),
                                      onScrollTo:
                                        t[5] ||
                                        (t[5] = (t) => e.$emit("scroll-to", t)),
                                    },
                                    null,
                                    8,
                                    [
                                      "area",
                                      "field",
                                      "editable",
                                      "default-field",
                                      "default-submitters",
                                      "onRemove",
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                            a.newArea
                              ? ((0, n.wg)(),
                                (0, n.j4)(
                                  d,
                                  {
                                    key: 0,
                                    "is-draw": !0,
                                    field: {
                                      submitter_uuid: i.selectedSubmitter.uuid,
                                      type:
                                        i.drawField?.type || r.defaultFieldType,
                                    },
                                    area: a.newArea,
                                  },
                                  null,
                                  8,
                                  ["field", "area"]
                                ))
                              : (0, n.kq)("", !0),
                          ],
                          32
                        ),
                        (0, n.wy)(
                          (0, n._)(
                            "div",
                            {
                              id: "mask",
                              ref: "mask",
                              class: (0, o.C_)([
                                "top-0 bottom-0 left-0 right-0 absolute",
                                {
                                  "z-10": !r.isMobile,
                                  "cursor-grab": i.isDrag || a.isMove,
                                  "cursor-nwse-resize": i.drawField,
                                  [r.resizeDirectionClasses[a.resizeDirection]]:
                                    !!r.resizeDirectionClasses,
                                },
                              ]),
                              onPointermove:
                                t[7] ||
                                (t[7] = (...e) =>
                                  r.onPointermove && r.onPointermove(...e)),
                              onPointerdown:
                                t[8] ||
                                (t[8] = (...e) =>
                                  r.onStartDraw && r.onStartDraw(...e)),
                              onDragover:
                                t[9] ||
                                (t[9] = (0, l.iM)(() => {}, ["prevent"])),
                              onDrop:
                                t[10] ||
                                (t[10] = (...e) => r.onDrop && r.onDrop(...e)),
                              onPointerup:
                                t[11] ||
                                (t[11] = (...e) =>
                                  r.onPointerup && r.onPointerup(...e)),
                            },
                            null,
                            34
                          ),
                          [
                            [
                              l.F8,
                              a.resizeDirection ||
                                a.isMove ||
                                i.isDrag ||
                                a.showMask ||
                                (i.drawField && r.isMobile) ||
                                r.fieldsDragFieldRef.value,
                            ],
                          ]
                        ),
                      ],
                      4
                    )
                  );
                },
              ],
            ]),
          },
          props: {
            document: { type: Object, required: !0 },
            areasIndex: { type: Object, required: !1, default: () => ({}) },
            defaultFields: { type: Array, required: !1, default: () => [] },
            drawFieldType: { type: String, required: !1, default: "" },
            defaultSubmitters: { type: Array, required: !1, default: () => [] },
            allowDraw: { type: Boolean, required: !1, default: !0 },
            selectedSubmitter: { type: Object, required: !0 },
            editable: { type: Boolean, required: !1, default: !0 },
            drawField: { type: Object, required: !1, default: null },
            baseUrl: { type: String, required: !1, default: "" },
            isDrag: { type: Boolean, required: !1, default: !1 },
          },
          emits: ["draw", "drop-field", "remove-area"],
          data: () => ({ pageRefs: [] }),
          computed: {
            basePreviewUrl() {
              return this.baseUrl ? new URL(this.baseUrl).origin : "";
            },
            numberOfPages() {
              return (
                this.document.metadata?.pdf?.number_of_pages ||
                this.document.preview_images.length
              );
            },
            sortedPreviewImages() {
              const e =
                this.document.preview_images[
                  this.document.preview_images.length - 1
                ].metadata;
              return [...Array(this.numberOfPages).keys()].map(
                (t) =>
                  this.previewImagesIndex[t] || {
                    metadata: e,
                    id: Math.random().toString(),
                    url:
                      this.basePreviewUrl +
                      `/preview/${
                        this.document.signed_uuid || this.document.uuid
                      }/${t}.jpg`,
                  }
              );
            },
            previewImagesIndex() {
              return this.document.preview_images.reduce(
                (e, t) => ((e[parseInt(t.filename)] = t), e),
                {}
              );
            },
          },
          beforeUpdate() {
            this.pageRefs = [];
          },
          methods: {
            scrollToArea(e) {
              this.$nextTick(() => {
                this.pageRefs[e.page].areaRefs
                  .find((t) => t.area === e)
                  .$el.scrollIntoView({ behavior: "smooth", block: "center" });
              });
            },
            setPageRefs(e) {
              e && this.pageRefs.push(e);
            },
          },
        };
        var ll = (0, A.Z)(sl, [
          [
            "render",
            function (e, t, i, s, l, a) {
              const o = (0, n.up)("Page");
              return (
                (0, n.wg)(),
                (0, n.iD)("div", null, [
                  ((0, n.wg)(!0),
                  (0, n.iD)(
                    n.HY,
                    null,
                    (0, n.Ko)(
                      a.sortedPreviewImages,
                      (s, l) => (
                        (0, n.wg)(),
                        (0, n.j4)(
                          o,
                          {
                            key: s.id,
                            ref_for: !0,
                            ref: a.setPageRefs,
                            number: l,
                            editable: i.editable,
                            areas: i.areasIndex[l],
                            "allow-draw": i.allowDraw,
                            "is-drag": i.isDrag,
                            "default-fields": i.defaultFields,
                            "default-submitters": i.defaultSubmitters,
                            "draw-field": i.drawField,
                            "draw-field-type": i.drawFieldType,
                            "selected-submitter": i.selectedSubmitter,
                            image: s,
                            onDropField:
                              t[0] ||
                              (t[0] = (t) =>
                                e.$emit("drop-field", {
                                  ...t,
                                  attachment_uuid: i.document.uuid,
                                })),
                            onRemoveArea:
                              t[1] || (t[1] = (t) => e.$emit("remove-area", t)),
                            onScrollTo: a.scrollToArea,
                            onDraw:
                              t[2] ||
                              (t[2] = (t) =>
                                e.$emit("draw", {
                                  ...t,
                                  attachment_uuid: i.document.uuid,
                                })),
                          },
                          null,
                          8,
                          [
                            "number",
                            "editable",
                            "areas",
                            "allow-draw",
                            "is-drag",
                            "default-fields",
                            "default-submitters",
                            "draw-field",
                            "draw-field-type",
                            "selected-submitter",
                            "image",
                            "onScrollTo",
                          ]
                        )
                      )
                    ),
                    128
                  )),
                ])
              );
            },
          ],
        ]);
        const al = {
            height: "40",
            width: "40",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            viewBox: "0 0 511.998 511.998",
            "xml:space": "preserve",
          },
          nl = [
            (0, n.uE)(
              '<path style="fill:#AA968C;" d="M503.999,247.999c0,128.13-111.033,240-248,240S8,376.129,8,247.999s111.033-224,248-224\n    S503.999,119.869,503.999,247.999z"></path><path style="fill:#AA968C;" d="M255.999,23.999C119.033,23.999,8,119.868,8,247.999c0,24.631,4.138,48.647,11.74,71.397\n    c25.518,34.29,66.232,56.602,112.26,56.602c53.893,0,100.6-30.495,124-75.13c23.4,44.636,70.107,75.13,124,75.13\n    c46.028,0,86.743-22.312,112.26-56.602c7.602-22.75,11.74-46.767,11.74-71.397C503.999,119.868,392.966,23.999,255.999,23.999z"></path><circle style="fill:#C8AF9B;" cx="256" cy="351.999" r="136"></circle><g><circle style="fill:#464655;" cx="132" cy="203.999" r="28"></circle><circle style="fill:#464655;" cx="380" cy="203.999" r="28"></circle><path style="fill:#464655;" d="M269.949,284.516c-7.672,10.741-20.227,10.741-27.899,0l-12.101-16.941\n      c-7.672-10.741-3.15-19.53,10.05-19.53h32c13.2,0,17.723,8.788,10.05,19.53L269.949,284.516z"></path></g><path style="fill:#AA968C;" d="M 350.964 399.998 C 316.628 399.998 299.021 351.998 255.882 351.998 C 212.742 351.998 195.135 399.998 160.801 399.998 C 145.395 399.998 131.723 394.147 120.621 374.798 C 131.595 439.03 187.893 487.998 255.881 487.998 C 323.868 487.998 380.168 439.03 391.14 374.798 C 380.04 394.148 366.368 399.998 350.964 399.998 Z"></path><g><path style="fill:#8C7873;" d="M32,423.998c-3.172,0-6.18-1.906-7.43-5.031c-1.641-4.105,0.359-8.758,4.461-10.402l160.008-64\n      c4.062-1.617,8.758,0.352,10.398,4.457s-0.359,8.758-4.461,10.402l-160.008,64C34,423.811,32.992,423.998,32,423.998z"></path><path style="fill:#8C7873;" d="M15.992,375.995c-3.547,0-6.781-2.375-7.727-5.965c-1.125-4.273,1.422-8.648,5.695-9.773l152-40\n      c4.289-1.121,8.648,1.426,9.773,5.703c1.125,4.273-1.422,8.648-5.695,9.773l-152,40C17.351,375.913,16.672,375.995,15.992,375.995z\n      "></path><path style="fill:#8C7873;" d="M7.992,335.995c-3.812,0-7.187-2.73-7.867-6.609c-0.773-4.352,2.133-8.5,6.484-9.27l136-24\n      c4.328-0.77,8.508,2.141,9.266,6.488c0.773,4.352-2.133,8.5-6.484,9.27l-136,24C8.922,335.956,8.453,335.995,7.992,335.995z"></path><path style="fill:#8C7873;" d="M480,423.998c3.172,0,6.18-1.906,7.43-5.031c1.641-4.105-0.359-8.758-4.461-10.402l-160.008-64\n      c-4.063-1.617-8.758,0.352-10.398,4.457s0.359,8.758,4.461,10.402l160.008,64C478,423.811,479.007,423.998,480,423.998z"></path><path style="fill:#8C7873;" d="M496.007,375.995c3.547,0,6.781-2.375,7.727-5.965c1.125-4.273-1.422-8.648-5.695-9.773l-152-40\n      c-4.289-1.121-8.648,1.426-9.773,5.703c-1.125,4.273,1.422,8.648,5.695,9.773l152,40\n      C494.648,375.913,495.328,375.995,496.007,375.995z"></path><path style="fill:#8C7873;" d="M504.007,335.995c3.813,0,7.188-2.73,7.867-6.609c0.773-4.352-2.133-8.5-6.484-9.27l-136-24\n      c-4.328-0.77-8.508,2.141-9.266,6.488c-0.773,4.352,2.133,8.5,6.484,9.27l136,24C503.078,335.956,503.546,335.995,504.007,335.995z\n      "></path></g>',
              6
            ),
          ];
        var ol = { name: "ProjectLogo" };
        var rl = (0, A.Z)(ol, [
          [
            "render",
            function (e, t, i, s, l, a) {
              return (0, n.wg)(), (0, n.iD)("svg", al, nl);
            },
          ],
        ]);
        const dl = { class: "relative" },
          ul = ["src", "width", "height"],
          cl = { key: 0, class: "flex justify-between w-full" },
          pl = (0, n._)("div", { style: { width: "26px" } }, null, -1),
          ml = { class: "" },
          hl = {
            class:
              "flex flex-col justify-between opacity-0 group-hover:opacity-100",
          },
          fl = { key: 0, class: "flex flex-col space-y-1" },
          bl = { class: "flex pb-2 pt-1.5" };
        const wl = ["for"],
          gl = { ref: "form", class: "hidden" },
          yl = ["id", "accept"];
        var vl = {
          name: "ReplaceDocument",
          inject: ["baseFetch", "t"],
          props: {
            templateId: { type: [Number, String], required: !0 },
            acceptFileTypes: {
              type: String,
              required: !1,
              default: "image/*, application/pdf",
            },
          },
          emits: ["success"],
          data: () => ({ isLoading: !1, isProcessing: !1 }),
          computed: {
            inputId: () => "el" + Math.random().toString(32).split(".")[1],
            message() {
              return this.isLoading
                ? this.t("uploading_")
                : this.isProcessing
                ? this.t("processing_")
                : this.t("replace");
            },
          },
          methods: { upload: z.methods.upload },
        };
        var kl = (0, A.Z)(vl, [
            [
              "render",
              function (e, t, i, s, l, a) {
                return (
                  (0, n.wg)(),
                  (0, n.iD)(
                    "label",
                    {
                      for: a.inputId,
                      class: (0, o.C_)([
                        "btn btn-neutral btn-xs text-white transition-none",
                        { "opacity-100": l.isLoading || l.isProcessing },
                      ]),
                    },
                    [
                      (0, n.Uk)((0, o.zw)(a.message) + " ", 1),
                      (0, n._)(
                        "form",
                        gl,
                        [
                          (0, n._)(
                            "input",
                            {
                              id: a.inputId,
                              ref: "input",
                              name: "files[]",
                              type: "file",
                              accept: i.acceptFileTypes,
                              onChange:
                                t[0] ||
                                (t[0] = (...e) => a.upload && a.upload(...e)),
                            },
                            null,
                            40,
                            yl
                          ),
                        ],
                        512
                      ),
                    ],
                    10,
                    wl
                  )
                );
              },
            ],
          ]),
          xl = {
            name: "DocumentPreview",
            components: { Contenteditable: $e, ReplaceButton: kl },
            props: {
              item: { type: Object, required: !0 },
              template: { type: Object, required: !0 },
              document: { type: Object, required: !0 },
              editable: { type: Boolean, required: !1, default: !0 },
              acceptFileTypes: {
                type: String,
                required: !1,
                default: "image/*, application/pdf",
              },
              withReplaceButton: { type: Boolean, required: !0, default: !0 },
              withArrows: { type: Boolean, required: !1, default: !0 },
            },
            emits: ["scroll-to", "change", "remove", "up", "down", "replace"],
            computed: {
              previewImage() {
                return [...this.document.preview_images].sort(
                  (e, t) => parseInt(e.filename) - parseInt(t.filename)
                )[0];
              },
            },
            methods: {
              upload: z.methods.upload,
              onUpdateName(e) {
                (this.item.name = e), this.$emit("change");
              },
            },
          };
        var _l = (0, A.Z)(xl, [
          [
            "render",
            function (e, t, i, s, a, o) {
              const r = (0, n.up)("ReplaceButton"),
                d = (0, n.up)("Contenteditable");
              return (
                (0, n.wg)(),
                (0, n.iD)("div", null, [
                  (0, n._)("div", dl, [
                    (0, n._)(
                      "img",
                      {
                        src: o.previewImage.url,
                        width: o.previewImage.metadata.width,
                        height: o.previewImage.metadata.height,
                        class: "rounded border",
                        loading: "lazy",
                      },
                      null,
                      8,
                      ul
                    ),
                    (0, n._)(
                      "div",
                      {
                        class:
                          "group flex justify-end cursor-pointer top-0 bottom-0 left-0 right-0 absolute p-1",
                        onClick:
                          t[5] || (t[5] = (t) => e.$emit("scroll-to", i.item)),
                      },
                      [
                        i.editable
                          ? ((0, n.wg)(),
                            (0, n.iD)("div", cl, [
                              pl,
                              (0, n._)("div", ml, [
                                i.withReplaceButton
                                  ? ((0, n.wg)(),
                                    (0, n.j4)(
                                      r,
                                      {
                                        key: 0,
                                        "template-id": i.template.id,
                                        "accept-file-types": i.acceptFileTypes,
                                        class:
                                          "opacity-0 group-hover:opacity-100",
                                        onClick:
                                          t[0] ||
                                          (t[0] = (0, l.iM)(() => {}, [
                                            "stop",
                                          ])),
                                        onSuccess:
                                          t[1] ||
                                          (t[1] = (t) =>
                                            e.$emit("replace", {
                                              replaceSchemaItem: i.item,
                                              ...t,
                                            })),
                                      },
                                      null,
                                      8,
                                      ["template-id", "accept-file-types"]
                                    ))
                                  : (0, n.kq)("", !0),
                              ]),
                              (0, n._)("div", hl, [
                                (0, n._)("div", null, [
                                  (0, n._)(
                                    "button",
                                    {
                                      class:
                                        "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
                                      style: { width: "24px", height: "24px" },
                                      onClick:
                                        t[2] ||
                                        (t[2] = (0, l.iM)(
                                          (t) => e.$emit("remove", i.item),
                                          ["stop"]
                                        )),
                                    },
                                    " \xd7 "
                                  ),
                                ]),
                                i.withArrows
                                  ? ((0, n.wg)(),
                                    (0, n.iD)("div", fl, [
                                      (0, n._)(
                                        "button",
                                        {
                                          class:
                                            "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
                                          style: {
                                            width: "24px",
                                            height: "24px",
                                          },
                                          onClick:
                                            t[3] ||
                                            (t[3] = (0, l.iM)(
                                              (t) => e.$emit("up", i.item),
                                              ["stop"]
                                            )),
                                        },
                                        " \u2191 "
                                      ),
                                      (0, n._)(
                                        "button",
                                        {
                                          class:
                                            "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
                                          style: {
                                            width: "24px",
                                            height: "24px",
                                          },
                                          onClick:
                                            t[4] ||
                                            (t[4] = (0, l.iM)(
                                              (t) => e.$emit("down", i.item),
                                              ["stop"]
                                            )),
                                        },
                                        " \u2193 "
                                      ),
                                    ]))
                                  : (0, n.kq)("", !0),
                              ]),
                            ]))
                          : (0, n.kq)("", !0),
                      ]
                    ),
                  ]),
                  (0, n._)("div", bl, [
                    (0, n.Wm)(
                      d,
                      {
                        "model-value": i.item.name,
                        "icon-width": 16,
                        editable: i.editable,
                        style: { "max-width": "95%" },
                        class: "mx-auto",
                        "onUpdate:modelValue": o.onUpdateName,
                      },
                      null,
                      8,
                      ["model-value", "editable", "onUpdate:modelValue"]
                    ),
                  ]),
                ])
              );
            },
          ],
        ]);
        const Dl = { class: "flex space-x-2" };
        var Cl = {
          name: "DocumentControls",
          components: { Contenteditable: $e, ReplaceButton: kl },
          props: {
            item: { type: Object, required: !0 },
            template: { type: Object, required: !0 },
            document: { type: Object, required: !0 },
            acceptFileTypes: {
              type: String,
              required: !1,
              default: "image/*, application/pdf",
            },
            withReplaceButton: { type: Boolean, required: !0, default: !0 },
            withArrows: { type: Boolean, required: !1, default: !0 },
          },
          emits: ["change", "remove", "up", "down", "replace"],
          methods: {
            upload: z.methods.upload,
            onUpdateName(e) {
              (this.item.name = e), this.$emit("change");
            },
          },
        };
        var Fl = (0, A.Z)(Cl, [
          [
            "render",
            function (e, t, i, s, a, o) {
              const r = (0, n.up)("Contenteditable"),
                d = (0, n.up)("ReplaceButton");
              return (
                (0, n.wg)(),
                (0, n.iD)("div", Dl, [
                  (0, n.Wm)(
                    r,
                    {
                      class: "w-full block mr-6",
                      "model-value": i.item.name,
                      "icon-width": 16,
                      "onUpdate:modelValue": o.onUpdateName,
                    },
                    null,
                    8,
                    ["model-value", "onUpdate:modelValue"]
                  ),
                  i.withReplaceButton
                    ? ((0, n.wg)(),
                      (0, n.j4)(
                        d,
                        {
                          key: 0,
                          "template-id": i.template.id,
                          "accept-file-types": i.acceptFileTypes,
                          onClick:
                            t[0] || (t[0] = (0, l.iM)(() => {}, ["stop"])),
                          onSuccess:
                            t[1] ||
                            (t[1] = (t) =>
                              e.$emit("replace", {
                                replaceSchemaItem: i.item,
                                ...t,
                              })),
                        },
                        null,
                        8,
                        ["template-id", "accept-file-types"]
                      ))
                    : (0, n.kq)("", !0),
                  i.withArrows
                    ? ((0, n.wg)(),
                      (0, n.iD)(
                        "button",
                        {
                          key: 1,
                          class:
                            "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
                          style: { width: "24px", height: "24px" },
                          onClick:
                            t[2] ||
                            (t[2] = (0, l.iM)(
                              (t) => e.$emit("up", i.item),
                              ["stop"]
                            )),
                        },
                        " \u2191 "
                      ))
                    : (0, n.kq)("", !0),
                  i.withArrows
                    ? ((0, n.wg)(),
                      (0, n.iD)(
                        "button",
                        {
                          key: 2,
                          class:
                            "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
                          style: { width: "24px", height: "24px" },
                          onClick:
                            t[3] ||
                            (t[3] = (0, l.iM)(
                              (t) => e.$emit("down", i.item),
                              ["stop"]
                            )),
                        },
                        " \u2193 "
                      ))
                    : (0, n.kq)("", !0),
                  (0, n._)(
                    "button",
                    {
                      class:
                        "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
                      style: { width: "24px", height: "24px" },
                      onClick:
                        t[4] ||
                        (t[4] = (0, l.iM)(
                          (t) => e.$emit("remove", i.item),
                          ["stop"]
                        )),
                    },
                    " \xd7 "
                  ),
                ])
              );
            },
          ],
        ]);
        const Sl = {
            class:
              "dropdown dropdown-top dropdown-end absolute bottom-4 right-4 z-10 md:hidden",
          },
          ql = {
            class: "btn btn-neutral text-white btn-circle btn-lg group",
            tabindex: "0",
          },
          Tl = ["onClick"],
          Ml = ["data-tip"],
          Il = { key: 0 },
          Rl = ["onClick"];
        var $l = {
          name: "MobileFields",
          components: { IconPlus: _s.Z, IconX: el.Z },
          inject: ["withPhone", "withPayment", "backgroundColor", "t"],
          props: {
            modelValue: { type: String, required: !1, default: "" },
            fields: { type: Array, required: !1, default: () => [] },
            selectedSubmitter: { type: Object, required: !0 },
            fieldTypes: { type: Array, required: !1, default: () => [] },
            defaultRequiredFields: {
              type: Array,
              required: !1,
              default: () => [],
            },
            defaultFields: { type: Array, required: !1, default: () => [] },
          },
          emits: ["select"],
          computed: {
            ...Qe.computed,
            submitterFields() {
              return this.fields.filter(
                (e) => e.submitter_uuid === this.selectedSubmitter.uuid
              );
            },
            submitterDefaultFields() {
              return this.defaultFields.filter(
                (e) => !e.role || e.role === this.selectedSubmitter.name
              );
            },
          },
          methods: {
            closeDropdown() {
              document.activeElement.blur();
            },
          },
        };
        const Al = (0, A.Z)($l, [
          [
            "render",
            function (e, t, i, s, a, r) {
              const d = (0, n.up)("IconPlus"),
                u = (0, n.up)("IconX");
              return (
                (0, n.wg)(),
                (0, n.iD)("span", Sl, [
                  (0, n._)("label", ql, [
                    (0, n.Wm)(d, {
                      class: "group-focus:hidden",
                      width: "28",
                      height: "28",
                    }),
                    (0, n.Wm)(u, {
                      class: "hidden group-focus:inline",
                      width: "28",
                      height: "28",
                    }),
                  ]),
                  (0, n._)(
                    "ul",
                    {
                      tabindex: "0",
                      class:
                        "dropdown-content menu menu-xs p-2 shadow rounded-box w-52 z-10 mb-3 mt-1.5 bg-base-100",
                      onClick:
                        t[0] ||
                        (t[0] = (...e) =>
                          r.closeDropdown && r.closeDropdown(...e)),
                    },
                    [
                      r.submitterDefaultFields.length
                        ? ((0, n.wg)(!0),
                          (0, n.iD)(
                            n.HY,
                            { key: 0 },
                            (0, n.Ko)(
                              r.submitterDefaultFields,
                              (t) => (
                                (0, n.wg)(),
                                (0, n.iD)("li", { key: t.name }, [
                                  (0, n._)(
                                    "a",
                                    {
                                      href: "#",
                                      class: "text-sm py-1 px-2",
                                      onClick: (0, l.iM)(
                                        (i) =>
                                          e.$emit("select", {
                                            name: t.name || "",
                                            type: t.type || "text",
                                          }),
                                        ["prevent"]
                                      ),
                                    },
                                    [
                                      ((0, n.wg)(),
                                      (0, n.j4)(
                                        (0, n.LL)(
                                          e.fieldIcons[t.type || "text"]
                                        ),
                                        { "stroke-width": 1.6, width: 20 }
                                      )),
                                      (0, n.Uk)(
                                        " " +
                                          (0, o.zw)(t.title || t.name) +
                                          " ",
                                        1
                                      ),
                                      i.defaultRequiredFields.includes(t)
                                        ? ((0, n.wg)(),
                                          (0, n.iD)(
                                            "span",
                                            {
                                              key: 0,
                                              "data-tip": r.t("required"),
                                              class:
                                                "text-red-400 text-2xl tooltip tooltip-left h-6",
                                            },
                                            " * ",
                                            8,
                                            Ml
                                          ))
                                        : (0, n.kq)("", !0),
                                    ],
                                    8,
                                    Tl
                                  ),
                                ])
                              )
                            ),
                            128
                          ))
                        : ((0, n.wg)(!0),
                          (0, n.iD)(
                            n.HY,
                            { key: 1 },
                            (0, n.Ko)(
                              e.fieldIcons,
                              (t, s) => (
                                (0, n.wg)(),
                                (0, n.iD)(
                                  n.HY,
                                  { key: s },
                                  [
                                    (0 !== i.fieldTypes.length &&
                                      !i.fieldTypes.includes(s)) ||
                                    (!r.withPhone && "phone" == s) ||
                                    (!r.withPayment && "payment" == s)
                                      ? (0, n.kq)("", !0)
                                      : ((0, n.wg)(),
                                        (0, n.iD)("li", Il, [
                                          (0, n._)(
                                            "a",
                                            {
                                              href: "#",
                                              class: (0, o.C_)([
                                                "text-sm py-1 px-2",
                                                { active: s === i.modelValue },
                                              ]),
                                              onClick: (0, l.iM)(
                                                (t) =>
                                                  e.$emit("select", {
                                                    type: s,
                                                  }),
                                                ["prevent"]
                                              ),
                                            },
                                            [
                                              ((0, n.wg)(),
                                              (0, n.j4)((0, n.LL)(t), {
                                                "stroke-width": 1.6,
                                                width: 20,
                                              })),
                                              (0, n.Uk)(
                                                " " +
                                                  (0, o.zw)(e.fieldNames[s]),
                                                1
                                              ),
                                            ],
                                            10,
                                            Rl
                                          ),
                                        ])),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                    ]
                  ),
                ])
              );
            },
          ],
        ]);
        var zl = Al,
          El = i(4257),
          Ll = i(8571);
        const jl = {
          search_field: "Search field",
          field_not_found: "Field not found",
          clear: "Clear",
          align: "Align",
          add_all_required_fields_to_continue:
            "Add all required fields to continue",
          left: "Left",
          right: "Right",
          center: "Center",
          description: "Description",
          display_title: "Display title",
          with_logo: "With logo",
          unchecked: "Unchecked",
          equal: "Equal",
          not_equal: "Not equal",
          contains: "Contains",
          does_not_contain: "Does not contain",
          not_empty: "Not empty",
          empty: "Empty",
          select_field_: "Select field...",
          select_value_: "Select value...",
          remove_condition: "Remove condition",
          are_you_sure: "Are you sure?",
          sign_yourself: "Sign Yourself",
          set_signing_date: "Set signing date",
          send: "Send",
          remove: "Remove",
          edit: "Edit",
          settings: "Settings",
          up: "Up",
          down: "Down",
          checked: "Checked",
          save: "Save",
          cancel: "Cancel",
          any: "Any",
          drawn: "Drawn",
          formula: "Formula",
          typed: "Typed",
          draw_field_on_the_document: "Draw {field} field on the document",
          click_to_upload: "Click to upload",
          or_drag_and_drop_files: "or drag and drop files",
          uploading: "Uploading",
          processing_: "Processing...",
          add_pdf_documents_or_images: "Add PDF documents or images",
          add_documents_or_images: "Add documents or images",
          required: "Required",
          default_value: "Default value",
          format: "Format",
          read_only: "Read-only",
          page: "Page",
          draw_new_area: "Draw New Area",
          copy_to_all_pages: "Copy to All Pages",
          add_option: "Add option",
          option: "Option",
          condition: "Condition",
          first_party: "First Party",
          second_party: "Second Party",
          third_party: "Third Party",
          fourth_party: "Fourth Party",
          fifth_party: "Fifth Party",
          sixth_party: "Sixth Party",
          seventh_party: "Seventh Party",
          eighth_party: "Eighth Party",
          ninth_party: "Ninth Party",
          tenth_party: "Tenth Party",
          eleventh_party: "Eleventh Party",
          twelfth_party: "Twelfth Party",
          thirteenth_party: "Thirteenth Party",
          fourteenth_party: "Fourteenth Party",
          fifteenth_party: "Fifteenth Party",
          sixteenth_party: "Sixteenth Party",
          seventeenth_party: "Seventeenth Party",
          eighteenth_party: "Eighteenth Party",
          nineteenth_party: "Nineteenth Party",
          twentieth_party: "Twentieth Party",
          draw: "Draw",
          add: "Add",
          or_add_field_without_drawing: "Or add field without drawing",
          text: "Text",
          number: "Number",
          signature: "Signature",
          initials: "Initials",
          date: "Date",
          image: "Image",
          file: "File",
          select: "Select",
          checkbox: "Checkbox",
          multiple: "Multiple",
          radio: "Radio",
          cells: "Cells",
          stamp: "Stamp",
          payment: "Payment",
          phone: "Phone",
          field: "Field",
          group: "Group",
          draw_a_text_field_on_the_page_with_a_mouse:
            "Draw a text field on the page with a mouse",
          draw_field: "Draw {field} Field",
          replace: "Replace",
          uploading_: "Uploading...",
          add_document: "Add Document",
        };
        var Nl = {
          name: "TemplateBuilder",
          components: {
            Upload: z,
            Document: ll,
            Fields: zs,
            MobileDrawField: Us,
            IconWritingSign: je.Z,
            MobileFields: zl,
            Logo: rl,
            Dropzone: Z,
            DocumentPreview: _l,
            DocumentControls: Fl,
            IconInnerShadowTop: R.Z,
            Contenteditable: $e,
            IconUsersPlus: El.Z,
            IconDeviceFloppy: Ll.Z,
          },
          provide() {
            return {
              template: this.template,
              save: this.save,
              t: this.t,
              currencies: this.currencies,
              baseFetch: this.baseFetch,
              fieldTypes: this.fieldTypes,
              backgroundColor: this.backgroundColor,
              withPhone: this.withPhone,
              withPayment: this.withPayment,
              isPaymentConnected: this.isPaymentConnected,
              withFormula: this.withFormula,
              withConditions: this.withConditions,
              defaultDrawFieldType: this.defaultDrawFieldType,
              selectedAreaRef: (0, n.Fl)(() => this.selectedAreaRef),
              fieldsDragFieldRef: (0, n.Fl)(() => this.fieldsDragFieldRef),
            };
          },
          props: {
            template: { type: Object, required: !0 },
            i18n: { type: Object, required: !1, default: () => ({}) },
            backgroundColor: { type: String, required: !1, default: "" },
            editable: { type: Boolean, required: !1, default: !0 },
            withHelp: { type: Boolean, required: !1, default: !0 },
            autosave: { type: Boolean, required: !1, default: !0 },
            defaultFields: { type: Array, required: !1, default: () => [] },
            defaultRequiredFields: {
              type: Array,
              required: !1,
              default: () => [],
            },
            withSelectedFieldType: { type: Boolean, required: !1, default: !1 },
            defaultDrawFieldType: {
              type: String,
              required: !1,
              default: "text",
            },
            currencies: { type: Array, required: !1, default: () => [] },
            fieldTypes: { type: Array, required: !1, default: () => [] },
            defaultSubmitters: { type: Array, required: !1, default: () => [] },
            acceptFileTypes: {
              type: String,
              required: !1,
              default: "image/*, application/pdf",
            },
            baseUrl: { type: String, required: !1, default: "" },
            withLogo: { type: Boolean, required: !1, default: !0 },
            onUpload: { type: Function, required: !1, default: () => () => {} },
            onSave: { type: Function, required: !1, default: () => () => {} },
            onChange: { type: Function, required: !1, default: () => () => {} },
            withStickySubmitters: { type: Boolean, required: !1, default: !0 },
            withUploadButton: { type: Boolean, required: !1, default: !0 },
            withTitle: { type: Boolean, required: !1, default: !0 },
            withFieldsList: { type: Boolean, required: !1, default: !0 },
            authenticityToken: { type: String, required: !1, default: "" },
            withDocumentsList: { type: Boolean, required: !1, default: !0 },
            withPhone: { type: Boolean, required: !1, default: !1 },
            withPayment: { type: Boolean, required: !1, default: !1 },
            isPaymentConnected: { type: Boolean, required: !1, default: !1 },
            withFormula: { type: Boolean, required: !1, default: !1 },
            withConditions: { type: Boolean, required: !1, default: !1 },
            onlyDefinedFields: { type: Boolean, required: !1, default: !1 },
            fetchOptions: {
              type: Object,
              required: !1,
              default: () => ({ headers: {} }),
            },
          },
          data: () => ({
            documentRefs: [],
            isBreakpointLg: !1,
            isSaving: !1,
            selectedSubmitter: null,
            showDrawField: !1,
            drawField: null,
            drawFieldType: null,
            drawOption: null,
            dragField: null,
          }),
          computed: {
            selectedAreaRef: () => (0, a.iH)(),
            fieldsDragFieldRef: () => (0, a.iH)(),
            fieldAreasIndex() {
              const e = {};
              return (
                this.template.fields.forEach((t) => {
                  (t.areas || []).forEach((i) => {
                    e[i.attachment_uuid] ||= {};
                    (e[i.attachment_uuid][i.page] ||= []).push({
                      area: i,
                      field: t,
                    });
                  });
                }),
                e
              );
            },
            isAllRequiredFieldsAdded() {
              return !this.defaultRequiredFields?.some(
                (e) => !this.template.fields?.some((t) => t.name === e.name)
              );
            },
            selectedField() {
              return this.template.fields.find((e) =>
                e.areas?.includes(this.selectedAreaRef.value)
              );
            },
            sortedDocuments() {
              return this.template.schema.map((e) =>
                this.template.documents.find(
                  (t) => t.uuid === e.attachment_uuid
                )
              );
            },
          },
          created() {
            this.template.fields?.length ||
              1 !== this.template.submitters?.length ||
              ("First Party" === this.template.submitters[0]?.name &&
                (this.template.submitters[0].name = this.t("first_party")));
            const e = this.defaultSubmitters.map(
              (e) => this.template.submitters.find((t) => t.name === e)?.uuid
            );
            this.defaultSubmitters.forEach((t, i) => {
              const s = (this.template.submitters[i] ||= {});
              (s.name = t),
                e.filter(Boolean).length
                  ? (s.uuid = e[i] || s.uuid || (0, Ki.Z)())
                  : (s.uuid ||= (0, Ki.Z)());
            }),
              (this.selectedSubmitter = this.template.submitters[0]);
          },
          mounted() {
            (this.undoStack = [JSON.stringify(this.template)]),
              (this.redoStack = []),
              this.$nextTick(() => {
                this.onWindowResize();
              }),
              document.addEventListener("keyup", this.onKeyUp),
              window.addEventListener("keydown", this.onKeyDown),
              window.addEventListener("resize", this.onWindowResize),
              this.$nextTick(() => {
                document.location.search?.includes("stripe_connect_success") &&
                  document
                    .querySelector('form[action="/auth/stripe_connect"]')
                    ?.closest(".dropdown")
                    ?.querySelector("label")
                    ?.focus();
              });
          },
          unmounted() {
            document.removeEventListener("keyup", this.onKeyUp),
              window.removeEventListener("keydown", this.onKeyDown),
              window.removeEventListener("resize", this.onWindowResize);
          },
          beforeUpdate() {
            this.documentRefs = [];
          },
          methods: {
            t(e) {
              return this.i18n[e] || jl[e] || e;
            },
            addField(e, t = null) {
              const i = {
                name: "",
                uuid: (0, Ki.Z)(),
                required: "checkbox" !== e,
                areas: t ? [t] : [],
                submitter_uuid: this.selectedSubmitter.uuid,
                type: e,
              };
              ["select", "multiple", "radio"].includes(e) &&
                (i.options = [{ value: "", uuid: (0, Ki.Z)() }]),
                "stamp" === e && (i.readonly = !0),
                "date" === e &&
                  (i.preferences = {
                    format: Intl.DateTimeFormat()
                      .resolvedOptions()
                      .locale.endsWith("-US")
                      ? "MM/DD/YYYY"
                      : "DD/MM/YYYY",
                  }),
                this.template.fields.push(i),
                this.save();
            },
            startFieldDraw({ name: e, type: t }) {
              const i = this.template.fields?.find(
                (t) =>
                  t.submitter_uuid === this.selectedSubmitter.uuid &&
                  e &&
                  e === t.name
              );
              if (i) this.drawField = i;
              else {
                const i = {
                  name: e || "",
                  uuid: (0, Ki.Z)(),
                  required: "checkbox" !== t,
                  areas: [],
                  submitter_uuid: this.selectedSubmitter.uuid,
                  type: t,
                };
                ["select", "multiple", "radio"].includes(t) &&
                  (i.options = [{ value: "", uuid: (0, Ki.Z)() }]),
                  "stamp" === t && (i.readonly = !0),
                  "date" === t &&
                    (i.preferences = {
                      format: Intl.DateTimeFormat()
                        .resolvedOptions()
                        .locale.endsWith("-US")
                        ? "MM/DD/YYYY"
                        : "DD/MM/YYYY",
                    }),
                  (this.drawField = i);
              }
              this.drawOption = null;
            },
            undo() {
              if (this.undoStack.length > 1) {
                this.undoStack.pop();
                const e = this.undoStack[this.undoStack.length - 1],
                  t = JSON.stringify(this.template);
                e &&
                  e !== t &&
                  (this.redoStack.push(t),
                  Object.assign(this.template, JSON.parse(e)),
                  this.save());
              }
            },
            redo() {
              const e = this.redoStack.pop();
              this.lastRedoData = e;
              const t = JSON.stringify(this.template);
              e &&
                e !== t &&
                (this.undoStack[this.undoStack.length - 1] !== t &&
                  this.undoStack.push(t),
                Object.assign(this.template, JSON.parse(e)),
                this.save());
            },
            onWindowResize(e) {
              this.isBreakpointLg =
                this.$el.getRootNode().querySelector("div[data-v-app]")
                  .offsetWidth < 1024;
            },
            setDocumentRefs(e) {
              e && this.documentRefs.push(e);
            },
            scrollIntoDocument(e) {
              this.documentRefs
                .find((t) => t.document.uuid === e.attachment_uuid)
                .$el.scrollIntoView({ behavior: "smooth", block: "start" });
            },
            clearDrawField() {
              (this.drawField = null),
                (this.drawOption = null),
                (this.showDrawField = !1),
                this.withSelectedFieldType || (this.drawFieldType = "");
            },
            onKeyUp(e) {
              "Escape" === e.code &&
                (this.clearDrawField(), (this.selectedAreaRef.value = null)),
                this.editable &&
                  ["Backspace", "Delete"].includes(e.key) &&
                  this.selectedAreaRef.value &&
                  document.activeElement === document.body &&
                  (this.removeArea(this.selectedAreaRef.value),
                  (this.selectedAreaRef.value = null));
            },
            onKeyDown(e) {
              (e.metaKey && e.shiftKey && "z" === e.key) ||
              (e.ctrlKey && "Z" === e.key)
                ? (e.stopImmediatePropagation(),
                  e.preventDefault(),
                  this.redo())
                : (e.ctrlKey || e.metaKey) &&
                  "z" === e.key &&
                  (e.stopImmediatePropagation(),
                  e.preventDefault(),
                  this.undo());
            },
            removeArea(e) {
              const t = this.template.fields.find((t) => t.areas?.includes(e));
              t.areas.splice(t.areas.indexOf(e), 1),
                t.areas.length ||
                  this.template.fields.splice(
                    this.template.fields.indexOf(t),
                    1
                  ),
                this.save();
            },
            pushUndo() {
              const e = JSON.stringify(this.template);
              this.undoStack[this.undoStack.length - 1] !== e &&
                (this.undoStack.push(e),
                this.lastRedoData !== e && (this.redoStack = []));
            },
            setDefaultAreaSize(e, t) {
              const i = this.documentRefs.find(
                (t) => t.document.uuid === e.attachment_uuid
              ).pageRefs[e.page].$refs.mask;
              "checkbox" === t
                ? ((e.w = i.clientWidth / 30 / i.clientWidth),
                  (e.h =
                    (i.clientWidth / 30 / i.clientWidth) *
                    (i.clientWidth / i.clientHeight)))
                : "image" === t
                ? ((e.w = i.clientWidth / 5 / i.clientWidth),
                  (e.h =
                    (i.clientWidth / 5 / i.clientWidth) *
                    (i.clientWidth / i.clientHeight)))
                : "signature" === t || "stamp" === t
                ? ((e.w = i.clientWidth / 5 / i.clientWidth),
                  (e.h =
                    ((i.clientWidth / 5 / i.clientWidth) *
                      (i.clientWidth / i.clientHeight)) /
                    2))
                : "initials" === t
                ? ((e.w = i.clientWidth / 10 / i.clientWidth),
                  (e.h = i.clientWidth / 35 / i.clientWidth))
                : ((e.w = i.clientWidth / 5 / i.clientWidth),
                  (e.h = i.clientWidth / 35 / i.clientWidth));
            },
            onDraw(e) {
              if (this.drawField) {
                if (this.drawOption) {
                  const t = this.drawField.areas?.find((e) => !e.option_uuid);
                  t &&
                    !this.drawField.areas.find(
                      (e) => e.option_uuid === this.drawField.options[0].uuid
                    ) &&
                    (t.option_uuid = this.drawField.options[0].uuid),
                    (e.option_uuid = this.drawOption.uuid);
                }
                if (0 === e.w || 0 === e.h) {
                  const t =
                    this.drawField.areas?.[this.drawField.areas.length - 1];
                  this.selectedField?.type === this.drawField.type
                    ? ((e.w = this.selectedAreaRef.value.w),
                      (e.h = this.selectedAreaRef.value.h))
                    : t
                    ? ((e.w = t.w), (e.h = t.h))
                    : this.setDefaultAreaSize(
                        e,
                        this.drawOption ? "checkbox" : this.drawField?.type
                      ),
                    (e.x -= e.w / 2),
                    (e.y -= e.h / 2);
                }
                this.drawField.areas ||= [];
                const t = this.drawField.areas.findIndex(
                  (t) =>
                    t.attachment_uuid === e.attachment_uuid && t.page > e.page
                );
                -1 !== t
                  ? this.drawField.areas.splice(t, 0, e)
                  : this.drawField.areas.push(e),
                  -1 === this.template.fields.indexOf(this.drawField) &&
                    this.template.fields.push(this.drawField),
                  (this.drawField = null),
                  (this.drawOption = null),
                  (this.selectedAreaRef.value = e),
                  this.save();
              } else {
                const t = this.documentRefs.find(
                  (t) => t.document.uuid === e.attachment_uuid
                ).pageRefs[e.page].$refs.mask;
                let i = t.clientWidth * e.w < 35 ? "checkbox" : "text";
                if (
                  (this.drawFieldType
                    ? (i = this.drawFieldType)
                    : this.defaultDrawFieldType &&
                      "text" !== this.defaultDrawFieldType
                    ? (i = this.defaultDrawFieldType)
                    : 0 === this.fieldTypes.length ||
                      this.fieldTypes.includes(i) ||
                      (i = this.fieldTypes[0]),
                  "checkbox" === i &&
                    !this.drawFieldType &&
                    ("checkbox" ===
                      this.template.fields[this.template.fields.length - 1]
                        ?.type ||
                      e.w))
                ) {
                  const s = [...this.template.fields]
                      .reverse()
                      .find((e) => e.type === i),
                    l = s?.areas?.[s.areas.length - 1];
                  if (l || e.w) {
                    const i = l?.w || 30 / t.clientWidth,
                      s = l?.h || 30 / t.clientHeight;
                    t.clientWidth * e.w < 5 &&
                      ((e.x = e.x - i / 2), (e.y = e.y - s / 2)),
                      (e.w = i),
                      (e.h = s);
                  }
                }
                !this.drawFieldType ||
                  (0 !== e.w && 0 !== e.h) ||
                  (this.selectedField?.type === this.drawFieldType
                    ? ((e.w = this.selectedAreaRef.value.w),
                      (e.h = this.selectedAreaRef.value.h))
                    : this.setDefaultAreaSize(e, this.drawFieldType),
                  (e.x -= e.w / 2),
                  (e.y -= e.h / 2)),
                  e.w &&
                    (this.addField(i, e), (this.selectedAreaRef.value = e));
              }
            },
            onDropfield(e) {
              const t = this.fieldsDragFieldRef.value || {
                name: "",
                uuid: (0, Ki.Z)(),
                submitter_uuid: this.selectedSubmitter.uuid,
                required: "checkbox" !== this.dragField.type,
                ...this.dragField,
              };
              this.fieldsDragFieldRef.value ||
                (["select", "multiple", "radio"].includes(t.type) &&
                  (t.options = [{ value: "", uuid: (0, Ki.Z)() }]),
                "stamp" === t.type && (t.readonly = !0),
                "date" === t.type &&
                  (t.preferences = {
                    format: Intl.DateTimeFormat()
                      .resolvedOptions()
                      .locale.endsWith("-US")
                      ? "MM/DD/YYYY"
                      : "DD/MM/YYYY",
                  }));
              const i = {
                  x: (e.x - 6) / e.maskW,
                  y: e.y / e.maskH,
                  page: e.page,
                  attachment_uuid: e.attachment_uuid,
                },
                s = [...this.template.fields]
                  .reverse()
                  .find((e) => e.type === t.type);
              let l;
              (l =
                this.selectedField?.type === t.type
                  ? this.selectedAreaRef.value
                  : s?.areas?.length
                  ? s.areas[s.areas.length - 1]
                  : ["checkbox"].includes(t.type)
                  ? {
                      w: e.maskW / 30 / e.maskW,
                      h: (e.maskW / 30 / e.maskW) * (e.maskW / e.maskH),
                    }
                  : "image" === t.type
                  ? {
                      w: e.maskW / 5 / e.maskW,
                      h: (e.maskW / 5 / e.maskW) * (e.maskW / e.maskH),
                    }
                  : "signature" === t.type || "stamp" === t.type
                  ? {
                      w: e.maskW / 5 / e.maskW,
                      h: ((e.maskW / 5 / e.maskW) * (e.maskW / e.maskH)) / 2,
                    }
                  : "initials" === t.type
                  ? { w: e.maskW / 10 / e.maskW, h: e.maskW / 35 / e.maskW }
                  : { w: e.maskW / 5 / e.maskW, h: e.maskW / 35 / e.maskW }),
                (i.w = l.w),
                (i.h = l.h),
                (i.y = i.y - l.h / 2),
                "cells" === t.type && (i.cell_w = l.cell_w || l.w / 5),
                (t.areas ||= []);
              const a = t.areas[t.areas.length - 1];
              a && ((i.x -= a.w / 2), (i.w = a.w), (i.h = a.h)),
                t.areas.push(i),
                (this.selectedAreaRef.value = i),
                -1 === this.template.fields.indexOf(t) &&
                  this.template.fields.push(t),
                this.save();
            },
            updateFromUpload(e) {
              this.template.schema.push(...e.schema),
                this.template.documents.push(...e.documents),
                e.fields && (this.template.fields = e.fields),
                e.submitters &&
                  ((this.template.submitters = e.submitters),
                  this.template.submitters.find(
                    (e) => e.uuid === this.selectedSubmitter?.uuid
                  ) || (this.selectedSubmitter = this.template.submitters[0])),
                this.$nextTick(() => {
                  (this.$refs.previews.scrollTop =
                    this.$refs.previews.scrollHeight),
                    this.scrollIntoDocument(e.schema[0]);
                }),
                "New Document" === this.template.name &&
                  (this.template.name = this.template.schema[0].name),
                this.onUpload && this.onUpload(this.template),
                this.save();
            },
            updateName(e) {
              (this.template.name = e), this.save();
            },
            onDocumentRemove(e) {
              window.confirm(this.t("are_you_sure")) &&
                this.template.schema.splice(this.template.schema.indexOf(e), 1);
              const t = [];
              this.template.fields.forEach((i) => {
                [...(i.areas || [])].forEach((s) => {
                  s.attachment_uuid === e.attachment_uuid &&
                    (i.areas.splice(i.areas.indexOf(s), 1), t.push(i.uuid));
                });
              }),
                (this.template.fields = this.template.fields.filter(
                  (e) => !t.includes(e.uuid) || e.areas?.length
                )),
                this.save();
            },
            onDocumentReplace(e) {
              const { replaceSchemaItem: t, schema: i, documents: s } = e;
              if (
                (this.template.schema.splice(
                  this.template.schema.indexOf(t),
                  1,
                  i[0]
                ),
                this.template.documents.push(...s),
                e.fields)
              ) {
                this.template.fields = e.fields;
                const i = [];
                this.template.fields.forEach((e) => {
                  [...(e.areas || [])].forEach((s) => {
                    s.attachment_uuid === t.attachment_uuid &&
                      (e.areas.splice(e.areas.indexOf(s), 1), i.push(e.uuid));
                  });
                }),
                  (this.template.fields = this.template.fields.filter(
                    (e) => !i.includes(e.uuid) || e.areas?.length
                  ));
              }
              e.submitters &&
                ((this.template.submitters = e.submitters),
                this.template.submitters.find(
                  (e) => e.uuid === this.selectedSubmitter?.uuid
                ) || (this.selectedSubmitter = this.template.submitters[0])),
                this.template.fields.forEach((e) => {
                  (e.areas || []).forEach((e) => {
                    e.attachment_uuid === t.attachment_uuid &&
                      (e.attachment_uuid = i[0].attachment_uuid);
                  });
                }),
                this.onUpload && this.onUpload(this.template),
                this.save();
            },
            moveDocument(e, t) {
              const i = this.template.schema.indexOf(e);
              this.template.schema.splice(i, 1),
                i + t > this.template.schema.length
                  ? this.template.schema.unshift(e)
                  : i + t < 0
                  ? this.template.schema.push(e)
                  : this.template.schema.splice(i + t, 0, e),
                this.save();
            },
            maybeShowErrorTemplateAlert(e) {
              if (!this.isAllRequiredFieldsAdded) {
                e.preventDefault();
                const t = this.defaultRequiredFields?.filter(
                  (e) => !this.template.fields?.some((t) => t.name === e.name)
                );
                if (t?.length)
                  return alert(
                    this.t("add_all_required_fields_to_continue") +
                      ": " +
                      t.map((e) => e.name).join(", ")
                  );
              }
              this.template.fields.length ||
                (e.preventDefault(),
                alert("Please draw fields to prepare the document."));
            },
            onSaveClick() {
              if (!this.isAllRequiredFieldsAdded) {
                const e = this.defaultRequiredFields?.filter(
                  (e) => !this.template.fields?.some((t) => t.name === e.name)
                );
                if (e?.length)
                  return alert(
                    this.t("add_all_required_fields_to_continue") +
                      ": " +
                      e.map((e) => e.name).join(", ")
                  );
              }
              this.template.fields.length
                ? ((this.isSaving = !0),
                  this.save()
                    .then(() => {
                      window.Turbo.visit(`/templates/${this.template.id}`);
                    })
                    .finally(() => {
                      this.isSaving = !1;
                    }))
                : alert("Please draw fields to prepare the document.");
            },
            scrollToArea(e) {
              this.documentRefs
                .find((t) => t.document.uuid === e.attachment_uuid)
                .scrollToArea(e),
                (this.selectedAreaRef.value = e);
            },
            baseFetch(e, t = {}) {
              return fetch(this.baseUrl + e, {
                ...t,
                headers: {
                  "X-CSRF-Token": this.authenticityToken,
                  ...this.fetchOptions.headers,
                  ...t.headers,
                },
              });
            },
            save({ force: e } = { force: !1 }) {
              return (
                this.onChange && this.onChange(this.template),
                this.autosave || e
                  ? (this.$nextTick(() => {
                      this.$el.closest("template-builder") &&
                        (this.$el.closest("template-builder").dataset.template =
                          JSON.stringify(this.template));
                    }),
                    this.pushUndo(),
                    this.baseFetch(`/templates/${this.template.id}`, {
                      method: "PUT",
                      body: JSON.stringify({
                        template: {
                          name: this.template.name,
                          schema: this.template.schema,
                          submitters: this.template.submitters,
                          fields: this.template.fields,
                        },
                      }),
                      headers: { "Content-Type": "application/json" },
                    }).then(() => {
                      this.onSave && this.onSave(this.template);
                    }))
                  : Promise.resolve({})
              );
            },
          },
        };
        var Ul = (0, A.Z)(Nl, [
          [
            "render",
            function (e, t, i, s, a, C) {
              const F = (0, n.up)("Logo"),
                S = (0, n.up)("Contenteditable"),
                q = (0, n.up)("IconWritingSign"),
                T = (0, n.up)("IconUsersPlus"),
                M = (0, n.up)("IconInnerShadowTop"),
                I = (0, n.up)("IconDeviceFloppy"),
                R = (0, n.up)("DocumentPreview"),
                $ = (0, n.up)("Upload"),
                A = (0, n.up)("Dropzone"),
                z = (0, n.up)("Document"),
                E = (0, n.up)("DocumentControls"),
                L = (0, n.up)("Fields"),
                j = (0, n.up)("MobileDrawField"),
                N = (0, n.up)("MobileFields");
              return (
                (0, n.wg)(),
                (0, n.iD)("div", r, [
                  e.$slots.buttons || i.withTitle
                    ? ((0, n.wg)(),
                      (0, n.iD)(
                        "div",
                        {
                          key: 0,
                          id: "title_container",
                          class: (0, o.C_)([
                            "flex justify-between py-1.5 items-center pr-4 top-0 z-10",
                            {
                              sticky:
                                i.withStickySubmitters || a.isBreakpointLg,
                            },
                          ]),
                          style: (0, o.j5)({
                            backgroundColor: i.backgroundColor,
                          }),
                        },
                        [
                          (0, n._)("div", d, [
                            i.withLogo
                              ? ((0, n.wg)(), (0, n.iD)("a", u, [(0, n.Wm)(F)]))
                              : (0, n.kq)("", !0),
                            i.withTitle
                              ? ((0, n.wg)(),
                                (0, n.j4)(
                                  S,
                                  {
                                    key: 1,
                                    "model-value": i.template.name,
                                    editable: i.editable,
                                    class:
                                      "text-xl md:text-3xl font-semibold focus:text-clip",
                                    "icon-stroke-width": 2.3,
                                    "onUpdate:modelValue": C.updateName,
                                  },
                                  null,
                                  8,
                                  [
                                    "model-value",
                                    "editable",
                                    "onUpdate:modelValue",
                                  ]
                                ))
                              : (0, n.kq)("", !0),
                          ]),
                          (0, n._)("div", c, [
                            e.$slots.buttons
                              ? (0, n.WI)(e.$slots, "buttons", { key: 0 })
                              : ((0, n.wg)(),
                                (0, n.iD)(
                                  n.HY,
                                  { key: 1 },
                                  [
                                    (0, n._)(
                                      "a",
                                      {
                                        href:
                                          i.template.submitters.length > 1
                                            ? `/templates/${i.template.id}/submissions/new?selfsign=true`
                                            : `/d/${i.template.slug}`,
                                        class:
                                          "btn btn-primary btn-ghost text-base hidden md:flex",
                                        target:
                                          i.template.submitters.length > 1
                                            ? ""
                                            : "_blank",
                                        "data-turbo-frame":
                                          i.template.submitters.length > 1
                                            ? "modal"
                                            : "",
                                        onClick:
                                          t[0] ||
                                          (t[0] = (...e) =>
                                            C.maybeShowErrorTemplateAlert &&
                                            C.maybeShowErrorTemplateAlert(
                                              ...e
                                            )),
                                      },
                                      [
                                        (0, n.Wm)(q, {
                                          width: "22",
                                          class: "inline",
                                        }),
                                        (0, n._)(
                                          "span",
                                          m,
                                          (0, o.zw)(C.t("sign_yourself")),
                                          1
                                        ),
                                      ],
                                      8,
                                      p
                                    ),
                                    (0, n._)(
                                      "a",
                                      {
                                        href: `/templates/${i.template.id}/submissions/new?with_link=true`,
                                        "data-turbo-frame": "modal",
                                        class: "white-button md:!px-6",
                                        onClick:
                                          t[1] ||
                                          (t[1] = (...e) =>
                                            C.maybeShowErrorTemplateAlert &&
                                            C.maybeShowErrorTemplateAlert(
                                              ...e
                                            )),
                                      },
                                      [
                                        (0, n.Wm)(T, {
                                          width: "20",
                                          class: "inline",
                                        }),
                                        (0, n._)(
                                          "span",
                                          f,
                                          (0, o.zw)(C.t("send")),
                                          1
                                        ),
                                      ],
                                      8,
                                      h
                                    ),
                                    i.editable
                                      ? ((0, n.wg)(),
                                        (0, n.iD)(
                                          "button",
                                          (0, n.dG)(
                                            {
                                              key: 0,
                                              class: [
                                                "base-button",
                                                { disabled: a.isSaving },
                                              ],
                                            },
                                            a.isSaving ? { disabled: !0 } : {},
                                            {
                                              onClick:
                                                t[2] ||
                                                (t[2] = (0, l.iM)(
                                                  (...e) =>
                                                    C.onSaveClick &&
                                                    C.onSaveClick(...e),
                                                  ["prevent"]
                                                )),
                                            }
                                          ),
                                          [
                                            a.isSaving
                                              ? ((0, n.wg)(),
                                                (0, n.j4)(M, {
                                                  key: 0,
                                                  width: "22",
                                                  class: "animate-spin",
                                                }))
                                              : ((0, n.wg)(),
                                                (0, n.j4)(I, {
                                                  key: 1,
                                                  width: "22",
                                                })),
                                            (0, n._)(
                                              "span",
                                              b,
                                              (0, o.zw)(C.t("save")),
                                              1
                                            ),
                                          ],
                                          16
                                        ))
                                      : ((0, n.wg)(),
                                        (0, n.iD)(
                                          "a",
                                          {
                                            key: 1,
                                            href: `/templates/${i.template.id}`,
                                            class: "base-button",
                                          },
                                          [
                                            (0, n._)(
                                              "span",
                                              g,
                                              (0, o.zw)(C.t("back")),
                                              1
                                            ),
                                          ],
                                          8,
                                          w
                                        )),
                                  ],
                                  64
                                )),
                          ]),
                        ],
                        6
                      ))
                    : (0, n.kq)("", !0),
                  (0, n._)(
                    "div",
                    {
                      id: "main_container",
                      class: (0, o.C_)([
                        "flex",
                        e.$slots.buttons || i.withTitle
                          ? "md:max-h-[calc(100%_-_60px)]"
                          : "md:max-h-[100%]",
                      ]),
                    },
                    [
                      i.withDocumentsList
                        ? ((0, n.wg)(),
                          (0, n.iD)(
                            "div",
                            {
                              key: 0,
                              id: "documents_container",
                              ref: "previews",
                              style: (0, o.j5)({
                                display: a.isBreakpointLg ? "none" : "initial",
                              }),
                              class:
                                "overflow-y-auto overflow-x-hidden w-52 flex-none pr-3 mt-0.5 pt-0.5 hidden lg:block",
                            },
                            [
                              ((0, n.wg)(!0),
                              (0, n.iD)(
                                n.HY,
                                null,
                                (0, n.Ko)(
                                  i.template.schema,
                                  (e, t) => (
                                    (0, n.wg)(),
                                    (0, n.j4)(
                                      R,
                                      {
                                        key: t,
                                        "with-arrows":
                                          i.template.schema.length > 1,
                                        item: e,
                                        document: C.sortedDocuments[t],
                                        "accept-file-types": i.acceptFileTypes,
                                        "with-replace-button":
                                          i.withUploadButton,
                                        editable: i.editable,
                                        template: i.template,
                                        onScrollTo: (t) =>
                                          C.scrollIntoDocument(e),
                                        onRemove: C.onDocumentRemove,
                                        onReplace: C.onDocumentReplace,
                                        onUp: (t) => C.moveDocument(e, -1),
                                        onDown: (t) => C.moveDocument(e, 1),
                                        onChange: C.save,
                                      },
                                      null,
                                      8,
                                      [
                                        "with-arrows",
                                        "item",
                                        "document",
                                        "accept-file-types",
                                        "with-replace-button",
                                        "editable",
                                        "template",
                                        "onScrollTo",
                                        "onRemove",
                                        "onReplace",
                                        "onUp",
                                        "onDown",
                                        "onChange",
                                      ]
                                    )
                                  )
                                ),
                                128
                              )),
                              (0, n._)(
                                "div",
                                {
                                  class: "sticky bottom-0 py-2",
                                  style: (0, o.j5)({
                                    backgroundColor: i.backgroundColor,
                                  }),
                                },
                                [
                                  C.sortedDocuments.length &&
                                  i.editable &&
                                  i.withUploadButton
                                    ? ((0, n.wg)(),
                                      (0, n.j4)(
                                        $,
                                        {
                                          key: 0,
                                          "accept-file-types":
                                            i.acceptFileTypes,
                                          "template-id": i.template.id,
                                          onSuccess: C.updateFromUpload,
                                        },
                                        null,
                                        8,
                                        [
                                          "accept-file-types",
                                          "template-id",
                                          "onSuccess",
                                        ]
                                      ))
                                    : (0, n.kq)("", !0),
                                ],
                                4
                              ),
                            ],
                            4
                          ))
                        : (0, n.kq)("", !0),
                      (0, n._)("div", y, [
                        (0, n._)(
                          "div",
                          v,
                          [
                            !C.sortedDocuments.length && i.withUploadButton
                              ? ((0, n.wg)(),
                                (0, n.j4)(
                                  A,
                                  {
                                    key: 0,
                                    "template-id": i.template.id,
                                    "accept-file-types": i.acceptFileTypes,
                                    onSuccess: C.updateFromUpload,
                                  },
                                  null,
                                  8,
                                  [
                                    "template-id",
                                    "accept-file-types",
                                    "onSuccess",
                                  ]
                                ))
                              : ((0, n.wg)(),
                                (0, n.iD)(
                                  n.HY,
                                  { key: 1 },
                                  [
                                    ((0, n.wg)(!0),
                                    (0, n.iD)(
                                      n.HY,
                                      null,
                                      (0, n.Ko)(
                                        C.sortedDocuments,
                                        (e) => (
                                          (0, n.wg)(),
                                          (0, n.iD)(
                                            n.HY,
                                            { key: e.uuid },
                                            [
                                              (0, n.Wm)(
                                                z,
                                                {
                                                  ref_for: !0,
                                                  ref: C.setDocumentRefs,
                                                  "areas-index":
                                                    C.fieldAreasIndex[e.uuid],
                                                  "selected-submitter":
                                                    a.selectedSubmitter,
                                                  document: e,
                                                  "is-drag": !!a.dragField,
                                                  "default-fields": [
                                                    ...i.defaultRequiredFields,
                                                    ...i.defaultFields,
                                                  ],
                                                  "allow-draw":
                                                    !i.onlyDefinedFields,
                                                  "default-submitters":
                                                    i.defaultSubmitters,
                                                  "draw-field": a.drawField,
                                                  "draw-field-type":
                                                    a.drawFieldType,
                                                  editable: i.editable,
                                                  "base-url": i.baseUrl,
                                                  onDraw:
                                                    t[3] ||
                                                    (t[3] = (e) => [
                                                      C.onDraw(e),
                                                      i.withSelectedFieldType
                                                        ? ""
                                                        : (a.drawFieldType =
                                                            ""),
                                                      (a.showDrawField = !1),
                                                    ]),
                                                  onDropField: C.onDropfield,
                                                  onRemoveArea: C.removeArea,
                                                },
                                                null,
                                                8,
                                                [
                                                  "areas-index",
                                                  "selected-submitter",
                                                  "document",
                                                  "is-drag",
                                                  "default-fields",
                                                  "allow-draw",
                                                  "default-submitters",
                                                  "draw-field",
                                                  "draw-field-type",
                                                  "editable",
                                                  "base-url",
                                                  "onDropField",
                                                  "onRemoveArea",
                                                ]
                                              ),
                                              a.isBreakpointLg && i.editable
                                                ? ((0, n.wg)(),
                                                  (0, n.j4)(
                                                    E,
                                                    {
                                                      key: 0,
                                                      "with-arrows":
                                                        i.template.schema
                                                          .length > 1,
                                                      item: i.template.schema.find(
                                                        (t) =>
                                                          t.attachment_uuid ===
                                                          e.uuid
                                                      ),
                                                      "with-replace-button":
                                                        i.withUploadButton,
                                                      "accept-file-types":
                                                        i.acceptFileTypes,
                                                      document: e,
                                                      template: i.template,
                                                      class:
                                                        "pb-2 mb-2 border-b border-base-300 border-dashed",
                                                      onRemove:
                                                        C.onDocumentRemove,
                                                      onReplace:
                                                        C.onDocumentReplace,
                                                      onUp: (t) =>
                                                        C.moveDocument(
                                                          i.template.schema.find(
                                                            (t) =>
                                                              t.attachment_uuid ===
                                                              e.uuid
                                                          ),
                                                          -1
                                                        ),
                                                      onDown: (t) =>
                                                        C.moveDocument(
                                                          i.template.schema.find(
                                                            (t) =>
                                                              t.attachment_uuid ===
                                                              e.uuid
                                                          ),
                                                          1
                                                        ),
                                                      onChange: C.save,
                                                    },
                                                    null,
                                                    8,
                                                    [
                                                      "with-arrows",
                                                      "item",
                                                      "with-replace-button",
                                                      "accept-file-types",
                                                      "document",
                                                      "template",
                                                      "onRemove",
                                                      "onReplace",
                                                      "onUp",
                                                      "onDown",
                                                      "onChange",
                                                    ]
                                                  ))
                                                : (0, n.kq)("", !0),
                                            ],
                                            64
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                    C.sortedDocuments.length &&
                                    a.isBreakpointLg &&
                                    i.editable
                                      ? ((0, n.wg)(),
                                        (0, n.iD)("div", k, [
                                          i.withUploadButton
                                            ? ((0, n.wg)(),
                                              (0, n.j4)(
                                                $,
                                                {
                                                  key: 0,
                                                  "template-id": i.template.id,
                                                  "accept-file-types":
                                                    i.acceptFileTypes,
                                                  onSuccess: C.updateFromUpload,
                                                },
                                                null,
                                                8,
                                                [
                                                  "template-id",
                                                  "accept-file-types",
                                                  "onSuccess",
                                                ]
                                              ))
                                            : (0, n.kq)("", !0),
                                        ]))
                                      : (0, n.kq)("", !0),
                                  ],
                                  64
                                )),
                          ],
                          512
                        ),
                      ]),
                      i.withFieldsList
                        ? ((0, n.wg)(),
                          (0, n.iD)(
                            "div",
                            {
                              key: 1,
                              id: "fields_list_container",
                              class: (0, o.C_)([
                                "relative w-80 flex-none mt-1 pr-4 pl-0.5 hidden md:block",
                                a.drawField
                                  ? "overflow-hidden"
                                  : "overflow-y-auto overflow-x-hidden",
                              ]),
                            },
                            [
                              a.showDrawField || a.drawField
                                ? ((0, n.wg)(),
                                  (0, n.iD)(
                                    "div",
                                    {
                                      key: 0,
                                      class: "sticky inset-0 h-full z-20",
                                      style: (0, o.j5)({
                                        backgroundColor: i.backgroundColor,
                                      }),
                                    },
                                    [
                                      (0, n._)("div", x, [
                                        (0, n._)(
                                          "p",
                                          null,
                                          (0, o.zw)(
                                            C.t(
                                              "draw_field_on_the_document"
                                            ).replace(
                                              "{field}",
                                              a.drawField?.name || ""
                                            )
                                          ),
                                          1
                                        ),
                                        (0, n._)("div", null, [
                                          (0, n._)(
                                            "button",
                                            {
                                              class: "base-button",
                                              onClick:
                                                t[4] ||
                                                (t[4] = (...e) =>
                                                  C.clearDrawField &&
                                                  C.clearDrawField(...e)),
                                            },
                                            (0, o.zw)(C.t("cancel")),
                                            1
                                          ),
                                          a.drawField ||
                                          a.drawOption ||
                                          [
                                            "stamp",
                                            "signature",
                                            "initials",
                                          ].includes(
                                            a.drawField?.type || a.drawFieldType
                                          )
                                            ? (0, n.kq)("", !0)
                                            : ((0, n.wg)(),
                                              (0, n.iD)(
                                                "a",
                                                {
                                                  key: 0,
                                                  href: "#",
                                                  class:
                                                    "link block mt-3 text-sm",
                                                  onClick:
                                                    t[5] ||
                                                    (t[5] = (0, l.iM)(
                                                      (e) => [
                                                        C.addField(
                                                          a.drawFieldType
                                                        ),
                                                        (a.drawField = null),
                                                        (a.drawOption = null),
                                                        i.withSelectedFieldType
                                                          ? ""
                                                          : (a.drawFieldType =
                                                              ""),
                                                        (a.showDrawField = !1),
                                                      ],
                                                      ["prevent"]
                                                    )),
                                                },
                                                (0, o.zw)(
                                                  C.t(
                                                    "or_add_field_without_drawing"
                                                  )
                                                ),
                                                1
                                              )),
                                        ]),
                                      ]),
                                    ],
                                    4
                                  ))
                                : (0, n.kq)("", !0),
                              (0, n._)("div", null, [
                                (0, n.Wm)(
                                  L,
                                  {
                                    ref: "fields",
                                    fields: i.template.fields,
                                    submitters: i.template.submitters,
                                    "selected-submitter": a.selectedSubmitter,
                                    "with-help": i.withHelp,
                                    "default-submitters": i.defaultSubmitters,
                                    "draw-field-type": a.drawFieldType,
                                    "default-fields": [
                                      ...i.defaultRequiredFields,
                                      ...i.defaultFields,
                                    ],
                                    "default-required-fields":
                                      i.defaultRequiredFields,
                                    "field-types": i.fieldTypes,
                                    "with-sticky-submitters":
                                      i.withStickySubmitters,
                                    "only-defined-fields": i.onlyDefinedFields,
                                    editable: i.editable,
                                    onAddField: C.addField,
                                    onSetDraw:
                                      t[6] ||
                                      (t[6] = (e) => [
                                        (a.drawField = e.field),
                                        (a.drawOption = e.option),
                                      ]),
                                    onSetDrawType:
                                      t[7] ||
                                      (t[7] = (e) => [
                                        (a.drawFieldType = e),
                                        (a.showDrawField = !0),
                                      ]),
                                    onSetDrag:
                                      t[8] || (t[8] = (e) => (a.dragField = e)),
                                    onChangeSubmitter:
                                      t[9] ||
                                      (t[9] = (e) => (a.selectedSubmitter = e)),
                                    onDragEnd:
                                      t[10] ||
                                      (t[10] = (e) => (a.dragField = null)),
                                    onScrollToArea: C.scrollToArea,
                                  },
                                  null,
                                  8,
                                  [
                                    "fields",
                                    "submitters",
                                    "selected-submitter",
                                    "with-help",
                                    "default-submitters",
                                    "draw-field-type",
                                    "default-fields",
                                    "default-required-fields",
                                    "field-types",
                                    "with-sticky-submitters",
                                    "only-defined-fields",
                                    "editable",
                                    "onAddField",
                                    "onScrollToArea",
                                  ]
                                ),
                              ]),
                            ],
                            2
                          ))
                        : (0, n.kq)("", !0),
                    ],
                    2
                  ),
                  (0, n._)("div", _, [
                    a.drawField && a.isBreakpointLg
                      ? ((0, n.wg)(),
                        (0, n.j4)(
                          j,
                          {
                            key: 0,
                            "draw-field": a.drawField,
                            fields: i.template.fields,
                            submitters: i.template.submitters,
                            "selected-submitter": a.selectedSubmitter,
                            class: "md:hidden",
                            editable: i.editable,
                            onCancel:
                              t[11] ||
                              (t[11] = (e) => [
                                (a.drawField = null),
                                (a.drawOption = null),
                              ]),
                            onChangeSubmitter:
                              t[12] ||
                              (t[12] = (e) => [
                                (a.selectedSubmitter = e),
                                (a.drawField.submitter_uuid = e.uuid),
                              ]),
                          },
                          null,
                          8,
                          [
                            "draw-field",
                            "fields",
                            "submitters",
                            "selected-submitter",
                            "editable",
                          ]
                        ))
                      : (0, n.kq)("", !0),
                    C.sortedDocuments.length && !a.drawField && i.editable
                      ? ((0, n.wg)(),
                        (0, n.j4)(
                          N,
                          {
                            key: 1,
                            fields: i.template.fields,
                            "default-fields": [
                              ...i.defaultRequiredFields,
                              ...i.defaultFields,
                            ],
                            "default-required-fields": i.defaultRequiredFields,
                            "field-types": i.fieldTypes,
                            "selected-submitter": a.selectedSubmitter,
                            onSelect:
                              t[13] || (t[13] = (e) => C.startFieldDraw(e)),
                          },
                          null,
                          8,
                          [
                            "fields",
                            "default-fields",
                            "default-required-fields",
                            "field-types",
                            "selected-submitter",
                          ]
                        ))
                      : (0, n.kq)("", !0),
                  ]),
                  D,
                ])
              );
            },
          ],
        ]);
        const Ol = { key: 0 },
          Pl = (0, n._)("label", { class: "label" }, " Select Worksheet ", -1),
          Wl = { ref: "selectWorksheet", class: "base-select" },
          Yl = ["value"],
          Bl = (0, n._)(
            "button",
            { class: "base-button mt-4 w-full" },
            " Open ",
            -1
          ),
          Zl = { key: 1 },
          Hl = {
            key: 0,
            class: "px-3 border-y py-2 border-base-300 text-center w-full",
          },
          Vl = (0, n._)(
            "div",
            { class: "flex" },
            [
              (0, n._)(
                "div",
                { class: "relative w-full py-2 px-2 text-sm" },
                " Recipient field "
              ),
              (0, n._)(
                "div",
                { class: "relative w-full py-2 pl-4 text-sm" },
                " Spreadsheet column "
              ),
            ],
            -1
          ),
          Kl = { class: "flex" },
          Xl = ["onChange"],
          Jl = ["selected"],
          Gl = ["value", "selected"],
          Ql = { class: "flex items-center px-1" },
          ea = { class: "w-full relative" },
          ta = ["onChange"],
          ia = ["selected"],
          sa = ["value", "selected"],
          la = {
            key: 0,
            class: "absolute top-0 bottom-0 right-1 flex items-center",
          },
          aa = ["data-tip"],
          na = { class: "flex items-center pl-1" },
          oa = { class: "tooltip tooltip-top", "data-tip": "Remove" },
          ra = ["disabled", "onClick"],
          da = ["onClick"],
          ua = ["value"],
          ca = {
            class:
              "px-3 border-y py-2 border-base-300 text-center w-full text-sm font-semibold",
          },
          pa = { key: 2 },
          ma = {
            class:
              "absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center",
          },
          ha = { class: "flex flex-col items-center" },
          fa = (0, n._)(
            "div",
            { class: "font-medium text-lg mb-1" },
            " Upload CSV or XLSX Spreadsheet ",
            -1
          ),
          ba = (0, n._)(
            "div",
            { class: "text-sm" },
            [
              (0, n._)("span", { class: "font-medium" }, "Click to Upload"),
              (0, n.Uk)(" or drag and drop files. "),
            ],
            -1
          ),
          wa = { ref: "form", class: "hidden" },
          ga = { class: "text-center mt-2" },
          ya = ["download", "href"];
        var va = i(5560),
          ka = {
            name: "FileDropzone",
            components: {
              IconCloudUpload: Y.Z,
              IconX: el.Z,
              IconArrowsHorizontal: va.Z,
              IconPlus: _s.Z,
              IconInfoCircle: ei.Z,
              IconInnerShadowTop: R.Z,
            },
            props: {
              template: { type: Object, required: !0 },
              authenticityToken: { type: String, required: !1, default: "" },
            },
            data: () => ({
              isLoading: !1,
              spreadsheet: null,
              selectedSheetIndex: null,
              mappings: [],
            }),
            computed: {
              table() {
                return this.spreadsheet[this.selectedSheetIndex][1];
              },
              submissionsData() {
                const e = [];
                return (
                  this.rows.forEach((t) => {
                    const i = {};
                    this.mappings.forEach((e) => {
                      e.field_name &&
                        null != e.column_index &&
                        ((i[e.submitter_uuid] ||= {
                          uuid: e.submitter_uuid,
                          fields: [],
                        }),
                        ["name", "email", "phone"].includes(
                          e.field_name.toLowerCase()
                        )
                          ? (i[e.submitter_uuid][e.field_name.toLowerCase()] =
                              t[e.column_index])
                          : i[e.submitter_uuid].fields.push({
                              name: e.field_name,
                              default_value: t[e.column_index],
                              readonly: !0,
                            }));
                    }),
                      0 !== Object.keys(i).length &&
                        e.push({ submitters: Object.values(i) });
                  }),
                  e
                );
              },
              csvBase64() {
                const e = [];
                this.submitters.forEach((t) => {
                  this.selectFieldsForSubmitter(t).forEach((i) => {
                    e.push(
                      this.submitters.length > 1
                        ? `${t.name} - ${i.name}`
                        : i.name
                    );
                  });
                });
                const t = e
                  .map((e) =>
                    /[",\n]/.test(e) ? `"${e.replace(/"/g, '""')}"` : e
                  )
                  .join(",");
                return window.btoa(
                  window.unescape(
                    window.encodeURIComponent(
                      t + "\n" + e.map(() => "").join(",") + "\n"
                    )
                  )
                );
              },
              submitters() {
                return this.template.submitters;
              },
              columns() {
                return this.table[0];
              },
              form() {
                return this.$el.closest("form");
              },
              fieldTypes: () => [
                "text",
                "cells",
                "date",
                "number",
                "radio",
                "select",
                "checkbox",
              ],
              defaultFields: () => [
                { name: "Name" },
                { name: "Email" },
                { name: "Phone" },
              ],
              rows() {
                return this.table.slice(1);
              },
            },
            watch: {
              selectedSheetIndex(e) {
                null !== e &&
                  document
                    .getElementById("list_form_buttons")
                    ?.classList?.remove("hidden");
              },
            },
            methods: {
              onDropFiles(e) {
                this.uploadFile(e.dataTransfer.files[0]);
              },
              onSelectFile(e) {
                this.uploadFile(e.target.files[0]);
              },
              addMapping(e) {
                this.mappings.push({
                  uuid: (0, Ki.Z)(),
                  field_name: "",
                  column_index: null,
                  submitter_uuid: e.uuid,
                });
              },
              selectFieldsForSubmitter(e) {
                const t = this.template.fields.filter(
                  (t) =>
                    t.submitter_uuid === e.uuid &&
                    t.name &&
                    this.fieldTypes.includes(t.type) &&
                    this.defaultFields.every(
                      (e) => t.name?.toLowerCase() !== e.name?.toLowerCase()
                    )
                );
                return [...this.defaultFields, ...t];
              },
              buildDefaultMappings() {
                this.submitters.forEach((e) => {
                  this.selectFieldsForSubmitter(e).forEach((t) => {
                    const i = this.columns.findIndex(
                      (e, i) =>
                        e &&
                        e
                          .toString()
                          .toLowerCase()
                          .includes(t.name?.toLowerCase()) &&
                        this.mappings.every((e) => e.column_index !== i)
                    );
                    -1 !== i &&
                      this.mappings.push({
                        uuid: (0, Ki.Z)(),
                        field_name: t.name,
                        column_index: i,
                        submitter_uuid: e.uuid,
                      });
                  }),
                    this.mappings.some(
                      (t) =>
                        "name" === t.field_name.toLowerCase() &&
                        t.submitter_uuid === e.uuid
                    ) ||
                      this.mappings.unshift({
                        uuid: (0, Ki.Z)(),
                        field_name: "Name",
                        submitter_uuid: e.uuid,
                      }),
                    this.mappings.some(
                      (t) =>
                        "email" === t.field_name.toLowerCase() &&
                        t.submitter_uuid === e.uuid
                    ) ||
                      this.mappings.unshift({
                        uuid: (0, Ki.Z)(),
                        field_name: "Email",
                        submitter_uuid: e.uuid,
                      });
                });
              },
              uploadFile(e) {
                this.isLoading = !0;
                const t = new FormData();
                return (
                  t.append("file", e),
                  fetch("/upload_spreadsheet", {
                    method: "POST",
                    body: t,
                    headers: { "X-CSRF-Token": this.authenticityToken },
                  })
                    .then((e) => e.json())
                    .then((e) => {
                      if (e.error) return alert(e.error);
                      (this.spreadsheet = e),
                        1 === e.length &&
                          ((this.selectedSheetIndex = 0),
                          this.buildDefaultMappings());
                    })
                    .finally(() => {
                      this.isLoading = !1;
                    })
                );
              },
            },
          };
        const xa = (0, A.Z)(ka, [
          [
            "render",
            function (e, t, i, s, a, r) {
              const d = (0, n.up)("IconArrowsHorizontal"),
                u = (0, n.up)("IconInfoCircle"),
                c = (0, n.up)("IconX"),
                p = (0, n.up)("IconPlus"),
                m = (0, n.up)("IconInnerShadowTop"),
                h = (0, n.up)("IconCloudUpload");
              return (
                (0, n.wg)(),
                (0, n.iD)("div", null, [
                  null === a.selectedSheetIndex && a.spreadsheet
                    ? ((0, n.wg)(),
                      (0, n.iD)("div", Ol, [
                        (0, n._)(
                          "form",
                          {
                            onSubmit:
                              t[0] ||
                              (t[0] = (0, l.iM)(
                                (t) => [
                                  (a.selectedSheetIndex =
                                    e.$refs.selectWorksheet.value),
                                  r.buildDefaultMappings(),
                                ],
                                ["prevent"]
                              )),
                          },
                          [
                            Pl,
                            (0, n._)(
                              "select",
                              Wl,
                              [
                                ((0, n.wg)(!0),
                                (0, n.iD)(
                                  n.HY,
                                  null,
                                  (0, n.Ko)(
                                    a.spreadsheet,
                                    (e, t) => (
                                      (0, n.wg)(),
                                      (0, n.iD)(
                                        "option",
                                        { key: t, value: t },
                                        (0, o.zw)(e[0] || t),
                                        9,
                                        Yl
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ],
                              512
                            ),
                            Bl,
                          ],
                          32
                        ),
                      ]))
                    : null !== a.selectedSheetIndex
                    ? ((0, n.wg)(),
                      (0, n.iD)("div", Zl, [
                        ((0, n.wg)(!0),
                        (0, n.iD)(
                          n.HY,
                          null,
                          (0, n.Ko)(
                            r.submitters,
                            (e) => (
                              (0, n.wg)(),
                              (0, n.iD)("div", { key: e.uuid, class: "mb-4" }, [
                                r.submitters.length > 1
                                  ? ((0, n.wg)(),
                                    (0, n.iD)("div", Hl, (0, o.zw)(e.name), 1))
                                  : (0, n.kq)("", !0),
                                Vl,
                                ((0, n.wg)(!0),
                                (0, n.iD)(
                                  n.HY,
                                  null,
                                  (0, n.Ko)(
                                    a.mappings.filter(
                                      (t) => t.submitter_uuid === e.uuid
                                    ),
                                    (i) => (
                                      (0, n.wg)(),
                                      (0, n.iD)(
                                        "div",
                                        { key: i.uuid, class: "mb-2" },
                                        [
                                          (0, n._)("div", Kl, [
                                            (0, n._)(
                                              "select",
                                              {
                                                class:
                                                  "base-select !select-sm !h-10",
                                                required: "",
                                                onChange: (e) =>
                                                  (i.field_name =
                                                    e.target.value),
                                              },
                                              [
                                                (0, n._)(
                                                  "option",
                                                  {
                                                    disabled: "",
                                                    value: "",
                                                    selected: !i.field_name,
                                                  },
                                                  " Select Field ",
                                                  8,
                                                  Jl
                                                ),
                                                ((0, n.wg)(!0),
                                                (0, n.iD)(
                                                  n.HY,
                                                  null,
                                                  (0, n.Ko)(
                                                    r.selectFieldsForSubmitter(
                                                      e
                                                    ),
                                                    (e, t) => (
                                                      (0, n.wg)(),
                                                      (0, n.iD)(
                                                        "option",
                                                        {
                                                          key: t,
                                                          value: e.name,
                                                          selected:
                                                            i.field_name ===
                                                            e.name,
                                                        },
                                                        (0, o.zw)(e.name),
                                                        9,
                                                        Gl
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                              ],
                                              40,
                                              Xl
                                            ),
                                            (0, n._)("div", Ql, [
                                              (0, n.Wm)(d, {
                                                style: {
                                                  width: "19px",
                                                  height: "19px",
                                                },
                                              }),
                                            ]),
                                            (0, n._)("div", ea, [
                                              (0, n._)(
                                                "select",
                                                {
                                                  class:
                                                    "base-select !select-sm !h-10",
                                                  required: "",
                                                  onChange: (e) =>
                                                    (i.column_index = parseInt(
                                                      e.target.value
                                                    )),
                                                },
                                                [
                                                  (0, n._)(
                                                    "option",
                                                    {
                                                      disabled: "",
                                                      value: "",
                                                      selected:
                                                        null == i.column_index,
                                                    },
                                                    " Select Column ",
                                                    8,
                                                    ia
                                                  ),
                                                  ((0, n.wg)(!0),
                                                  (0, n.iD)(
                                                    n.HY,
                                                    null,
                                                    (0, n.Ko)(
                                                      r.columns,
                                                      (e, t) => (
                                                        (0, n.wg)(),
                                                        (0, n.iD)(
                                                          n.HY,
                                                          { key: t },
                                                          [
                                                            e
                                                              ? ((0, n.wg)(),
                                                                (0, n.iD)(
                                                                  "option",
                                                                  {
                                                                    key: 0,
                                                                    value: t,
                                                                    selected:
                                                                      t ===
                                                                      i.column_index,
                                                                  },
                                                                  (0, o.zw)(e),
                                                                  9,
                                                                  sa
                                                                ))
                                                              : (0, n.kq)(
                                                                  "",
                                                                  !0
                                                                ),
                                                          ],
                                                          64
                                                        )
                                                      )
                                                    ),
                                                    128
                                                  )),
                                                ],
                                                40,
                                                ta
                                              ),
                                              null != i.column_index
                                                ? ((0, n.wg)(),
                                                  (0, n.iD)("div", la, [
                                                    (0, n._)(
                                                      "span",
                                                      {
                                                        class:
                                                          "tooltip tooltip-bottom-end pr-1 tooltip-pre",
                                                        style: {
                                                          "padding-top": "2px",
                                                        },
                                                        "data-tip": [0, 1, 2]
                                                          .map(
                                                            (e) =>
                                                              r.rows[e]?.[
                                                                i.column_index
                                                              ] ?? "---"
                                                          )
                                                          .join("\n"),
                                                      },
                                                      [
                                                        (0, n._)(
                                                          "button",
                                                          {
                                                            class:
                                                              "btn btn-xs btn-circle bg-white border-0 border-gray-300",
                                                            onClick:
                                                              t[1] ||
                                                              (t[1] = (0,
                                                              l.iM)(() => {}, [
                                                                "prevent",
                                                              ])),
                                                          },
                                                          [
                                                            (0, n.Wm)(u, {
                                                              class: "h-4 w-4",
                                                            }),
                                                          ]
                                                        ),
                                                      ],
                                                      8,
                                                      aa
                                                    ),
                                                  ]))
                                                : (0, n.kq)("", !0),
                                            ]),
                                            (0, n._)("div", na, [
                                              (0, n._)("span", oa, [
                                                (0, n._)(
                                                  "button",
                                                  {
                                                    disabled:
                                                      a.mappings.filter(
                                                        (t) =>
                                                          t.submitter_uuid ===
                                                          e.uuid
                                                      ).length < 2,
                                                    class:
                                                      "btn btn-xs btn-circle",
                                                    onClick: (0, l.iM)(
                                                      (e) =>
                                                        a.mappings.splice(
                                                          a.mappings.indexOf(i),
                                                          1
                                                        ),
                                                      ["prevent"]
                                                    ),
                                                  },
                                                  [
                                                    (0, n.Wm)(c, {
                                                      class: "h-3.5 w-3.5",
                                                    }),
                                                  ],
                                                  8,
                                                  ra
                                                ),
                                              ]),
                                            ]),
                                          ]),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                                (0, n._)("div", null, [
                                  (0, n._)(
                                    "button",
                                    {
                                      class:
                                        "btn btn-sm btn-primary w-full !normal-case font-medium",
                                      onClick: (0, l.iM)(
                                        (t) => r.addMapping(e),
                                        ["prevent"]
                                      ),
                                    },
                                    [
                                      (0, n.Wm)(p, { class: "w-4 h-4" }),
                                      (0, n.Uk)(" New Field Mapping "),
                                    ],
                                    8,
                                    da
                                  ),
                                ]),
                              ])
                            )
                          ),
                          128
                        )),
                        (0, n._)("div", null, [
                          (0, n._)(
                            "input",
                            {
                              name: "submissions_json",
                              hidden: "",
                              value: JSON.stringify(
                                r.submissionsData.slice(0, 1100)
                              ),
                            },
                            null,
                            8,
                            ua
                          ),
                        ]),
                        (0, n._)("div", ca, [
                          (0, n.Uk)(
                            " Total entries: " +
                              (0, o.zw)(r.submissionsData.length) +
                              " ",
                            1
                          ),
                          r.submissionsData.length >= 1e3
                            ? ((0, n.wg)(),
                              (0, n.iD)(
                                n.HY,
                                { key: 0 },
                                [(0, n.Uk)(" / 1000 ")],
                                64
                              ))
                            : (0, n.kq)("", !0),
                        ]),
                      ]))
                    : ((0, n.wg)(),
                      (0, n.iD)("div", pa, [
                        (0, n._)(
                          "div",
                          {
                            class: "flex h-52 w-full",
                            onDragover:
                              t[3] || (t[3] = (0, l.iM)(() => {}, ["prevent"])),
                            onDrop:
                              t[4] ||
                              (t[4] = (0, l.iM)(
                                (...e) => r.onDropFiles && r.onDropFiles(...e),
                                ["prevent"]
                              )),
                          },
                          [
                            (0, n._)(
                              "label",
                              {
                                class: (0, o.C_)([
                                  "w-full relative bg-base-200/20 hover:bg-base-200/30 rounded-md border border-2 border-base-content/10 border-dashed",
                                  { "opacity-50": a.isLoading },
                                ]),
                                for: "import_list_file",
                              },
                              [
                                (0, n._)("div", ma, [
                                  (0, n._)("div", ha, [
                                    a.isLoading
                                      ? ((0, n.wg)(),
                                        (0, n.j4)(m, {
                                          key: 0,
                                          class: "animate-spin",
                                          width: 40,
                                          height: 40,
                                        }))
                                      : ((0, n.wg)(),
                                        (0, n.j4)(h, {
                                          key: 1,
                                          width: 40,
                                          height: 40,
                                        })),
                                    fa,
                                    ba,
                                  ]),
                                ]),
                                (0, n._)(
                                  "form",
                                  wa,
                                  [
                                    (0, n._)(
                                      "input",
                                      {
                                        id: "import_list_file",
                                        ref: "input",
                                        type: "file",
                                        name: "file",
                                        accept: ".xlsx, .xls, .csv",
                                        onChange:
                                          t[2] ||
                                          (t[2] = (...e) =>
                                            r.onSelectFile &&
                                            r.onSelectFile(...e)),
                                      },
                                      null,
                                      544
                                    ),
                                  ],
                                  512
                                ),
                              ],
                              2
                            ),
                          ],
                          32
                        ),
                        (0, n._)("div", ga, [
                          (0, n.Uk)(" Or "),
                          (0, n._)(
                            "a",
                            {
                              download: `${i.template.name}.csv`,
                              href: `data:text/csv;base64,${r.csvBase64}`,
                              class: "link font-medium",
                            },
                            "download",
                            8,
                            ya
                          ),
                          (0, n.Uk)(" a spreadsheet to fill and import "),
                        ]),
                      ])),
                ])
              );
            },
          ],
        ]);
        var _a = xa,
          Da = i(5680),
          Ca = (0, Da.d)(
            class extends HTMLElement {
              trigger(e) {
                JSON.parse(this.dataset.elementIds).forEach((t) => {
                  document
                    .getElementById(t)
                    .classList.toggle("hidden", e.target.value !== t);
                });
              }
            }
          ),
          Fa = class extends HTMLElement {
            connectedCallback() {
              this.button.addEventListener("click", () => {
                const e = new Date();
                e.setFullYear(e.getFullYear() + 10);
                const t = e.toUTCString();
                document.cookie =
                  this.dataset.key +
                  "=" +
                  this.dataset.value +
                  "; expires=" +
                  t +
                  "; path=/";
              });
            }
            get button() {
              return this.querySelector("button");
            }
          },
          Sa = class extends HTMLElement {
            static observedAttributes = ["class"];
            connectedCallback() {
              this.trigger();
            }
            attributeChangedCallback(e, t, i) {
              "class" === e && t !== i && this.trigger();
            }
            trigger() {
              const e = this.classList.contains("hidden");
              this.querySelectorAll("input, textarea, select").forEach((t) => {
                e
                  ? ((t.disabled = !0),
                    t.dataset.wasRequired ||
                      (t.dataset.wasRequired = t.required),
                    (t.required = !1))
                  : ((t.disabled = !1),
                    t.dataset.wasRequired &&
                      ((t.required = "true" === t.dataset.wasRequired),
                      delete t.dataset.wasRequired));
              });
            }
          },
          qa = (0, Da.d)(
            class extends HTMLElement {
              connectedCallback() {
                document.body.classList.add("overflow-hidden"),
                  document.addEventListener("keyup", this.onEscKey),
                  document.addEventListener("turbo:before-cache", this.close),
                  "false" !== this.dataset.closeAfterSubmit &&
                    document.addEventListener(
                      "turbo:submit-end",
                      this.onSubmit
                    );
              }
              disconnectedCallback() {
                document.body.classList.remove("overflow-hidden"),
                  document.removeEventListener("keyup", this.onEscKey),
                  document.removeEventListener(
                    "turbo:submit-end",
                    this.onSubmit
                  ),
                  document.removeEventListener(
                    "turbo:before-cache",
                    this.close
                  );
              }
              onSubmit = (e) => {
                e.detail.success && this.close();
              };
              onEscKey = (e) => {
                "Escape" === e.code && this.close();
              };
              close = (e) => {
                e?.preventDefault(), this.remove();
              };
            }
          ),
          Ta = i(4506),
          Ma = (0, Da.d)(
            (0, Ta.Fw)(
              class extends HTMLElement {
                static [Ta.fA.static] = ["loading", "icon", "input"];
                connectedCallback() {
                  this.addEventListener("drop", this.onDrop),
                    this.addEventListener("dragover", (e) =>
                      e.preventDefault()
                    ),
                    document.addEventListener(
                      "turbo:submit-end",
                      this.toggleLoading
                    );
                }
                disconnectedCallback() {
                  document.removeEventListener(
                    "turbo:submit-end",
                    this.toggleLoading
                  );
                }
                onDrop(e) {
                  e.preventDefault(),
                    (this.input.files = e.dataTransfer.files),
                    this.uploadFiles(e.dataTransfer.files);
                }
                onSelectFiles(e) {
                  e.preventDefault(), this.uploadFiles(this.input.files);
                }
                toggleLoading = (e) => {
                  (e && e.target && !e.target.contains(this)) ||
                    (this.loading.classList.toggle("hidden"),
                    this.icon.classList.toggle("hidden"),
                    this.classList.toggle("opacity-50"));
                };
                uploadFiles() {
                  this.toggleLoading(),
                    this.dataset.submitOnUpload &&
                      this.closest("form")
                        .querySelector('button[type="submit"]')
                        .click();
                }
              }
            )
          ),
          Ia = class extends HTMLElement {
            connectedCallback() {
              this.querySelectorAll("a").forEach((e) => {
                document.location.pathname.startsWith(e.pathname) &&
                  !e.getAttribute("href").startsWith("http") &&
                  e.classList.add("bg-base-300");
              });
            }
          },
          Ra = class extends HTMLElement {
            connectedCallback() {
              this.clearChecked(),
                this.addEventListener("click", (e) => {
                  e.stopPropagation();
                  const t = this.dataset.text || this.innerText.trim();
                  navigator.clipboard
                    ? navigator.clipboard.writeText(t)
                    : "INPUT" !== e.target.tagName &&
                      alert(
                        `Clipboard not available. Make sure you're using https://\nCopy text: ${t}`
                      );
                });
            }
            clearChecked() {
              this.querySelectorAll("input").forEach((e) => {
                e.checked = !1;
              });
            }
          },
          $a = (0, Da.d)(
            (0, Ta.Fw)(
              class extends HTMLElement {
                static [Ta.GO.static] = ["items"];
                addItem(e) {
                  e.preventDefault();
                  const t = this.items[0],
                    i = t.cloneNode(!0),
                    s = Math.floor(Math.random() * 10 ** 16);
                  i
                    .querySelectorAll(
                      "select, textarea, input:not([type='hidden'])"
                    )
                    .forEach((e) => {
                      (e.value = ""),
                        (e.checked = !1),
                        e.removeAttribute("selected");
                    }),
                    i
                      .querySelectorAll("select, textarea, input")
                      .forEach((e) => {
                        e.name = e.name.replace("[1]", `[${s}]`);
                      }),
                    i
                      .querySelectorAll("a.hidden")
                      .forEach((e) => e.classList.toggle("hidden")),
                    t.parentNode.append(i);
                }
                removeItem(e) {
                  e.preventDefault(),
                    this.items.find((t) => t.contains(e.target))?.remove();
                }
              }
            )
          ),
          Aa = (0, Ta.Fw)(
            class extends HTMLElement {
              static [Ta.fA.static] = ["defaultButton", "loadingButton"];
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
                        s = document.createElement("a");
                      (s.href = i),
                        s.setAttribute(
                          "download",
                          decodeURI(e.split("/").pop())
                        ),
                        s.click(),
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
                      s = URL.createObjectURL(
                        i.slice(0, i.size, "application/octet-stream")
                      ),
                      l = document.createElement("a");
                    return (
                      (l.href = s),
                      l.setAttribute("download", decodeURI(e.split("/").pop())),
                      l
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
          za = class extends HTMLElement {
            connectedCallback() {
              this.dataset.inputId &&
                (document.getElementById(this.dataset.inputId).value =
                  document.location.origin);
            }
          },
          Ea = class extends HTMLElement {
            connectedCallback() {
              if (this.dataset.inputId) {
                const e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                if ("true" === this.dataset.params) {
                  const t = new URLSearchParams(this.input.value);
                  t.set("timezone", e), (this.input.value = t.toString());
                } else this.input.value = e;
              }
            }
            get input() {
              return document.getElementById(this.dataset.inputId);
            }
          },
          La = class extends HTMLElement {
            connectedCallback() {
              this.resize(),
                this.textarea.addEventListener("input", () => this.resize());
            }
            resize() {
              this.textarea.clientHeight < this.textarea.scrollHeight &&
                (this.textarea.style.height = `${
                  this.textarea.scrollHeight + 5
                }px`);
            }
            get textarea() {
              return this.querySelector("textarea");
            }
          },
          ja = i(643),
          Na = class extends HTMLElement {
            connectedCallback() {
              (0, ja.Z)({
                input: this.input,
                preventSubmit: 1,
                minLength: 1,
                showOnFocus: !0,
                debounceWaitMs: 200,
                onSelect: this.onSelect,
                render: this.render,
                fetch: this.fetch,
              });
            }
            onSelect = (e) => {
              const t = this.closest("submitter-item");
              ["email", "name", "phone"].forEach((i) => {
                const s = t.querySelector(
                    `submitters-autocomplete[data-field="${i}"] input`
                  ),
                  l = t.querySelector(
                    `submitters-autocomplete[data-field="${i}"] textarea`
                  );
                s && e[i] && (s.value = e[i]),
                  l &&
                    e[i] &&
                    ((l.value = l.value.replace(/[^;,\s]+$/, e[i] + " ")),
                    l.dispatchEvent(new Event("input", { bubbles: !0 })));
              });
            };
            fetch = (e, t) => {
              const i = e
                .split(/[;,\s]+/)
                .pop()
                .trim();
              if (i) {
                const e = new URLSearchParams({
                  q: i,
                  field: this.dataset.field,
                });
                (this.currentFetch ||= fetch("/submitters_autocomplete?" + e)),
                  this.currentFetch
                    .then(async (e) => {
                      const i = await e.json();
                      t(i);
                    })
                    .catch(() => {
                      t([]);
                    })
                    .finally(() => {
                      this.currentFetch = null;
                    });
              } else t([]);
            };
            render = (e) => {
              const t = document.createElement("div");
              return (
                t.setAttribute("dir", "auto"),
                (t.textContent = e[this.dataset.field]),
                t
              );
            };
            get input() {
              return (
                this.querySelector("input") || this.querySelector("textarea")
              );
            }
          },
          Ua = class extends HTMLElement {
            connectedCallback() {
              (0, ja.Z)({
                input: this.input,
                preventSubmit: "true" === this.dataset.submitOnSelect ? 0 : 1,
                minLength: 0,
                showOnFocus: !0,
                onSelect: this.onSelect,
                render: this.render,
                fetch: this.fetch,
              });
            }
            onSelect = (e) => {
              this.input.value = e.name;
            };
            fetch = (e, t) => {
              const i = new URLSearchParams({ q: e });
              fetch("/template_folders_autocomplete?" + i)
                .then(async (e) => {
                  const i = await e.json();
                  t(i);
                })
                .catch(() => {
                  t([]);
                });
            };
            render = (e) => {
              const t = document.createElement("div");
              return t.setAttribute("dir", "auto"), (t.textContent = e.name), t;
            };
            get input() {
              return this.querySelector("input");
            }
          };
        var Oa = (0, Ta.Fw)(
            class extends HTMLElement {
              static [Ta.fA.static] = ["canvas", "input", "clear", "button"];
              async connectedCallback() {
                (this.canvas.width =
                  this.canvas.parentNode.parentNode.clientWidth),
                  (this.canvas.height =
                    this.canvas.parentNode.parentNode.clientWidth / 3);
                const { default: e } = await i.e(672).then(i.bind(i, 7672));
                (this.pad = new e(this.canvas)),
                  this.clear.addEventListener("click", (e) => {
                    e.preventDefault(), this.pad.clear();
                  }),
                  this.button.addEventListener("click", (e) => {
                    e.preventDefault(),
                      (this.button.disabled = !0),
                      this.submit();
                  });
              }
              async submit() {
                const e = await (function (
                    e,
                    { errorOnTooSmall: t } = { errorOnTooSmall: !1 }
                  ) {
                    const i = e.getContext("2d"),
                      s = e.width,
                      l = e.height;
                    let a = l,
                      n = 0,
                      o = s,
                      r = 0;
                    const d = i.getImageData(0, 0, s, l).data;
                    for (let h = 0; h < l; h++)
                      for (let e = 0; e < s; e++)
                        0 !== d[4 * (h * s + e) + 3] &&
                          ((a = Math.min(a, h)),
                          (n = Math.max(n, h)),
                          (o = Math.min(o, e)),
                          (r = Math.max(r, e)));
                    const u = r - o + 1,
                      c = n - a + 1,
                      p = document.createElement("canvas");
                    (p.width = u), (p.height = c);
                    const m = p.getContext("2d");
                    return t && (u < 20 || c < 20)
                      ? Promise.reject(new Error("Image too small"))
                      : (m.drawImage(e, o, a, u, c, 0, 0, u, c),
                        new Promise((e, t) => {
                          p.toBlob((i) => {
                            i
                              ? e(i)
                              : t(new Error("Failed to create a PNG blob."));
                          }, "image/png");
                        }));
                  })(this.canvas),
                  t = new File([e], "signature.png", { type: "image/png" }),
                  i = new DataTransfer();
                i.items.add(t),
                  (this.input.files = i.files),
                  this.input.webkitEntries.length &&
                    (this.input.dataset.file = `${i.files[0].name}`),
                  this.closest("form").requestSubmit();
              }
            }
          ),
          Pa = class extends HTMLElement {
            connectedCallback() {
              this.querySelector("form").requestSubmit();
            }
          },
          Wa = class extends HTMLElement {
            connectedCallback() {
              const e = document.createElement("input");
              (e.type = "hidden"),
                (e.name = "password"),
                (e.value = prompt("Enter PDF password")),
                this.form.append(e),
                this.form.requestSubmit(),
                this.remove();
            }
            get form() {
              return this.closest("form");
            }
          };
        const Ya = /([^@;,<>\s]+@[^@;,<>\s]+)/g;
        var Ba = class extends HTMLElement {
            connectedCallback() {
              this.dataset.limit &&
                this.textarea.addEventListener("input", () => {
                  const e = this.textarea.value.match(Ya) || [];
                  this.updateCounter(e.length);
                });
            }
            updateCounter(e) {
              let t = document.getElementById("emails_counter"),
                i = document.getElementById("bulk_message");
              e < 2
                ? t?.remove()
                : (e + 10 > this.dataset.limit &&
                    (t ||
                      ((t = document.createElement("span")),
                      (t.id = "emails_counter"),
                      t.classList.add("text-xs", "right-0", "absolute"),
                      (t.style.bottom = "-15px"),
                      this.textarea.parentNode.append(t)),
                    (t.innerText = `${e} / ${this.dataset.limit}`)),
                  "true" !== this.dataset.bulkEnabled &&
                    (i ||
                      ((i = document.createElement("span")),
                      (i.id = "bulk_message"),
                      i.classList.add("text-xs", "left-0", "absolute"),
                      (i.style.bottom = "-15px"),
                      this.textarea.parentNode.append(i)),
                    (i.innerHTML =
                      '<a class="link" data-turbo="false" href="/upgrade">Upgrade</a> to bulk send multiple recipients')));
            }
            get textarea() {
              return this.querySelector("textarea");
            }
          },
          Za = class extends HTMLElement {
            connectedCallback() {
              document.addEventListener("turbo:submit-end", this.onSubmitEnd),
                this.form.addEventListener("submit", this.onSubmit);
            }
            disconnectedCallback() {
              document.removeEventListener(
                "turbo:submit-end",
                this.onSubmitEnd
              ),
                this.form.removeEventListener("submit", this.onSubmit);
            }
            onSubmit = () => {
              this.element.classList.add("invisible");
            };
            onSubmitEnd = (e) => {
              if (e.target === this.form) {
                const t =
                  e.detail?.formSubmission?.result?.fetchResponse?.response;
                t?.status / 100 === 2 &&
                  this.element.classList.remove("invisible");
              }
            };
            get element() {
              return document.getElementById(this.dataset.elementId);
            }
            get form() {
              return this.closest("form");
            }
          };
        const Ha = new Map(),
          Va = 1e4;
        function Ka(e) {
          let t;
          if (
            ((t = "A" === e.target.tagName ? e.target : e.target.closest("a")),
            !t)
          )
            return;
          if (
            !(function (e) {
              const t = e.getAttribute("href");
              if (
                t &&
                "#" !== t &&
                "false" !== e.dataset.turbo &&
                "false" !== e.dataset.prefetch &&
                e.origin === document.location.origin &&
                ["http:", "https:"].includes(e.protocol) &&
                e.pathname + e.search !==
                  document.location.pathname + document.location.search &&
                (!e.dataset.turboMethod || "get" === e.dataset.turboMethod)
              )
                return !0;
            })(t)
          )
            return;
          const i = t.getAttribute("href"),
            s = new URL(i, location.protocol + "//" + location.host).toString(),
            l = Ha.get(s);
          if (l && l.ttl > new Date()) return;
          const a = {
            credentials: "same-origin",
            headers: {
              Accept: "text/html, application/xhtml+xml",
              "VND.PREFETCH": "true",
            },
            method: "GET",
            redirect: "follow",
          };
          if (t.dataset.turboFrame && "_top" !== t.dataset.turboFrame)
            a.headers["Turbo-Frame"] = t.dataset.turboFrame;
          else if ("_top" !== t.dataset.turboFrame) {
            const e = t.closest("turbo-frame");
            e && (a.headers["Turbo-Frame"] = e.id);
          }
          Ha.set(s, {
            request: fetch(s, a),
            ttl: new Date(new Date().getTime() + Va),
          });
        }
        function Xa(e) {
          if (
            "FORM" !== e.target.tagName &&
            "GET" === e.detail.fetchOptions.method
          ) {
            const t = Ha.get(e.detail.url.toString());
            t && t.ttl > new Date() && (e.detail.response = t.request);
          }
          Ha.clear();
        }
        i.p;
        window.turboInstantClickEnabled ||
          (document.addEventListener("turbo:before-fetch-request", Xa),
          document.addEventListener("mouseover", Ka, {
            capture: !0,
            passive: !0,
          })),
          (window.turboInstantClickEnabled = !0),
          document.addEventListener("turbo:before-cache", () => {
            window.flash?.remove();
          }),
          document.addEventListener("keyup", (e) => {
            "Escape" === e.code && document.activeElement?.blur();
          }),
          document.addEventListener("turbo:before-fetch-request", s.l),
          document.addEventListener("turbo:submit-end", async (e) => {
            const t = e.detail?.formSubmission?.result?.fetchResponse?.response;
            if (!t?.headers?.get("content-disposition")?.includes("attachment"))
              return;
            const i = URL.createObjectURL(await t.blob()),
              s = document.createElement("a");
            (s.href = i),
              s.setAttribute(
                "download",
                decodeURIComponent(
                  t.headers.get("content-disposition").split('"')[1]
                )
              ),
              document.body.appendChild(s),
              s.click(),
              document.body.removeChild(s),
              URL.revokeObjectURL(i);
          });
        const Ja = (e, t, i = {}) =>
          !window.customElements.get(e) &&
          window.customElements.define(e, t, i);
        Ja("toggle-visible", Ca),
          Ja("disable-hidden", Sa),
          Ja("turbo-modal", qa),
          Ja("file-dropzone", Ma),
          Ja("menu-active", Ia),
          Ja("clipboard-copy", Ra),
          Ja("dynamic-list", $a),
          Ja("download-button", Aa),
          Ja("set-origin-url", za),
          Ja("set-timezone", Ea),
          Ja("autoresize-textarea", La),
          Ja("submitters-autocomplete", Na),
          Ja("folder-autocomplete", Ua),
          Ja("signature-form", Oa),
          Ja("submit-form", Pa),
          Ja("prompt-password", Wa),
          Ja("emails-textarea", Ba),
          Ja("toggle-cookies", Fa),
          Ja("toggle-on-submit", Za),
          Ja(
            "template-builder",
            class extends HTMLElement {
              connectedCallback() {
                (this.appElem = document.createElement("div")),
                  this.appElem.classList.add("md:h-screen"),
                  (this.app = (0, l.ri)(Ul, {
                    template: (0, a.qj)(JSON.parse(this.dataset.template)),
                    backgroundColor: "#faf7f5",
                    withPhone: "true" === this.dataset.withPhone,
                    withLogo: "false" !== this.dataset.withLogo,
                    editable: "false" !== this.dataset.editable,
                    authenticityToken: document.querySelector(
                      'meta[name="csrf-token"]'
                    )?.content,
                    withPayment: "true" === this.dataset.withPayment,
                    isPaymentConnected:
                      "true" === this.dataset.isPaymentConnected,
                    withFormula: "true" === this.dataset.withFormula,
                    withConditions: "true" === this.dataset.withConditions,
                    currencies: (this.dataset.currencies || "")
                      .split(",")
                      .filter(Boolean),
                    acceptFileTypes: this.dataset.acceptFileTypes,
                  })),
                  this.app.mount(this.appElem),
                  this.appendChild(this.appElem);
              }
              disconnectedCallback() {
                this.app?.unmount(), this.appElem?.remove();
              }
            }
          ),
          Ja(
            "import-list",
            class extends HTMLElement {
              connectedCallback() {
                (this.appElem = document.createElement("div")),
                  (this.app = (0, l.ri)(_a, {
                    template: JSON.parse(this.dataset.template),
                    authenticityToken: document.querySelector(
                      'meta[name="csrf-token"]'
                    )?.content,
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
      1692: () => {},
    },
    l = {};
  function a(e) {
    var t = l[e];
    if (void 0 !== t) return t.exports;
    var i = (l[e] = { exports: {} });
    return s[e](i, i.exports, a), i.exports;
  }
  (a.m = s),
    (e = []),
    (a.O = (t, i, s, l) => {
      if (!i) {
        var n = 1 / 0;
        for (u = 0; u < e.length; u++) {
          (i = e[u][0]), (s = e[u][1]), (l = e[u][2]);
          for (var o = !0, r = 0; r < i.length; r++)
            (!1 & l || n >= l) && Object.keys(a.O).every((e) => a.O[e](i[r]))
              ? i.splice(r--, 1)
              : ((o = !1), l < n && (n = l));
          if (o) {
            e.splice(u--, 1);
            var d = s();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      l = l || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > l; u--) e[u] = e[u - 1];
      e[u] = [i, s, l];
    }),
    (a.d = (e, t) => {
      for (var i in t)
        a.o(t, i) &&
          !a.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (a.f = {}),
    (a.e = (e) =>
      Promise.all(Object.keys(a.f).reduce((t, i) => (a.f[i](e, t), t), []))),
    (a.u = (e) => "js/" + e + "-2bfc6ce3e36c1c05e37d.chunk.js"),
    (a.miniCssF = (e) => {}),
    (a.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (t = {}),
    (i = "uvtsign:"),
    (a.l = (e, s, l, n) => {
      if (t[e]) t[e].push(s);
      else {
        var o, r;
        if (void 0 !== l)
          for (
            var d = document.getElementsByTagName("script"), u = 0;
            u < d.length;
            u++
          ) {
            var c = d[u];
            if (
              c.getAttribute("src") == e ||
              c.getAttribute("data-webpack") == i + l
            ) {
              o = c;
              break;
            }
          }
        o ||
          ((r = !0),
          ((o = document.createElement("script")).charset = "utf-8"),
          (o.timeout = 120),
          a.nc && o.setAttribute("nonce", a.nc),
          o.setAttribute("data-webpack", i + l),
          (o.src = e)),
          (t[e] = [s]);
        var p = (i, s) => {
            (o.onerror = o.onload = null), clearTimeout(m);
            var l = t[e];
            if (
              (delete t[e],
              o.parentNode && o.parentNode.removeChild(o),
              l && l.forEach((e) => e(s)),
              i)
            )
              return i(s);
          },
          m = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: o }),
            12e4
          );
        (o.onerror = p.bind(null, o.onerror)),
          (o.onload = p.bind(null, o.onload)),
          r && document.head.appendChild(o);
      }
    }),
    (a.p = "/packs/"),
    (() => {
      var e = { 34: 0 };
      (a.f.j = (t, i) => {
        var s = a.o(e, t) ? e[t] : void 0;
        if (0 !== s)
          if (s) i.push(s[2]);
          else {
            var l = new Promise((i, l) => (s = e[t] = [i, l]));
            i.push((s[2] = l));
            var n = a.p + a.u(t),
              o = new Error();
            a.l(
              n,
              (i) => {
                if (a.o(e, t) && (0 !== (s = e[t]) && (e[t] = void 0), s)) {
                  var l = i && ("load" === i.type ? "missing" : i.type),
                    n = i && i.target && i.target.src;
                  (o.message =
                    "Loading chunk " + t + " failed.\n(" + l + ": " + n + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = l),
                    (o.request = n),
                    s[1](o);
                }
              },
              "chunk-" + t,
              t
            );
          }
      }),
        (a.O.j = (t) => 0 === e[t]);
      var t = (t, i) => {
          var s,
            l,
            n = i[0],
            o = i[1],
            r = i[2],
            d = 0;
          if (n.some((t) => 0 !== e[t])) {
            for (s in o) a.o(o, s) && (a.m[s] = o[s]);
            if (r) var u = r(a);
          }
          for (t && t(i); d < n.length; d++)
            (l = n[d]), a.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
          return a.O(u);
        },
        i = (self.webpackChunkuvtsign = self.webpackChunkuvtsign || []);
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
    })(),
    a.O(void 0, [932], () => a(3188));
  var n = a.O(void 0, [932], () => a(1692));
  n = a.O(n);
})();
//# sourceMappingURL=application-c512c0b28aaa6d77b7e4.js.map
