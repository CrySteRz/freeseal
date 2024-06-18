/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/javascript/application.js":
/*!***************************************!*\
  !*** ./app/javascript/application.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
/* harmony import */ var _hotwired_turbo_rails_app_javascript_turbo_fetch_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/turbo-rails/app/javascript/turbo/fetch_requests */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/fetch_requests.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _template_builder_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template_builder/builder */ "./app/javascript/template_builder/builder.vue");
/* harmony import */ var _template_builder_import_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template_builder/import_list */ "./app/javascript/template_builder/import_list.vue");
/* harmony import */ var _elements_toggle_visible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/toggle_visible */ "./app/javascript/elements/toggle_visible.js");
/* harmony import */ var _elements_toggle_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/toggle_cookies */ "./app/javascript/elements/toggle_cookies.js");
/* harmony import */ var _elements_disable_hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/disable_hidden */ "./app/javascript/elements/disable_hidden.js");
/* harmony import */ var _elements_turbo_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/turbo_modal */ "./app/javascript/elements/turbo_modal.js");
/* harmony import */ var _elements_file_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elements/file_dropzone */ "./app/javascript/elements/file_dropzone.js");
/* harmony import */ var _elements_menu_active__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elements/menu_active */ "./app/javascript/elements/menu_active.js");
/* harmony import */ var _elements_clipboard_copy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./elements/clipboard_copy */ "./app/javascript/elements/clipboard_copy.js");
/* harmony import */ var _elements_dynamic_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elements/dynamic_list */ "./app/javascript/elements/dynamic_list.js");
/* harmony import */ var _elements_download_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./elements/download_button */ "./app/javascript/elements/download_button.js");
/* harmony import */ var _elements_set_origin_url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./elements/set_origin_url */ "./app/javascript/elements/set_origin_url.js");
/* harmony import */ var _elements_set_timezone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./elements/set_timezone */ "./app/javascript/elements/set_timezone.js");
/* harmony import */ var _elements_autoresize_textarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./elements/autoresize_textarea */ "./app/javascript/elements/autoresize_textarea.js");
/* harmony import */ var _elements_submitter_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./elements/submitter_autocomplete */ "./app/javascript/elements/submitter_autocomplete.js");
/* harmony import */ var _elements_folder_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./elements/folder_autocomplete */ "./app/javascript/elements/folder_autocomplete.js");
/* harmony import */ var _elements_signature_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./elements/signature_form */ "./app/javascript/elements/signature_form.js");
/* harmony import */ var _elements_submit_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./elements/submit_form */ "./app/javascript/elements/submit_form.js");
/* harmony import */ var _elements_prompt_password__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./elements/prompt_password */ "./app/javascript/elements/prompt_password.js");
/* harmony import */ var _elements_emails_textarea__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./elements/emails_textarea */ "./app/javascript/elements/emails_textarea.js");
/* harmony import */ var _elements_toggle_on_submit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./elements/toggle_on_submit */ "./app/javascript/elements/toggle_on_submit.js");
/* harmony import */ var _lib_turbo_instant_click__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/turbo_instant_click */ "./app/javascript/lib/turbo_instant_click.js");
/* harmony import */ var _images_preview_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/preview.png */ "./app/javascript/images/preview.png");


























_lib_turbo_instant_click__WEBPACK_IMPORTED_MODULE_24__.start();
document.addEventListener('turbo:before-cache', () => {
  window.flash?.remove();
});
document.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    document.activeElement?.blur();
  }
});
document.addEventListener('turbo:before-fetch-request', _hotwired_turbo_rails_app_javascript_turbo_fetch_requests__WEBPACK_IMPORTED_MODULE_1__.encodeMethodIntoRequestBody);
document.addEventListener('turbo:submit-end', async event => {
  const resp = event.detail?.formSubmission?.result?.fetchResponse?.response;
  if (!resp?.headers?.get('content-disposition')?.includes('attachment')) {
    return;
  }
  const url = URL.createObjectURL(await resp.blob());
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', decodeURIComponent(resp.headers.get('content-disposition').split('"')[1]));
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});
const safeRegisterElement = (name, element, options = {}) => !window.customElements.get(name) && window.customElements.define(name, element, options);
safeRegisterElement('toggle-visible', _elements_toggle_visible__WEBPACK_IMPORTED_MODULE_5__["default"]);
safeRegisterElement('disable-hidden', _elements_disable_hidden__WEBPACK_IMPORTED_MODULE_7__["default"]);
safeRegisterElement('turbo-modal', _elements_turbo_modal__WEBPACK_IMPORTED_MODULE_8__["default"]);
safeRegisterElement('file-dropzone', _elements_file_dropzone__WEBPACK_IMPORTED_MODULE_9__["default"]);
safeRegisterElement('menu-active', _elements_menu_active__WEBPACK_IMPORTED_MODULE_10__["default"]);
safeRegisterElement('clipboard-copy', _elements_clipboard_copy__WEBPACK_IMPORTED_MODULE_11__["default"]);
safeRegisterElement('dynamic-list', _elements_dynamic_list__WEBPACK_IMPORTED_MODULE_12__["default"]);
safeRegisterElement('download-button', _elements_download_button__WEBPACK_IMPORTED_MODULE_13__["default"]);
safeRegisterElement('set-origin-url', _elements_set_origin_url__WEBPACK_IMPORTED_MODULE_14__["default"]);
safeRegisterElement('set-timezone', _elements_set_timezone__WEBPACK_IMPORTED_MODULE_15__["default"]);
safeRegisterElement('autoresize-textarea', _elements_autoresize_textarea__WEBPACK_IMPORTED_MODULE_16__["default"]);
safeRegisterElement('submitters-autocomplete', _elements_submitter_autocomplete__WEBPACK_IMPORTED_MODULE_17__["default"]);
safeRegisterElement('folder-autocomplete', _elements_folder_autocomplete__WEBPACK_IMPORTED_MODULE_18__["default"]);
safeRegisterElement('signature-form', _elements_signature_form__WEBPACK_IMPORTED_MODULE_19__["default"]);
safeRegisterElement('submit-form', _elements_submit_form__WEBPACK_IMPORTED_MODULE_20__["default"]);
safeRegisterElement('prompt-password', _elements_prompt_password__WEBPACK_IMPORTED_MODULE_21__["default"]);
safeRegisterElement('emails-textarea', _elements_emails_textarea__WEBPACK_IMPORTED_MODULE_22__["default"]);
safeRegisterElement('toggle-cookies', _elements_toggle_cookies__WEBPACK_IMPORTED_MODULE_6__["default"]);
safeRegisterElement('toggle-on-submit', _elements_toggle_on_submit__WEBPACK_IMPORTED_MODULE_23__["default"]);
safeRegisterElement('template-builder', class extends HTMLElement {
  connectedCallback() {
    this.appElem = document.createElement('div');
    this.appElem.classList.add('md:h-screen');
    this.app = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createApp)(_template_builder_builder__WEBPACK_IMPORTED_MODULE_3__["default"], {
      template: (0,vue__WEBPACK_IMPORTED_MODULE_2__.reactive)(JSON.parse(this.dataset.template)),
      backgroundColor: '#faf7f5',
      withPhone: this.dataset.withPhone === 'true',
      withLogo: this.dataset.withLogo !== 'false',
      editable: this.dataset.editable !== 'false',
      authenticityToken: document.querySelector('meta[name="csrf-token"]')?.content,
      withPayment: this.dataset.withPayment === 'true',
      isPaymentConnected: this.dataset.isPaymentConnected === 'true',
      withFormula: this.dataset.withFormula === 'true',
      withConditions: this.dataset.withConditions === 'true',
      currencies: (this.dataset.currencies || '').split(',').filter(Boolean),
      acceptFileTypes: this.dataset.acceptFileTypes
    });
    this.app.mount(this.appElem);
    this.appendChild(this.appElem);
  }
  disconnectedCallback() {
    this.app?.unmount();
    this.appElem?.remove();
  }
});
safeRegisterElement('import-list', class extends HTMLElement {
  connectedCallback() {
    this.appElem = document.createElement('div');
    this.app = (0,vue__WEBPACK_IMPORTED_MODULE_2__.createApp)(_template_builder_import_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      template: JSON.parse(this.dataset.template),
      authenticityToken: document.querySelector('meta[name="csrf-token"]')?.content
    });
    this.app.mount(this.appElem);
    this.appendChild(this.appElem);
  }
  disconnectedCallback() {
    this.app?.unmount();
    this.appElem?.remove();
  }
});

/***/ }),

/***/ "./app/javascript/elements/autoresize_textarea.js":
/*!********************************************************!*\
  !*** ./app/javascript/elements/autoresize_textarea.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class extends HTMLElement {
  connectedCallback() {
    this.resize();
    this.textarea.addEventListener('input', () => this.resize());
  }
  resize() {
    if (this.textarea.clientHeight < this.textarea.scrollHeight) {
      this.textarea.style.height = `${this.textarea.scrollHeight + 5}px`;
    }
  }
  get textarea() {
    return this.querySelector('textarea');
  }
});

/***/ }),

/***/ "./app/javascript/elements/clipboard_copy.js":
/*!***************************************************!*\
  !*** ./app/javascript/elements/clipboard_copy.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class extends HTMLElement {
  connectedCallback() {
    this.clearChecked();
    this.addEventListener('click', e => {
      e.stopPropagation();
      const text = this.dataset.text || this.innerText.trim();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
      } else {
        if (e.target.tagName !== 'INPUT') {
          alert(`Clipboard not available. Make sure you're using https://\nCopy text: ${text}`);
        }
      }
    });
  }
  clearChecked() {
    this.querySelectorAll('input').forEach(e => {
      e.checked = false;
    });
  }
});

/***/ }),

/***/ "./app/javascript/elements/disable_hidden.js":
/*!***************************************************!*\
  !*** ./app/javascript/elements/disable_hidden.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class extends HTMLElement {
  static observedAttributes = ['class'];
  connectedCallback() {
    this.trigger();
  }
  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (attributeName === 'class' && oldValue !== newValue) {
      this.trigger();
    }
  }
  trigger() {
    const hasHiddenClass = this.classList.contains('hidden');
    const elements = this.querySelectorAll('input, textarea, select');
    elements.forEach(element => {
      if (hasHiddenClass) {
        element.disabled = true;
        if (!element.dataset.wasRequired) {
          element.dataset.wasRequired = element.required;
        }
        element.required = false;
      } else {
        element.disabled = false;
        if (element.dataset.wasRequired) {
          element.required = element.dataset.wasRequired === 'true';
          delete element.dataset.wasRequired;
        }
      }
    });
  }
});

/***/ }),

/***/ "./app/javascript/elements/download_button.js":
/*!****************************************************!*\
  !*** ./app/javascript/elements/download_button.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _github_catalyst_lib_targetable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @github/catalyst/lib/targetable */ "./node_modules/@github/catalyst/lib/targetable.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_github_catalyst_lib_targetable__WEBPACK_IMPORTED_MODULE_0__.targetable)(class extends HTMLElement {
  static [_github_catalyst_lib_targetable__WEBPACK_IMPORTED_MODULE_0__.target["static"]] = ['defaultButton', 'loadingButton'];
  connectedCallback() {
    this.addEventListener('click', () => this.downloadFiles());
  }
  toggleState() {
    this.defaultButton?.classList?.toggle('hidden');
    this.loadingButton?.classList?.toggle('hidden');
  }
  downloadFiles() {
    if (!this.dataset.src) return;
    this.toggleState();
    fetch(this.dataset.src).then(async response => {
      if (response.ok) {
        const urls = await response.json();
        const isSafariIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isSafariIos && urls.length > 1) {
          this.downloadSafariIos(urls);
        } else {
          this.downloadUrls(urls);
        }
      } else {
        alert('Failed to download files');
      }
    });
  }
  downloadUrls(urls) {
    const fileRequests = urls.map(url => {
      return () => {
        return fetch(url).then(async resp => {
          const blobUrl = URL.createObjectURL(await resp.blob());
          const link = document.createElement('a');
          link.href = blobUrl;
          link.setAttribute('download', decodeURI(url.split('/').pop()));
          link.click();
          URL.revokeObjectURL(blobUrl);
        });
      };
    });
    fileRequests.reduce((prevPromise, request) => prevPromise.then(() => request()), Promise.resolve()).finally(() => {
      this.toggleState();
    });
  }
  downloadSafariIos(urls) {
    const fileRequests = urls.map(url => {
      return fetch(url).then(async resp => {
        const blob = await resp.blob();
        const blobUrl = URL.createObjectURL(blob.slice(0, blob.size, 'application/octet-stream'));
        const link = document.createElement('a');
        link.href = blobUrl;
        link.setAttribute('download', decodeURI(url.split('/').pop()));
        return link;
      });
    });
    Promise.all(fileRequests).then(links => {
      links.forEach((link, index) => {
        setTimeout(() => {
          link.click();
          URL.revokeObjectURL(link.href);
        }, index * 50);
      });
    }).finally(() => {
      this.toggleState();
    });
  }
}));

/***/ }),

/***/ "./app/javascript/elements/dynamic_list.js":
/*!*************************************************!*\
  !*** ./app/javascript/elements/dynamic_list.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _github_catalyst_lib_actionable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @github/catalyst/lib/actionable */ "./node_modules/@github/catalyst/lib/actionable.js");
/* harmony import */ var _github_catalyst_lib_targetable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @github/catalyst/lib/targetable */ "./node_modules/@github/catalyst/lib/targetable.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,_github_catalyst_lib_actionable__WEBPACK_IMPORTED_MODULE_0__.actionable)((0,_github_catalyst_lib_targetable__WEBPACK_IMPORTED_MODULE_1__.targetable)(class extends HTMLElement {
  static [_github_catalyst_lib_targetable__WEBPACK_IMPORTED_MODULE_1__.targets["static"]] = ['items'];
  addItem(e) {
    e.preventDefault();
    const originalItem = this.items[0];
    const duplicateItem = originalItem.cloneNode(true);
    const uniqueId = Math.floor(Math.random() * 10 ** 16);
    duplicateItem.querySelectorAll("select, textarea, input:not([type='hidden'])").forEach(input => {
      input.value = '';
      input.checked = false;
      input.removeAttribute('selected');
    });
    duplicateItem.querySelectorAll('select, textarea, input').forEach(input => {
      input.name = input.name.replace('[1]', `[${uniqueId}]`);
    });
    duplicateItem.querySelectorAll('a.hidden').forEach(button => button.classList.toggle('hidden'));
    originalItem.parentNode.append(duplicateItem);
  }
  removeItem(e) {
    e.preventDefault();
    this.items.find(item => item.contains(e.target))?.remove();
  }
})));

/***/ }),

/***/ "./app/javascript/elements/emails_textarea.js":
/*!****************************************************!*\
  !*** ./app/javascript/elements/emails_textarea.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const emailRegexp = /([^@;,<>\s]+@[^@;,<>\s]+)/g;
/* harmony default export */ __webpack_exports__["default"] = (class extends HTMLElement {
  connectedCallback() {
    if (this.dataset.limit) {
      this.textarea.addEventListener('input', () => {
        const emails = this.textarea.value.match(emailRegexp) || [];
        this.updateCounter(emails.length);
      });
    }
  }
  updateCounter(count) {
    let counter = document.getElementById('emails_counter');
    let bulkMessage = document.getElementById('bulk_message');
    if (count < 2) {
      counter?.remove();
      return;
    }
    if (count + 10 > this.dataset.limit) {
      if (!counter) {
        counter = document.createElement('span');
        counter.id = 'emails_counter';
        counter.classList.add('text-xs', 'right-0', 'absolute');
        counter.style.bottom = '-15px';
        this.textarea.parentNode.append(counter);
      }
      counter.innerText = `${count} / ${this.dataset.limit}`;
    }
    if (this.dataset.bulkEnabled !== 'true') {
      if (!bulkMessage) {
        bulkMessage = document.createElement('span');
        bulkMessage.id = 'bulk_message';
        bulkMessage.classList.add('text-xs', 'left-0', 'absolute');
        bulkMessage.style.bottom = '-15px';
        this.textarea.parentNode.append(bulkMessage);
      }
      bulkMessage.innerHTML = '<a class="link" data-turbo="false" href="/upgrade">Upgrade</a> to bulk send multiple recipients';
    }
  }
  get textarea() {
    return this.querySelector('textarea');
  }
});

/***/ }),

/***/ "./app/javascript/elements/file_dropzone.js":
/*!**************************************************!*\
  !*** ./app/javascript/elements/file_dropzone.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _github_catalyst_lib_actionable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @github/catalyst/lib/actionable */ "./node_modules/@github/catalyst/lib/actionable.js");
/* harmony import */ var _github_catalyst_lib_targetable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @github/catalyst/lib/targetable */ "./node_modules/@github/catalyst/lib/targetable.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,_github_catalyst_lib_actionable__WEBPACK_IMPORTED_MODULE_0__.actionable)((0,_github_catalyst_lib_targetable__WEBPACK_IMPORTED_MODULE_1__.targetable)(class extends HTMLElement {
  static [_github_catalyst_lib_targetable__WEBPACK_IMPORTED_MODULE_1__.target["static"]] = ['loading', 'icon', 'input'];
  connectedCallback() {
    this.addEventListener('drop', this.onDrop);
    this.addEventListener('dragover', e => e.preventDefault());
    document.addEventListener('turbo:submit-end', this.toggleLoading);
  }
  disconnectedCallback() {
    document.removeEventListener('turbo:submit-end', this.toggleLoading);
  }
  onDrop(e) {
    e.preventDefault();
    this.input.files = e.dataTransfer.files;
    this.uploadFiles(e.dataTransfer.files);
  }
  onSelectFiles(e) {
    e.preventDefault();
    this.uploadFiles(this.input.files);
  }
  toggleLoading = e => {
    if (e && e.target && !e.target.contains(this)) {
      return;
    }
    this.loading.classList.toggle('hidden');
    this.icon.classList.toggle('hidden');
    this.classList.toggle('opacity-50');
  };
  uploadFiles() {
    this.toggleLoading();
    if (this.dataset.submitOnUpload) {
      this.closest('form').querySelector('button[type="submit"]').click();
    }
  }
})));

/***/ }),

/***/ "./app/javascript/elements/folder_autocomplete.js":
/*!********************************************************!*\
  !*** ./app/javascript/elements/folder_autocomplete.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var autocompleter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! autocompleter */ "./node_modules/autocompleter/autocomplete.es.js");

/* harmony default export */ __webpack_exports__["default"] = (class extends HTMLElement {
  connectedCallback() {
    (0,autocompleter__WEBPACK_IMPORTED_MODULE_0__["default"])({
      input: this.input,
      preventSubmit: this.dataset.submitOnSelect === 'true' ? 0 : 1,
      minLength: 0,
      showOnFocus: true,
      onSelect: this.onSelect,
      render: this.render,
      fetch: this.fetch
    });
  }
  onSelect = item => {
    this.input.value = item.name;
  };
  fetch = (text, resolve) => {
    const queryParams = new URLSearchParams({
      q: text
    });
    fetch('/template_folders_autocomplete?' + queryParams).then(async resp => {
      const items = await resp.json();
      resolve(items);
    }).catch(() => {
      resolve([]);
    });
  };
  render = item => {
    const div = document.createElement('div');
    div.setAttribute('dir', 'auto');
    div.textContent = item.name;
    return div;
  };
  get input() {
    return this.querySelector('input');
  }
});

/***/ }),

/***/ "./app/javascript/elements/menu_active.js":
/*!************************************************!*\
  !*** ./app/javascript/elements/menu_active.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class extends HTMLElement {
  connectedCallback() {
    this.querySelectorAll('a').forEach(link => {
      if (document.location.pathname.startsWith(link.pathname) && !link.getAttribute('href').startsWith('http')) {
        link.classList.add('bg-base-300');
      }
    });
  }
});

/***/ }),

/***/ "./app/javascript/elements/prompt_password.js":
/*!****************************************************!*\
  !*** ./app/javascript/elements/prompt_password.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class extends HTMLElement {
  connectedCallback() {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'password';
    input.value = prompt('Enter PDF password');
    this.form.append(input);
    this.form.requestSubmit();
    this.remove();
  }
  get form() {
    return this.closest('form');
  }
});

/***/ }),

/***/ "./app/javascript/elements/set_origin_url.js":
/*!***************************************************!*\
  !*** ./app/javascript/elements/set_origin_url.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class extends HTMLElement {
  connectedCallback() {
    if (this.dataset.inputId) {
      document.getElementById(this.dataset.inputId).value = document.location.origin;
    }
  }
});

/***/ }),

/***/ "./app/javascript/elements/set_timezone.js":
/*!*************************************************!*\
  !*** ./app/javascript/elements/set_timezone.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class extends HTMLElement {
  connectedCallback() {
    if (this.dataset.inputId) {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (this.dataset.params === 'true') {
        const params = new URLSearchParams(this.input.value);
        params.set('timezone', timezone);
        this.input.value = params.toString();
      } else {
        this.input.value = timezone;
      }
    }
  }
  get input() {
    return document.getElementById(this.dataset.inputId);
  }
});

/***/ }),

/***/ "./app/javascript/elements/signature_form.js":
/*!***************************************************!*\
  !*** ./app/javascript/elements/signature_form.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _github_catalyst_lib_targetable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @github/catalyst/lib/targetable */ "./node_modules/@github/catalyst/lib/targetable.js");
/* harmony import */ var _submission_form_crop_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../submission_form/crop_canvas */ "./app/javascript/submission_form/crop_canvas.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,_github_catalyst_lib_targetable__WEBPACK_IMPORTED_MODULE_0__.targetable)(class extends HTMLElement {
  static [_github_catalyst_lib_targetable__WEBPACK_IMPORTED_MODULE_0__.target["static"]] = ['canvas', 'input', 'clear', 'button'];
  async connectedCallback() {
    this.canvas.width = this.canvas.parentNode.parentNode.clientWidth;
    this.canvas.height = this.canvas.parentNode.parentNode.clientWidth / 3;
    const {
      default: SignaturePad
    } = await __webpack_require__.e(/*! import() */ "node_modules_signature_pad_dist_signature_pad_js").then(__webpack_require__.bind(__webpack_require__, /*! signature_pad */ "./node_modules/signature_pad/dist/signature_pad.js"));
    this.pad = new SignaturePad(this.canvas);
    this.clear.addEventListener('click', e => {
      e.preventDefault();
      this.pad.clear();
    });
    this.button.addEventListener('click', e => {
      e.preventDefault();
      this.button.disabled = true;
      this.submit();
    });
  }
  async submit() {
    const blob = await (0,_submission_form_crop_canvas__WEBPACK_IMPORTED_MODULE_1__.cropCanvasAndExportToPNG)(this.canvas);
    const file = new File([blob], 'signature.png', {
      type: 'image/png'
    });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    this.input.files = dataTransfer.files;
    if (this.input.webkitEntries.length) {
      this.input.dataset.file = `${dataTransfer.files[0].name}`;
    }
    this.closest('form').requestSubmit();
  }
}));

/***/ }),

/***/ "./app/javascript/elements/submit_form.js":
/*!************************************************!*\
  !*** ./app/javascript/elements/submit_form.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class extends HTMLElement {
  connectedCallback() {
    this.querySelector('form').requestSubmit();
  }
});

/***/ }),

/***/ "./app/javascript/elements/submitter_autocomplete.js":
/*!***********************************************************!*\
  !*** ./app/javascript/elements/submitter_autocomplete.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var autocompleter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! autocompleter */ "./node_modules/autocompleter/autocomplete.es.js");

/* harmony default export */ __webpack_exports__["default"] = (class extends HTMLElement {
  connectedCallback() {
    (0,autocompleter__WEBPACK_IMPORTED_MODULE_0__["default"])({
      input: this.input,
      preventSubmit: 1,
      minLength: 1,
      showOnFocus: true,
      debounceWaitMs: 200,
      onSelect: this.onSelect,
      render: this.render,
      fetch: this.fetch
    });
  }
  onSelect = item => {
    const fields = ['email', 'name', 'phone'];
    const submitterItemEl = this.closest('submitter-item');
    fields.forEach(field => {
      const input = submitterItemEl.querySelector(`submitters-autocomplete[data-field="${field}"] input`);
      const textarea = submitterItemEl.querySelector(`submitters-autocomplete[data-field="${field}"] textarea`);
      if (input && item[field]) {
        input.value = item[field];
      }
      if (textarea && item[field]) {
        textarea.value = textarea.value.replace(/[^;,\s]+$/, item[field] + ' ');
        textarea.dispatchEvent(new Event('input', {
          bubbles: true
        }));
      }
    });
  };
  fetch = (text, resolve) => {
    const q = text.split(/[;,\s]+/).pop().trim();
    if (q) {
      const queryParams = new URLSearchParams({
        q,
        field: this.dataset.field
      });
      this.currentFetch ||= fetch('/submitters_autocomplete?' + queryParams);
      this.currentFetch.then(async resp => {
        const items = await resp.json();
        resolve(items);
      }).catch(() => {
        resolve([]);
      }).finally(() => {
        this.currentFetch = null;
      });
    } else {
      resolve([]);
    }
  };
  render = item => {
    const div = document.createElement('div');
    div.setAttribute('dir', 'auto');
    div.textContent = item[this.dataset.field];
    return div;
  };
  get input() {
    return this.querySelector('input') || this.querySelector('textarea');
  }
});

/***/ }),

/***/ "./app/javascript/elements/toggle_cookies.js":
/*!***************************************************!*\
  !*** ./app/javascript/elements/toggle_cookies.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class extends HTMLElement {
  connectedCallback() {
    this.button.addEventListener('click', () => {
      const expirationDate = new Date();
      expirationDate.setFullYear(expirationDate.getFullYear() + 10);
      const expires = expirationDate.toUTCString();
      document.cookie = this.dataset.key + '=' + this.dataset.value + '; expires=' + expires + '; path=/';
    });
  }
  get button() {
    return this.querySelector('button');
  }
});

/***/ }),

/***/ "./app/javascript/elements/toggle_on_submit.js":
/*!*****************************************************!*\
  !*** ./app/javascript/elements/toggle_on_submit.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class extends HTMLElement {
  connectedCallback() {
    document.addEventListener('turbo:submit-end', this.onSubmitEnd);
    this.form.addEventListener('submit', this.onSubmit);
  }
  disconnectedCallback() {
    document.removeEventListener('turbo:submit-end', this.onSubmitEnd);
    this.form.removeEventListener('submit', this.onSubmit);
  }
  onSubmit = () => {
    this.element.classList.add('invisible');
  };
  onSubmitEnd = event => {
    if (event.target === this.form) {
      const resp = event.detail?.formSubmission?.result?.fetchResponse?.response;
      if (resp?.status / 100 === 2) {
        this.element.classList.remove('invisible');
      }
    }
  };
  get element() {
    return document.getElementById(this.dataset.elementId);
  }
  get form() {
    return this.closest('form');
  }
});

/***/ }),

/***/ "./app/javascript/elements/toggle_visible.js":
/*!***************************************************!*\
  !*** ./app/javascript/elements/toggle_visible.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _github_catalyst_lib_actionable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @github/catalyst/lib/actionable */ "./node_modules/@github/catalyst/lib/actionable.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_github_catalyst_lib_actionable__WEBPACK_IMPORTED_MODULE_0__.actionable)(class extends HTMLElement {
  trigger(event) {
    const elementIds = JSON.parse(this.dataset.elementIds);
    elementIds.forEach(elementId => {
      document.getElementById(elementId).classList.toggle('hidden', event.target.value !== elementId);
    });
  }
}));

/***/ }),

/***/ "./app/javascript/elements/turbo_modal.js":
/*!************************************************!*\
  !*** ./app/javascript/elements/turbo_modal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _github_catalyst_lib_actionable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @github/catalyst/lib/actionable */ "./node_modules/@github/catalyst/lib/actionable.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_github_catalyst_lib_actionable__WEBPACK_IMPORTED_MODULE_0__.actionable)(class extends HTMLElement {
  connectedCallback() {
    document.body.classList.add('overflow-hidden');
    document.addEventListener('keyup', this.onEscKey);
    document.addEventListener('turbo:before-cache', this.close);
    if (this.dataset.closeAfterSubmit !== 'false') {
      document.addEventListener('turbo:submit-end', this.onSubmit);
    }
  }
  disconnectedCallback() {
    document.body.classList.remove('overflow-hidden');
    document.removeEventListener('keyup', this.onEscKey);
    document.removeEventListener('turbo:submit-end', this.onSubmit);
    document.removeEventListener('turbo:before-cache', this.close);
  }
  onSubmit = e => {
    if (e.detail.success) {
      this.close();
    }
  };
  onEscKey = e => {
    if (e.code === 'Escape') {
      this.close();
    }
  };
  close = e => {
    e?.preventDefault();
    this.remove();
  };
}));

/***/ }),

/***/ "./app/javascript/lib/turbo_instant_click.js":
/*!***************************************************!*\
  !*** ./app/javascript/lib/turbo_instant_click.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "start": () => (/* binding */ start)
/* harmony export */ });
const requestCache = new Map();
const cacheTtl = 10 * 1000;
function isPreloadable(linkElement) {
  const href = linkElement.getAttribute('href');
  if (!href || href === '#' || linkElement.dataset.turbo === 'false' || linkElement.dataset.prefetch === 'false') {
    return;
  }
  if (linkElement.origin !== document.location.origin) {
    return;
  }
  if (!['http:', 'https:'].includes(linkElement.protocol)) {
    return;
  }
  if (linkElement.pathname + linkElement.search === document.location.pathname + document.location.search) {
    return;
  }
  if (linkElement.dataset.turboMethod && linkElement.dataset.turboMethod !== 'get') {
    return;
  }
  return true;
}
function mouseoverListener(event) {
  let linkElement;
  if (event.target.tagName === 'A') {
    linkElement = event.target;
  } else {
    linkElement = event.target.closest('a');
  }
  if (!linkElement) {
    return;
  }
  if (!isPreloadable(linkElement)) {
    return;
  }
  const url = linkElement.getAttribute('href');
  const loc = new URL(url, location.protocol + '//' + location.host);
  const absoluteUrl = loc.toString();
  const cached = requestCache.get(absoluteUrl);
  if (cached && cached.ttl > new Date()) {
    return;
  }
  const requestOptions = {
    credentials: 'same-origin',
    headers: {
      Accept: 'text/html, application/xhtml+xml',
      'VND.PREFETCH': 'true'
    },
    method: 'GET',
    redirect: 'follow'
  };
  if (linkElement.dataset.turboFrame && linkElement.dataset.turboFrame !== '_top') {
    requestOptions.headers['Turbo-Frame'] = linkElement.dataset.turboFrame;
  } else if (linkElement.dataset.turboFrame !== '_top') {
    const turboFrame = linkElement.closest('turbo-frame');
    if (turboFrame) {
      requestOptions.headers['Turbo-Frame'] = turboFrame.id;
    }
  }
  requestCache.set(absoluteUrl, {
    request: fetch(absoluteUrl, requestOptions),
    ttl: new Date(new Date().getTime() + cacheTtl)
  });
}
function turboBeforeFetchRequest(event) {
  if (event.target.tagName !== 'FORM' && event.detail.fetchOptions.method === 'GET') {
    const cached = requestCache.get(event.detail.url.toString());
    if (cached && cached.ttl > new Date()) {
      event.detail.response = cached.request;
    }
  }
  requestCache.clear();
}
function start() {
  if (!window.turboInstantClickEnabled) {
    document.addEventListener('turbo:before-fetch-request', turboBeforeFetchRequest);
    document.addEventListener('mouseover', mouseoverListener, {
      capture: true,
      passive: true
    });
  }
  window.turboInstantClickEnabled = true;
}


/***/ }),

/***/ "./app/javascript/submission_form/crop_canvas.js":
/*!*******************************************************!*\
  !*** ./app/javascript/submission_form/crop_canvas.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cropCanvasAndExportToPNG": () => (/* binding */ cropCanvasAndExportToPNG)
/* harmony export */ });
function cropCanvasAndExportToPNG(canvas, {
  errorOnTooSmall
} = {
  errorOnTooSmall: false
}) {
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  let topmost = height;
  let bottommost = 0;
  let leftmost = width;
  let rightmost = 0;
  const imageData = ctx.getImageData(0, 0, width, height);
  const pixels = imageData.data;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixelIndex = (y * width + x) * 4;
      const alpha = pixels[pixelIndex + 3];
      if (alpha !== 0) {
        topmost = Math.min(topmost, y);
        bottommost = Math.max(bottommost, y);
        leftmost = Math.min(leftmost, x);
        rightmost = Math.max(rightmost, x);
      }
    }
  }
  const croppedWidth = rightmost - leftmost + 1;
  const croppedHeight = bottommost - topmost + 1;
  const croppedCanvas = document.createElement('canvas');
  croppedCanvas.width = croppedWidth;
  croppedCanvas.height = croppedHeight;
  const croppedCtx = croppedCanvas.getContext('2d');
  if (errorOnTooSmall && (croppedWidth < 20 || croppedHeight < 20)) {
    return Promise.reject(new Error('Image too small'));
  }
  croppedCtx.drawImage(canvas, leftmost, topmost, croppedWidth, croppedHeight, 0, 0, croppedWidth, croppedHeight);
  return new Promise((resolve, reject) => {
    croppedCanvas.toBlob(blob => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error('Failed to create a PNG blob.'));
      }
    }, 'image/png');
  });
}


/***/ }),

/***/ "./app/javascript/template_builder/i18n.js":
/*!*************************************************!*\
  !*** ./app/javascript/template_builder/i18n.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "en": () => (/* binding */ en)
/* harmony export */ });
const en = {
  search_field: "Search field",
  field_not_found: "Field not found",
  clear: "Clear",
  align: "Align",
  add_all_required_fields_to_continue: "Add all required fields to continue",
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
  add_condition: "Add condition",
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
  field: "Field",
  group: "Group",
  draw_a_text_field_on_the_page_with_a_mouse: "Draw a text field on the page with a mouse",
  draw_field: "Draw {field} Field",
  replace: "Replace",
  uploading_: "Uploading...",
  add_document: "Add Document"
};


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/area.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/area.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field_submitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field_submitter */ "./app/javascript/template_builder/field_submitter.vue");
/* harmony import */ var _field_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field_type */ "./app/javascript/template_builder/field_type.vue");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field */ "./app/javascript/template_builder/field.vue");
/* harmony import */ var _field_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field_settings */ "./app/javascript/template_builder/field_settings.vue");
/* harmony import */ var _formula_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formula_modal */ "./app/javascript/template_builder/formula_modal.vue");
/* harmony import */ var _conditions_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conditions_modal */ "./app/javascript/template_builder/conditions_modal.vue");
/* harmony import */ var _description_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./description_modal */ "./app/javascript/template_builder/description_modal.vue");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCheck.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconDotsVertical.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconX.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");









/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FieldArea",
  components: {
    FieldType: _field_type__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconCheck: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    FieldSettings: _field_settings__WEBPACK_IMPORTED_MODULE_3__["default"],
    FormulaModal: _formula_modal__WEBPACK_IMPORTED_MODULE_4__["default"],
    IconDotsVertical: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    DescriptionModal: _description_modal__WEBPACK_IMPORTED_MODULE_6__["default"],
    ConditionsModal: _conditions_modal__WEBPACK_IMPORTED_MODULE_5__["default"],
    FieldSubmitter: _field_submitter__WEBPACK_IMPORTED_MODULE_0__["default"],
    IconX: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  inject: ["template", "selectedAreaRef", "save", "t"],
  props: {
    area: {
      type: Object,
      required: true
    },
    isDraw: {
      type: Boolean,
      required: false,
      default: false
    },
    defaultField: {
      type: Object,
      required: false,
      default: null
    },
    defaultSubmitters: {
      type: Array,
      required: false,
      default: () => []
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    field: {
      type: Object,
      required: false,
      default: null
    }
  },
  emits: ["start-resize", "stop-resize", "start-drag", "stop-drag", "remove", "scroll-to"],
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
      dragFrom: {
        x: 0,
        y: 0
      }
    };
  },
  computed: {
    fieldNames: _field_type__WEBPACK_IMPORTED_MODULE_1__["default"].computed.fieldNames,
    fieldIcons: _field_type__WEBPACK_IMPORTED_MODULE_1__["default"].computed.fieldIcons,
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
        right: "justify-end"
      };
    },
    optionIndexText() {
      if (this.area.option_uuid && this.field.options) {
        return `${this.field.options.findIndex(o => o.uuid === this.area.option_uuid) + 1}.`;
      } else {
        return "";
      }
    },
    cells() {
      const cells = [];
      let currentWidth = 0;
      while (currentWidth + (this.area.cell_w + this.area.cell_w / 4) < this.area.w) {
        currentWidth += this.area.cell_w || 9999999;
        cells.push(currentWidth);
      }
      return cells;
    },
    submitter() {
      return this.template.submitters.find(s => s.uuid === this.field.submitter_uuid);
    },
    submitterIndex() {
      return this.template.submitters.indexOf(this.submitter);
    },
    borderColors() {
      return ["border-red-500/80", "border-sky-500/80", "border-emerald-500/80", "border-yellow-300/80", "border-purple-600/80", "border-pink-500/80", "border-cyan-500/80", "border-orange-500/80", "border-lime-500/80", "border-indigo-500/80", "border-red-500/80", "border-sky-500/80", "border-emerald-500/80", "border-yellow-300/80", "border-purple-600/80", "border-pink-500/80", "border-cyan-500/80", "border-orange-500/80", "border-lime-500/80", "border-indigo-500/80"];
    },
    bgColors() {
      return ["bg-red-100/80", "bg-sky-100/80", "bg-emerald-100/80", "bg-yellow-100/80", "bg-purple-100/80", "bg-pink-100/80", "bg-cyan-100/80", "bg-orange-100/80", "bg-lime-100/80", "bg-indigo-100/80", "bg-red-100/80", "bg-sky-100/80", "bg-emerald-100/80", "bg-yellow-100/80", "bg-purple-100/80", "bg-pink-100/80", "bg-cyan-100/80", "bg-orange-100/80", "bg-lime-100/80", "bg-indigo-100/80"];
    },
    isSelected() {
      return this.selectedAreaRef.value === this.area;
    },
    positionStyle() {
      const {
        x,
        y,
        w,
        h
      } = this.area;
      return {
        top: y * 100 + "%",
        left: x * 100 + "%",
        width: w * 100 + "%",
        height: h * 100 + "%"
      };
    }
  },
  watch: {
    "field.default_value"() {
      this.$nextTick(() => {
        if (["date", "text", "number"].includes(this.field.type) && this.field.default_value && this.$refs.textContainer && (this.textOverflowChars === 0 || this.textOverflowChars - 4 > `${this.field.default_value}`.length)) {
          this.textOverflowChars = this.$el.clientHeight < this.$refs.textContainer.clientHeight ? `${this.field.default_value}`.length : 0;
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (["date", "text", "number"].includes(this.field.type) && this.field.default_value && this.$refs.textContainer && (this.textOverflowChars === 0 || this.textOverflowChars - 4 > `${this.field.default_value}`.length)) {
        this.textOverflowChars = this.$el.clientHeight < this.$refs.textContainer.clientHeight ? `${this.field.default_value}`.length : 0;
      }
    });
  },
  methods: {
    buildDefaultName: _field__WEBPACK_IMPORTED_MODULE_2__["default"].methods.buildDefaultName,
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
      if (!e.relatedTarget || !this.$refs.settingsDropdown.contains(e.relatedTarget)) {
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
      this.$el.getRootNode().removeEventListener("mousemove", this.onResizeCell);
      this.$el.getRootNode().removeEventListener("mouseup", this.stopResizeCell);
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
        this.field.options ||= [{
          value: "",
          uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_10__["default"])()
        }];
      }
      (this.field.areas || []).forEach(area => {
        if (this.field.type === "cells") {
          area.cell_w = area.w * 2 / Math.floor(area.w / area.h);
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
      this.dragFrom = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
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
        y: rect.top - e.touches[0].clientY
      };
      this.$el.getRootNode().addEventListener("touchmove", this.touchDrag);
      this.$el.getRootNode().addEventListener("touchend", this.stopTouchDrag);
      this.$emit("start-drag");
    },
    touchDrag(e) {
      const page = this.$parent.$refs.mask.previousSibling;
      const rect = page.getBoundingClientRect();
      this.area.x = (this.dragFrom.x + e.touches[0].clientX - rect.left) / rect.width;
      this.area.y = (this.dragFrom.y + e.touches[0].clientY - rect.top) / rect.height;
    },
    stopTouchDrag() {
      this.$el.getRootNode().removeEventListener("touchmove", this.touchDrag);
      this.$el.getRootNode().removeEventListener("touchend", this.stopTouchDrag);
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
      this.area.w = (e.touches[0].clientX - rect.left) / rect.width - this.area.x;
      this.area.h = (e.touches[0].clientY - rect.top) / rect.height - this.area.y;
    },
    stopTouchResize() {
      this.$el.getRootNode().removeEventListener("touchmove", this.touchResize);
      this.$el.getRootNode().removeEventListener("touchend", this.stopTouchResize);
      this.$emit("stop-resize");
      this.save();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/builder.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/builder.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload */ "./app/javascript/template_builder/upload.vue");
/* harmony import */ var _dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropzone */ "./app/javascript/template_builder/dropzone.vue");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields */ "./app/javascript/template_builder/fields.vue");
/* harmony import */ var _mobile_draw_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile_draw_field */ "./app/javascript/template_builder/mobile_draw_field.vue");
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./document */ "./app/javascript/template_builder/document.vue");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo */ "./app/javascript/template_builder/logo.vue");
/* harmony import */ var _contenteditable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contenteditable */ "./app/javascript/template_builder/contenteditable.vue");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preview */ "./app/javascript/template_builder/preview.vue");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls */ "./app/javascript/template_builder/controls.vue");
/* harmony import */ var _mobile_fields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mobile_fields */ "./app/javascript/template_builder/mobile_fields.vue");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconWritingSign.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconInnerShadowTop.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconUsersPlus.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconDeviceFloppy.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./i18n */ "./app/javascript/template_builder/i18n.js");














/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TemplateBuilder",
  components: {
    Upload: _upload__WEBPACK_IMPORTED_MODULE_0__["default"],
    Document: _document__WEBPACK_IMPORTED_MODULE_4__["default"],
    Fields: _fields__WEBPACK_IMPORTED_MODULE_2__["default"],
    MobileDrawField: _mobile_draw_field__WEBPACK_IMPORTED_MODULE_3__["default"],
    IconWritingSign: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    MobileFields: _mobile_fields__WEBPACK_IMPORTED_MODULE_9__["default"],
    Logo: _logo__WEBPACK_IMPORTED_MODULE_5__["default"],
    Dropzone: _dropzone__WEBPACK_IMPORTED_MODULE_1__["default"],
    DocumentPreview: _preview__WEBPACK_IMPORTED_MODULE_7__["default"],
    DocumentControls: _controls__WEBPACK_IMPORTED_MODULE_8__["default"],
    IconInnerShadowTop: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    Contenteditable: _contenteditable__WEBPACK_IMPORTED_MODULE_6__["default"],
    IconUsersPlus: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    IconDeviceFloppy: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_15__["default"]
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
      withPayment: this.withPayment,
      isPaymentConnected: this.isPaymentConnected,
      withFormula: this.withFormula,
      withConditions: this.withConditions,
      defaultDrawFieldType: this.defaultDrawFieldType,
      selectedAreaRef: (0,vue__WEBPACK_IMPORTED_MODULE_10__.computed)(() => this.selectedAreaRef),
      fieldsDragFieldRef: (0,vue__WEBPACK_IMPORTED_MODULE_10__.computed)(() => this.fieldsDragFieldRef)
    };
  },
  props: {
    template: {
      type: Object,
      required: true
    },
    i18n: {
      type: Object,
      required: false,
      default: () => ({})
    },
    backgroundColor: {
      type: String,
      required: false,
      default: ""
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    withHelp: {
      type: Boolean,
      required: false,
      default: true
    },
    autosave: {
      type: Boolean,
      required: false,
      default: true
    },
    defaultFields: {
      type: Array,
      required: false,
      default: () => []
    },
    defaultRequiredFields: {
      type: Array,
      required: false,
      default: () => []
    },
    withSelectedFieldType: {
      type: Boolean,
      required: false,
      default: false
    },
    defaultDrawFieldType: {
      type: String,
      required: false,
      default: "text"
    },
    currencies: {
      type: Array,
      required: false,
      default: () => []
    },
    fieldTypes: {
      type: Array,
      required: false,
      default: () => []
    },
    defaultSubmitters: {
      type: Array,
      required: false,
      default: () => []
    },
    acceptFileTypes: {
      type: String,
      required: false,
      default: "image/*, application/pdf"
    },
    baseUrl: {
      type: String,
      required: false,
      default: ""
    },
    withLogo: {
      type: Boolean,
      required: false,
      default: true
    },
    onUpload: {
      type: Function,
      required: false,
      default() {
        return () => {};
      }
    },
    onSave: {
      type: Function,
      required: false,
      default() {
        return () => {};
      }
    },
    onChange: {
      type: Function,
      required: false,
      default() {
        return () => {};
      }
    },
    withStickySubmitters: {
      type: Boolean,
      required: false,
      default: true
    },
    withUploadButton: {
      type: Boolean,
      required: false,
      default: true
    },
    withTitle: {
      type: Boolean,
      required: false,
      default: true
    },
    withFieldsList: {
      type: Boolean,
      required: false,
      default: true
    },
    authenticityToken: {
      type: String,
      required: false,
      default: ""
    },
    withDocumentsList: {
      type: Boolean,
      required: false,
      default: true
    },
    withPayment: {
      type: Boolean,
      required: false,
      default: false
    },
    isPaymentConnected: {
      type: Boolean,
      required: false,
      default: false
    },
    withFormula: {
      type: Boolean,
      required: false,
      default: false
    },
    withConditions: {
      type: Boolean,
      required: false,
      default: false
    },
    onlyDefinedFields: {
      type: Boolean,
      required: false,
      default: false
    },
    fetchOptions: {
      type: Object,
      required: false,
      default: () => ({
        headers: {}
      })
    }
  },
  data() {
    return {
      documentRefs: [],
      isBreakpointLg: false,
      isSaving: false,
      selectedSubmitter: null,
      showDrawField: false,
      drawField: null,
      drawFieldType: null,
      drawOption: null,
      dragField: null
    };
  },
  computed: {
    selectedAreaRef: () => (0,vue__WEBPACK_IMPORTED_MODULE_10__.ref)(),
    fieldsDragFieldRef: () => (0,vue__WEBPACK_IMPORTED_MODULE_10__.ref)(),
    fieldAreasIndex() {
      const areas = {};
      this.template.fields.forEach(f => {
        (f.areas || []).forEach(a => {
          areas[a.attachment_uuid] ||= {};
          const acc = areas[a.attachment_uuid][a.page] ||= [];
          acc.push({
            area: a,
            field: f
          });
        });
      });
      return areas;
    },
    isAllRequiredFieldsAdded() {
      return !this.defaultRequiredFields?.some(f => {
        return !this.template.fields?.some(field => field.name === f.name);
      });
    },
    selectedField() {
      return this.template.fields.find(f => f.areas?.includes(this.selectedAreaRef.value));
    },
    sortedDocuments() {
      return this.template.schema.map(item => {
        return this.template.documents.find(doc => doc.uuid === item.attachment_uuid);
      });
    }
  },
  created() {
    if (!this.template.fields?.length && this.template.submitters?.length === 1) {
      if (this.template.submitters[0]?.name === "First Party") {
        this.template.submitters[0].name = this.t("first_party");
      }
    }
    const existingSubmittersUuids = this.defaultSubmitters.map(name => {
      return this.template.submitters.find(e => e.name === name)?.uuid;
    });
    this.defaultSubmitters.forEach((name, index) => {
      const submitter = this.template.submitters[index] ||= {};
      submitter.name = name;
      if (existingSubmittersUuids.filter(Boolean).length) {
        submitter.uuid = existingSubmittersUuids[index] || submitter.uuid || (0,uuid__WEBPACK_IMPORTED_MODULE_16__["default"])();
      } else {
        submitter.uuid ||= (0,uuid__WEBPACK_IMPORTED_MODULE_16__["default"])();
      }
    });
    this.selectedSubmitter = this.template.submitters[0];
  },
  mounted() {
    this.undoStack = [JSON.stringify(this.template)];
    this.redoStack = [];
    this.$nextTick(() => {
      this.onWindowResize();
    });
    document.addEventListener("keyup", this.onKeyUp);
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("resize", this.onWindowResize);
    this.$nextTick(() => {
      if (document.location.search?.includes("stripe_connect_success")) {
        document.querySelector('form[action="/auth/stripe_connect"]')?.closest(".dropdown")?.querySelector("label")?.focus();
      }
    });
  },
  unmounted() {
    document.removeEventListener("keyup", this.onKeyUp);
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("resize", this.onWindowResize);
  },
  beforeUpdate() {
    this.documentRefs = [];
  },
  methods: {
    t(key) {
      return this.i18n[key] || _i18n__WEBPACK_IMPORTED_MODULE_11__.en[key] || key;
    },
    addField(type, area = null) {
      const field = {
        name: "",
        uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_16__["default"])(),
        required: type !== "checkbox",
        areas: area ? [area] : [],
        submitter_uuid: this.selectedSubmitter.uuid,
        type
      };
      if (["select", "multiple", "radio"].includes(type)) {
        field.options = [{
          value: "",
          uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_16__["default"])()
        }];
      }
      if (type === "stamp") {
        field.readonly = true;
      }
      if (type === "date") {
        field.preferences = {
          format: Intl.DateTimeFormat().resolvedOptions().locale.endsWith("-US") ? "MM/DD/YYYY" : "DD/MM/YYYY"
        };
      }
      this.template.fields.push(field);
      this.save();
    },
    startFieldDraw({
      name,
      type
    }) {
      const existingField = this.template.fields?.find(f => f.submitter_uuid === this.selectedSubmitter.uuid && name && name === f.name);
      if (existingField) {
        this.drawField = existingField;
      } else {
        const field = {
          name: name || "",
          uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_16__["default"])(),
          required: type !== "checkbox",
          areas: [],
          submitter_uuid: this.selectedSubmitter.uuid,
          type
        };
        if (["select", "multiple", "radio"].includes(type)) {
          field.options = [{
            value: "",
            uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_16__["default"])()
          }];
        }
        if (type === "stamp") {
          field.readonly = true;
        }
        if (type === "date") {
          field.preferences = {
            format: Intl.DateTimeFormat().resolvedOptions().locale.endsWith("-US") ? "MM/DD/YYYY" : "DD/MM/YYYY"
          };
        }
        this.drawField = field;
      }
      this.drawOption = null;
    },
    undo() {
      if (this.undoStack.length > 1) {
        this.undoStack.pop();
        const stringData = this.undoStack[this.undoStack.length - 1];
        const currentStringData = JSON.stringify(this.template);
        if (stringData && stringData !== currentStringData) {
          this.redoStack.push(currentStringData);
          Object.assign(this.template, JSON.parse(stringData));
          this.save();
        }
      }
    },
    redo() {
      const stringData = this.redoStack.pop();
      this.lastRedoData = stringData;
      const currentStringData = JSON.stringify(this.template);
      if (stringData && stringData !== currentStringData) {
        if (this.undoStack[this.undoStack.length - 1] !== currentStringData) {
          this.undoStack.push(currentStringData);
        }
        Object.assign(this.template, JSON.parse(stringData));
        this.save();
      }
    },
    onWindowResize(e) {
      const breakpointLg = 1024;
      this.isBreakpointLg = this.$el.getRootNode().querySelector("div[data-v-app]").offsetWidth < breakpointLg;
    },
    setDocumentRefs(el) {
      if (el) {
        this.documentRefs.push(el);
      }
    },
    scrollIntoDocument(item) {
      const ref = this.documentRefs.find(e => e.document.uuid === item.attachment_uuid);
      ref.$el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    },
    clearDrawField() {
      this.drawField = null;
      this.drawOption = null;
      this.showDrawField = false;
      if (!this.withSelectedFieldType) {
        this.drawFieldType = "";
      }
    },
    onKeyUp(e) {
      if (e.code === "Escape") {
        this.clearDrawField();
        this.selectedAreaRef.value = null;
      }
      if (this.editable && ["Backspace", "Delete"].includes(e.key) && this.selectedAreaRef.value && document.activeElement === document.body) {
        this.removeArea(this.selectedAreaRef.value);
        this.selectedAreaRef.value = null;
      }
    },
    onKeyDown(event) {
      if (event.metaKey && event.shiftKey && event.key === "z" || event.ctrlKey && event.key === "Z") {
        event.stopImmediatePropagation();
        event.preventDefault();
        this.redo();
      } else if ((event.ctrlKey || event.metaKey) && event.key === "z") {
        event.stopImmediatePropagation();
        event.preventDefault();
        this.undo();
      }
    },
    removeArea(area) {
      const field = this.template.fields.find(f => f.areas?.includes(area));
      field.areas.splice(field.areas.indexOf(area), 1);
      if (!field.areas.length) {
        this.template.fields.splice(this.template.fields.indexOf(field), 1);
      }
      this.save();
    },
    pushUndo() {
      const stringData = JSON.stringify(this.template);
      if (this.undoStack[this.undoStack.length - 1] !== stringData) {
        this.undoStack.push(stringData);
        if (this.lastRedoData !== stringData) {
          this.redoStack = [];
        }
      }
    },
    setDefaultAreaSize(area, type) {
      const documentRef = this.documentRefs.find(e => e.document.uuid === area.attachment_uuid);
      const pageMask = documentRef.pageRefs[area.page].$refs.mask;
      if (type === "checkbox") {
        area.w = pageMask.clientWidth / 30 / pageMask.clientWidth;
        area.h = pageMask.clientWidth / 30 / pageMask.clientWidth * (pageMask.clientWidth / pageMask.clientHeight);
      } else if (type === "image") {
        area.w = pageMask.clientWidth / 5 / pageMask.clientWidth;
        area.h = pageMask.clientWidth / 5 / pageMask.clientWidth * (pageMask.clientWidth / pageMask.clientHeight);
      } else if (type === "signature" || type === "stamp") {
        area.w = pageMask.clientWidth / 5 / pageMask.clientWidth;
        area.h = pageMask.clientWidth / 5 / pageMask.clientWidth * (pageMask.clientWidth / pageMask.clientHeight) / 2;
      } else if (type === "initials") {
        area.w = pageMask.clientWidth / 10 / pageMask.clientWidth;
        area.h = pageMask.clientWidth / 35 / pageMask.clientWidth;
      } else {
        area.w = pageMask.clientWidth / 5 / pageMask.clientWidth;
        area.h = pageMask.clientWidth / 35 / pageMask.clientWidth;
      }
    },
    onDraw(area) {
      if (this.drawField) {
        if (this.drawOption) {
          const areaWithoutOption = this.drawField.areas?.find(a => !a.option_uuid);
          if (areaWithoutOption && !this.drawField.areas.find(a => a.option_uuid === this.drawField.options[0].uuid)) {
            areaWithoutOption.option_uuid = this.drawField.options[0].uuid;
          }
          area.option_uuid = this.drawOption.uuid;
        }
        if (area.w === 0 || area.h === 0) {
          const previousArea = this.drawField.areas?.[this.drawField.areas.length - 1];
          if (this.selectedField?.type === this.drawField.type) {
            area.w = this.selectedAreaRef.value.w;
            area.h = this.selectedAreaRef.value.h;
          } else if (previousArea) {
            area.w = previousArea.w;
            area.h = previousArea.h;
          } else {
            this.setDefaultAreaSize(area, this.drawOption ? "checkbox" : this.drawField?.type);
          }
          area.x -= area.w / 2;
          area.y -= area.h / 2;
        }
        this.drawField.areas ||= [];
        const insertBeforeAreaIndex = this.drawField.areas.findIndex(a => {
          return a.attachment_uuid === area.attachment_uuid && a.page > area.page;
        });
        if (insertBeforeAreaIndex !== -1) {
          this.drawField.areas.splice(insertBeforeAreaIndex, 0, area);
        } else {
          this.drawField.areas.push(area);
        }
        if (this.template.fields.indexOf(this.drawField) === -1) {
          this.template.fields.push(this.drawField);
        }
        this.drawField = null;
        this.drawOption = null;
        this.selectedAreaRef.value = area;
        this.save();
      } else {
        const documentRef = this.documentRefs.find(e => e.document.uuid === area.attachment_uuid);
        const pageMask = documentRef.pageRefs[area.page].$refs.mask;
        let type = pageMask.clientWidth * area.w < 35 ? "checkbox" : "text";
        if (this.drawFieldType) {
          type = this.drawFieldType;
        } else if (this.defaultDrawFieldType && this.defaultDrawFieldType !== "text") {
          type = this.defaultDrawFieldType;
        } else if (this.fieldTypes.length !== 0 && !this.fieldTypes.includes(type)) {
          type = this.fieldTypes[0];
        }
        if (type === "checkbox" && !this.drawFieldType && (this.template.fields[this.template.fields.length - 1]?.type === "checkbox" || area.w)) {
          const previousField = [...this.template.fields].reverse().find(f => f.type === type);
          const previousArea = previousField?.areas?.[previousField.areas.length - 1];
          if (previousArea || area.w) {
            const areaW = previousArea?.w || 30 / pageMask.clientWidth;
            const areaH = previousArea?.h || 30 / pageMask.clientHeight;
            if (pageMask.clientWidth * area.w < 5) {
              area.x = area.x - areaW / 2;
              area.y = area.y - areaH / 2;
            }
            area.w = areaW;
            area.h = areaH;
          }
        }
        if (this.drawFieldType && (area.w === 0 || area.h === 0)) {
          if (this.selectedField?.type === this.drawFieldType) {
            area.w = this.selectedAreaRef.value.w;
            area.h = this.selectedAreaRef.value.h;
          } else {
            this.setDefaultAreaSize(area, this.drawFieldType);
          }
          area.x -= area.w / 2;
          area.y -= area.h / 2;
        }
        if (area.w) {
          this.addField(type, area);
          this.selectedAreaRef.value = area;
        }
      }
    },
    onDropfield(area) {
      const field = this.fieldsDragFieldRef.value || {
        name: "",
        uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_16__["default"])(),
        submitter_uuid: this.selectedSubmitter.uuid,
        required: this.dragField.type !== "checkbox",
        ...this.dragField
      };
      if (!this.fieldsDragFieldRef.value) {
        if (["select", "multiple", "radio"].includes(field.type)) {
          field.options = [{
            value: "",
            uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_16__["default"])()
          }];
        }
        if (field.type === "stamp") {
          field.readonly = true;
        }
        if (field.type === "date") {
          field.preferences = {
            format: Intl.DateTimeFormat().resolvedOptions().locale.endsWith("-US") ? "MM/DD/YYYY" : "DD/MM/YYYY"
          };
        }
      }
      const fieldArea = {
        x: (area.x - 6) / area.maskW,
        y: area.y / area.maskH,
        page: area.page,
        attachment_uuid: area.attachment_uuid
      };
      const previousField = [...this.template.fields].reverse().find(f => f.type === field.type);
      let baseArea;
      if (this.selectedField?.type === field.type) {
        baseArea = this.selectedAreaRef.value;
      } else if (previousField?.areas?.length) {
        baseArea = previousField.areas[previousField.areas.length - 1];
      } else {
        if (["checkbox"].includes(field.type)) {
          baseArea = {
            w: area.maskW / 30 / area.maskW,
            h: area.maskW / 30 / area.maskW * (area.maskW / area.maskH)
          };
        } else if (field.type === "image") {
          baseArea = {
            w: area.maskW / 5 / area.maskW,
            h: area.maskW / 5 / area.maskW * (area.maskW / area.maskH)
          };
        } else if (field.type === "signature" || field.type === "stamp") {
          baseArea = {
            w: area.maskW / 5 / area.maskW,
            h: area.maskW / 5 / area.maskW * (area.maskW / area.maskH) / 2
          };
        } else if (field.type === "initials") {
          baseArea = {
            w: area.maskW / 10 / area.maskW,
            h: area.maskW / 35 / area.maskW
          };
        } else {
          baseArea = {
            w: area.maskW / 5 / area.maskW,
            h: area.maskW / 35 / area.maskW
          };
        }
      }
      fieldArea.w = baseArea.w;
      fieldArea.h = baseArea.h;
      fieldArea.y = fieldArea.y - baseArea.h / 2;
      if (field.type === "cells") {
        fieldArea.cell_w = baseArea.cell_w || baseArea.w / 5;
      }
      field.areas ||= [];
      const lastArea = field.areas[field.areas.length - 1];
      if (lastArea) {
        fieldArea.x -= lastArea.w / 2;
        fieldArea.w = lastArea.w;
        fieldArea.h = lastArea.h;
      }
      field.areas.push(fieldArea);
      this.selectedAreaRef.value = fieldArea;
      if (this.template.fields.indexOf(field) === -1) {
        this.template.fields.push(field);
      }
      this.save();
    },
    updateFromUpload(data) {
      this.template.schema.push(...data.schema);
      this.template.documents.push(...data.documents);
      if (data.fields) {
        this.template.fields = data.fields;
      }
      if (data.submitters) {
        this.template.submitters = data.submitters;
        if (!this.template.submitters.find(s => s.uuid === this.selectedSubmitter?.uuid)) {
          this.selectedSubmitter = this.template.submitters[0];
        }
      }
      this.$nextTick(() => {
        this.$refs.previews.scrollTop = this.$refs.previews.scrollHeight;
        this.scrollIntoDocument(data.schema[0]);
      });
      if (this.template.name === "New Document") {
        this.template.name = this.template.schema[0].name;
      }
      if (this.onUpload) {
        this.onUpload(this.template);
      }
      this.save();
    },
    updateName(value) {
      this.template.name = value;
      this.save();
    },
    onDocumentRemove(item) {
      if (window.confirm(this.t("are_you_sure"))) {
        this.template.schema.splice(this.template.schema.indexOf(item), 1);
      }
      const removedFieldUuids = [];
      this.template.fields.forEach(field => {
        [...(field.areas || [])].forEach(area => {
          if (area.attachment_uuid === item.attachment_uuid) {
            field.areas.splice(field.areas.indexOf(area), 1);
            removedFieldUuids.push(field.uuid);
          }
        });
      });
      this.template.fields = this.template.fields.filter(f => !removedFieldUuids.includes(f.uuid) || f.areas?.length);
      this.save();
    },
    onDocumentReplace(data) {
      const {
        replaceSchemaItem,
        schema,
        documents
      } = data;
      this.template.schema.splice(this.template.schema.indexOf(replaceSchemaItem), 1, schema[0]);
      this.template.documents.push(...documents);
      if (data.fields) {
        this.template.fields = data.fields;
        const removedFieldUuids = [];
        this.template.fields.forEach(field => {
          [...(field.areas || [])].forEach(area => {
            if (area.attachment_uuid === replaceSchemaItem.attachment_uuid) {
              field.areas.splice(field.areas.indexOf(area), 1);
              removedFieldUuids.push(field.uuid);
            }
          });
        });
        this.template.fields = this.template.fields.filter(f => !removedFieldUuids.includes(f.uuid) || f.areas?.length);
      }
      if (data.submitters) {
        this.template.submitters = data.submitters;
        if (!this.template.submitters.find(s => s.uuid === this.selectedSubmitter?.uuid)) {
          this.selectedSubmitter = this.template.submitters[0];
        }
      }
      this.template.fields.forEach(field => {
        (field.areas || []).forEach(area => {
          if (area.attachment_uuid === replaceSchemaItem.attachment_uuid) {
            area.attachment_uuid = schema[0].attachment_uuid;
          }
        });
      });
      if (this.onUpload) {
        this.onUpload(this.template);
      }
      this.save();
    },
    moveDocument(item, direction) {
      const currentIndex = this.template.schema.indexOf(item);
      this.template.schema.splice(currentIndex, 1);
      if (currentIndex + direction > this.template.schema.length) {
        this.template.schema.unshift(item);
      } else if (currentIndex + direction < 0) {
        this.template.schema.push(item);
      } else {
        this.template.schema.splice(currentIndex + direction, 0, item);
      }
      this.save();
    },
    maybeShowErrorTemplateAlert(e) {
      if (!this.isAllRequiredFieldsAdded) {
        e.preventDefault();
        const fields = this.defaultRequiredFields?.filter(f => {
          return !this.template.fields?.some(field => field.name === f.name);
        });
        if (fields?.length) {
          return alert(this.t("add_all_required_fields_to_continue") + ": " + fields.map(f => f.name).join(", "));
        }
      }
      if (!this.template.fields.length) {
        e.preventDefault();
        alert("Please draw fields to prepare the document.");
      } else {
        const submitterWithoutFields = this.template.submitters.find(submitter => !this.template.fields.some(f => f.submitter_uuid === submitter.uuid));
        if (submitterWithoutFields) {
          e.preventDefault();
          alert(`Please add fields for ${submitterWithoutFields.name} to prepare the document or remove the party.`);
        }
      }
    },
    onSaveClick() {
      if (!this.isAllRequiredFieldsAdded) {
        const fields = this.defaultRequiredFields?.filter(f => {
          return !this.template.fields?.some(field => field.name === f.name);
        });
        if (fields?.length) {
          return alert(this.t("add_all_required_fields_to_continue") + ": " + fields.map(f => f.name).join(", "));
        }
      }
      if (!this.template.fields.length) {
        alert("Please draw fields to prepare the document.");
      } else {
        const submitterWithoutFields = this.template.submitters.find(submitter => !this.template.fields.some(f => f.submitter_uuid === submitter.uuid));
        if (submitterWithoutFields) {
          alert(`Please add fields for ${submitterWithoutFields.name} to prepare the document or remove the party.`);
        } else {
          this.isSaving = true;
          this.save().then(() => {
            window.Turbo.visit(`/templates/${this.template.id}`);
          }).finally(() => {
            this.isSaving = false;
          });
        }
      }
    },
    scrollToArea(area) {
      const documentRef = this.documentRefs.find(a => a.document.uuid === area.attachment_uuid);
      documentRef.scrollToArea(area);
      this.selectedAreaRef.value = area;
    },
    baseFetch(path, options = {}) {
      return fetch(this.baseUrl + path, {
        ...options,
        headers: {
          "X-CSRF-Token": this.authenticityToken,
          ...this.fetchOptions.headers,
          ...options.headers
        }
      });
    },
    save({
      force
    } = {
      force: false
    }) {
      if (this.onChange) {
        this.onChange(this.template);
      }
      if (!this.autosave && !force) {
        return Promise.resolve({});
      }
      this.$nextTick(() => {
        if (this.$el.closest("template-builder")) {
          this.$el.closest("template-builder").dataset.template = JSON.stringify(this.template);
        }
      });
      this.pushUndo();
      return this.baseFetch(`/templates/${this.template.id}`, {
        method: "PUT",
        body: JSON.stringify({
          template: {
            name: this.template.name,
            schema: this.template.schema,
            submitters: this.template.submitters,
            fields: this.template.fields
          }
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(() => {
        if (this.onSave) {
          this.onSave(this.template);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/conditions_modal.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/conditions_modal.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ConditionModal",
  inject: ["t", "save", "template", "withConditions"],
  props: {
    field: {
      type: Object,
      required: true
    },
    buildDefaultName: {
      type: Function,
      required: true
    }
  },
  emits: ["close"],
  data() {
    return {
      conditions: this.field.conditions?.[0] ? JSON.parse(JSON.stringify(this.field.conditions)) : [{}]
    };
  },
  computed: {
    fields() {
      return this.template.fields.reduce((acc, f) => {
        if (f !== this.field && f.submitter_uuid === this.field.submitter_uuid) {
          acc.push(f);
        }
        return acc;
      }, []);
    }
  },
  created() {
    this.field.conditions ||= [];
  },
  methods: {
    conditionField(condition) {
      return this.fields.find(f => f.uuid === condition.field_uuid);
    },
    conditionActions(condition) {
      return this.fieldActions(this.conditionField(condition));
    },
    fieldActions(field) {
      const actions = [];
      if (!field) {
        return actions;
      }
      if (field.type === "checkbox") {
        actions.push("checked", "unchecked");
      } else if (["radio", "select"].includes(field.type)) {
        actions.push("equal", "not_equal");
      } else if (["multiple"].includes(field.type)) {
        actions.push("contains", "does_not_contain");
      } else {
        actions.push("not_empty", "empty");
      }
      return actions;
    },
    validateSaveAndClose() {
      if (!this.withConditions) {
        return alert("Not yet available.");
      }
      if (this.conditions.find(f => f.field_uuid)) {
        this.field.conditions = this.conditions;
      } else {
        delete this.field.conditions;
      }
      this.save();
      this.$emit("close");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/contenteditable.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/contenteditable.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconPencil.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ContenteditableField',
  components: {
    IconPencil: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  inject: ['t'],
  props: {
    modelValue: {
      type: String,
      required: false,
      default: ''
    },
    iconInline: {
      type: Boolean,
      required: false,
      default: false
    },
    iconWidth: {
      type: Number,
      required: false,
      default: 30
    },
    withRequired: {
      type: Boolean,
      required: false,
      default: false
    },
    selectOnEditClick: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    iconStrokeWidth: {
      type: Number,
      required: false,
      default: 2
    }
  },
  emits: ['update:model-value', 'focus', 'blur'],
  data() {
    return {
      value: ''
    };
  },
  watch: {
    modelValue: {
      handler(value) {
        this.value = value;
      },
      immediate: true
    }
  },
  methods: {
    selectContent() {
      const el = this.$refs.contenteditable;
      const range = document.createRange();
      range.selectNodeContents(el);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    },
    onBlur(e) {
      setTimeout(() => {
        this.value = this.$refs.contenteditable.innerText.trim() || this.modelValue;
        this.$emit('update:model-value', this.value);
        this.$emit('blur', e);
      }, 1);
    },
    focusContenteditable() {
      this.$refs.contenteditable.focus();
    },
    blurContenteditable() {
      this.$refs.contenteditable.blur();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/controls.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/controls.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contenteditable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contenteditable */ "./app/javascript/template_builder/contenteditable.vue");
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload */ "./app/javascript/template_builder/upload.vue");
/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./replace */ "./app/javascript/template_builder/replace.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DocumentControls',
  components: {
    Contenteditable: _contenteditable__WEBPACK_IMPORTED_MODULE_0__["default"],
    ReplaceButton: _replace__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    template: {
      type: Object,
      required: true
    },
    document: {
      type: Object,
      required: true
    },
    acceptFileTypes: {
      type: String,
      required: false,
      default: 'image/*, application/pdf'
    },
    withReplaceButton: {
      type: Boolean,
      required: true,
      default: true
    },
    withArrows: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ['change', 'remove', 'up', 'down', 'replace'],
  methods: {
    upload: _upload__WEBPACK_IMPORTED_MODULE_1__["default"].methods.upload,
    onUpdateName(value) {
      this.item.name = value;
      this.$emit('change');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/description_modal.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/description_modal.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DescriptionModal',
  inject: ['t', 'save', 'template'],
  props: {
    field: {
      type: Object,
      required: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    buildDefaultName: {
      type: Function,
      required: true
    }
  },
  emits: ['close'],
  data() {
    return {
      description: this.field.description,
      title: this.field.title
    };
  },
  mounted() {
    this.resizeTextarea();
  },
  methods: {
    saveAndClose() {
      this.field.description = this.description;
      this.field.title = this.title;
      this.save();
      this.$emit('close');
    },
    resizeTextarea() {
      const textarea = this.$refs.textarea;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/document.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/document.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./app/javascript/template_builder/page.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TemplateDocument',
  components: {
    Page: _page__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    document: {
      type: Object,
      required: true
    },
    areasIndex: {
      type: Object,
      required: false,
      default: () => ({})
    },
    defaultFields: {
      type: Array,
      required: false,
      default: () => []
    },
    drawFieldType: {
      type: String,
      required: false,
      default: ''
    },
    defaultSubmitters: {
      type: Array,
      required: false,
      default: () => []
    },
    allowDraw: {
      type: Boolean,
      required: false,
      default: true
    },
    selectedSubmitter: {
      type: Object,
      required: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    drawField: {
      type: Object,
      required: false,
      default: null
    },
    baseUrl: {
      type: String,
      required: false,
      default: ''
    },
    isDrag: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['draw', 'drop-field', 'remove-area'],
  data() {
    return {
      pageRefs: []
    };
  },
  computed: {
    basePreviewUrl() {
      if (this.baseUrl) {
        return new URL(this.baseUrl).origin;
      } else {
        return '';
      }
    },
    numberOfPages() {
      return this.document.metadata?.pdf?.number_of_pages || this.document.preview_images.length;
    },
    sortedPreviewImages() {
      const lazyloadMetadata = this.document.preview_images[this.document.preview_images.length - 1].metadata;
      return [...Array(this.numberOfPages).keys()].map(i => {
        return this.previewImagesIndex[i] || {
          metadata: lazyloadMetadata,
          id: Math.random().toString(),
          url: this.basePreviewUrl + `/preview/${this.document.signed_uuid || this.document.uuid}/${i}.jpg`
        };
      });
    },
    previewImagesIndex() {
      return this.document.preview_images.reduce((acc, e) => {
        acc[parseInt(e.filename)] = e;
        return acc;
      }, {});
    }
  },
  beforeUpdate() {
    this.pageRefs = [];
  },
  methods: {
    scrollToArea(area) {
      this.$nextTick(() => {
        this.pageRefs[area.page].areaRefs.find(e => e.area === area).$el.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      });
    },
    setPageRefs(el) {
      if (el) {
        this.pageRefs.push(el);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/dropzone.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/dropzone.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload */ "./app/javascript/template_builder/upload.vue");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCloudUpload.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconInnerShadowTop.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FileDropzone',
  components: {
    IconCloudUpload: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconInnerShadowTop: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  inject: ['baseFetch', 't'],
  props: {
    templateId: {
      type: [Number, String],
      required: true
    },
    acceptFileTypes: {
      type: String,
      required: false,
      default: 'image/*, application/pdf'
    }
  },
  emits: ['success'],
  data() {
    return {
      isLoading: false,
      isProcessing: false
    };
  },
  computed: {
    inputId() {
      return 'el' + Math.random().toString(32).split('.')[1];
    },
    message() {
      if (this.isLoading) {
        return this.t('uploading');
      } else if (this.isProcessing) {
        return this.t('processing_');
      } else if (this.acceptFileTypes === 'image/*, application/pdf') {
        return this.t('add_pdf_documents_or_images');
      } else {
        return this.t('add_documents_or_images');
      }
    }
  },
  methods: {
    upload: _upload__WEBPACK_IMPORTED_MODULE_0__["default"].methods.upload,
    onDropFiles(e) {
      if (this.acceptFileTypes !== 'image/*, application/pdf' || [...e.dataTransfer.files].every(f => f.type.match(/(?:image\/)|(?:application\/pdf)/))) {
        this.$refs.input.files = e.dataTransfer.files;
        this.upload();
      } else {
        alert('Only PDF and images are supported.');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contenteditable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contenteditable */ "./app/javascript/template_builder/contenteditable.vue");
/* harmony import */ var _field_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field_type */ "./app/javascript/template_builder/field_type.vue");
/* harmony import */ var _payment_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment_settings */ "./app/javascript/template_builder/payment_settings.vue");
/* harmony import */ var _field_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field_settings */ "./app/javascript/template_builder/field_settings.vue");
/* harmony import */ var _formula_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formula_modal */ "./app/javascript/template_builder/formula_modal.vue");
/* harmony import */ var _conditions_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conditions_modal */ "./app/javascript/template_builder/conditions_modal.vue");
/* harmony import */ var _description_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./description_modal */ "./app/javascript/template_builder/description_modal.vue");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconSettings.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconNewSection.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconRouteAltLeft.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconTrashX.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconMathFunction.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");









/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TemplateField",
  components: {
    Contenteditable: _contenteditable__WEBPACK_IMPORTED_MODULE_0__["default"],
    IconSettings: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    FieldSettings: _field_settings__WEBPACK_IMPORTED_MODULE_3__["default"],
    PaymentSettings: _payment_settings__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconNewSection: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    FormulaModal: _formula_modal__WEBPACK_IMPORTED_MODULE_4__["default"],
    DescriptionModal: _description_modal__WEBPACK_IMPORTED_MODULE_6__["default"],
    ConditionsModal: _conditions_modal__WEBPACK_IMPORTED_MODULE_5__["default"],
    IconRouteAltLeft: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    IconTrashX: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    IconMathFunction: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    FieldType: _field_type__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ["template", "save", "backgroundColor", "selectedAreaRef", "t"],
  props: {
    field: {
      type: Object,
      required: true
    },
    defaultField: {
      type: Object,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["set-draw", "remove", "scroll-to"],
  data() {
    return {
      isNameFocus: false,
      showPaymentModal: false,
      isShowFormulaModal: false,
      isShowConditionsModal: false,
      isShowDescriptionModal: false,
      renderDropdown: false
    };
  },
  computed: {
    fieldNames: _field_type__WEBPACK_IMPORTED_MODULE_1__["default"].computed.fieldNames,
    dropdownBgColor() {
      return ["", null, "transparent"].includes(this.backgroundColor) ? "white" : this.backgroundColor;
    },
    schemaAttachmentsIndexes() {
      return (this.template.schema || []).reduce((acc, item, index) => {
        acc[item.attachment_uuid] = index;
        return acc;
      }, {});
    },
    sortedAreas() {
      return (this.field.areas || []).sort((a, b) => {
        return this.schemaAttachmentsIndexes[a.attachment_uuid] - this.schemaAttachmentsIndexes[b.attachment_uuid];
      });
    },
    modalContainerEl() {
      return this.$el.getRootNode().querySelector("#uvtsign_modal_container");
    },
    defaultName() {
      return this.buildDefaultName(this.field, this.template.fields);
    },
    areas() {
      return this.field.areas || [];
    }
  },
  created() {
    this.field.preferences ||= {};
    if (this.field.type === "date") {
      this.field.preferences.format ||= Intl.DateTimeFormat().resolvedOptions().locale.endsWith("-US") ? "MM/DD/YYYY" : "DD/MM/YYYY";
    }
  },
  methods: {
    buildDefaultName(field, fields) {
      if (field.type === "payment" && field.preferences?.price) {
        const {
          price,
          currency
        } = field.preferences || {};
        const formattedPrice = new Intl.NumberFormat([], {
          style: "currency",
          currency
        }).format(price);
        return `${this.fieldNames[field.type]} ${formattedPrice}`;
      } else {
        const typeIndex = fields.filter(f => f.type === field.type).indexOf(field);
        const suffix = {
          multiple: this.t("select"),
          radio: this.t("group")
        }[field.type] || this.t("field");
        return `${this.fieldNames[field.type]} ${suffix} ${typeIndex + 1}`;
      }
    },
    onNameFocus(e) {
      this.isNameFocus = true;
      if (!this.field.name) {
        setTimeout(() => {
          this.$refs.name.$refs.contenteditable.innerText = " ";
        }, 1);
      }
    },
    maybeFocusOnOptionArea(option) {
      const area = this.field.areas.find(a => a.option_uuid === option.uuid);
      if (area) {
        this.selectedAreaRef.value = area;
      }
    },
    scrollToFirstArea() {
      return this.sortedAreas[0] && this.$emit("scroll-to", this.sortedAreas[0]);
    },
    closeDropdown() {
      document.activeElement.blur();
    },
    addOption() {
      this.field.options.push({
        value: "",
        uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])()
      });
      this.$nextTick(() => {
        const inputs = this.$refs.options.querySelectorAll("input");
        inputs[inputs.length - 1]?.focus();
      });
      this.save();
    },
    removeOption(option) {
      this.field.options.splice(this.field.options.indexOf(option), 1);
      const optionIndex = this.field.areas.findIndex(a => a.option_uuid === option.uuid);
      if (optionIndex !== -1) {
        this.field.areas.splice(this.field.areas.findIndex(a => a.option_uuid === option.uuid), 1);
      }
      this.save();
    },
    maybeUpdateOptions() {
      delete this.field.default_value;
      if (!["radio", "multiple", "select"].includes(this.field.type)) {
        delete this.field.options;
      }
      if (["radio", "multiple", "select"].includes(this.field.type)) {
        this.field.options ||= [{
          value: "",
          uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_12__["default"])()
        }];
      }
      (this.field.areas || []).forEach(area => {
        if (this.field.type === "cells") {
          area.cell_w = area.w * 2 / Math.floor(area.w / area.h);
        } else {
          delete area.cell_w;
        }
      });
    },
    onNameBlur(e) {
      const text = this.$refs.name.$refs.contenteditable.innerText.trim();
      if (text) {
        this.field.name = text;
      } else {
        this.field.name = "";
        this.$refs.name.$refs.contenteditable.innerText = this.defaultName;
      }
      this.isNameFocus = false;
      this.save();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_settings.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_settings.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconShape.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconInfoCircle.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconMathFunction.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconRouteAltLeft.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCopy.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconNewSection.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FieldSettings",
  components: {
    IconShape: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    IconInfoCircle: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconMathFunction: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconRouteAltLeft: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    IconCopy: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    IconNewSection: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  inject: ["template", "save", "t"],
  props: {
    field: {
      type: Object,
      required: true
    },
    backgroundColor: {
      type: String,
      required: false,
      default: null
    },
    defaultField: {
      type: Object,
      required: false,
      default: null
    },
    withRequired: {
      type: Boolean,
      required: false,
      default: true
    },
    withAreas: {
      type: Boolean,
      required: false,
      default: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["set-draw", "scroll-to", "click-formula", "click-description", "click-condition"],
  data() {
    return {};
  },
  computed: {
    schemaAttachmentsIndexes() {
      return (this.template.schema || []).reduce((acc, item, index) => {
        acc[item.attachment_uuid] = index;
        return acc;
      }, {});
    },
    numberFormats() {
      return ["none", "comma", "dot", "space"];
    },
    dateFormats() {
      const formats = ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD", "DD-MM-YYYY", "DD.MM.YYYY", "MMM D, YYYY", "MMMM D, YYYY", "D MMM YYYY", "D MMMM YYYY"];
      if (Intl.DateTimeFormat().resolvedOptions().timeZone?.includes("Seoul") || navigator.language?.startsWith("ko")) {
        formats.push("YYYY년 MM월 DD일");
      }
      if (this.field.preferences?.format && !formats.includes(this.field.preferences.format)) {
        formats.unshift(this.field.preferences.format);
      }
      return formats;
    },
    sortedAreas() {
      return (this.field.areas || []).sort((a, b) => {
        return this.schemaAttachmentsIndexes[a.attachment_uuid] - this.schemaAttachmentsIndexes[b.attachment_uuid];
      });
    }
  },
  methods: {
    copyToAllPages(field) {
      const areaString = JSON.stringify(field.areas[0]);
      this.template.documents.forEach(attachment => {
        const numberOfPages = attachment.metadata?.pdf?.number_of_pages || attachment.preview_images.length;
        for (let page = 0; page <= numberOfPages - 1; page++) {
          if (!field.areas.find(area => area.attachment_uuid === attachment.uuid && area.page === page)) {
            field.areas.push({
              ...JSON.parse(areaString),
              attachment_uuid: attachment.uuid,
              page
            });
          }
        }
      });
      this.$emit("scroll-to", this.field.areas[this.field.areas.length - 1]);
      this.save();
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
    formatDate(date, format) {
      const monthFormats = {
        M: "numeric",
        MM: "2-digit",
        MMM: "short",
        MMMM: "long"
      };
      const dayFormats = {
        D: "numeric",
        DD: "2-digit"
      };
      const yearFormats = {
        YYYY: "numeric",
        YY: "2-digit"
      };
      const parts = new Intl.DateTimeFormat([], {
        day: dayFormats[format.match(/D+/)],
        month: monthFormats[format.match(/M+/)],
        year: yearFormats[format.match(/Y+/)]
      }).formatToParts(date);
      return format.replace(/D+/, parts.find(p => p.type === "day").value).replace(/M+/, parts.find(p => p.type === "month").value).replace(/Y+/, parts.find(p => p.type === "year").value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_submitter.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_submitter.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconUserPlus.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconChevronDown.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconPlus.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconTrashX.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconChevronUp.js");
/* harmony import */ var _contenteditable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contenteditable */ "./app/javascript/template_builder/contenteditable.vue");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FieldSubmitter',
  components: {
    IconUserPlus: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconChevronDown: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Contenteditable: _contenteditable__WEBPACK_IMPORTED_MODULE_0__["default"],
    IconPlus: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    IconTrashX: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    IconChevronUp: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  inject: ['t', 'save'],
  props: {
    submitters: {
      type: Array,
      required: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    compact: {
      type: Boolean,
      required: false,
      default: false
    },
    mobileView: {
      type: Boolean,
      required: false,
      default: false
    },
    allowAddNew: {
      type: Boolean,
      required: false,
      default: true
    },
    modelValue: {
      type: String,
      required: true
    },
    menuStyle: {
      type: Object,
      required: false,
      default: () => ({})
    },
    menuClasses: {
      type: String,
      required: false,
      default: 'dropdown-content menu p-2 shadow rounded-box w-full z-10'
    }
  },
  emits: ['update:model-value', 'remove', 'new-submitter', 'name-change'],
  data() {
    return {
      renderDropdown: false
    };
  },
  computed: {
    colors() {
      return ['bg-red-500', 'bg-sky-500', 'bg-emerald-500', 'bg-yellow-300', 'bg-purple-600', 'bg-pink-500', 'bg-cyan-500', 'bg-orange-500', 'bg-lime-500', 'bg-indigo-500', 'bg-red-500', 'bg-sky-500', 'bg-emerald-500', 'bg-yellow-300', 'bg-purple-600', 'bg-pink-500', 'bg-cyan-500', 'bg-orange-500', 'bg-lime-500', 'bg-indigo-500'];
    },
    names() {
      return [this.t('first_party'), this.t('second_party'), this.t('third_party'), this.t('fourth_party'), this.t('fifth_party'), this.t('sixth_party'), this.t('seventh_party'), this.t('eighth_party'), this.t('ninth_party'), this.t('tenth_party'), this.t('eleventh_party'), this.t('twelfth_party'), this.t('thirteenth_party'), this.t('fourteenth_party'), this.t('fifteenth_party'), this.t('sixteenth_party'), this.t('seventeenth_party'), this.t('eighteenth_party'), this.t('nineteenth_party'), this.t('twentieth_party')];
    },
    selectedSubmitter() {
      return this.submitters.find(e => e.uuid === this.modelValue);
    }
  },
  methods: {
    selectSubmitter(submitter) {
      this.$emit('update:model-value', submitter.uuid);
    },
    remove(submitter) {
      if (window.confirm(this.t('are_you_sure'))) {
        this.$emit('remove', submitter);
      }
    },
    move(submitter, direction) {
      const currentIndex = this.submitters.indexOf(submitter);
      this.submitters.splice(currentIndex, 1);
      if (currentIndex + direction > this.submitters.length) {
        this.submitters.unshift(submitter);
      } else if (currentIndex + direction < 0) {
        this.submitters.push(submitter);
      } else {
        this.submitters.splice(currentIndex + direction, 0, submitter);
      }
      this.selectSubmitter(submitter);
      this.save();
    },
    addSubmitter() {
      const newSubmitter = {
        name: this.names[this.submitters.length],
        uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])()
      };
      this.submitters.push(newSubmitter);
      this.$emit('update:model-value', newSubmitter.uuid);
      this.$emit('new-submitter', newSubmitter);
    },
    closeDropdown() {
      document.activeElement.blur();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_type.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_type.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconTextSize.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconWritingSign.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconLetterCaseUpper.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCalendarEvent.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconSquareNumber1.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconPhoto.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCheckbox.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconChecks.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconPaperclip.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCircleDot.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconSelect.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconColumns3.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconRubberStamp.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCreditCard.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FiledTypeDropdown",
  inject: ["withPayment", "t", "fieldTypes"],
  props: {
    modelValue: {
      type: String,
      required: true
    },
    menuClasses: {
      type: String,
      required: false,
      default: "mt-1.5 bg-base-100"
    },
    menuStyle: {
      type: Object,
      required: false,
      default: () => ({})
    },
    buttonClasses: {
      type: String,
      required: false,
      default: ""
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    buttonWidth: {
      type: Number,
      required: false,
      default: 18
    }
  },
  emits: ["update:model-value"],
  data() {
    return {
      renderDropdown: false
    };
  },
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
        payment: this.t("payment")
      };
    },
    fieldIcons() {
      return {
        text: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
        signature: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        initials: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        date: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        number: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        image: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
        checkbox: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
        multiple: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
        file: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
        radio: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
        select: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
        cells: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
        stamp: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
        payment: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
      };
    },
    fieldIconsSorted() {
      if (this.fieldTypes.length) {
        return this.fieldTypes.reduce((acc, type) => {
          acc[type] = this.fieldIcons[type];
          return acc;
        }, {});
      } else {
        return this.fieldIcons;
      }
    }
  },
  methods: {
    closeDropdown() {
      document.activeElement.blur();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/fields.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/fields.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field */ "./app/javascript/template_builder/field.vue");
/* harmony import */ var _field_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field_type */ "./app/javascript/template_builder/field_type.vue");
/* harmony import */ var _field_submitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field_submitter */ "./app/javascript/template_builder/field_submitter.vue");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCirclePlus.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconLock.js");
/* harmony import */ var _icon_drag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon_drag */ "./app/javascript/template_builder/icon_drag.vue");





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TemplateFields",
  components: {
    Field: _field__WEBPACK_IMPORTED_MODULE_0__["default"],
    FieldType: _field_type__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconCirclePlus: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    FieldSubmitter: _field_submitter__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconDrag: _icon_drag__WEBPACK_IMPORTED_MODULE_3__["default"],
    IconLock: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  inject: ["save", "backgroundColor", "withPayment", "t", "fieldsDragFieldRef"],
  props: {
    fields: {
      type: Array,
      required: true
    },
    withHelp: {
      type: Boolean,
      required: false,
      default: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    defaultFields: {
      type: Array,
      required: false,
      default: () => []
    },
    defaultRequiredFields: {
      type: Array,
      required: false,
      default: () => []
    },
    onlyDefinedFields: {
      type: Boolean,
      required: false,
      default: true
    },
    drawFieldType: {
      type: String,
      required: false,
      default: ""
    },
    defaultSubmitters: {
      type: Array,
      required: false,
      default: () => []
    },
    withStickySubmitters: {
      type: Boolean,
      required: false,
      default: true
    },
    fieldTypes: {
      type: Array,
      required: false,
      default: () => []
    },
    submitters: {
      type: Array,
      required: true
    },
    selectedSubmitter: {
      type: Object,
      required: true
    }
  },
  emits: ["add-field", "set-draw", "set-draw-type", "set-drag", "drag-end", "scroll-to-area", "change-submitter"],
  data() {
    return {
      defaultFieldsSearch: ""
    };
  },
  computed: {
    fieldNames: _field_type__WEBPACK_IMPORTED_MODULE_1__["default"].computed.fieldNames,
    fieldIcons: _field_type__WEBPACK_IMPORTED_MODULE_1__["default"].computed.fieldIcons,
    isShowFieldSearch() {
      return this.submitterDefaultFields.length > 15;
    },
    fieldIconsSorted() {
      if (this.fieldTypes.length) {
        return this.fieldTypes.reduce((acc, type) => {
          acc[type] = this.fieldIcons[type];
          return acc;
        }, {});
      } else {
        return this.fieldIcons;
      }
    },
    submitterFields() {
      return this.fields.filter(f => f.submitter_uuid === this.selectedSubmitter.uuid);
    },
    submitterDefaultFields() {
      return this.defaultFields.filter(f => {
        return !this.submitterFields.find(field => field.name === f.name) && (!f.role || f.role === this.selectedSubmitter.name);
      });
    },
    filteredSubmitterDefaultFields() {
      if (this.defaultFieldsSearch) {
        return this.submitterDefaultFields.filter(f => f.name.toLowerCase().includes(this.defaultFieldsSearch.toLowerCase()));
      } else {
        return this.submitterDefaultFields;
      }
    }
  },
  methods: {
    onDragstart(field) {
      this.$emit("set-drag", field);
    },
    onFieldDragover(e) {
      const targetField = e.target.closest("[data-uuid]");
      const dragField = this.$refs.fields.querySelector(`[data-uuid="${this.fieldsDragFieldRef.value.uuid}"]`);
      if (dragField && targetField && targetField !== dragField) {
        const fields = Array.from(this.$refs.fields.children);
        const currentIndex = fields.indexOf(dragField);
        const targetIndex = fields.indexOf(targetField);
        if (currentIndex < targetIndex) {
          targetField.after(dragField);
        } else {
          targetField.before(dragField);
        }
      }
    },
    reorderFields() {
      Array.from(this.$refs.fields.children).forEach((el, index) => {
        if (el.dataset.uuid !== this.fields[index].uuid) {
          const field = this.fields.find(f => f.uuid === el.dataset.uuid);
          this.fields.splice(this.fields.indexOf(field), 1);
          this.fields.splice(index, 0, field);
        }
      });
      this.save();
    },
    removeSubmitter(submitter) {
      [...this.fields].forEach(field => {
        if (field.submitter_uuid === submitter.uuid) {
          this.removeField(field);
        }
      });
      this.submitters.splice(this.submitters.indexOf(submitter), 1);
      if (this.selectedSubmitter === submitter) {
        this.$emit("change-submitter", this.submitters[0]);
      }
      this.save();
    },
    removeField(field) {
      this.fields.splice(this.fields.indexOf(field), 1);
      this.fields.forEach(f => {
        (f.conditions || []).forEach(c => {
          if (c.field_uuid === field.uuid) {
            f.conditions.splice(f.conditions.indexOf(c), 1);
          }
        });
      });
      this.save();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/formula_modal.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/formula_modal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCodePlus.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FormulaModal",
  components: {
    IconCodePlus: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  inject: ["t", "save", "template", "withFormula"],
  props: {
    field: {
      type: Object,
      required: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    buildDefaultName: {
      type: Function,
      required: true
    }
  },
  emits: ["close"],
  data() {
    return {
      formula: ""
    };
  },
  computed: {
    fields() {
      return this.template.fields.reduce((acc, f) => {
        if (f !== this.field && f.submitter_uuid === this.field.submitter_uuid && ["number"].includes(f.type) && !f.preferences?.formula) {
          acc.push(f);
        }
        return acc;
      }, []);
    }
  },
  created() {
    this.field.preferences ||= {};
  },
  mounted() {
    this.formula = this.humanizeFormula(this.field.preferences.formula || "");
  },
  methods: {
    humanizeFormula(text) {
      return text.replace(/{{(.*?)}}/g, (match, uuid) => {
        const foundField = this.fields.find(f => f.uuid === uuid);
        if (foundField) {
          return `{{${foundField.name || this.buildDefaultName(foundField, this.template.fields)}}}`;
        } else {
          return "{{FIELD NOT FOUND}}";
        }
      });
    },
    normalizeFormula(text) {
      return text.replace(/{{(.*?)}}/g, (match, name) => {
        const foundField = this.fields.find(f => {
          return (f.name || this.buildDefaultName(f, this.template.fields)).trim() === name.trim();
        });
        if (foundField) {
          return `{{${foundField.uuid}}}`;
        } else {
          return "{{FIELD NOT FOUND}}";
        }
      });
    },
    validateSaveAndClose() {
      if (!this.withFormula) {
        return alert("Available only in Pro");
      }
      const normalizedFormula = this.normalizeFormula(this.formula);
      if (normalizedFormula.includes("FIELD NOT FOUND")) {
        alert("Some fields are missing in the formula.");
      } else {
        this.field.preferences.formula = normalizedFormula;
        this.field.readonly = !!normalizedFormula;
        this.save();
        this.$emit("close");
      }
    },
    insertTextUnderCursor(textToInsert) {
      const textarea = this.$refs.textarea;
      const selectionEnd = textarea.selectionEnd;
      const cursorPos = selectionEnd;
      const newText = textarea.value.substring(0, cursorPos) + textToInsert + textarea.value.substring(cursorPos);
      this.formula = newText;
      textarea.setSelectionRange(cursorPos + textToInsert.length, cursorPos + textToInsert.length);
      textarea.focus();
    },
    resizeTextarea() {
      const textarea = this.$refs.textarea;
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/icon_drag.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/icon_drag.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DragIcon'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/import_list.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/import_list.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCloudUpload.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconX.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconArrowsHorizontal.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconPlus.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconInfoCircle.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconInnerShadowTop.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FileDropzone",
  components: {
    IconCloudUpload: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    IconX: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconArrowsHorizontal: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconPlus: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    IconInfoCircle: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    IconInnerShadowTop: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    template: {
      type: Object,
      required: true
    },
    authenticityToken: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      isLoading: false,
      spreadsheet: null,
      selectedSheetIndex: null,
      mappings: []
    };
  },
  computed: {
    table() {
      return this.spreadsheet[this.selectedSheetIndex][1];
    },
    submissionsData() {
      const submissions = [];
      this.rows.forEach(row => {
        const submittersIndex = {};
        this.mappings.forEach(mapping => {
          if (mapping.field_name && mapping.column_index != null) {
            submittersIndex[mapping.submitter_uuid] ||= {
              uuid: mapping.submitter_uuid,
              fields: []
            };
            if (["name", "email"].includes(mapping.field_name.toLowerCase())) {
              submittersIndex[mapping.submitter_uuid][mapping.field_name.toLowerCase()] = row[mapping.column_index];
            } else {
              submittersIndex[mapping.submitter_uuid].fields.push({
                name: mapping.field_name,
                default_value: row[mapping.column_index],
                readonly: true
              });
            }
          }
        });
        if (Object.keys(submittersIndex).length !== 0) {
          submissions.push({
            submitters: Object.values(submittersIndex)
          });
        }
      });
      return submissions;
    },
    csvBase64() {
      const rows = [];
      this.submitters.forEach(submitter => {
        this.selectFieldsForSubmitter(submitter).forEach(field => {
          rows.push(this.submitters.length > 1 ? `${submitter.name} - ${field.name}` : field.name);
        });
      });
      const csv = rows.map(item => {
        if (/[",\n]/.test(item)) {
          return `"${item.replace(/"/g, '""')}"`;
        } else {
          return item;
        }
      }).join(",");
      return window.btoa(window.unescape(window.encodeURIComponent(csv + "\n" + rows.map(() => "").join(",") + "\n")));
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
    fieldTypes() {
      return ["text", "cells", "date", "number", "radio", "select", "checkbox"];
    },
    defaultFields() {
      return [{
        name: "Name"
      }, {
        name: "Email"
      }];
    },
    rows() {
      return this.table.slice(1);
    }
  },
  watch: {
    selectedSheetIndex(value) {
      if (value !== null) {
        document.getElementById("list_form_buttons")?.classList?.remove("hidden");
      }
    }
  },
  methods: {
    onDropFiles(e) {
      this.uploadFile(e.dataTransfer.files[0]);
    },
    onSelectFile(e) {
      this.uploadFile(e.target.files[0]);
    },
    addMapping(submitter) {
      this.mappings.push({
        uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])(),
        field_name: "",
        column_index: null,
        submitter_uuid: submitter.uuid
      });
    },
    selectFieldsForSubmitter(submitter) {
      const templateFields = this.template.fields.filter(field => {
        return field.submitter_uuid === submitter.uuid && field.name && this.fieldTypes.includes(field.type) && this.defaultFields.every(f => field.name?.toLowerCase() !== f.name?.toLowerCase());
      });
      return [...this.defaultFields, ...templateFields];
    },
    buildDefaultMappings() {
      this.submitters.forEach(submitter => {
        const fields = this.selectFieldsForSubmitter(submitter);
        fields.forEach(field => {
          const columnIndex = this.columns.findIndex((column, index) => {
            return column && column.toString().toLowerCase().includes(field.name?.toLowerCase()) && this.mappings.every(m => m.column_index !== index);
          });
          if (columnIndex !== -1) {
            this.mappings.push({
              uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])(),
              field_name: field.name,
              column_index: columnIndex,
              submitter_uuid: submitter.uuid
            });
          }
        });
        if (!this.mappings.some(m => m.field_name.toLowerCase() === "name" && m.submitter_uuid === submitter.uuid)) {
          this.mappings.unshift({
            uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])(),
            field_name: "Name",
            submitter_uuid: submitter.uuid
          });
        }
        if (!this.mappings.some(m => m.field_name.toLowerCase() === "email" && m.submitter_uuid === submitter.uuid)) {
          this.mappings.unshift({
            uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])(),
            field_name: "Email",
            submitter_uuid: submitter.uuid
          });
        }
      });
    },
    uploadFile(file) {
      this.isLoading = true;
      const formData = new FormData();
      formData.append("file", file);
      return fetch("/upload_spreadsheet", {
        method: "POST",
        body: formData,
        headers: {
          "X-CSRF-Token": this.authenticityToken
        }
      }).then(resp => resp.json()).then(data => {
        if (data.error) {
          return alert(data.error);
        }
        this.spreadsheet = data;
        if (data.length === 1) {
          this.selectedSheetIndex = 0;
          this.buildDefaultMappings();
        }
      }).finally(() => {
        this.isLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/logo.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/logo.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProjectLogo"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/mobile_draw_field.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/mobile_draw_field.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field */ "./app/javascript/template_builder/field.vue");
/* harmony import */ var _field_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field_type */ "./app/javascript/template_builder/field_type.vue");
/* harmony import */ var _field_submitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field_submitter */ "./app/javascript/template_builder/field_submitter.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MobileDrawField',
  components: {
    Field: _field__WEBPACK_IMPORTED_MODULE_0__["default"],
    FieldSubmitter: _field_submitter__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  inject: ['save', 't', 'backgroundColor'],
  props: {
    drawField: {
      type: Object,
      required: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    submitters: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    selectedSubmitter: {
      type: Object,
      required: true
    }
  },
  emits: ['change-submitter', 'cancel'],
  computed: {
    fieldNames: _field_type__WEBPACK_IMPORTED_MODULE_1__["default"].computed.fieldNames,
    fieldIcons: _field_type__WEBPACK_IMPORTED_MODULE_1__["default"].computed.fieldIcons
  },
  methods: {
    removeSubmitter(submitter) {
      [...this.fields].forEach(field => {
        if (field.submitter_uuid === submitter.uuid) {
          this.removeField(field);
        }
      });
      this.submitters.splice(this.submitters.indexOf(submitter), 1);
      if (this.selectedSubmitter === submitter) {
        this.$emit('change-submitter', this.submitters[0]);
      }
      this.save();
    },
    removeField(field) {
      this.fields.splice(this.fields.indexOf(field), 1);
      this.save();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/mobile_fields.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/mobile_fields.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconPlus.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconX.js");
/* harmony import */ var _field_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field_type */ "./app/javascript/template_builder/field_type.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MobileFields",
  components: {
    IconPlus: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconX: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  inject: ["withPayment", "backgroundColor", "t"],
  props: {
    modelValue: {
      type: String,
      required: false,
      default: ""
    },
    fields: {
      type: Array,
      required: false,
      default: () => []
    },
    selectedSubmitter: {
      type: Object,
      required: true
    },
    fieldTypes: {
      type: Array,
      required: false,
      default: () => []
    },
    defaultRequiredFields: {
      type: Array,
      required: false,
      default: () => []
    },
    defaultFields: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  emits: ["select"],
  computed: {
    ..._field_type__WEBPACK_IMPORTED_MODULE_0__["default"].computed,
    submitterFields() {
      return this.fields.filter(f => f.submitter_uuid === this.selectedSubmitter.uuid);
    },
    submitterDefaultFields() {
      return this.defaultFields.filter(f => {
        return !f.role || f.role === this.selectedSubmitter.name;
      });
    }
  },
  methods: {
    closeDropdown() {
      document.activeElement.blur();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/page.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/page.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area */ "./app/javascript/template_builder/area.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TemplatePage",
  components: {
    FieldArea: _area__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  inject: ["fieldTypes", "defaultDrawFieldType", "fieldsDragFieldRef"],
  props: {
    image: {
      type: Object,
      required: true
    },
    areas: {
      type: Array,
      required: false,
      default: () => []
    },
    defaultFields: {
      type: Array,
      required: false,
      default: () => []
    },
    drawFieldType: {
      type: String,
      required: false,
      default: ""
    },
    allowDraw: {
      type: Boolean,
      required: false,
      default: true
    },
    selectedSubmitter: {
      type: Object,
      required: true
    },
    defaultSubmitters: {
      type: Array,
      required: false,
      default: () => []
    },
    drawField: {
      type: Object,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    isDrag: {
      type: Boolean,
      required: false,
      default: false
    },
    number: {
      type: Number,
      required: true
    }
  },
  emits: ["draw", "drop-field", "remove-area", "scroll-to"],
  data() {
    return {
      areaRefs: [],
      showMask: false,
      isMove: false,
      resizeDirection: null,
      newArea: null
    };
  },
  computed: {
    defaultFieldType() {
      if (this.drawFieldType) {
        return this.drawFieldType;
      } else if (this.defaultDrawFieldType && this.defaultDrawFieldType !== "text") {
        return this.defaultDrawFieldType;
      } else if (this.fieldTypes.length !== 0 && !this.fieldTypes.includes("text")) {
        return this.fieldTypes[0];
      } else {
        return "text";
      }
    },
    isMobile() {
      return /android|iphone|ipad/i.test(navigator.userAgent);
    },
    resizeDirectionClasses() {
      return {
        nwse: "cursor-nwse-resize",
        ew: "cursor-ew-resize"
      };
    },
    width() {
      return this.image.metadata.width;
    },
    height() {
      return this.image.metadata.height;
    }
  },
  beforeUpdate() {
    this.areaRefs = [];
  },
  methods: {
    onImageLoad(e) {
      e.target.setAttribute("width", e.target.naturalWidth);
      e.target.setAttribute("height", e.target.naturalHeight);
    },
    setAreaRefs(el) {
      if (el) {
        this.areaRefs.push(el);
      }
    },
    onDrop(e) {
      this.$emit("drop-field", {
        x: e.offsetX,
        y: e.offsetY,
        maskW: this.$refs.mask.clientWidth,
        maskH: this.$refs.mask.clientHeight,
        page: this.number
      });
    },
    onStartDraw(e) {
      if (!this.allowDraw) {
        return;
      }
      if (this.isMobile && !this.drawField) {
        return;
      }
      if (!this.editable) {
        return;
      }
      this.showMask = true;
      this.$nextTick(() => {
        this.newArea = {
          initialX: e.offsetX / this.$refs.mask.clientWidth,
          initialY: e.offsetY / this.$refs.mask.clientHeight,
          x: e.offsetX / this.$refs.mask.clientWidth,
          y: e.offsetY / this.$refs.mask.clientHeight,
          w: 0,
          h: 0
        };
      });
    },
    onPointermove(e) {
      if (this.newArea) {
        const dx = e.offsetX / this.$refs.mask.clientWidth - this.newArea.initialX;
        const dy = e.offsetY / this.$refs.mask.clientHeight - this.newArea.initialY;
        if (dx > 0) {
          this.newArea.x = this.newArea.initialX;
        } else {
          this.newArea.x = e.offsetX / this.$refs.mask.clientWidth;
        }
        if (dy > 0) {
          this.newArea.y = this.newArea.initialY;
        } else {
          this.newArea.y = e.offsetY / this.$refs.mask.clientHeight;
        }
        if ((this.drawField?.type || this.drawFieldType) === "cells") {
          this.newArea.cell_w = this.newArea.h * (this.$refs.mask.clientHeight / this.$refs.mask.clientWidth);
        }
        this.newArea.w = Math.abs(dx);
        this.newArea.h = Math.abs(dy);
      }
    },
    onPointerup(e) {
      if (this.newArea) {
        const area = {
          x: this.newArea.x,
          y: this.newArea.y,
          w: this.newArea.w,
          h: this.newArea.h,
          page: this.number
        };
        if ("cell_w" in this.newArea) {
          area.cell_w = this.newArea.cell_w;
        }
        this.$emit("draw", area);
      }
      this.showMask = false;
      this.newArea = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/payment_settings.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/payment_settings.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconSettings.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCircleCheck.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconInnerShadowTop.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconBrandStripe.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const isConnected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PaymentSettings",
  components: {
    IconSettings: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconCircleCheck: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconInnerShadowTop: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    IconBrandStripe: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  inject: ["backgroundColor", "save", "currencies", "t", "isPaymentConnected"],
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    isConnected: () => isConnected.value,
    isOauthSuccess() {
      return document.location.search?.includes("stripe_connect_success");
    },
    redirectUri() {
      return document.location.origin + "/auth/stripe_connect/callback";
    },
    defaultCurrencies() {
      return ["USD", "EUR", "GBP"];
    },
    currenciesList() {
      return this.currencies.length ? this.currencies : this.defaultCurrencies;
    },
    authenticityToken() {
      return document.querySelector('meta[name="csrf-token"]')?.content;
    },
    oauthState() {
      const params = new URLSearchParams("");
      params.set("redir", document.location.href);
      return params.toString();
    },
    defaultCurrency() {
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (userTimezone.startsWith("Europe")) {
        return "EUR";
      } else if (userTimezone.includes("London") || userTimezone.includes("Belfast")) {
        return "GBP";
      } else {
        return "USD";
      }
    }
  },
  created() {
    this.field.preferences ||= {};
  },
  mounted() {
    this.field.preferences.currency ||= this.defaultCurrency;
    isConnected.value ||= this.isPaymentConnected;
    if (!this.isConnected) {
      this.checkStatus();
    }
  },
  methods: {
    checkStatus() {
      this.isLoading = true;
      fetch("/api/stripe_connect").then(async resp => {
        const {
          status
        } = await resp.json();
        if (status === "connected") {
          isConnected.value = true;
        }
      }).finally(() => {
        this.isLoading = false;
      });
    },
    closeDropdown() {
      document.activeElement.blur();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/preview.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/preview.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contenteditable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contenteditable */ "./app/javascript/template_builder/contenteditable.vue");
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload */ "./app/javascript/template_builder/upload.vue");
/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./replace */ "./app/javascript/template_builder/replace.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DocumentPreview',
  components: {
    Contenteditable: _contenteditable__WEBPACK_IMPORTED_MODULE_0__["default"],
    ReplaceButton: _replace__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    template: {
      type: Object,
      required: true
    },
    document: {
      type: Object,
      required: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    acceptFileTypes: {
      type: String,
      required: false,
      default: 'image/*, application/pdf'
    },
    withReplaceButton: {
      type: Boolean,
      required: true,
      default: true
    },
    withArrows: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ['scroll-to', 'change', 'remove', 'up', 'down', 'replace'],
  computed: {
    previewImage() {
      return [...this.document.preview_images].sort((a, b) => parseInt(a.filename) - parseInt(b.filename))[0];
    }
  },
  methods: {
    upload: _upload__WEBPACK_IMPORTED_MODULE_1__["default"].methods.upload,
    onUpdateName(value) {
      this.item.name = value;
      this.$emit('change');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/replace.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/replace.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload */ "./app/javascript/template_builder/upload.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ReplaceDocument',
  inject: ['baseFetch', 't'],
  props: {
    templateId: {
      type: [Number, String],
      required: true
    },
    acceptFileTypes: {
      type: String,
      required: false,
      default: 'image/*, application/pdf'
    }
  },
  emits: ['success'],
  data() {
    return {
      isLoading: false,
      isProcessing: false
    };
  },
  computed: {
    inputId() {
      return 'el' + Math.random().toString(32).split('.')[1];
    },
    message() {
      if (this.isLoading) {
        return this.t('uploading_');
      } else if (this.isProcessing) {
        return this.t('processing_');
      } else {
        return this.t('replace');
      }
    }
  },
  methods: {
    upload: _upload__WEBPACK_IMPORTED_MODULE_0__["default"].methods.upload
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/upload.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/upload.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconUpload.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconInnerShadowTop.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DocumentsUpload',
  components: {
    IconUpload: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    IconInnerShadowTop: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['baseFetch', 't'],
  props: {
    templateId: {
      type: [Number, String],
      required: true
    },
    acceptFileTypes: {
      type: String,
      required: false,
      default: 'image/*, application/pdf'
    }
  },
  emits: ['success'],
  data() {
    return {
      isLoading: false,
      isProcessing: false
    };
  },
  computed: {
    inputId() {
      return 'el' + Math.random().toString(32).split('.')[1];
    }
  },
  methods: {
    async upload() {
      this.isLoading = true;
      this.baseFetch(`/templates/${this.templateId}/documents`, {
        method: 'POST',
        body: new FormData(this.$refs.form)
      }).then(resp => {
        if (resp.ok) {
          resp.json().then(data => {
            this.$emit('success', data);
            this.$refs.input.value = '';
          });
        } else if (resp.status === 422) {
          resp.json().then(data => {
            if (data.error === 'PDF encrypted') {
              const formData = new FormData(this.$refs.form);
              formData.append('password', prompt('Enter PDF password'));
              this.baseFetch(`/templates/${this.templateId}/documents`, {
                method: 'POST',
                body: formData
              }).then(async resp => {
                if (resp.ok) {
                  this.$emit('success', await resp.json());
                  this.$refs.input.value = '';
                } else {
                  alert('Wrong password');
                }
              });
            }
          });
        }
      }).finally(() => {
        this.isLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/area.vue?vue&type=template&id=e12e7680":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/area.vue?vue&type=template&id=e12e7680 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  key: 1,
  class: "top-0 bottom-0 right-0 left-0 absolute"
};
const _hoisted_2 = ["contenteditable"];
const _hoisted_3 = {
  key: 1,
  class: "flex items-center ml-1.5"
};
const _hoisted_4 = ["id"];
const _hoisted_5 = ["for"];
const _hoisted_6 = ["title"];
const _hoisted_7 = ["title"];
const _hoisted_8 = {
  key: 1,
  class: "whitespace-pre-wrap"
};
const _hoisted_9 = {
  key: 2,
  class: "whitespace-pre-wrap"
};
const _hoisted_10 = {
  ref: "touchTarget",
  class: "absolute top-0 bottom-0 right-0 left-0 cursor-pointer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FieldSubmitter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FieldSubmitter");
  const _component_FieldType = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FieldType");
  const _component_IconDotsVertical = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconDotsVertical");
  const _component_FieldSettings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FieldSettings");
  const _component_IconX = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconX");
  const _component_IconCheck = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconCheck");
  const _component_FormulaModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormulaModal");
  const _component_ConditionsModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ConditionsModal");
  const _component_DescriptionModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DescriptionModal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: "absolute overflow-visible group",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.positionStyle),
    onPointerdown: _cache[32] || (_cache[32] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"])),
    onMousedown: _cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.startDrag && $options.startDrag(...args), ["stop"])),
    onTouchstart: _cache[34] || (_cache[34] = (...args) => $options.startTouchDrag && $options.startTouchDrag(...args))
  }, [$options.isSelected || $props.isDraw ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["top-0 bottom-0 right-0 left-0 absolute border border-1.5 pointer-events-none", $options.borderColors[$options.submitterIndex]])
  }, null, 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.type === 'cells' && ($options.isSelected || $props.isDraw) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.cells, (cellW, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["absolute top-0 bottom-0 border-r", $options.borderColors[$options.submitterIndex]]),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        left: cellW / $props.area.w * 100 + '%'
      })
    }, [index === 0 && $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 0,
      class: "h-2.5 w-2.5 rounded-full -bottom-1 border-gray-400 bg-white shadow-md border absolute cursor-ew-resize z-10",
      style: {
        "left": "-4px"
      },
      onMousedown: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.startResizeCell && $options.startResizeCell(...args), ["stop"]))
    }, null, 32 /* NEED_HYDRATION */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 6 /* CLASS, STYLE */);
  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field?.type ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 2,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["absolute bg-white rounded-t border overflow-visible whitespace-nowrap group-hover:flex group-hover:z-10", {
      'flex z-10': $data.isNameFocus || $options.isSelected,
      invisible: !$data.isNameFocus && !$options.isSelected
    }]),
    style: {
      "top": "-25px",
      "height": "25px"
    },
    onMousedown: _cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"])),
    onPointerdown: _cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FieldSubmitter, {
    modelValue: $props.field.submitter_uuid,
    "onUpdate:modelValue": [_cache[1] || (_cache[1] = $event => $props.field.submitter_uuid = $event), $options.save],
    class: "border-r",
    compact: true,
    editable: $props.editable && (!$props.defaultField || $props.defaultField.role !== $options.submitter?.name),
    "allow-add-new": !$props.defaultSubmitters.length,
    "menu-classes": 'dropdown-content bg-white menu menu-xs p-2 shadow rounded-box w-52 rounded-t-none -left-[1px] mt-[1px]',
    submitters: $options.template.submitters,
    onClick: _cache[2] || (_cache[2] = $event => $options.selectedAreaRef.value = $props.area)
  }, null, 8 /* PROPS */, ["modelValue", "editable", "allow-add-new", "submitters", "onUpdate:modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FieldType, {
    modelValue: $props.field.type,
    "onUpdate:modelValue": [_cache[3] || (_cache[3] = $event => $props.field.type = $event), _cache[4] || (_cache[4] = $event => [$options.maybeUpdateOptions(), $options.save()])],
    "button-width": 27,
    editable: $props.editable && !$props.defaultField,
    "button-classes": 'px-1',
    "menu-classes": 'bg-white rounded-t-none',
    onClick: _cache[5] || (_cache[5] = $event => $options.selectedAreaRef.value = $props.area)
  }, null, 8 /* PROPS */, ["modelValue", "editable"]), $props.field.type !== 'checkbox' || $props.field.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    ref: "name",
    contenteditable: $props.editable && !$props.defaultField,
    dir: "auto",
    class: "pr-1 cursor-text outline-none block",
    style: {
      "min-width": "2px"
    },
    onKeydown: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.onNameEnter && $options.onNameEnter(...args), ["prevent"]), ["enter"])),
    onFocus: _cache[7] || (_cache[7] = (...args) => $options.onNameFocus && $options.onNameFocus(...args)),
    onBlur: _cache[8] || (_cache[8] = (...args) => $options.onNameBlur && $options.onNameBlur(...args))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.optionIndexText) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(($props.defaultField ? $props.field.title || $props.field.name : $props.field.name) || $options.defaultName), 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isSettingsFocus || $data.isNameFocus && $props.field.type !== 'checkbox' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: `required-checkbox-${$props.field.uuid}`,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => $props.field.required = $event),
    type: "checkbox",
    class: "checkbox checkbox-xs no-animation rounded",
    onMousedown: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"]))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_4), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $props.field.required]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    for: `required-checkbox-${$props.field.uuid}`,
    class: "label text-xs",
    onClick: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $props.field.required = !$props.field.required, ["prevent"])),
    onMousedown: _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"]))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("required")), 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_5), $props.field.type !== 'payment' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    class: "dropdown dropdown-end",
    onMouseenter: _cache[22] || (_cache[22] = $event => $data.renderDropdown = true),
    onTouchstart: _cache[23] || (_cache[23] = $event => $data.renderDropdown = true)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    ref: "settingsButton",
    tabindex: "0",
    title: $options.t('settings'),
    class: "cursor-pointer flex items-center",
    style: {
      "height": "25px"
    },
    onFocus: _cache[13] || (_cache[13] = $event => $data.isSettingsFocus = true),
    onBlur: _cache[14] || (_cache[14] = (...args) => $options.maybeBlurSettings && $options.maybeBlurSettings(...args))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconDotsVertical, {
    class: "w-5 h-5"
  })], 40 /* PROPS, NEED_HYDRATION */, _hoisted_6), $data.renderDropdown ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", {
    key: 0,
    ref: "settingsDropdown",
    tabindex: "0",
    class: "dropdown-content menu menu-xs px-2 pb-2 pt-1 shadow rounded-box w-52 z-10 rounded-t-none",
    style: {
      backgroundColor: 'white'
    },
    onDragstart: _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent", "stop"])),
    onClick: _cache[20] || (_cache[20] = (...args) => $options.closeDropdown && $options.closeDropdown(...args)),
    onFocusout: _cache[21] || (_cache[21] = (...args) => $options.maybeBlurSettings && $options.maybeBlurSettings(...args))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FieldSettings, {
    field: $props.field,
    "default-field": $props.defaultField,
    editable: $props.editable,
    "background-color": 'white',
    "with-required": false,
    "with-areas": false,
    onClickFormula: _cache[15] || (_cache[15] = $event => $data.isShowFormulaModal = true),
    onClickDescription: _cache[16] || (_cache[16] = $event => $data.isShowDescriptionModal = true),
    onClickCondition: _cache[17] || (_cache[17] = $event => $data.isShowConditionsModal = true),
    onScrollTo: _cache[18] || (_cache[18] = $event => [$options.selectedAreaRef.value = $event, _ctx.$emit('scroll-to', $event)])
  }, null, 8 /* PROPS */, ["field", "default-field", "editable"])], 544 /* NEED_HYDRATION, NEED_PATCH */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32 /* NEED_HYDRATION */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    class: "pr-1",
    title: $options.t('remove'),
    onClick: _cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('remove'), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconX, {
    width: "14"
  })], 8 /* PROPS */, _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 34 /* CLASS, NEED_HYDRATION */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex items-center h-full w-full", [$options.bgColors[$options.submitterIndex], $props.field?.default_value ? $options.alignClasses[$props.field.preferences?.align] || '' : 'justify-center']]),
    dir: "auto"
  }, [$props.field ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex justify-center items-center space-x-1 h-full", {
      'w-full h-full': $props.field.type == 'checkbox'
    }])
  }, [$props.field?.default_value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'w-full h-full': $props.field.type == 'checkbox',
      'text-[1.5vw] lg:text-base': !$data.textOverflowChars,
      'text-[1.0vw] lg:text-xs': $data.textOverflowChars
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    ref: "textContainer",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex items-center px-0.5", {
      'w-full h-full': $props.field.type == 'checkbox'
    }])
  }, [$props.field.type == 'checkbox' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconCheck, {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["aspect-square mx-auto", {
      '!w-auto !h-full': $props.area.w > $props.area.h,
      '!w-full !h-auto': $props.area.w <= $props.area.h
    }])
  }, null, 8 /* PROPS */, ["class"])) : $props.field.type === 'number' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber($props.field.default_value, $props.field.preferences?.format)), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.default_value), 1 /* TEXT */))], 2 /* CLASS */)], 2 /* CLASS */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.fieldIcons[$props.field.type]), {
    key: 1,
    width: "100%",
    height: "100%",
    class: "max-h-10 opacity-50"
  }))], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, null, 512 /* NEED_PATCH */), $props.field?.type && $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 3,
    class: "h-4 w-4 md:h-2.5 md:w-2.5 -right-1 rounded-full -bottom-1 border-gray-400 bg-white shadow-md border absolute cursor-nwse-resize",
    onMousedown: _cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.startResize && $options.startResize(...args), ["stop"])),
    onTouchstart: _cache[28] || (_cache[28] = (...args) => $options.startTouchResize && $options.startTouchResize(...args))
  }, null, 32 /* NEED_HYDRATION */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isShowFormulaModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    key: 4,
    to: $options.modalContainerEl
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormulaModal, {
    field: $props.field,
    editable: $props.editable && !$props.defaultField,
    "build-default-name": $options.buildDefaultName,
    onClose: _cache[29] || (_cache[29] = $event => $data.isShowFormulaModal = false)
  }, null, 8 /* PROPS */, ["field", "editable", "build-default-name"])], 8 /* PROPS */, ["to"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isShowConditionsModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    key: 5,
    to: $options.modalContainerEl
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ConditionsModal, {
    field: $props.field,
    "build-default-name": $options.buildDefaultName,
    onClose: _cache[30] || (_cache[30] = $event => $data.isShowConditionsModal = false)
  }, null, 8 /* PROPS */, ["field", "build-default-name"])], 8 /* PROPS */, ["to"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isShowDescriptionModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    key: 6,
    to: $options.modalContainerEl
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DescriptionModal, {
    field: $props.field,
    editable: $props.editable && !$props.defaultField,
    "build-default-name": $options.buildDefaultName,
    onClose: _cache[31] || (_cache[31] = $event => $data.isShowDescriptionModal = false)
  }, null, 8 /* PROPS */, ["field", "editable", "build-default-name"])], 8 /* PROPS */, ["to"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 36 /* STYLE, NEED_HYDRATION */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/builder.vue?vue&type=template&id=14575a90":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/builder.vue?vue&type=template&id=14575a90 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  style: {
    "max-width": "1600px"
  },
  class: "mx-auto pl-3 md:pl-4 h-full"
};
const _hoisted_2 = {
  class: "flex items-center space-x-3"
};
const _hoisted_3 = {
  key: 0,
  href: "/"
};
const _hoisted_4 = {
  class: "space-x-3 flex items-center flex-shrink-0"
};
const _hoisted_5 = ["href", "target", "data-turbo-frame"];
const _hoisted_6 = {
  class: "hidden md:inline"
};
const _hoisted_7 = ["href"];
const _hoisted_8 = {
  class: "hidden md:inline"
};
const _hoisted_9 = {
  class: "hidden md:inline"
};
const _hoisted_10 = ["href"];
const _hoisted_11 = {
  class: "hidden md:inline"
};
const _hoisted_12 = {
  id: "pages_container",
  class: "w-full overflow-y-hidden md:overflow-y-auto overflow-x-hidden mt-0.5 pt-0.5"
};
const _hoisted_13 = {
  ref: "documents",
  class: "pr-3.5 pl-0.5"
};
const _hoisted_14 = {
  key: 0,
  class: "pb-4"
};
const _hoisted_15 = {
  class: "bg-base-200 rounded-lg p-5 text-center space-y-4"
};
const _hoisted_16 = {
  class: "sticky bottom-0"
};
const _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "uvtsign_modal_container"
}, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Logo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Logo");
  const _component_Contenteditable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Contenteditable");
  const _component_IconWritingSign = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconWritingSign");
  const _component_IconUsersPlus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconUsersPlus");
  const _component_IconInnerShadowTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconInnerShadowTop");
  const _component_IconDeviceFloppy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconDeviceFloppy");
  const _component_DocumentPreview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DocumentPreview");
  const _component_Upload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Upload");
  const _component_Dropzone = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dropzone");
  const _component_Document = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Document");
  const _component_DocumentControls = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DocumentControls");
  const _component_Fields = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Fields");
  const _component_MobileDrawField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MobileDrawField");
  const _component_MobileFields = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MobileFields");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_ctx.$slots.buttons || $props.withTitle ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    id: "title_container",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex justify-between py-1.5 items-center pr-4 top-0 z-10", {
      sticky: $props.withStickySubmitters || $data.isBreakpointLg
    }]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      backgroundColor: $props.backgroundColor
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [$props.withLogo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Logo)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.withTitle ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Contenteditable, {
    key: 1,
    "model-value": $props.template.name,
    editable: $props.editable,
    class: "text-xl md:text-3xl font-semibold focus:text-clip",
    "icon-stroke-width": 2.3,
    "onUpdate:modelValue": $options.updateName
  }, null, 8 /* PROPS */, ["model-value", "editable", "onUpdate:modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_ctx.$slots.buttons ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "buttons", {
    key: 0
  }) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $props.template.submitters.length > 1 ? `/templates/${$props.template.id}/submissions/new?selfsign=true` : `/d/${$props.template.slug}`,
    class: "btn btn-primary btn-ghost text-base hidden md:flex",
    target: $props.template.submitters.length > 1 ? '' : '_blank',
    "data-turbo-frame": $props.template.submitters.length > 1 ? 'modal' : '',
    onClick: _cache[0] || (_cache[0] = (...args) => $options.maybeShowErrorTemplateAlert && $options.maybeShowErrorTemplateAlert(...args))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconWritingSign, {
    width: "22",
    class: "inline"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("sign_yourself")), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: `/templates/${$props.template.id}/submissions/new?with_link=true`,
    "data-turbo-frame": "modal",
    class: "white-button md:!px-6",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.maybeShowErrorTemplateAlert && $options.maybeShowErrorTemplateAlert(...args))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconUsersPlus, {
    width: "20",
    class: "inline"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("send")), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_7), $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    key: 0,
    class: ["base-button", {
      disabled: $data.isSaving
    }]
  }, $data.isSaving ? {
    disabled: true
  } : {}, {
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.onSaveClick && $options.onSaveClick(...args), ["prevent"]))
  }), [$data.isSaving ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconInnerShadowTop, {
    key: 0,
    width: "22",
    class: "animate-spin"
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconDeviceFloppy, {
    key: 1,
    width: "22"
  })), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("save")), 1 /* TEXT */)], 16 /* FULL_PROPS */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 1,
    href: `/templates/${$props.template.id}`,
    class: "base-button"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("back")), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_10))], 64 /* STABLE_FRAGMENT */))])], 6 /* CLASS, STYLE */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "main_container",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex", _ctx.$slots.buttons || $props.withTitle ? 'md:max-h-[calc(100%_-_60px)]' : 'md:max-h-[100%]'])
  }, [$props.withDocumentsList ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    id: "documents_container",
    ref: "previews",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      display: $data.isBreakpointLg ? 'none' : 'initial'
    }),
    class: "overflow-y-auto overflow-x-hidden w-52 flex-none pr-3 mt-0.5 pt-0.5 hidden lg:block"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.template.schema, (item, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DocumentPreview, {
      key: index,
      "with-arrows": $props.template.schema.length > 1,
      item: item,
      document: $options.sortedDocuments[index],
      "accept-file-types": $props.acceptFileTypes,
      "with-replace-button": $props.withUploadButton,
      editable: $props.editable,
      template: $props.template,
      onScrollTo: $event => $options.scrollIntoDocument(item),
      onRemove: $options.onDocumentRemove,
      onReplace: $options.onDocumentReplace,
      onUp: $event => $options.moveDocument(item, -1),
      onDown: $event => $options.moveDocument(item, 1),
      onChange: $options.save
    }, null, 8 /* PROPS */, ["with-arrows", "item", "document", "accept-file-types", "with-replace-button", "editable", "template", "onScrollTo", "onRemove", "onReplace", "onUp", "onDown", "onChange"]);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "sticky bottom-0 py-2",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      backgroundColor: $props.backgroundColor
    })
  }, [$options.sortedDocuments.length && $props.editable && $props.withUploadButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Upload, {
    key: 0,
    "accept-file-types": $props.acceptFileTypes,
    "template-id": $props.template.id,
    onSuccess: $options.updateFromUpload
  }, null, 8 /* PROPS */, ["accept-file-types", "template-id", "onSuccess"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 4 /* STYLE */)], 4 /* STYLE */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [!$options.sortedDocuments.length && $props.withUploadButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Dropzone, {
    key: 0,
    "template-id": $props.template.id,
    "accept-file-types": $props.acceptFileTypes,
    onSuccess: $options.updateFromUpload
  }, null, 8 /* PROPS */, ["template-id", "accept-file-types", "onSuccess"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.sortedDocuments, document => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: document.uuid
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Document, {
      ref_for: true,
      ref: $options.setDocumentRefs,
      "areas-index": $options.fieldAreasIndex[document.uuid],
      "selected-submitter": $data.selectedSubmitter,
      document: document,
      "is-drag": !!$data.dragField,
      "default-fields": [...$props.defaultRequiredFields, ...$props.defaultFields],
      "allow-draw": !$props.onlyDefinedFields,
      "default-submitters": $props.defaultSubmitters,
      "draw-field": $data.drawField,
      "draw-field-type": $data.drawFieldType,
      editable: $props.editable,
      "base-url": $props.baseUrl,
      onDraw: _cache[3] || (_cache[3] = $event => [$options.onDraw($event), $props.withSelectedFieldType ? '' : $data.drawFieldType = '', $data.showDrawField = false]),
      onDropField: $options.onDropfield,
      onRemoveArea: $options.removeArea
    }, null, 8 /* PROPS */, ["areas-index", "selected-submitter", "document", "is-drag", "default-fields", "allow-draw", "default-submitters", "draw-field", "draw-field-type", "editable", "base-url", "onDropField", "onRemoveArea"]), $data.isBreakpointLg && $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DocumentControls, {
      key: 0,
      "with-arrows": $props.template.schema.length > 1,
      item: $props.template.schema.find(item => item.attachment_uuid === document.uuid),
      "with-replace-button": $props.withUploadButton,
      "accept-file-types": $props.acceptFileTypes,
      document: document,
      template: $props.template,
      class: "pb-2 mb-2 border-b border-base-300 border-dashed",
      onRemove: $options.onDocumentRemove,
      onReplace: $options.onDocumentReplace,
      onUp: $event => $options.moveDocument($props.template.schema.find(item => item.attachment_uuid === document.uuid), -1),
      onDown: $event => $options.moveDocument($props.template.schema.find(item => item.attachment_uuid === document.uuid), 1),
      onChange: $options.save
    }, null, 8 /* PROPS */, ["with-arrows", "item", "with-replace-button", "accept-file-types", "document", "template", "onRemove", "onReplace", "onUp", "onDown", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */)), $options.sortedDocuments.length && $data.isBreakpointLg && $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [$props.withUploadButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Upload, {
    key: 0,
    "template-id": $props.template.id,
    "accept-file-types": $props.acceptFileTypes,
    onSuccess: $options.updateFromUpload
  }, null, 8 /* PROPS */, ["template-id", "accept-file-types", "onSuccess"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */))], 512 /* NEED_PATCH */)]), $props.withFieldsList ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    id: "fields_list_container",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["relative w-80 flex-none mt-1 pr-4 pl-0.5 hidden md:block", $data.drawField ? 'overflow-hidden' : 'overflow-y-auto overflow-x-hidden'])
  }, [$data.showDrawField || $data.drawField ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: "sticky inset-0 h-full z-20",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      backgroundColor: $props.backgroundColor
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("draw_field_on_the_document").replace("{field}", $data.drawField?.name || "")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "base-button",
    onClick: _cache[4] || (_cache[4] = (...args) => $options.clearDrawField && $options.clearDrawField(...args))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("cancel")), 1 /* TEXT */), !$data.drawField && !$data.drawOption && !['stamp', 'signature', 'initials'].includes($data.drawField?.type || $data.drawFieldType) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 0,
    href: "#",
    class: "link block mt-3 text-sm",
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => [$options.addField($data.drawFieldType), $data.drawField = null, $data.drawOption = null, $props.withSelectedFieldType ? '' : $data.drawFieldType = '', $data.showDrawField = false], ["prevent"]))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("or_add_field_without_drawing")), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])], 4 /* STYLE */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fields, {
    ref: "fields",
    fields: $props.template.fields,
    submitters: $props.template.submitters,
    "selected-submitter": $data.selectedSubmitter,
    "with-help": $props.withHelp,
    "default-submitters": $props.defaultSubmitters,
    "draw-field-type": $data.drawFieldType,
    "default-fields": [...$props.defaultRequiredFields, ...$props.defaultFields],
    "default-required-fields": $props.defaultRequiredFields,
    "field-types": $props.fieldTypes,
    "with-sticky-submitters": $props.withStickySubmitters,
    "only-defined-fields": $props.onlyDefinedFields,
    editable: $props.editable,
    onAddField: $options.addField,
    onSetDraw: _cache[6] || (_cache[6] = $event => [$data.drawField = $event.field, $data.drawOption = $event.option]),
    onSetDrawType: _cache[7] || (_cache[7] = $event => [$data.drawFieldType = $event, $data.showDrawField = true]),
    onSetDrag: _cache[8] || (_cache[8] = $event => $data.dragField = $event),
    onChangeSubmitter: _cache[9] || (_cache[9] = $event => $data.selectedSubmitter = $event),
    onDragEnd: _cache[10] || (_cache[10] = $event => $data.dragField = null),
    onScrollToArea: $options.scrollToArea
  }, null, 8 /* PROPS */, ["fields", "submitters", "selected-submitter", "with-help", "default-submitters", "draw-field-type", "default-fields", "default-required-fields", "field-types", "with-sticky-submitters", "only-defined-fields", "editable", "onAddField", "onScrollToArea"])])], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [$data.drawField && $data.isBreakpointLg ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MobileDrawField, {
    key: 0,
    "draw-field": $data.drawField,
    fields: $props.template.fields,
    submitters: $props.template.submitters,
    "selected-submitter": $data.selectedSubmitter,
    class: "md:hidden",
    editable: $props.editable,
    onCancel: _cache[11] || (_cache[11] = $event => [$data.drawField = null, $data.drawOption = null]),
    onChangeSubmitter: _cache[12] || (_cache[12] = $event => [$data.selectedSubmitter = $event, $data.drawField.submitter_uuid = $event.uuid])
  }, null, 8 /* PROPS */, ["draw-field", "fields", "submitters", "selected-submitter", "editable"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.sortedDocuments.length && !$data.drawField && $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MobileFields, {
    key: 1,
    fields: $props.template.fields,
    "default-fields": [...$props.defaultRequiredFields, ...$props.defaultFields],
    "default-required-fields": $props.defaultRequiredFields,
    "field-types": $props.fieldTypes,
    "selected-submitter": $data.selectedSubmitter,
    onSelect: _cache[13] || (_cache[13] = $event => $options.startFieldDraw($event))
  }, null, 8 /* PROPS */, ["fields", "default-fields", "default-required-fields", "field-types", "selected-submitter"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_17]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/conditions_modal.vue?vue&type=template&id=f57e8cce":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/conditions_modal.vue?vue&type=template&id=f57e8cce ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "modal modal-open items-start !animate-none overflow-y-auto"
};
const _hoisted_2 = {
  class: "modal-box pt-4 pb-6 px-6 mt-20 max-h-none w-full max-w-xl"
};
const _hoisted_3 = {
  class: "flex justify-between items-center border-b pb-2 mb-2 font-medium"
};
const _hoisted_4 = {
  class: "my-4 space-y-5"
};
const _hoisted_5 = {
  key: 0,
  class: "flex justify-between border-b mx-1 -mb-1 pb-1"
};
const _hoisted_6 = {
  class: "text-sm"
};
const _hoisted_7 = ["onClick"];
const _hoisted_8 = ["onChange"];
const _hoisted_9 = ["selected"];
const _hoisted_10 = ["value", "selected"];
const _hoisted_11 = ["onUpdate:modelValue", "required"];
const _hoisted_12 = ["value"];
const _hoisted_13 = ["onChange"];
const _hoisted_14 = {
  value: "",
  disabled: "",
  selected: ""
};
const _hoisted_15 = ["value", "selected"];
const _hoisted_16 = {
  class: "base-button w-full mt-2"
};
const _hoisted_17 = {
  key: 0,
  class: "text-center w-full mt-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "absolute top-0 bottom-0 right-0 left-0",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('close'), ["prevent"]))
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("condition")) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.name || $props.buildDefaultName($props.field, $options.template.fields)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: "text-xl",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('close'), ["prevent"]))
  }, "×")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.validateSaveAndClose && $options.validateSaveAndClose(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.conditions, (condition, cindex) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: cindex,
      class: "space-y-4 relative"
    }, [$data.conditions.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("condition")) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(cindex + 1), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      class: "link text-sm",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $data.conditions.splice(cindex, 1), ["prevent"])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("remove")), 9 /* TEXT, PROPS */, _hoisted_7)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      class: "select select-bordered select-sm w-full bg-white h-11 pl-4 text-base font-normal",
      required: "",
      onChange: $event => [condition.field_uuid = $event.target.value, delete condition.value, $options.conditionActions(condition).includes(condition.action) ? '' : condition.action = $options.conditionActions(condition)[0]]
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
      value: "",
      disabled: "",
      selected: !condition.field_uuid
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("select_field_")), 9 /* TEXT, PROPS */, _hoisted_9), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.fields, f => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
        key: f.uuid,
        value: f.uuid,
        selected: condition.field_uuid === f.uuid
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(f.name || $props.buildDefaultName(f, $options.template.fields)), 9 /* TEXT, PROPS */, _hoisted_10);
    }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": $event => condition.action = $event,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["select select-bordered select-sm w-full h-11 pl-4 text-base font-normal", {
        'bg-white': condition.field_uuid,
        'bg-base-300': !condition.field_uuid
      }]),
      required: condition.field_uuid
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.conditionActions(condition), action => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
        key: action,
        value: action
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t(action)), 9 /* TEXT, PROPS */, _hoisted_12);
    }), 128 /* KEYED_FRAGMENT */))], 10 /* CLASS, PROPS */, _hoisted_11), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, condition.action]]), $options.conditionField(condition)?.options?.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
      key: 1,
      class: "select select-bordered select-sm w-full bg-white h-11 pl-4 text-base font-normal",
      required: "",
      onChange: $event => condition.value = $event.target.value
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("select_value_")), 1 /* TEXT */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.conditionField(condition).options, (option, index) => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
        key: option.uuid,
        value: option.uuid,
        selected: condition.value === option.uuid
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.value || `${$options.t("option")} ${index + 1}`), 9 /* TEXT, PROPS */, _hoisted_15);
    }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: "inline float-right link text-right mb-3 px-2",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $data.conditions.push({}), ["prevent"]))
  }, " + " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("add_condition")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("save")), 1 /* TEXT */)], 32 /* NEED_HYDRATION */), $props.field.conditions?.[0]?.field_uuid ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "link",
    onClick: _cache[4] || (_cache[4] = $event => [$data.conditions = [], delete $props.field.conditions, $options.validateSaveAndClose()])
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("remove_condition")), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/contenteditable.vue?vue&type=template&id=1e6c36fa":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/contenteditable.vue?vue&type=template&id=1e6c36fa ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["contenteditable"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconPencil = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconPencil");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["group/contenteditable relative overflow-visible", {
      'flex items-center': !$props.iconInline
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    ref: "contenteditable",
    dir: "auto",
    contenteditable: $props.editable,
    style: {
      "min-width": "2px"
    },
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$props.iconInline ? 'inline' : 'block', "peer outline-none focus:block"]),
    onKeydown: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.blurContenteditable && $options.blurContenteditable(...args), ["prevent"]), ["enter"])),
    onFocus: _cache[1] || (_cache[1] = $event => _ctx.$emit('focus', $event)),
    onBlur: _cache[2] || (_cache[2] = (...args) => $options.onBlur && $options.onBlur(...args))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.value), 43 /* TEXT, CLASS, PROPS, NEED_HYDRATION */, _hoisted_1), $props.withRequired ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    title: "Required",
    class: "text-red-500 peer-focus:hidden",
    onClick: _cache[3] || (_cache[3] = (...args) => $options.focusContenteditable && $options.focusContenteditable(...args))
  }, " * ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconPencil, {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cursor-pointer flex-none opacity-0 group-hover/contenteditable-container:opacity-100 group-hover/contenteditable:opacity-100 align-middle peer-focus:hidden", {
      invisible: !$props.editable,
      'ml-1': !$props.withRequired,
      'absolute': !$props.iconInline,
      'inline align-bottom': $props.iconInline
    }]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($props.iconInline ? {} : {
      right: -(1.1 * $props.iconWidth) + 'px'
    }),
    title: $options.t('edit'),
    width: $props.iconWidth,
    "stroke-width": $props.iconStrokeWidth,
    onClick: _cache[4] || (_cache[4] = $event => [$options.focusContenteditable(), $props.selectOnEditClick && $options.selectContent()])
  }, null, 8 /* PROPS */, ["style", "title", "class", "width", "stroke-width"])], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/controls.vue?vue&type=template&id=6f5b78e9":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/controls.vue?vue&type=template&id=6f5b78e9 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "flex space-x-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Contenteditable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Contenteditable");
  const _component_ReplaceButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ReplaceButton");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Contenteditable, {
    class: "w-full block mr-6",
    "model-value": $props.item.name,
    "icon-width": 16,
    "onUpdate:modelValue": $options.onUpdateName
  }, null, 8 /* PROPS */, ["model-value", "onUpdate:modelValue"]), $props.withReplaceButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ReplaceButton, {
    key: 0,
    "template-id": $props.template.id,
    "accept-file-types": $props.acceptFileTypes,
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"])),
    onSuccess: _cache[1] || (_cache[1] = $event => _ctx.$emit('replace', {
      replaceSchemaItem: $props.item,
      ...$event
    }))
  }, null, 8 /* PROPS */, ["template-id", "accept-file-types"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.withArrows ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    class: "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
    style: {
      "width": "24px",
      "height": "24px"
    },
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('up', $props.item), ["stop"]))
  }, " ↑ ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.withArrows ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    class: "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
    style: {
      "width": "24px",
      "height": "24px"
    },
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('down', $props.item), ["stop"]))
  }, " ↓ ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
    style: {
      "width": "24px",
      "height": "24px"
    },
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('remove', $props.item), ["stop"]))
  }, " × ")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/description_modal.vue?vue&type=template&id=4d6193f2":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/description_modal.vue?vue&type=template&id=4d6193f2 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "modal modal-open items-start !animate-none overflow-y-auto"
};
const _hoisted_2 = {
  class: "modal-box pt-4 pb-6 px-6 mt-20 max-h-none w-full max-w-xl"
};
const _hoisted_3 = {
  class: "flex justify-between items-center border-b pb-2 mb-2 font-medium"
};
const _hoisted_4 = {
  class: "space-y-1 mb-1"
};
const _hoisted_5 = {
  dir: "auto",
  class: "label text-sm",
  for: "description_field"
};
const _hoisted_6 = ["readonly"];
const _hoisted_7 = {
  dir: "auto",
  class: "label text-sm",
  for: "title_field"
};
const _hoisted_8 = ["readonly"];
const _hoisted_9 = {
  class: "base-button w-full mt-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "absolute top-0 bottom-0 right-0 left-0",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('close'), ["prevent"]))
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.name || $props.buildDefaultName($props.field, $options.template.fields)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: "text-xl",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('close'), ["prevent"]))
  }, "×")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.saveAndClose && $options.saveAndClose(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('description')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    id: "description_field",
    ref: "textarea",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.description = $event),
    dir: "auto",
    class: "base-textarea !text-base w-full",
    readonly: !$props.editable,
    onInput: _cache[3] || (_cache[3] = (...args) => $options.resizeTextarea && $options.resizeTextarea(...args))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_6), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('display_title')) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('optional')) + ") ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "title_field",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $data.title = $event),
    dir: "auto",
    readonly: !$props.editable,
    class: "base-input !text-base w-full"
  }, null, 8 /* PROPS */, _hoisted_8), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.title]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('save')), 1 /* TEXT */)], 32 /* NEED_HYDRATION */)])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/document.vue?vue&type=template&id=773d48ce":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/document.vue?vue&type=template&id=773d48ce ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Page");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.sortedPreviewImages, (image, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Page, {
      key: image.id,
      ref_for: true,
      ref: $options.setPageRefs,
      number: index,
      editable: $props.editable,
      areas: $props.areasIndex[index],
      "allow-draw": $props.allowDraw,
      "is-drag": $props.isDrag,
      "default-fields": $props.defaultFields,
      "default-submitters": $props.defaultSubmitters,
      "draw-field": $props.drawField,
      "draw-field-type": $props.drawFieldType,
      "selected-submitter": $props.selectedSubmitter,
      image: image,
      onDropField: _cache[0] || (_cache[0] = $event => _ctx.$emit('drop-field', {
        ...$event,
        attachment_uuid: $props.document.uuid
      })),
      onRemoveArea: _cache[1] || (_cache[1] = $event => _ctx.$emit('remove-area', $event)),
      onScrollTo: $options.scrollToArea,
      onDraw: _cache[2] || (_cache[2] = $event => _ctx.$emit('draw', {
        ...$event,
        attachment_uuid: $props.document.uuid
      }))
    }, null, 8 /* PROPS */, ["number", "editable", "areas", "allow-draw", "is-drag", "default-fields", "default-submitters", "draw-field", "draw-field-type", "selected-submitter", "image", "onScrollTo"]);
  }), 128 /* KEYED_FRAGMENT */))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/dropzone.vue?vue&type=template&id=1aa0bace":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/dropzone.vue?vue&type=template&id=1aa0bace ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["for"];
const _hoisted_2 = {
  class: "absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center"
};
const _hoisted_3 = {
  class: "flex flex-col items-center"
};
const _hoisted_4 = {
  key: 2,
  class: "font-medium text-lg mb-1"
};
const _hoisted_5 = {
  class: "text-sm"
};
const _hoisted_6 = {
  class: "font-medium"
};
const _hoisted_7 = {
  ref: "form",
  class: "hidden"
};
const _hoisted_8 = ["id", "accept"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconInnerShadowTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconInnerShadowTop");
  const _component_IconCloudUpload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconCloudUpload");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: "flex h-60 w-full",
    onDragover: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"])),
    onDrop: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.onDropFiles && $options.onDropFiles(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full relative hover:bg-base-200/30 rounded-md border border-2 border-base-content/10 border-dashed", {
      'opacity-50': $data.isLoading || $data.isProcessing
    }]),
    for: $options.inputId
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$data.isLoading || $data.isProcessing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconInnerShadowTop, {
    key: 0,
    class: "animate-spin",
    width: 40,
    height: 40
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconCloudUpload, {
    key: 1,
    width: 40,
    height: 40
  })), $options.message ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.message), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('click_to_upload')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('or_drag_and_drop_files')), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: $options.inputId,
    ref: "input",
    type: "file",
    name: "files[]",
    accept: $props.acceptFileTypes,
    multiple: "",
    onChange: _cache[0] || (_cache[0] = (...args) => $options.upload && $options.upload(...args))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_8)], 512 /* NEED_PATCH */)], 10 /* CLASS, PROPS */, _hoisted_1)], 32 /* NEED_HYDRATION */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field.vue?vue&type=template&id=9c8e0c52":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field.vue?vue&type=template&id=9c8e0c52 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "list-field group mb-2"
};
const _hoisted_2 = {
  class: "flex items-center justify-between relative group/contenteditable-container"
};
const _hoisted_3 = {
  class: "flex items-center p-1 space-x-1"
};
const _hoisted_4 = {
  key: 0,
  class: "flex items-center relative"
};
const _hoisted_5 = ["id"];
const _hoisted_6 = ["for"];
const _hoisted_7 = {
  key: 1,
  class: "flex items-center space-x-1"
};
const _hoisted_8 = ["title"];
const _hoisted_9 = ["title"];
const _hoisted_10 = ["title"];
const _hoisted_11 = ["title"];
const _hoisted_12 = ["title"];
const _hoisted_13 = {
  class: "text-sm w-3.5"
};
const _hoisted_14 = {
  key: 0,
  class: "items-center flex w-full"
};
const _hoisted_15 = ["onUpdate:modelValue", "placeholder"];
const _hoisted_16 = ["title", "onClick"];
const _hoisted_17 = ["onUpdate:modelValue", "placeholder", "readonly", "onFocus"];
const _hoisted_18 = ["onClick"];
const _hoisted_19 = {
  key: 0,
  class: "pb-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FieldType = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FieldType");
  const _component_Contenteditable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Contenteditable");
  const _component_IconNewSection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconNewSection");
  const _component_IconMathFunction = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconMathFunction");
  const _component_IconRouteAltLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconRouteAltLeft");
  const _component_PaymentSettings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PaymentSettings");
  const _component_IconSettings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconSettings");
  const _component_FieldSettings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FieldSettings");
  const _component_IconTrashX = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconTrashX");
  const _component_FormulaModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormulaModal");
  const _component_ConditionsModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ConditionsModal");
  const _component_DescriptionModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DescriptionModal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "border border-base-300 rounded rounded-tr-none relative group",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      backgroundColor: $options.backgroundColor
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "absolute top-0 bottom-0 right-0 left-0 cursor-pointer",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.scrollToFirstArea && $options.scrollToFirstArea(...args))
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FieldType, {
    modelValue: $props.field.type,
    "onUpdate:modelValue": [_cache[1] || (_cache[1] = $event => $props.field.type = $event), _cache[2] || (_cache[2] = $event => [$options.maybeUpdateOptions(), $options.save()])],
    editable: $props.editable && !$props.defaultField,
    "button-width": 20,
    "menu-classes": 'mt-1.5',
    "menu-style": {
      backgroundColor: $options.dropdownBgColor
    },
    onClick: $options.scrollToFirstArea
  }, null, 8 /* PROPS */, ["modelValue", "editable", "menu-style", "onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Contenteditable, {
    ref: "name",
    "model-value": ($props.defaultField ? $props.field.title || $props.field.name : $props.field.name) || $options.defaultName,
    editable: $props.editable && !$props.defaultField,
    "icon-inline": true,
    "icon-width": 18,
    "icon-stroke-width": 1.6,
    onFocus: _cache[3] || (_cache[3] = $event => [$options.onNameFocus(), $options.scrollToFirstArea()]),
    onBlur: $options.onNameBlur
  }, null, 8 /* PROPS */, ["model-value", "editable", "onBlur"])]), $data.isNameFocus ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: `required-checkbox-${$props.field.uuid}`,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $props.field.required = $event),
    type: "checkbox",
    class: "checkbox checkbox-xs no-animation rounded",
    onMousedown: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"]))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_5), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $props.field.required]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    for: `required-checkbox-${$props.field.uuid}`,
    class: "label text-xs",
    onClick: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $props.field.required = !$props.field.required, ["prevent"])),
    onMousedown: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"]))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("required")), 41 /* TEXT, PROPS, NEED_HYDRATION */, _hoisted_6)])) : $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [$props.field && !$props.field.areas?.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    title: $options.t('draw'),
    class: "relative cursor-pointer text-transparent group-hover:text-base-content",
    onClick: _cache[8] || (_cache[8] = $event => _ctx.$emit('set-draw', {
      field: $props.field
    }))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconNewSection, {
    width: 18,
    "stroke-width": 1.6
  })], 8 /* PROPS */, _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.preferences?.formula ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    class: "relative cursor-pointer text-transparent group-hover:text-base-content",
    title: $options.t('formula'),
    onClick: _cache[9] || (_cache[9] = $event => $data.isShowFormulaModal = true)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconMathFunction, {
    width: 18,
    "stroke-width": 1.6
  })], 8 /* PROPS */, _hoisted_9)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.conditions?.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    class: "relative cursor-pointer text-transparent group-hover:text-base-content",
    title: $options.t('condition'),
    onClick: _cache[10] || (_cache[10] = $event => $data.isShowConditionsModal = true)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconRouteAltLeft, {
    width: 18,
    "stroke-width": 1.6
  })], 8 /* PROPS */, _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.type === 'payment' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PaymentSettings, {
    key: 3,
    field: $props.field
  }, null, 8 /* PROPS */, ["field"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 4,
    class: "dropdown dropdown-end",
    onMouseenter: _cache[18] || (_cache[18] = $event => $data.renderDropdown = true),
    onTouchstart: _cache[19] || (_cache[19] = $event => $data.renderDropdown = true)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    tabindex: "0",
    title: $options.t('settings'),
    class: "cursor-pointer text-transparent group-hover:text-base-content"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconSettings, {
    width: 18,
    "stroke-width": 1.6
  })], 8 /* PROPS */, _hoisted_11), $data.renderDropdown ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", {
    key: 0,
    tabindex: "0",
    class: "mt-1.5 dropdown-content menu menu-xs p-2 shadow rounded-box w-52 z-10",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      backgroundColor: $options.dropdownBgColor
    }),
    draggable: "true",
    onDragstart: _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent", "stop"])),
    onClick: _cache[17] || (_cache[17] = (...args) => $options.closeDropdown && $options.closeDropdown(...args))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FieldSettings, {
    field: $props.field,
    "default-field": $props.defaultField,
    editable: $props.editable,
    "background-color": $options.dropdownBgColor,
    onClickFormula: _cache[11] || (_cache[11] = $event => $data.isShowFormulaModal = true),
    onClickDescription: _cache[12] || (_cache[12] = $event => $data.isShowDescriptionModal = true),
    onClickCondition: _cache[13] || (_cache[13] = $event => $data.isShowConditionsModal = true),
    onSetDraw: _cache[14] || (_cache[14] = $event => _ctx.$emit('set-draw', $event)),
    onScrollTo: _cache[15] || (_cache[15] = $event => _ctx.$emit('scroll-to', $event))
  }, null, 8 /* PROPS */, ["field", "default-field", "editable", "background-color"])], 36 /* STYLE, NEED_HYDRATION */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32 /* NEED_HYDRATION */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "relative text-transparent group-hover:text-base-content pr-1",
    title: $options.t('remove'),
    onClick: _cache[20] || (_cache[20] = $event => _ctx.$emit('remove', $props.field))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconTrashX, {
    width: 18,
    "stroke-width": 1.6
  })], 8 /* PROPS */, _hoisted_12)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $props.field.options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    ref: "options",
    class: "border-t border-base-300 mx-2 pt-2 space-y-1.5",
    draggable: "true",
    onDragstart: _cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent", "stop"]))
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.field.options, (option, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: option.uuid,
      class: "flex space-x-1.5 items-center"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1) + ". ", 1 /* TEXT */), $props.editable && ['radio', 'multiple'].includes($props.field.type) && (index > 0 || $props.field.areas.find(a => a.option_uuid) || !$props.field.areas.length) && !$props.field.areas.find(a => a.option_uuid === option.uuid) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": $event => option.value = $event,
      class: "w-full input input-primary input-xs text-sm bg-transparent !pr-7 -mr-6",
      type: "text",
      dir: "auto",
      required: "",
      placeholder: `${$options.t('option')} ${index + 1}`,
      onBlur: _cache[21] || (_cache[21] = (...args) => $options.save && $options.save(...args))
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_15), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, option.value]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      title: $options.t('draw'),
      tabindex: "-1",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('set-draw', {
        field: $props.field,
        option
      }), ["prevent"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconNewSection, {
      width: 18,
      "stroke-width": 1.6
    })], 8 /* PROPS */, _hoisted_16)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
      key: 1,
      "onUpdate:modelValue": $event => option.value = $event,
      class: "w-full input input-primary input-xs text-sm bg-transparent",
      placeholder: `${$options.t('option')} ${index + 1}`,
      type: "text",
      readonly: !$props.editable,
      required: "",
      dir: "auto",
      onFocus: $event => $options.maybeFocusOnOptionArea(option),
      onBlur: _cache[22] || (_cache[22] = (...args) => $options.save && $options.save(...args))
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_17)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, option.value]]), $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 2,
      class: "text-sm w-3.5",
      tabindex: "-1",
      onClick: $event => $options.removeOption(option)
    }, " × ", 8 /* PROPS */, _hoisted_18)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128 /* KEYED_FRAGMENT */)), $props.field.options && !$props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19)) : $props.field.options && $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    class: "text-center text-sm w-full pb-1",
    onClick: _cache[23] || (_cache[23] = (...args) => $options.addOption && $options.addOption(...args))
  }, " + " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("add_option")), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 544 /* NEED_HYDRATION, NEED_PATCH */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 4 /* STYLE */), $data.isShowFormulaModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    key: 0,
    to: $options.modalContainerEl
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormulaModal, {
    field: $props.field,
    editable: $props.editable && !$props.defaultField,
    "build-default-name": $options.buildDefaultName,
    onClose: _cache[25] || (_cache[25] = $event => $data.isShowFormulaModal = false)
  }, null, 8 /* PROPS */, ["field", "editable", "build-default-name"])], 8 /* PROPS */, ["to"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isShowConditionsModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    key: 1,
    to: $options.modalContainerEl
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ConditionsModal, {
    field: $props.field,
    "build-default-name": $options.buildDefaultName,
    onClose: _cache[26] || (_cache[26] = $event => $data.isShowConditionsModal = false)
  }, null, 8 /* PROPS */, ["field", "build-default-name"])], 8 /* PROPS */, ["to"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isShowDescriptionModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    key: 2,
    to: $options.modalContainerEl
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DescriptionModal, {
    field: $props.field,
    editable: $props.editable && !$props.defaultField,
    "build-default-name": $options.buildDefaultName,
    onClose: _cache[27] || (_cache[27] = $event => $data.isShowDescriptionModal = false)
  }, null, 8 /* PROPS */, ["field", "editable", "build-default-name"])], 8 /* PROPS */, ["to"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_settings.vue?vue&type=template&id=23787ebb":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_settings.vue?vue&type=template&id=23787ebb ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["placeholder"];
const _hoisted_2 = ["value", "selected"];
const _hoisted_3 = ["selected", "value"];
const _hoisted_4 = ["placeholder", "type"];
const _hoisted_5 = ["placeholder"];
const _hoisted_6 = ["value"];
const _hoisted_7 = ["placeholder"];
const _hoisted_8 = ["selected"];
const _hoisted_9 = ["selected"];
const _hoisted_10 = ["selected"];
const _hoisted_11 = {
  class: "cursor-pointer py-1.5"
};
const _hoisted_12 = ["disabled"];
const _hoisted_13 = {
  class: "label-text"
};
const _hoisted_14 = {
  class: "cursor-pointer py-1.5"
};
const _hoisted_15 = ["checked"];
const _hoisted_16 = {
  class: "label-text"
};
const _hoisted_17 = {
  class: "cursor-pointer py-1.5"
};
const _hoisted_18 = {
  class: "label-text"
};
const _hoisted_19 = {
  class: "cursor-pointer py-1.5"
};
const _hoisted_20 = {
  class: "label-text"
};
const _hoisted_21 = {
  class: "cursor-pointer py-1.5"
};
const _hoisted_22 = {
  class: "label-text"
};
const _hoisted_23 = {
  key: 10,
  class: "pb-0.5 mt-0.5"
};
const _hoisted_24 = {
  key: 11
};
const _hoisted_25 = {
  class: "text-sm"
};
const _hoisted_26 = {
  key: 12
};
const _hoisted_27 = {
  class: "text-sm"
};
const _hoisted_28 = {
  key: 13
};
const _hoisted_29 = {
  class: "text-sm"
};
const _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  class: "pb-0.5 mt-0.5"
}, null, -1 /* HOISTED */);
const _hoisted_31 = ["onClick"];
const _hoisted_32 = {
  key: 0
};
const _hoisted_33 = {
  key: 15
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconInfoCircle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconInfoCircle");
  const _component_IconRouteAltLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconRouteAltLeft");
  const _component_IconMathFunction = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconMathFunction");
  const _component_IconShape = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconShape");
  const _component_IconNewSection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconNewSection");
  const _component_IconCopy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconCopy");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$props.field.type === 'number' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: "py-1.5 px-1 relative",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    placeholder: $options.t('format'),
    class: "select select-bordered select-xs font-normal w-full max-w-xs !h-7 !outline-0 bg-transparent",
    onChange: _cache[0] || (_cache[0] = $event => [$props.field.preferences ||= {}, $props.field.preferences.format = $event.target.value, $options.save()])
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.numberFormats, format => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: format,
      value: format,
      selected: format === $props.field.preferences?.format || format === 'none' && !$props.field.preferences?.format
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber(123456789.567, format)), 9 /* TEXT, PROPS */, _hoisted_2);
  }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      backgroundColor: $props.backgroundColor
    }, {
      "font-size": "8px"
    }]),
    class: "absolute -top-1 left-2.5 px-1 h-4"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("format")), 5 /* TEXT, STYLE */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ['number'].includes($props.field.type) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    class: "py-1.5 px-1 relative",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    class: "select select-bordered select-xs w-full max-w-xs h-7 !outline-0 font-normal bg-transparent",
    onChange: _cache[2] || (_cache[2] = $event => [$props.field.preferences ||= {}, $props.field.preferences.align = $event.target.value, $options.save()])
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(['left', 'right', 'center'], value => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
      key: value,
      selected: $props.field.preferences?.align ? value === $props.field.preferences.align : value === 'left',
      value: value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t(value)), 9 /* TEXT, PROPS */, _hoisted_3);
  }), 64 /* STABLE_FRAGMENT */))], 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      backgroundColor: $props.backgroundColor
    }, {
      "font-size": "8px"
    }]),
    class: "absolute -top-1 left-2.5 px-1 h-4"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("align")), 5 /* TEXT, STYLE */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ['text', 'number'].includes($props.field.type) && !$props.defaultField ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 2,
    class: "py-1.5 px-1 relative",
    onClick: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $props.field.default_value = $event),
    placeholder: $options.t('default_value'),
    dir: "auto",
    type: $props.field.type,
    class: "input input-bordered input-xs w-full max-w-xs h-7 !outline-0 bg-transparent",
    onBlur: _cache[5] || (_cache[5] = (...args) => $options.save && $options.save(...args))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_4), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $props.field.default_value]]), $props.field.default_value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
    key: 0,
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      backgroundColor: $props.backgroundColor
    }, {
      "font-size": "8px"
    }]),
    class: "absolute -top-1 left-2.5 px-1 h-4"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("default_value")), 5 /* TEXT, STYLE */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.type === 'date' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 3,
    class: "py-1.5 px-1 relative",
    onClick: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $props.field.preferences.format = $event),
    placeholder: $options.t('format'),
    class: "select select-bordered select-xs font-normal w-full max-w-xs !h-7 !outline-0 bg-transparent",
    onChange: _cache[8] || (_cache[8] = (...args) => $options.save && $options.save(...args))
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.dateFormats, format => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: format,
      value: format
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatDate(new Date(), format)), 9 /* TEXT, PROPS */, _hoisted_6);
  }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_5), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $props.field.preferences.format]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      backgroundColor: $props.backgroundColor
    }, {
      "font-size": "8px"
    }]),
    class: "absolute -top-1 left-2.5 px-1 h-4"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("format")), 5 /* TEXT, STYLE */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.type === 'signature' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 4,
    class: "py-1.5 px-1 relative",
    onClick: _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    placeholder: $options.t('format'),
    class: "select select-bordered select-xs font-normal w-full max-w-xs !h-7 !outline-0 bg-transparent",
    onChange: _cache[10] || (_cache[10] = $event => [$props.field.preferences.format = $event.target.value, $options.save()])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "any",
    selected: !$props.field.preferences?.format || $props.field.preferences.format === 'any'
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("any")), 9 /* TEXT, PROPS */, _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "drawn",
    selected: $props.field.preferences?.format === 'drawn'
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("drawn")), 9 /* TEXT, PROPS */, _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "typed",
    selected: $props.field.preferences?.format === 'typed'
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("typed")), 9 /* TEXT, PROPS */, _hoisted_10)], 40 /* PROPS, NEED_HYDRATION */, _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      backgroundColor: $props.backgroundColor
    }, {
      "font-size": "8px"
    }]),
    class: "absolute -top-1 left-2.5 px-1 h-4"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("format")), 5 /* TEXT, STYLE */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.withRequired && $props.field.type != 'stamp' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    key: 5,
    onClick: _cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": [_cache[12] || (_cache[12] = $event => $props.field.required = $event), _cache[13] || (_cache[13] = (...args) => $options.save && $options.save(...args))],
    type: "checkbox",
    disabled: !$props.editable || $props.defaultField,
    class: "toggle toggle-xs"
  }, null, 8 /* PROPS */, _hoisted_12), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $props.field.required]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("required")), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.type == 'stamp' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    key: 6,
    onClick: _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    checked: $props.field.preferences?.with_logo != false,
    type: "checkbox",
    class: "toggle toggle-xs",
    onChange: _cache[15] || (_cache[15] = $event => [$props.field.preferences ||= {}, $props.field.preferences.with_logo = $props.field.preferences.with_logo == false, $options.save()])
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_15), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("with_logo")), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.type == 'checkbox' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    key: 7,
    onClick: _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": [_cache[17] || (_cache[17] = $event => $props.field.default_value = $event), _cache[18] || (_cache[18] = $event => [$props.field.default_value = $event, $props.field.readonly = $event, $options.save()])],
    type: "checkbox",
    class: "toggle toggle-xs"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $props.field.default_value]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("checked")), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.type == 'date' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    key: 8,
    onClick: _cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": [_cache[20] || (_cache[20] = $event => $props.field.readonly = $event), _cache[21] || (_cache[21] = $event => [$props.field.default_value = $event ? '{{date}}' : null, $props.field.readonly = $event, $options.save()])],
    type: "checkbox",
    class: "toggle toggle-xs"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $props.field.readonly]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("set_signing_date")), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ['text', 'number'].includes($props.field.type) && !$props.defaultField ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    key: 9,
    onClick: _cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": [_cache[23] || (_cache[23] = $event => $props.field.readonly = $event), _cache[24] || (_cache[24] = (...args) => $options.save && $options.save(...args))],
    type: "checkbox",
    class: "toggle toggle-xs"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $props.field.readonly]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("read_only")), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.type != 'stamp' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("hr", _hoisted_23)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.type != 'stamp' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    class: "label-text cursor-pointer text-center w-full flex items-center",
    onClick: _cache[26] || (_cache[26] = $event => _ctx.$emit('click-description'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconInfoCircle, {
    width: "18"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("description")), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.type != 'stamp' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    class: "label-text cursor-pointer text-center w-full flex items-center",
    onClick: _cache[27] || (_cache[27] = $event => _ctx.$emit('click-condition'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconRouteAltLeft, {
    width: "18"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("condition")), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.type == 'number' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    class: "label-text cursor-pointer text-center w-full flex items-center",
    onClick: _cache[28] || (_cache[28] = $event => _ctx.$emit('click-formula'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconMathFunction, {
    width: "18"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("formula")), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_30, $props.withAreas ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 14
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.sortedAreas, (area, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      class: "text-sm py-1 px-2",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('scroll-to', area), ["prevent"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconShape, {
      width: 20,
      "stroke-width": 1.6
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("page")) + " ", 1 /* TEXT */), $options.template.schema.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.template.schema.findIndex(item => item.attachment_uuid === area.attachment_uuid) + 1) + "-", 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(area.page + 1), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_31)]);
  }), 128 /* KEYED_FRAGMENT */)), !$props.field.areas?.length || !['radio', 'multiple'].includes($props.field.type) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: "text-sm py-1 px-2",
    onClick: _cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('set-draw', {
      field: $props.field
    }), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconNewSection, {
    width: 20,
    "stroke-width": 1.6
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("draw_new_area")), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.areas?.length === 1 && ['date', 'signature', 'initials', 'text', 'cells'].includes($props.field.type) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: "text-sm py-1 px-2",
    onClick: _cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.copyToAllPages($props.field), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconCopy, {
    width: 20,
    "stroke-width": 1.6
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("copy_to_all_pages")), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_submitter.vue?vue&type=template&id=a96674be":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_submitter.vue?vue&type=template&id=a96674be ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "flex space-x-2 items-end"
};
const _hoisted_2 = {
  class: "group/contenteditable-container bg-base-100 rounded-md p-2 border border-base-300 w-full flex justify-between items-end"
};
const _hoisted_3 = {
  class: "flex items-center space-x-2"
};
const _hoisted_4 = {
  class: "dropdown dropdown-top dropdown-end"
};
const _hoisted_5 = {
  tabindex: "0",
  class: "bg-base-100 cursor-pointer rounded-md p-2 border border-base-300 w-full flex justify-center"
};
const _hoisted_6 = ["onClick"];
const _hoisted_7 = {
  class: "py-1 flex items-center"
};
const _hoisted_8 = ["onClick"];
const _hoisted_9 = {
  key: 0
};
const _hoisted_10 = {
  class: "py-1"
};
const _hoisted_11 = ["title"];
const _hoisted_12 = {
  key: 1,
  ref: "label",
  tabindex: "0",
  class: "group cursor-pointer group/contenteditable-container rounded-md p-2 border border-base-300 hover:border-content w-full flex justify-between"
};
const _hoisted_13 = {
  class: "flex items-center space-x-2"
};
const _hoisted_14 = {
  class: "flex items-center transition-all duration-75 group-hover:border border-base-content/20 border-dashed w-6 h-6 flex justify-center items-center rounded"
};
const _hoisted_15 = ["onClick"];
const _hoisted_16 = {
  class: "py-1 flex items-center"
};
const _hoisted_17 = {
  key: 0,
  class: "flex"
};
const _hoisted_18 = {
  class: "flex-col pr-1 hidden group-hover:flex -mt-1 h-0"
};
const _hoisted_19 = ["title", "onClick"];
const _hoisted_20 = ["title", "onClick"];
const _hoisted_21 = ["onClick"];
const _hoisted_22 = {
  key: 0
};
const _hoisted_23 = {
  class: "py-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Contenteditable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Contenteditable");
  const _component_IconChevronUp = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconChevronUp");
  const _component_IconTrashX = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconTrashX");
  const _component_IconUserPlus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconUserPlus");
  return $props.mobileView ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    onMouseenter: _cache[4] || (_cache[4] = $event => $data.renderDropdown = true),
    onTouchstart: _cache[5] || (_cache[5] = $event => $data.renderDropdown = true)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-3 h-3 flex-shrink-0 rounded-full", $options.colors[$props.submitters.indexOf($options.selectedSubmitter)]])
  }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Contenteditable, {
    modelValue: $options.selectedSubmitter.name,
    "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => $options.selectedSubmitter.name = $event), _cache[1] || (_cache[1] = $event => _ctx.$emit('name-change', $options.selectedSubmitter))],
    class: "cursor-text",
    "icon-inline": true,
    editable: $props.editable,
    "select-on-edit-click": true,
    "icon-width": 18
  }, null, 8 /* PROPS */, ["modelValue", "editable"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconChevronUp, {
    width: "24",
    height: "24"
  })]), $props.editable && $data.renderDropdown ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", {
    key: 0,
    tabindex: "0",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["rounded-md min-w-max mb-2", $props.menuClasses]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($props.menuStyle),
    onClick: _cache[3] || (_cache[3] = (...args) => $options.closeDropdown && $options.closeDropdown(...args))
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.submitters, (submitter, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: submitter.uuid
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex px-2 group justify-between items-center", {
        'active': submitter === $options.selectedSubmitter
      }]),
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.selectSubmitter(submitter), ["prevent"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["rounded-full w-3 h-3 ml-1 mr-3", $options.colors[index]])
    }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(submitter.name), 1 /* TEXT */)]), $props.submitters.length > 1 && $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      class: "px-2",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.remove(submitter), ["prevent", "stop"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconTrashX, {
      width: 18
    })], 8 /* PROPS */, _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_6)]);
  }), 128 /* KEYED_FRAGMENT */)), $props.submitters.length < $options.names.length && $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: "flex px-2",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.addSubmitter && $options.addSubmitter(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconUserPlus, {
    width: 20,
    "stroke-width": 1.6
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('add')) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.names[$props.submitters.length]), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 6 /* CLASS, STYLE */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])], 32 /* NEED_HYDRATION */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    class: "dropdown",
    onMouseenter: _cache[10] || (_cache[10] = $event => $data.renderDropdown = true),
    onTouchstart: _cache[11] || (_cache[11] = $event => $data.renderDropdown = true)
  }, [$props.compact ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
    key: 0,
    tabindex: "0",
    title: $options.selectedSubmitter?.name,
    class: "cursor-pointer text-base-100 flex h-full items-center justify-center"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mx-1 w-3 h-3 rounded-full", $options.colors[$props.submitters.indexOf($options.selectedSubmitter)]])
  }, null, 2 /* CLASS */)], 8 /* PROPS */, _hoisted_11)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-3 h-3 rounded-full", $options.colors[$props.submitters.indexOf($options.selectedSubmitter)]])
  }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Contenteditable, {
    modelValue: $options.selectedSubmitter.name,
    "onUpdate:modelValue": [_cache[6] || (_cache[6] = $event => $options.selectedSubmitter.name = $event), _cache[7] || (_cache[7] = $event => _ctx.$emit('name-change', $options.selectedSubmitter))],
    class: "cursor-text",
    "icon-inline": true,
    editable: $props.editable,
    "select-on-edit-click": true,
    "icon-width": 18
  }, null, 8 /* PROPS */, ["modelValue", "editable"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($props.editable ? 'IconPlus' : 'IconChevronDown'), {
    width: "18",
    height: "18"
  }))])], 512 /* NEED_PATCH */)), ($props.editable || !$props.compact) && $data.renderDropdown ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", {
    key: 2,
    tabindex: "0",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.menuClasses),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($props.menuStyle),
    onClick: _cache[9] || (_cache[9] = (...args) => $options.closeDropdown && $options.closeDropdown(...args))
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.submitters, (submitter, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: submitter.uuid
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex px-2 group justify-between items-center", {
        'active': submitter === $options.selectedSubmitter,
        'py-0.5': $props.submitters.length > 8
      }]),
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.selectSubmitter(submitter), ["prevent"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["rounded-full w-3 h-3 ml-1 mr-3", $options.colors[index]])
    }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(submitter.name), 1 /* TEXT */)]), !$props.compact && $props.submitters.length > 1 && $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      title: $options.t('up'),
      class: "relative w-2",
      style: {
        "font-size": "10px",
        "margin-bottom": "-4px"
      },
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => [$options.move(submitter, -1), _ctx.$refs.label.focus()], ["prevent", "stop"])
    }, " ▲ ", 8 /* PROPS */, _hoisted_19), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      title: $options.t('down'),
      class: "relative w-2",
      style: {
        "font-size": "10px",
        "margin-top": "-4px"
      },
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => [$options.move(submitter, 1), _ctx.$refs.label.focus()], ["prevent", "stop"])
    }, " ▼ ", 8 /* PROPS */, _hoisted_20)]), !$props.compact && $props.submitters.length > 1 && $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      class: "hidden group-hover:block px-2",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.remove(submitter), ["prevent", "stop"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconTrashX, {
      width: 18
    })], 8 /* PROPS */, _hoisted_21)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_15)]);
  }), 128 /* KEYED_FRAGMENT */)), $props.submitters.length < $options.names.length && $props.editable && $props.allowAddNew ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: "flex px-2",
    onClick: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.addSubmitter && $options.addSubmitter(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconUserPlus, {
    width: 20,
    "stroke-width": 1.6
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('add')) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.names[$props.submitters.length]), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 6 /* CLASS, STYLE */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32 /* NEED_HYDRATION */));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_type.vue?vue&type=template&id=7437ae52":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_type.vue?vue&type=template&id=7437ae52 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["title"];
const _hoisted_2 = {
  key: 0
};
const _hoisted_3 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    class: "dropdown",
    onMouseenter: _cache[1] || (_cache[1] = $event => $data.renderDropdown = true),
    onTouchstart: _cache[2] || (_cache[2] = $event => $data.renderDropdown = true)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    tabindex: "0",
    title: $options.fieldNames[$props.modelValue],
    class: "cursor-pointer"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.fieldIcons[$props.modelValue]), {
    width: $props.buttonWidth,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.buttonClasses),
    "stroke-width": 1.6
  }, null, 8 /* PROPS */, ["width", "class"]))], 8 /* PROPS */, _hoisted_1)]), $props.editable && $data.renderDropdown ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", {
    key: 0,
    tabindex: "0",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dropdown-content menu menu-xs p-2 shadow rounded-box w-52 z-10 mb-3", $props.menuClasses]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($props.menuStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => $options.closeDropdown && $options.closeDropdown(...args))
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.fieldIconsSorted, (icon, type) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: type
    }, [($options.fieldTypes.length === 0 || $options.fieldTypes.includes(type)) && ($options.withPayment || type != 'payment') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-sm py-1 px-2", {
        active: type === $props.modelValue
      }]),
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('update:model-value', type), ["prevent"])
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(icon), {
      "stroke-width": 1.6,
      width: 20
    })), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.fieldNames[type]), 1 /* TEXT */)], 10 /* CLASS, PROPS */, _hoisted_3)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))], 6 /* CLASS, STYLE */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32 /* NEED_HYDRATION */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/fields.vue?vue&type=template&id=eddc3ba8":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/fields.vue?vue&type=template&id=eddc3ba8 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  class: "mb-2"
}, null, -1 /* HOISTED */);
const _hoisted_3 = ["placeholder"];
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  class: "mb-2"
}, null, -1 /* HOISTED */);
const _hoisted_5 = {
  key: 0,
  class: "top-0 bottom-0 text-center absolute flex items-center justify-center w-full flex-col"
};
const _hoisted_6 = ["onDragstart"];
const _hoisted_7 = {
  class: "flex items-center justify-between relative cursor-grab"
};
const _hoisted_8 = {
  class: "flex items-center p-1 space-x-1"
};
const _hoisted_9 = {
  class: "block pl-0.5"
};
const _hoisted_10 = ["data-tip"];
const _hoisted_11 = {
  key: 1,
  class: "grid grid-cols-3 gap-1 pb-2"
};
const _hoisted_12 = ["onDragstart", "onClick"];
const _hoisted_13 = {
  class: "flex items-center flex-col px-2 py-2"
};
const _hoisted_14 = {
  class: "text-xs mt-1"
};
const _hoisted_15 = {
  key: 2,
  class: "text-xs p-2 border border-base-200 rounded"
};
const _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  class: "list-disc list-outside ml-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "Draw a text field on the page with a mouse"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "Drag & drop any other field type on the page"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "Click on the field type above to start drawing it")], -1 /* HOISTED */);
const _hoisted_17 = [_hoisted_16];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FieldSubmitter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FieldSubmitter");
  const _component_Field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Field");
  const _component_IconDrag = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconDrag");
  const _component_FieldType = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FieldType");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.withStickySubmitters ? 'sticky top-0 z-10' : '')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FieldSubmitter, {
    "model-value": $props.selectedSubmitter.uuid,
    class: "roles-dropdown w-full rounded-lg",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($props.withStickySubmitters ? {
      backgroundColor: $options.backgroundColor
    } : {}),
    submitters: $props.submitters,
    "menu-style": {
      backgroundColor: ['', null, 'transparent'].includes($options.backgroundColor) ? 'white' : $options.backgroundColor
    },
    editable: $props.editable && !$props.defaultSubmitters.length,
    onNewSubmitter: $options.save,
    onRemove: $options.removeSubmitter,
    onNameChange: $options.save,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.$emit('change-submitter', $props.submitters.find(s => s.uuid === $event)))
  }, null, 8 /* PROPS */, ["model-value", "style", "submitters", "menu-style", "editable", "onNewSubmitter", "onRemove", "onNameChange"])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    ref: "fields",
    class: "fields mb-1 mt-2",
    onDragover: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.onFieldDragover && $options.onFieldDragover(...args), ["prevent"])),
    onDrop: _cache[5] || (_cache[5] = (...args) => $options.reorderFields && $options.reorderFields(...args))
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.submitterFields, field => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Field, {
      key: field.uuid,
      "data-uuid": field.uuid,
      field: field,
      "type-index": $props.fields.filter(f => f.type === field.type).indexOf(field),
      editable: $props.editable && (!$options.fieldsDragFieldRef.value || $options.fieldsDragFieldRef.value !== field),
      "default-field": $props.defaultFields.find(f => f.name === field.name),
      draggable: $props.editable,
      onDragstart: $event => $options.fieldsDragFieldRef.value = field,
      onDragend: _cache[1] || (_cache[1] = $event => $options.fieldsDragFieldRef.value = null),
      onRemove: $options.removeField,
      onScrollTo: _cache[2] || (_cache[2] = $event => _ctx.$emit('scroll-to-area', $event)),
      onSetDraw: _cache[3] || (_cache[3] = $event => _ctx.$emit('set-draw', $event))
    }, null, 8 /* PROPS */, ["data-uuid", "field", "type-index", "editable", "default-field", "draggable", "onDragstart", "onRemove"]);
  }), 128 /* KEYED_FRAGMENT */))], 544 /* NEED_HYDRATION, NEED_PATCH */), $options.submitterDefaultFields.length && $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, $options.isShowFieldSearch ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $data.defaultFieldsSearch = $event),
    placeholder: $options.t('search_field'),
    class: "input input-ghost input-xs px-0 text-base mb-2 !outline-0 !rounded bg-transparent w-full"
  }, null, 8 /* PROPS */, _hoisted_3), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.defaultFieldsSearch]]), _hoisted_4], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "overflow-auto relative",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      maxHeight: $options.isShowFieldSearch ? '210px' : '',
      minHeight: $options.isShowFieldSearch ? '210px' : ''
    })
  }, [!$options.filteredSubmitterDefaultFields.length && $data.defaultFieldsSearch ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("field_not_found")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: "link",
    onClick: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $data.defaultFieldsSearch = '', ["prevent"]))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("clear")), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.filteredSubmitterDefaultFields, field => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: field.name,
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        backgroundColor: $options.backgroundColor
      }),
      draggable: "true",
      class: "default-field border border-base-300 rounded rounded-tr-none relative group mb-2",
      onDragstart: $event => $options.onDragstart({
        type: 'text',
        ...field
      }),
      onDragend: _cache[8] || (_cache[8] = $event => _ctx.$emit('drag-end'))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconDrag), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FieldType, {
      "model-value": field.type || 'text',
      editable: false,
      "button-width": 20
    }, null, 8 /* PROPS */, ["model-value"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(field.title || field.name), 1 /* TEXT */)]), $props.defaultRequiredFields.includes(field) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 0,
      "data-tip": $options.t('required'),
      class: "text-red-400 text-3xl pr-1.5 tooltip tooltip-left h-8"
    }, " * ", 8 /* PROPS */, _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_6);
  }), 128 /* KEYED_FRAGMENT */))], 4 /* STYLE */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.editable && !$props.onlyDefinedFields ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.fieldIconsSorted, (icon, type) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: type
    }, [($props.fieldTypes.length === 0 || $props.fieldTypes.includes(type)) && ($options.withPayment || type != 'payment') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      draggable: "true",
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["field-type-button group flex items-center justify-center border border-dashed w-full rounded relative", $props.drawFieldType === type ? 'border-base-content/40' : 'border-base-300 hover:border-base-content/20']),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        backgroundColor: $options.backgroundColor
      }),
      onDragstart: $event => $options.onDragstart({
        type: type
      }),
      onDragend: _cache[9] || (_cache[9] = $event => _ctx.$emit('drag-end')),
      onClick: $event => ['file', 'payment'].includes(type) ? _ctx.$emit('add-field', type) : _ctx.$emit('set-draw-type', type)
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex items-console transition-all cursor-grab h-full absolute left-0", $props.drawFieldType === type ? 'bg-base-200/50' : 'group-hover:bg-base-200/50'])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconDrag, {
      class: "my-auto"
    })], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(icon))), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.fieldNames[type]), 1 /* TEXT */)])], 46 /* CLASS, STYLE, PROPS, NEED_HYDRATION */, _hoisted_12)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.fields.length < 4 && $props.editable && $props.withHelp ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [..._hoisted_17])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/formula_modal.vue?vue&type=template&id=68fd1d1e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/formula_modal.vue?vue&type=template&id=68fd1d1e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "modal modal-open items-start !animate-none overflow-y-auto"
};
const _hoisted_2 = {
  class: "modal-box pt-4 pb-6 px-6 mt-20 max-h-none w-full max-w-xl"
};
const _hoisted_3 = {
  class: "flex justify-between items-center border-b pb-2 mb-2 font-medium"
};
const _hoisted_4 = {
  key: 0,
  class: "bg-base-300 rounded-xl py-2 px-3 text-center"
};
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "https://www.uvtsign.co/pricing",
  target: "_blank",
  class: "link"
}, "Available in Pro", -1 /* HOISTED */);
const _hoisted_6 = [_hoisted_5];
const _hoisted_7 = {
  class: "flex-inline mb-2 gap-2 space-y-1"
};
const _hoisted_8 = ["onClick"];
const _hoisted_9 = {
  class: "flex"
};
const _hoisted_10 = ["readonly"];
const _hoisted_11 = {
  class: "mb-3 mt-1"
};
const _hoisted_12 = {
  target: "blank",
  class: "text-sm mb-2 inline space-x-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconCodePlus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconCodePlus");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "absolute top-0 bottom-0 right-0 left-0",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('close'), ["prevent"]))
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("formula")) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.name || $props.buildDefaultName($props.field, $options.template.fields)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: "text-xl",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('close'), ["prevent"]))
  }, "×")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [!$options.withFormula ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [..._hoisted_6])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.fields, f => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: f.uuid,
      class: "mr-1 btn btn-neutral btn-outline border-base-content/20 btn-sm normal-case font-normal bg-white !rounded-xl",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.insertTextUnderCursor(`{{${f.name || $props.buildDefaultName(f, $options.template.fields)}}}`), ["prevent"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconCodePlus, {
      width: "20",
      height: "20",
      "stroke-width": "1.5"
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(f.name || $props.buildDefaultName(f, $options.template.fields)), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_8);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    ref: "textarea",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.formula = $event),
    class: "base-textarea !rounded-xl !text-base font-mono w-full !outline-0 !ring-0 !px-3",
    readonly: !$props.editable,
    required: "true",
    onInput: _cache[3] || (_cache[3] = (...args) => $options.resizeTextarea && $options.resizeTextarea(...args))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_10), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formula]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "bg-base-200 px-2 rounded-xl",
    onClick: _cache[4] || (_cache[4] = $event => $options.insertTextUnderCursor(' + '))
  }, " + "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "bg-base-200 px-2 rounded-xl",
    onClick: _cache[5] || (_cache[5] = $event => $options.insertTextUnderCursor(' - '))
  }, " - "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "bg-base-200 px-2 rounded-xl",
    onClick: _cache[6] || (_cache[6] = $event => $options.insertTextUnderCursor(' * '))
  }, " * "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "bg-base-200 px-2 rounded-xl",
    onClick: _cache[7] || (_cache[7] = $event => $options.insertTextUnderCursor(' / '))
  }, " / "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "bg-base-200 px-2 rounded-xl",
    onClick: _cache[8] || (_cache[8] = $event => $options.insertTextUnderCursor(' % '))
  }, " % "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "bg-base-200 px-2 rounded-xl",
    onClick: _cache[9] || (_cache[9] = $event => $options.insertTextUnderCursor('^'))
  }, " ^ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "bg-base-200 px-2 rounded-xl",
    onClick: _cache[10] || (_cache[10] = $event => $options.insertTextUnderCursor('round()'))
  }, " round(n, d) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "bg-base-200 px-2 rounded-xl",
    onClick: _cache[11] || (_cache[11] = $event => $options.insertTextUnderCursor('abs()'))
  }, " abs(n) ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "base-button w-full",
    onClick: _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.validateSaveAndClose && $options.validateSaveAndClose(...args), ["prevent"]))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("save")), 1 /* TEXT */)])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/icon_drag.vue?vue&type=template&id=3bed9b97":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/icon_drag.vue?vue&type=template&id=3bed9b97 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"></path><path d=\"M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"></path><path d=\"M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"></path><path d=\"M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"></path><path d=\"M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"></path><path d=\"M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"></path>", 7);
const _hoisted_9 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, [..._hoisted_9]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/import_list.vue?vue&type=template&id=664b5715":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/import_list.vue?vue&type=template&id=664b5715 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "label"
}, " Select Worksheet ", -1 /* HOISTED */);
const _hoisted_3 = {
  ref: "selectWorksheet",
  class: "base-select"
};
const _hoisted_4 = ["value"];
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  class: "base-button mt-4 w-full"
}, "Open", -1 /* HOISTED */);
const _hoisted_6 = {
  key: 1
};
const _hoisted_7 = {
  key: 0,
  class: "px-3 border-y py-2 border-base-300 text-center w-full"
};
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "relative w-full py-2 px-2 text-sm"
}, "Recipient field"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "relative w-full py-2 pl-4 text-sm"
}, " Spreadsheet column ")], -1 /* HOISTED */);
const _hoisted_9 = {
  class: "flex"
};
const _hoisted_10 = ["onChange"];
const _hoisted_11 = ["selected"];
const _hoisted_12 = ["value", "selected"];
const _hoisted_13 = {
  class: "flex items-center px-1"
};
const _hoisted_14 = {
  class: "w-full relative"
};
const _hoisted_15 = ["onChange"];
const _hoisted_16 = ["selected"];
const _hoisted_17 = ["value", "selected"];
const _hoisted_18 = {
  key: 0,
  class: "absolute top-0 bottom-0 right-1 flex items-center"
};
const _hoisted_19 = ["data-tip"];
const _hoisted_20 = {
  class: "flex items-center pl-1"
};
const _hoisted_21 = {
  class: "tooltip tooltip-top",
  "data-tip": "Remove"
};
const _hoisted_22 = ["disabled", "onClick"];
const _hoisted_23 = ["onClick"];
const _hoisted_24 = ["value"];
const _hoisted_25 = {
  class: "px-3 border-y py-2 border-base-300 text-center w-full text-sm font-semibold"
};
const _hoisted_26 = {
  key: 2
};
const _hoisted_27 = {
  class: "absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center"
};
const _hoisted_28 = {
  class: "flex flex-col items-center"
};
const _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "font-medium text-lg mb-1"
}, " Upload CSV or XLSX Spreadsheet ", -1 /* HOISTED */);
const _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "text-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "font-medium"
}, "Click to Upload"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" or drag and drop files. ")], -1 /* HOISTED */);
const _hoisted_31 = {
  ref: "form",
  class: "hidden"
};
const _hoisted_32 = {
  class: "text-center mt-2"
};
const _hoisted_33 = ["download", "href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconArrowsHorizontal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconArrowsHorizontal");
  const _component_IconInfoCircle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconInfoCircle");
  const _component_IconX = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconX");
  const _component_IconPlus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconPlus");
  const _component_IconInnerShadowTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconInnerShadowTop");
  const _component_IconCloudUpload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconCloudUpload");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [$data.selectedSheetIndex === null && $data.spreadsheet ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => [$data.selectedSheetIndex = _ctx.$refs.selectWorksheet.value, $options.buildDefaultMappings()], ["prevent"]))
  }, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.spreadsheet, (sheet, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: index,
      value: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(sheet[0] || index), 9 /* TEXT, PROPS */, _hoisted_4);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), _hoisted_5], 32 /* NEED_HYDRATION */)])) : $data.selectedSheetIndex !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.submitters, submitter => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: submitter.uuid,
      class: "mb-4"
    }, [$options.submitters.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(submitter.name), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_8, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.mappings.filter(m => m.submitter_uuid === submitter.uuid), mapping => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: mapping.uuid,
        class: "mb-2"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        class: "base-select !select-sm !h-10",
        required: "",
        onChange: $event => mapping.field_name = $event.target.value
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        disabled: "",
        value: "",
        selected: !mapping.field_name
      }, " Select Field ", 8 /* PROPS */, _hoisted_11), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.selectFieldsForSubmitter(submitter), (field, index) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          key: index,
          value: field.name,
          selected: mapping.field_name === field.name
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(field.name), 9 /* TEXT, PROPS */, _hoisted_12);
      }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconArrowsHorizontal, {
        style: {
          "width": "19px",
          "height": "19px"
        }
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        class: "base-select !select-sm !h-10",
        required: "",
        onChange: $event => mapping.column_index = parseInt($event.target.value)
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        disabled: "",
        value: "",
        selected: mapping.column_index == null
      }, " Select Column ", 8 /* PROPS */, _hoisted_16), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.columns, (column, index) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: index
        }, [column ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          key: 0,
          value: index,
          selected: index === mapping.column_index
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(column), 9 /* TEXT, PROPS */, _hoisted_17)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
      }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_15), mapping.column_index != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        class: "tooltip tooltip-bottom-end pr-1 tooltip-pre",
        style: {
          "padding-top": "2px"
        },
        "data-tip": [0, 1, 2].map(i => $options.rows[i]?.[mapping.column_index] ?? '---').join('\n')
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        class: "btn btn-xs btn-circle bg-white border-0 border-gray-300",
        onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconInfoCircle, {
        class: "h-4 w-4"
      })])], 8 /* PROPS */, _hoisted_19)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        disabled: $data.mappings.filter(m => m.submitter_uuid === submitter.uuid).length < 2,
        class: "btn btn-xs btn-circle",
        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $data.mappings.splice($data.mappings.indexOf(mapping), 1), ["prevent"])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconX, {
        class: "h-3.5 w-3.5"
      })], 8 /* PROPS */, _hoisted_22)])])])]);
    }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      class: "btn btn-sm btn-primary w-full !normal-case font-medium",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.addMapping(submitter), ["prevent"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconPlus, {
      class: "w-4 h-4"
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" New Field Mapping ")], 8 /* PROPS */, _hoisted_23)])]);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    name: "submissions_json",
    hidden: "",
    value: JSON.stringify($options.submissionsData.slice(0, 1100))
  }, null, 8 /* PROPS */, _hoisted_24)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Total entries: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.submissionsData.length) + " ", 1 /* TEXT */), $options.submissionsData.length >= 1000 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" / 1000 ")], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "flex h-52 w-full",
    onDragover: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"])),
    onDrop: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.onDropFiles && $options.onDropFiles(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full relative bg-base-200/20 hover:bg-base-200/30 rounded-md border border-2 border-base-content/10 border-dashed", {
      'opacity-50': $data.isLoading
    }]),
    for: "import_list_file"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconInnerShadowTop, {
    key: 0,
    class: "animate-spin",
    width: 40,
    height: 40
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconCloudUpload, {
    key: 1,
    width: 40,
    height: 40
  })), _hoisted_29, _hoisted_30])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "import_list_file",
    ref: "input",
    type: "file",
    name: "file",
    accept: ".xlsx, .xls, .csv",
    onChange: _cache[2] || (_cache[2] = (...args) => $options.onSelectFile && $options.onSelectFile(...args))
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */)], 512 /* NEED_PATCH */)], 2 /* CLASS */)], 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Or "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    download: `${$props.template.name}.csv`,
    href: `data:text/csv;base64,${$options.csvBase64}`,
    class: "link font-medium"
  }, "download", 8 /* PROPS */, _hoisted_33), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" a spreadsheet to fill and import ")])]))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/logo.vue?vue&type=template&id=6b91fade":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/logo.vue?vue&type=template&id=6b91fade ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40",
  height: "40",
  viewBox: "0 0 57 50"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<path style=\"fill:#85a5e6;\" d=\"m15.3.4c-.1,0-.2,0-.2.1-.5,4.5-1,9-1.5,13.5-.3-.2-.7-.2-1,0,0,0-.1,0-.2,0,0,0,0,0,0,0,0,0-.1,0-.2,0-.4,0-.7.1-1.1,0,0,0-.1,0-.2,0-.1,0-.3.1-.4.1-.4,0-.7,0-1.1,0,0,0-.1,0-.2,0,0,0-.1,0-.2,0,0,0-.1,0-.2,0-.4,0-.8,0-1.2,0-.4,0-.7,0-1.1.1,0,0-.2,0-.2,0,0,0-.1,0-.2,0,0,.1-.2.1-.3,0,0,0,0,0-.1,0-.1.1-.3.2-.5,0,0,0-.2,0-.2,0-.4.1-.9.2-1.4.2,0,0-.1,0-.1.1,0,0,0,0,0,0h0c0,.2,0,.3-.1.2-.1,0-.2,0-.3.2,0,0,0,.1,0,.2,0,.5,0,.6-.2.4.3-1.8.4-3.6.5-5.4,0-.2,0-.3.1-.5.3-1.2.6-2.4,1-3.6.2-.6.5-1.2.9-1.7.9-1.1,1.8-2,2.8-2.7.9-.7,1.7-.9,2.8-1.3C12.4.1,13.7,0,15.1,0c0,0,.1,0,.2.1,0,0,0,.2,0,.3Z\"></path><path style=\"fill:#4241c2;\" d=\"m15.3.4c.3,1,.6,1.9.9,2.8.3.9.7,1.9,1,2.8.3,1,.7,2.1,1.1,3.1.6,1.6,1.2,3.3,1.7,5.1,0,.1,0,.3.1.4,1,2.5,2,5.3,2.9,8.3.2.5.3,1,.5,1.4.2.4.4.9.6,1.4l-.8,7.4c-.8,7.3-1.4,12.2-1.6,14.7,0,0,0,.2,0,.4h-.1c0,0-.1,0-.1-.1,0-.4-.1-.7-.2-.9-.6-1.8-1.3-3.6-1.9-5.3-.3-.8-.6-1.5-.9-2.2-.1-.3,0-.5-.1-.8-.4-1-.7-1.9-1-2.9-.3-.9-.6-1.8-1-2.7-.4-.9-.7-1.8-1-2.7-.3-.8-.5-1.6-.9-2.4-.5-1.3-.9-2.7-1.4-4.1-.2-.6-.4-1.1-.6-1.7l1-8.4c.5-4.5,1-9,1.5-13.5,0,0,0,0,.2-.1Z\"></path><path style=\"fill:#85a5e6;\" d=\"m36.4,13.8c-.1,0-.2,0-.2.2-.3,2.9-.6,5.8-.9,8.6,0,.1,0,.2-.2.1,0,0,0,0-.1,0,0,0,0,0,0,0,0,0-.1,0-.2,0-.8,0-1.6.2-2.3.4-.1,0-.2,0-.3,0-.5,0-.9,0-1.4,0-.5,0-.9,0-1.4.1-.7.1-1.3.2-2,.3,0,0-.2,0-.3,0,0,0-.2,0-.2,0-.3,0-.5,0-.8,0-.2,0-.5.1-.7.2-.2,0-.5,0-.7.1,0-.7.2-1.4.3-2.1.1-.7.3-1.4.6-2,.7-1.4,1.6-2.8,2.8-4,.3-.3.6-.6,1-.8,1.2-.6,2.4-1.1,3.6-1.6.3-.1.7-.2,1-.2.8,0,1.6,0,2.4,0,0,0,.1,0,.1,0h0Z\"></path><path style=\"fill:#4241c2;\" d=\"m36.4,13.8c.7,1.4,1.3,2.8,2,4.1.1.3.3.4.4.6.8,1.5,1.7,3.1,2.6,5,.3.6.6,1.2.9,1.7.7,1.1,1.2,2.2,1.8,3.4.7,1.2,1.4,2.6,2.1,4,0,1.4-.1,3-.4,4.8l-.6,5.2-.6,5.3c0,0,0,.1-.1.2h-.1c-.6-1.4-1.3-2.7-2.1-4,0,0,0-.2-.1-.2,0-.1,0-.2,0-.2-.7-1.3-1.3-2.7-2-4-.2-.5-.6-.9-.8-1.4-1.5-2.9-3.1-5.7-4.8-8.6l.7-6.8c.3-2.9.6-5.8.9-8.6,0-.2,0-.3.2-.2Z\"></path><path style=\"fill:#a57ed4;\" d=\"m13.7,14l-1,8.4-.3,2.4c-.9.2-1.8.3-2.8.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.1,0-1,0-2,.1-2.9.3,0,0-.2,0-.2,0,0,0-.1,0-.2,0,0,0,0,0-.1,0h-1c0,0-.1,0-.2.1,0,0-.1,0-.2,0,0,0-.1,0-.2,0h-.7c0,.1-.1.1-.2.1,0,0-.2,0-.2,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0-.1,0-.2,0-.2.1-.3.2-.5,0,0,0-.2,0-.3,0l-.4.3,1.1-10.4c.2.2.2,0,.2-.4,0,0,0-.1,0-.2.1-.1.2-.2.3-.2,0,0,.1,0,.1-.1h0c0-.2,0-.2.1-.2,0,0,0,0,0,0,.5,0,.9,0,1.4-.2,0,0,.2,0,.2,0,.2.1.3,0,.5,0,0,0,0,0,.1,0,.1.1.2,0,.3,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0,.4-.2.7,0,1.1-.1.4,0,.8,0,1.2,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0,.4,0,.7,0,1.1,0,.2,0,.3,0,.4-.1,0,0,.1,0,.2,0,.4,0,.7,0,1.1,0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,.1,0,.2,0,.4-.1.7-.1,1,0Z\"></path><path style=\"fill:#a57ed4;\" d=\"m35.3,22.6l-.7,6.8-.3,2.6c0,0,0,0,0-.2,0,0,0-.1-.1,0h-.2c0,.1-.1.1-.2,0-.2,0-.4,0-.5.2,0,0,0,0,0,0-.3,0-.5,0-.7,0-.2,0-.4,0-.6,0-.2,0-.4,0-.6,0-.3.1-.7.2-1.1.2-.6,0-1,0-1.1,0-.9,0-1.8.2-2.6.2,0,.2-.2.2-.3,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,.2-.1.2h-.9c0,0-.1,0-.2,0-.2.1-.5.2-.8.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.1,0-.2,0h-.1s.8-7.5.8-7.5l.2-1.5c.3,0,.5,0,.7-.1.2,0,.5,0,.7-.2.3,0,.5-.1.8,0,0,0,.2,0,.2,0,0,0,.2,0,.3,0,.7,0,1.4-.2,2-.3.5,0,.9-.1,1.4-.1.4,0,.9,0,1.4,0,.1,0,.2,0,.3,0,.7-.2,1.5-.3,2.3-.4,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,.1,0,.1,0,.2,0,.2-.1Z\"></path><path style=\"fill:#dd39b6;\" d=\"m56.9,34c-.5.2-.9.3-1.4.5-.7.2-1.2.3-1.4.4-1.2.4-2.3.8-3.5,1.1-.1,0-.2,0-.3,0,0,0-.1,0-.2,0-.4.2-.9.3-1.3.4-.3,0-.7.2-1.1.3-.6.2-1.2.4-1.9.5.3-1.7.4-3.3.4-4.8.2-1.2.4-2.4.5-3.5,0-.4.2-.7.4-1,.8-1.1,1.7-2.1,2.7-3,0,0,0,0,.2,0,1.1-.1,2.3-.2,3.5,0,.3,0,.5.1.7.3,1,.8,2,1.6,2.6,2.7.2.4.4.8.4,1.3,0,1.6,0,2.8-.2,3.5-.1.6-.2,1-.2,1.3Z\"></path><path style=\"fill:#dd39b6;\" d=\"m12.4,24.9c-.4,3.7-.8,7.4-1.3,11.1,0,.2,0,.3,0,.6-.2,1.2-.3,2.3-.4,3.5,0,0,0,.4-.2,1,0,.3,0,.7-.1,1,0,1-.3,2.1-.6,3.2,0,.2,0,.4-.1.6-.6.6-1.2,1.2-1.9,1.7-.7.5-1.4.7-2.2.8-1.3,0-2.4-.2-3.4-1.1-.9-.7-1.5-1.6-2.1-2.6,0,0,0-.2,0-.3,0-1.6,0-3.1.2-4.5,0-.5,0-.9,0-1.4.2-1.4.4-2.8.5-4.3,0-.2,0-.3,0-.5.2-1.4.3-2.8.4-4.1,0-.3.2-.5.2-.8,0-.9.2-1.8.2-2.7l.4-.3c0,0,.2,0,.3,0,.2,0,.4,0,.5,0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0h.7c0-.1.1-.1.2,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0h1c0,0,0,0,.1,0,0,0,.1,0,.2,0,0,0,.2,0,.2,0,1-.2,2-.3,2.9-.3,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1.9,0,2.8-.3Z\"></path><path style=\"fill:#dd39b6;\" d=\"m34.3,32c0,.6,0,1.2-.1,1.8,0,.2-.2.4-.2.7,0,1-.2,2-.3,2.9-.2,2-.7,4-1.7,5.7-.1.2,0,.4-.3.6-.9,1.1-2,2-3.1,2.8-.7.5-1.6.9-2.6,1.2-1.4.4-2.7.5-4.2.5,0-.2,0-.3,0-.4.3-2.5.8-7.4,1.6-14.7h.1c0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,0,0,.3,0,.5,0,.8-.1,0,0,.1,0,.2,0h.9c.1,0,.2,0,.1-.2,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,0,0,0,0,.1.2.2.2.3,0,.9,0,1.8-.1,2.6-.2.2,0,.5,0,1.1,0,.4,0,.8,0,1.1-.2.2,0,.4,0,.6,0,.2,0,.4,0,.6,0,.2,0,.5,0,.7,0,0,0,0,0,0,0,.1-.2.3-.2.5-.2,0,0,.1,0,.2,0h.2c0-.1.1,0,.1,0,0,0,0,.1,0,.2Z\"></path><path style=\"fill:#a57ed4;\" d=\"m56.9,34c0,1.8-.3,3.7-.7,5.5-1.2.4-2.4.8-3.6,1.1-.2,0-.5.1-.6.2-.2.1-.4.2-.7.2-.3,0-.6.1-.9.2-1,.4-2,.7-3.1.9,0,0-.1,0-.1.1,0,0,0,.1-.2.1-.5,0-.9.1-1.3.4,0,0-.2,0-.3-.2l.6-5.2c.6,0,1.3-.2,1.9-.5.4-.1.7-.3,1.1-.3.4,0,.8-.2,1.3-.4,0,0,.1,0,.2,0,.1,0,.2,0,.3,0,1.2-.4,2.4-.7,3.5-1.1.2,0,.7-.2,1.4-.4.5-.1.9-.3,1.4-.5Z\"></path><path style=\"fill:#85a5e6;\" d=\"m56.2,39.4c-.2.9-.4,1.7-.8,2.5,0,.2,0,.4-.2.6-.8,1.2-1.6,2.2-2.6,3-.3.3-.7.6-1,.8-.3.3-.7.5-1.1.7-1.2.5-2.4.9-3.7,1,0,0-.1,0-.2,0-.4.3-1.4.2-1.9.2,0,0-.1,0-.2-.1v-.2c0,0,0,0,0,0,0,0,.1,0,.1-.2l.6-5.3c.1.2.2.3.3.2.4-.2.9-.4,1.3-.4,0,0,.1,0,.2-.1,0,0,0-.1.1-.1,1.1-.2,2.1-.5,3.1-.9.3-.1.6-.2.9-.2.2,0,.4,0,.7-.2.2,0,.4-.2.6-.2,1.2-.3,2.4-.7,3.6-1.1Z\"></path>", 11);
const _hoisted_13 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, [..._hoisted_13]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/mobile_draw_field.vue?vue&type=template&id=71223b4e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/mobile_draw_field.vue?vue&type=template&id=71223b4e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "absolute text-center w-full bottom-0 pr-3 mb-4"
};
const _hoisted_2 = {
  class: "w-full bg-base-200 px-4 py-2 rounded-md inline-flex space-x-2 mx-auto items-center justify-between mb-2 z-20 md:hidden"
};
const _hoisted_3 = {
  class: "flex items-center space-x-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FieldSubmitter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FieldSubmitter");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.fieldIcons[$props.drawField.type]), {
    width: 20,
    height: 20,
    class: "inline",
    "stroke-width": 1.6
  })), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('draw_field').replace('{field}', $options.fieldNames[$props.drawField.type])), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: "link block text-center",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('cancel'), ["prevent"]))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('cancel')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FieldSubmitter, {
    "model-value": $props.selectedSubmitter.uuid,
    submitters: $props.submitters,
    editable: $props.editable,
    "mobile-view": true,
    "menu-style": {
      backgroundColor: ['', null, 'transparent'].includes($options.backgroundColor) ? 'white' : $options.backgroundColor
    },
    onNewSubmitter: $options.save,
    onRemove: $options.removeSubmitter,
    onNameChange: $options.save,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.$emit('change-submitter', $props.submitters.find(s => s.uuid === $event)))
  }, null, 8 /* PROPS */, ["model-value", "submitters", "editable", "menu-style", "onNewSubmitter", "onRemove", "onNameChange"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/mobile_fields.vue?vue&type=template&id=139036d3":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/mobile_fields.vue?vue&type=template&id=139036d3 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "dropdown dropdown-top dropdown-end absolute bottom-4 right-4 z-10 md:hidden"
};
const _hoisted_2 = {
  class: "btn btn-neutral text-white btn-circle btn-lg group",
  tabindex: "0"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["data-tip"];
const _hoisted_5 = {
  key: 0
};
const _hoisted_6 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconPlus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconPlus");
  const _component_IconX = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconX");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconPlus, {
    class: "group-focus:hidden",
    width: "28",
    height: "28"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconX, {
    class: "hidden group-focus:inline",
    width: "28",
    height: "28"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    tabindex: "0",
    class: "dropdown-content menu menu-xs p-2 shadow rounded-box w-52 z-10 mb-3 mt-1.5 bg-base-100",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.closeDropdown && $options.closeDropdown(...args))
  }, [$options.submitterDefaultFields.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.submitterDefaultFields, field => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: field.name
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      class: "text-sm py-1 px-2",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('select', {
        name: field.name || '',
        type: field.type || 'text'
      }), ["prevent"])
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(_ctx.fieldIcons[field.type || 'text']), {
      "stroke-width": 1.6,
      width: 20
    })), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(field.title || field.name) + " ", 1 /* TEXT */), $props.defaultRequiredFields.includes(field) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 0,
      "data-tip": $options.t('required'),
      class: "text-red-400 text-2xl tooltip tooltip-left h-6"
    }, " * ", 8 /* PROPS */, _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_3)]);
  }), 128 /* KEYED_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.fieldIcons, (icon, type) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: type
    }, [($props.fieldTypes.length === 0 || $props.fieldTypes.includes(type)) && ($options.withPayment || type != 'payment') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-sm py-1 px-2", {
        active: type === $props.modelValue
      }]),
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('select', {
        type
      }), ["prevent"])
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(icon), {
      "stroke-width": 1.6,
      width: 20
    })), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.fieldNames[type]), 1 /* TEXT */)], 10 /* CLASS, PROPS */, _hoisted_6)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/page.vue?vue&type=template&id=25f285c2":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/page.vue?vue&type=template&id=25f285c2 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["src", "width", "height"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FieldArea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FieldArea");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: "relative cursor-crosshair select-none",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($props.drawField ? 'touch-action: none' : '')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    ref: "image",
    loading: "lazy",
    src: $props.image.url,
    width: $options.width,
    height: $options.height,
    class: "border rounded mb-4",
    onLoad: _cache[0] || (_cache[0] = (...args) => $options.onImageLoad && $options.onImageLoad(...args))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "top-0 bottom-0 left-0 right-0 absolute",
    onPointerdown: _cache[6] || (_cache[6] = (...args) => $options.onStartDraw && $options.onStartDraw(...args))
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.areas, (item, i) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FieldArea, {
      key: i,
      ref_for: true,
      ref: $options.setAreaRefs,
      area: item.area,
      field: item.field,
      editable: $props.editable,
      "default-field": $props.defaultFields.find(f => f.name === item.field.name),
      "default-submitters": $props.defaultSubmitters,
      onStartResize: _cache[1] || (_cache[1] = $event => $data.resizeDirection = $event),
      onStopResize: _cache[2] || (_cache[2] = $event => $data.resizeDirection = null),
      onStartDrag: _cache[3] || (_cache[3] = $event => $data.isMove = true),
      onStopDrag: _cache[4] || (_cache[4] = $event => $data.isMove = false),
      onRemove: $event => _ctx.$emit('remove-area', item.area),
      onScrollTo: _cache[5] || (_cache[5] = $event => _ctx.$emit('scroll-to', $event))
    }, null, 8 /* PROPS */, ["area", "field", "editable", "default-field", "default-submitters", "onRemove"]);
  }), 128 /* KEYED_FRAGMENT */)), $data.newArea ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FieldArea, {
    key: 0,
    "is-draw": true,
    field: {
      submitter_uuid: $props.selectedSubmitter.uuid,
      type: $props.drawField?.type || $options.defaultFieldType
    },
    area: $data.newArea
  }, null, 8 /* PROPS */, ["field", "area"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "mask",
    ref: "mask",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["top-0 bottom-0 left-0 right-0 absolute", {
      'z-10': !$options.isMobile,
      'cursor-grab': $props.isDrag || $data.isMove,
      'cursor-nwse-resize': $props.drawField,
      [$options.resizeDirectionClasses[$data.resizeDirection]]: !!$options.resizeDirectionClasses
    }]),
    onPointermove: _cache[7] || (_cache[7] = (...args) => $options.onPointermove && $options.onPointermove(...args)),
    onPointerdown: _cache[8] || (_cache[8] = (...args) => $options.onStartDraw && $options.onStartDraw(...args)),
    onDragover: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"])),
    onDrop: _cache[10] || (_cache[10] = (...args) => $options.onDrop && $options.onDrop(...args)),
    onPointerup: _cache[11] || (_cache[11] = (...args) => $options.onPointerup && $options.onPointerup(...args))
  }, null, 34 /* CLASS, NEED_HYDRATION */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.resizeDirection || $data.isMove || $props.isDrag || $data.showMask || $props.drawField && $options.isMobile || $options.fieldsDragFieldRef.value]])], 4 /* STYLE */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/payment_settings.vue?vue&type=template&id=4282d66f":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/payment_settings.vue?vue&type=template&id=4282d66f ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["title"];
const _hoisted_2 = ["value"];
const _hoisted_3 = {
  key: 0,
  class: "text-sm text-center"
};
const _hoisted_4 = {
  key: 1,
  "data-turbo": "false",
  action: "/auth/stripe_connect",
  "accept-charset": "UTF-8",
  target: "_blank",
  method: "post"
};
const _hoisted_5 = ["value"];
const _hoisted_6 = ["value"];
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "hidden",
  name: "scope",
  value: "read_write",
  autocomplete: "off"
}, null, -1 /* HOISTED */);
const _hoisted_8 = ["value"];
const _hoisted_9 = ["disabled"];
const _hoisted_10 = {
  key: 0,
  class: "flex items-center space-x-1"
};
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Connect Stripe ", -1 /* HOISTED */);
const _hoisted_12 = {
  key: 1,
  class: "flex items-center space-x-1"
};
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Connect Stripe ", -1 /* HOISTED */);
const _hoisted_14 = {
  key: 2,
  class: "block link text-center mt-1",
  href: "https://www.uvtsign.co/blog/accept-payments-and-request-signatures-with-ease",
  target: "_blank",
  "data-turbo": "false"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconSettings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconSettings");
  const _component_IconCircleCheck = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconCircleCheck");
  const _component_IconInnerShadowTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconInnerShadowTop");
  const _component_IconBrandStripe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconBrandStripe");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dropdown dropdown-end", {
      'dropdown-open': (!$props.field.preferences?.price || !$options.isConnected) && !$data.isLoading
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    tabindex: "0",
    title: $options.t('settings'),
    class: "cursor-pointer text-transparent group-hover:text-base-content"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconSettings, {
    width: 18,
    "stroke-width": 1.6
  })], 8 /* PROPS */, _hoisted_1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    tabindex: "0",
    class: "mt-1.5 dropdown-content menu menu-xs p-2 shadow bg-base-100 rounded-box w-52 z-10",
    draggable: "true",
    onDragstart: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent", "stop"])),
    onClick: _cache[8] || (_cache[8] = (...args) => $options.closeDropdown && $options.closeDropdown(...args))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "py-1.5 px-1 relative",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $props.field.preferences.currency = $event),
    placeholder: "Price",
    class: "select select-bordered select-xs font-normal w-full max-w-xs !h-7 !outline-0",
    onChange: _cache[1] || (_cache[1] = (...args) => $options.save && $options.save(...args))
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.currenciesList, currency => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: currency,
      value: currency
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(currency), 9 /* TEXT, PROPS */, _hoisted_2);
  }), 128 /* KEYED_FRAGMENT */))], 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $props.field.preferences.currency]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      backgroundColor: $options.backgroundColor
    }, {
      "font-size": "8px"
    }]),
    class: "absolute -top-1 left-2.5 px-1 h-4"
  }, " Currency ", 4 /* STYLE */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "py-1.5 px-1 relative",
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $props.field.preferences.price = $event),
    type: "number",
    placeholder: "Price",
    class: "input input-bordered input-xs w-full max-w-xs h-7 !outline-0",
    onBlur: _cache[4] || (_cache[4] = (...args) => $options.save && $options.save(...args))
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.field.preferences.price]]), $props.field.preferences.price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
    key: 0,
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      backgroundColor: $options.backgroundColor
    }, {
      "font-size": "8px"
    }]),
    class: "absolute -top-1 left-2.5 px-1 h-4"
  }, " Price ", 4 /* STYLE */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), !$options.isConnected || $options.isOauthSuccess ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: "py-1.5 px-1 relative",
    onClick: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, [$options.isConnected && $options.isOauthSuccess ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconCircleCheck, {
    class: "inline text-green-600 w-4 h-4"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Stripe Connected ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$options.isConnected ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    name: "state",
    value: $options.oauthState,
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    name: "redirect_uri",
    value: $options.redirectUri,
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_6), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    name: "authenticity_token",
    value: $options.authenticityToken,
    autocomplete: "off"
  }, null, 8 /* PROPS */, _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    disabled: $data.isLoading,
    class: "btn bg-[#7B73FF] hover:bg-[#0A2540] btn-sm text-white w-full"
  }, [$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconInnerShadowTop, {
    class: "w-4 h-4 animate-spin inline"
  }), _hoisted_11])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconBrandStripe, {
    class: "w-4 h-4 inline"
  }), _hoisted_13]))], 8 /* PROPS */, _hoisted_9)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$options.isConnected ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", _hoisted_14, "Learn more")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32 /* NEED_HYDRATION */)], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/preview.vue?vue&type=template&id=03f96865":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/preview.vue?vue&type=template&id=03f96865 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "relative"
};
const _hoisted_2 = ["src", "width", "height"];
const _hoisted_3 = {
  key: 0,
  class: "flex justify-between w-full"
};
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  style: {
    "width": "26px"
  }
}, null, -1 /* HOISTED */);
const _hoisted_5 = {
  class: ""
};
const _hoisted_6 = {
  class: "flex flex-col justify-between opacity-0 group-hover:opacity-100"
};
const _hoisted_7 = {
  key: 0,
  class: "flex flex-col space-y-1"
};
const _hoisted_8 = {
  class: "flex pb-2 pt-1.5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ReplaceButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ReplaceButton");
  const _component_Contenteditable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Contenteditable");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $options.previewImage.url,
    width: $options.previewImage.metadata.width,
    height: $options.previewImage.metadata.height,
    class: "rounded border",
    loading: "lazy"
  }, null, 8 /* PROPS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "group flex justify-end cursor-pointer top-0 bottom-0 left-0 right-0 absolute p-1",
    onClick: _cache[5] || (_cache[5] = $event => _ctx.$emit('scroll-to', $props.item))
  }, [$props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [$props.withReplaceButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ReplaceButton, {
    key: 0,
    "template-id": $props.template.id,
    "accept-file-types": $props.acceptFileTypes,
    class: "opacity-0 group-hover:opacity-100",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"])),
    onSuccess: _cache[1] || (_cache[1] = $event => _ctx.$emit('replace', {
      replaceSchemaItem: $props.item,
      ...$event
    }))
  }, null, 8 /* PROPS */, ["template-id", "accept-file-types"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
    style: {
      "width": "24px",
      "height": "24px"
    },
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('remove', $props.item), ["stop"]))
  }, " × ")]), $props.withArrows ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
    style: {
      "width": "24px",
      "height": "24px"
    },
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('up', $props.item), ["stop"]))
  }, " ↑ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "btn border-base-200 bg-white text-base-content btn-xs rounded hover:text-base-100 hover:bg-base-content hover:border-base-content w-full transition-colors",
    style: {
      "width": "24px",
      "height": "24px"
    },
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('down', $props.item), ["stop"]))
  }, " ↓ ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Contenteditable, {
    "model-value": $props.item.name,
    "icon-width": 16,
    editable: $props.editable,
    style: {
      "max-width": "95%"
    },
    class: "mx-auto",
    "onUpdate:modelValue": $options.onUpdateName
  }, null, 8 /* PROPS */, ["model-value", "editable", "onUpdate:modelValue"])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/replace.vue?vue&type=template&id=6a93e151":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/replace.vue?vue&type=template&id=6a93e151 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["for"];
const _hoisted_2 = {
  ref: "form",
  class: "hidden"
};
const _hoisted_3 = ["id", "accept"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
    for: $options.inputId,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-neutral btn-xs text-white transition-none", {
      'opacity-100': $data.isLoading || $data.isProcessing
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.message) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: $options.inputId,
    ref: "input",
    name: "files[]",
    type: "file",
    accept: $props.acceptFileTypes,
    onChange: _cache[0] || (_cache[0] = (...args) => $options.upload && $options.upload(...args))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_3)], 512 /* NEED_PATCH */)], 10 /* CLASS, PROPS */, _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/upload.vue?vue&type=template&id=57278d74":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/upload.vue?vue&type=template&id=57278d74 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["for"];
const _hoisted_2 = {
  key: 2
};
const _hoisted_3 = {
  key: 3
};
const _hoisted_4 = {
  key: 4
};
const _hoisted_5 = {
  ref: "form",
  class: "hidden"
};
const _hoisted_6 = ["id", "accept"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconInnerShadowTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconInnerShadowTop");
  const _component_IconUpload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconUpload");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    for: $options.inputId,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-outline w-full", {
      'btn-disabled': $data.isLoading || $data.isProcessing
    }])
  }, [$data.isLoading || $data.isProcessing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconInnerShadowTop, {
    key: 0,
    width: "20",
    class: "animate-spin"
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconUpload, {
    key: 1,
    width: "20"
  })), $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('uploading_')), 1 /* TEXT */)) : $data.isProcessing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('processing_')), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('add_document')), 1 /* TEXT */))], 10 /* CLASS, PROPS */, _hoisted_1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: $options.inputId,
    ref: "input",
    name: "files[]",
    type: "file",
    accept: $props.acceptFileTypes,
    multiple: "",
    onChange: _cache[0] || (_cache[0] = (...args) => $options.upload && $options.upload(...args))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_6)], 512 /* NEED_PATCH */)]);
}

/***/ }),

/***/ "./app/javascript/application.scss":
/*!*****************************************!*\
  !*** ./app/javascript/application.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/javascript/template_builder/area.vue":
/*!**************************************************!*\
  !*** ./app/javascript/template_builder/area.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _area_vue_vue_type_template_id_e12e7680__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area.vue?vue&type=template&id=e12e7680 */ "./app/javascript/template_builder/area.vue?vue&type=template&id=e12e7680");
/* harmony import */ var _area_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/area.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_area_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_area_vue_vue_type_template_id_e12e7680__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/area.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/builder.vue":
/*!*****************************************************!*\
  !*** ./app/javascript/template_builder/builder.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _builder_vue_vue_type_template_id_14575a90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder.vue?vue&type=template&id=14575a90 */ "./app/javascript/template_builder/builder.vue?vue&type=template&id=14575a90");
/* harmony import */ var _builder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/builder.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_builder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_builder_vue_vue_type_template_id_14575a90__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/builder.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/conditions_modal.vue":
/*!**************************************************************!*\
  !*** ./app/javascript/template_builder/conditions_modal.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conditions_modal_vue_vue_type_template_id_f57e8cce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditions_modal.vue?vue&type=template&id=f57e8cce */ "./app/javascript/template_builder/conditions_modal.vue?vue&type=template&id=f57e8cce");
/* harmony import */ var _conditions_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditions_modal.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/conditions_modal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_conditions_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_conditions_modal_vue_vue_type_template_id_f57e8cce__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/conditions_modal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/contenteditable.vue":
/*!*************************************************************!*\
  !*** ./app/javascript/template_builder/contenteditable.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contenteditable_vue_vue_type_template_id_1e6c36fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contenteditable.vue?vue&type=template&id=1e6c36fa */ "./app/javascript/template_builder/contenteditable.vue?vue&type=template&id=1e6c36fa");
/* harmony import */ var _contenteditable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contenteditable.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/contenteditable.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_contenteditable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_contenteditable_vue_vue_type_template_id_1e6c36fa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/contenteditable.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/controls.vue":
/*!******************************************************!*\
  !*** ./app/javascript/template_builder/controls.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controls_vue_vue_type_template_id_6f5b78e9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls.vue?vue&type=template&id=6f5b78e9 */ "./app/javascript/template_builder/controls.vue?vue&type=template&id=6f5b78e9");
/* harmony import */ var _controls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/controls.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_controls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_controls_vue_vue_type_template_id_6f5b78e9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/controls.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/description_modal.vue":
/*!***************************************************************!*\
  !*** ./app/javascript/template_builder/description_modal.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _description_modal_vue_vue_type_template_id_4d6193f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./description_modal.vue?vue&type=template&id=4d6193f2 */ "./app/javascript/template_builder/description_modal.vue?vue&type=template&id=4d6193f2");
/* harmony import */ var _description_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description_modal.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/description_modal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_description_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_description_modal_vue_vue_type_template_id_4d6193f2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/description_modal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/document.vue":
/*!******************************************************!*\
  !*** ./app/javascript/template_builder/document.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _document_vue_vue_type_template_id_773d48ce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document.vue?vue&type=template&id=773d48ce */ "./app/javascript/template_builder/document.vue?vue&type=template&id=773d48ce");
/* harmony import */ var _document_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/document.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_document_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_document_vue_vue_type_template_id_773d48ce__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/document.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/dropzone.vue":
/*!******************************************************!*\
  !*** ./app/javascript/template_builder/dropzone.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropzone_vue_vue_type_template_id_1aa0bace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropzone.vue?vue&type=template&id=1aa0bace */ "./app/javascript/template_builder/dropzone.vue?vue&type=template&id=1aa0bace");
/* harmony import */ var _dropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropzone.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/dropzone.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_dropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_dropzone_vue_vue_type_template_id_1aa0bace__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/dropzone.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/field.vue":
/*!***************************************************!*\
  !*** ./app/javascript/template_builder/field.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field_vue_vue_type_template_id_9c8e0c52__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field.vue?vue&type=template&id=9c8e0c52 */ "./app/javascript/template_builder/field.vue?vue&type=template&id=9c8e0c52");
/* harmony import */ var _field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/field.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_field_vue_vue_type_template_id_9c8e0c52__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/field.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/field_settings.vue":
/*!************************************************************!*\
  !*** ./app/javascript/template_builder/field_settings.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field_settings_vue_vue_type_template_id_23787ebb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field_settings.vue?vue&type=template&id=23787ebb */ "./app/javascript/template_builder/field_settings.vue?vue&type=template&id=23787ebb");
/* harmony import */ var _field_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field_settings.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/field_settings.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_field_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_field_settings_vue_vue_type_template_id_23787ebb__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/field_settings.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/field_submitter.vue":
/*!*************************************************************!*\
  !*** ./app/javascript/template_builder/field_submitter.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field_submitter_vue_vue_type_template_id_a96674be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field_submitter.vue?vue&type=template&id=a96674be */ "./app/javascript/template_builder/field_submitter.vue?vue&type=template&id=a96674be");
/* harmony import */ var _field_submitter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field_submitter.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/field_submitter.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_field_submitter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_field_submitter_vue_vue_type_template_id_a96674be__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/field_submitter.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/field_type.vue":
/*!********************************************************!*\
  !*** ./app/javascript/template_builder/field_type.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field_type_vue_vue_type_template_id_7437ae52__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field_type.vue?vue&type=template&id=7437ae52 */ "./app/javascript/template_builder/field_type.vue?vue&type=template&id=7437ae52");
/* harmony import */ var _field_type_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field_type.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/field_type.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_field_type_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_field_type_vue_vue_type_template_id_7437ae52__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/field_type.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/fields.vue":
/*!****************************************************!*\
  !*** ./app/javascript/template_builder/fields.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fields_vue_vue_type_template_id_eddc3ba8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fields.vue?vue&type=template&id=eddc3ba8 */ "./app/javascript/template_builder/fields.vue?vue&type=template&id=eddc3ba8");
/* harmony import */ var _fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/fields.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_fields_vue_vue_type_template_id_eddc3ba8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/fields.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/formula_modal.vue":
/*!***********************************************************!*\
  !*** ./app/javascript/template_builder/formula_modal.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formula_modal_vue_vue_type_template_id_68fd1d1e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formula_modal.vue?vue&type=template&id=68fd1d1e */ "./app/javascript/template_builder/formula_modal.vue?vue&type=template&id=68fd1d1e");
/* harmony import */ var _formula_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formula_modal.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/formula_modal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_formula_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_formula_modal_vue_vue_type_template_id_68fd1d1e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/formula_modal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/icon_drag.vue":
/*!*******************************************************!*\
  !*** ./app/javascript/template_builder/icon_drag.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_drag_vue_vue_type_template_id_3bed9b97__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon_drag.vue?vue&type=template&id=3bed9b97 */ "./app/javascript/template_builder/icon_drag.vue?vue&type=template&id=3bed9b97");
/* harmony import */ var _icon_drag_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon_drag.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/icon_drag.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_icon_drag_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_icon_drag_vue_vue_type_template_id_3bed9b97__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/icon_drag.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/import_list.vue":
/*!*********************************************************!*\
  !*** ./app/javascript/template_builder/import_list.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_list_vue_vue_type_template_id_664b5715__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import_list.vue?vue&type=template&id=664b5715 */ "./app/javascript/template_builder/import_list.vue?vue&type=template&id=664b5715");
/* harmony import */ var _import_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import_list.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/import_list.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_import_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_import_list_vue_vue_type_template_id_664b5715__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/import_list.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/logo.vue":
/*!**************************************************!*\
  !*** ./app/javascript/template_builder/logo.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logo_vue_vue_type_template_id_6b91fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.vue?vue&type=template&id=6b91fade */ "./app/javascript/template_builder/logo.vue?vue&type=template&id=6b91fade");
/* harmony import */ var _logo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/logo.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_logo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_logo_vue_vue_type_template_id_6b91fade__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/logo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/mobile_draw_field.vue":
/*!***************************************************************!*\
  !*** ./app/javascript/template_builder/mobile_draw_field.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mobile_draw_field_vue_vue_type_template_id_71223b4e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile_draw_field.vue?vue&type=template&id=71223b4e */ "./app/javascript/template_builder/mobile_draw_field.vue?vue&type=template&id=71223b4e");
/* harmony import */ var _mobile_draw_field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile_draw_field.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/mobile_draw_field.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_mobile_draw_field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_mobile_draw_field_vue_vue_type_template_id_71223b4e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/mobile_draw_field.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/mobile_fields.vue":
/*!***********************************************************!*\
  !*** ./app/javascript/template_builder/mobile_fields.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mobile_fields_vue_vue_type_template_id_139036d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile_fields.vue?vue&type=template&id=139036d3 */ "./app/javascript/template_builder/mobile_fields.vue?vue&type=template&id=139036d3");
/* harmony import */ var _mobile_fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile_fields.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/mobile_fields.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_mobile_fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_mobile_fields_vue_vue_type_template_id_139036d3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/mobile_fields.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/page.vue":
/*!**************************************************!*\
  !*** ./app/javascript/template_builder/page.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_vue_vue_type_template_id_25f285c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.vue?vue&type=template&id=25f285c2 */ "./app/javascript/template_builder/page.vue?vue&type=template&id=25f285c2");
/* harmony import */ var _page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/page.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_page_vue_vue_type_template_id_25f285c2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/page.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/payment_settings.vue":
/*!**************************************************************!*\
  !*** ./app/javascript/template_builder/payment_settings.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payment_settings_vue_vue_type_template_id_4282d66f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment_settings.vue?vue&type=template&id=4282d66f */ "./app/javascript/template_builder/payment_settings.vue?vue&type=template&id=4282d66f");
/* harmony import */ var _payment_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment_settings.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/payment_settings.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_payment_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_payment_settings_vue_vue_type_template_id_4282d66f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/payment_settings.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/preview.vue":
/*!*****************************************************!*\
  !*** ./app/javascript/template_builder/preview.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_vue_vue_type_template_id_03f96865__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.vue?vue&type=template&id=03f96865 */ "./app/javascript/template_builder/preview.vue?vue&type=template&id=03f96865");
/* harmony import */ var _preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/preview.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_preview_vue_vue_type_template_id_03f96865__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/preview.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/replace.vue":
/*!*****************************************************!*\
  !*** ./app/javascript/template_builder/replace.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _replace_vue_vue_type_template_id_6a93e151__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replace.vue?vue&type=template&id=6a93e151 */ "./app/javascript/template_builder/replace.vue?vue&type=template&id=6a93e151");
/* harmony import */ var _replace_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replace.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/replace.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_replace_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_replace_vue_vue_type_template_id_6a93e151__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/replace.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/upload.vue":
/*!****************************************************!*\
  !*** ./app/javascript/template_builder/upload.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload_vue_vue_type_template_id_57278d74__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.vue?vue&type=template&id=57278d74 */ "./app/javascript/template_builder/upload.vue?vue&type=template&id=57278d74");
/* harmony import */ var _upload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.vue?vue&type=script&lang=js */ "./app/javascript/template_builder/upload.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_upload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_upload_vue_vue_type_template_id_57278d74__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/template_builder/upload.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/template_builder/area.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./app/javascript/template_builder/area.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_area_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_area_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./area.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/area.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/builder.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./app/javascript/template_builder/builder.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_builder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_builder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./builder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/builder.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/conditions_modal.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./app/javascript/template_builder/conditions_modal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_conditions_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_conditions_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./conditions_modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/conditions_modal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/contenteditable.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./app/javascript/template_builder/contenteditable.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_contenteditable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_contenteditable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./contenteditable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/contenteditable.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/controls.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./app/javascript/template_builder/controls.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_controls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_controls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./controls.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/controls.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/description_modal.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./app/javascript/template_builder/description_modal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_description_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_description_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./description_modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/description_modal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/document.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./app/javascript/template_builder/document.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./document.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/document.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/dropzone.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./app/javascript/template_builder/dropzone.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./dropzone.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/dropzone.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/field.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./app/javascript/template_builder/field.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./field.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/field_settings.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./app/javascript/template_builder/field_settings.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./field_settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_settings.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/field_submitter.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./app/javascript/template_builder/field_submitter.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_submitter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_submitter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./field_submitter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_submitter.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/field_type.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./app/javascript/template_builder/field_type.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_type_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_type_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./field_type.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_type.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/fields.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./app/javascript/template_builder/fields.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./fields.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/fields.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/formula_modal.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./app/javascript/template_builder/formula_modal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_formula_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_formula_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./formula_modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/formula_modal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/icon_drag.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./app/javascript/template_builder/icon_drag.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_icon_drag_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_icon_drag_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./icon_drag.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/icon_drag.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/import_list.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./app/javascript/template_builder/import_list.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_import_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_import_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./import_list.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/import_list.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/logo.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./app/javascript/template_builder/logo.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_logo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_logo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./logo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/logo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/mobile_draw_field.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./app/javascript/template_builder/mobile_draw_field.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_mobile_draw_field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_mobile_draw_field_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./mobile_draw_field.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/mobile_draw_field.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/mobile_fields.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./app/javascript/template_builder/mobile_fields.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_mobile_fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_mobile_fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./mobile_fields.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/mobile_fields.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/page.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./app/javascript/template_builder/page.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./page.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/page.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/payment_settings.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./app/javascript/template_builder/payment_settings.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_payment_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_payment_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./payment_settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/payment_settings.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/preview.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./app/javascript/template_builder/preview.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./preview.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/preview.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/replace.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./app/javascript/template_builder/replace.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_replace_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_replace_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./replace.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/replace.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/upload.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./app/javascript/template_builder/upload.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_upload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_upload_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./upload.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/upload.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/template_builder/area.vue?vue&type=template&id=e12e7680":
/*!********************************************************************************!*\
  !*** ./app/javascript/template_builder/area.vue?vue&type=template&id=e12e7680 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_area_vue_vue_type_template_id_e12e7680__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_area_vue_vue_type_template_id_e12e7680__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./area.vue?vue&type=template&id=e12e7680 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/area.vue?vue&type=template&id=e12e7680");


/***/ }),

/***/ "./app/javascript/template_builder/builder.vue?vue&type=template&id=14575a90":
/*!***********************************************************************************!*\
  !*** ./app/javascript/template_builder/builder.vue?vue&type=template&id=14575a90 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_builder_vue_vue_type_template_id_14575a90__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_builder_vue_vue_type_template_id_14575a90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./builder.vue?vue&type=template&id=14575a90 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/builder.vue?vue&type=template&id=14575a90");


/***/ }),

/***/ "./app/javascript/template_builder/conditions_modal.vue?vue&type=template&id=f57e8cce":
/*!********************************************************************************************!*\
  !*** ./app/javascript/template_builder/conditions_modal.vue?vue&type=template&id=f57e8cce ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_conditions_modal_vue_vue_type_template_id_f57e8cce__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_conditions_modal_vue_vue_type_template_id_f57e8cce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./conditions_modal.vue?vue&type=template&id=f57e8cce */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/conditions_modal.vue?vue&type=template&id=f57e8cce");


/***/ }),

/***/ "./app/javascript/template_builder/contenteditable.vue?vue&type=template&id=1e6c36fa":
/*!*******************************************************************************************!*\
  !*** ./app/javascript/template_builder/contenteditable.vue?vue&type=template&id=1e6c36fa ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_contenteditable_vue_vue_type_template_id_1e6c36fa__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_contenteditable_vue_vue_type_template_id_1e6c36fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./contenteditable.vue?vue&type=template&id=1e6c36fa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/contenteditable.vue?vue&type=template&id=1e6c36fa");


/***/ }),

/***/ "./app/javascript/template_builder/controls.vue?vue&type=template&id=6f5b78e9":
/*!************************************************************************************!*\
  !*** ./app/javascript/template_builder/controls.vue?vue&type=template&id=6f5b78e9 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_controls_vue_vue_type_template_id_6f5b78e9__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_controls_vue_vue_type_template_id_6f5b78e9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./controls.vue?vue&type=template&id=6f5b78e9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/controls.vue?vue&type=template&id=6f5b78e9");


/***/ }),

/***/ "./app/javascript/template_builder/description_modal.vue?vue&type=template&id=4d6193f2":
/*!*********************************************************************************************!*\
  !*** ./app/javascript/template_builder/description_modal.vue?vue&type=template&id=4d6193f2 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_description_modal_vue_vue_type_template_id_4d6193f2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_description_modal_vue_vue_type_template_id_4d6193f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./description_modal.vue?vue&type=template&id=4d6193f2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/description_modal.vue?vue&type=template&id=4d6193f2");


/***/ }),

/***/ "./app/javascript/template_builder/document.vue?vue&type=template&id=773d48ce":
/*!************************************************************************************!*\
  !*** ./app/javascript/template_builder/document.vue?vue&type=template&id=773d48ce ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_vue_vue_type_template_id_773d48ce__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_document_vue_vue_type_template_id_773d48ce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./document.vue?vue&type=template&id=773d48ce */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/document.vue?vue&type=template&id=773d48ce");


/***/ }),

/***/ "./app/javascript/template_builder/dropzone.vue?vue&type=template&id=1aa0bace":
/*!************************************************************************************!*\
  !*** ./app/javascript/template_builder/dropzone.vue?vue&type=template&id=1aa0bace ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dropzone_vue_vue_type_template_id_1aa0bace__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dropzone_vue_vue_type_template_id_1aa0bace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./dropzone.vue?vue&type=template&id=1aa0bace */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/dropzone.vue?vue&type=template&id=1aa0bace");


/***/ }),

/***/ "./app/javascript/template_builder/field.vue?vue&type=template&id=9c8e0c52":
/*!*********************************************************************************!*\
  !*** ./app/javascript/template_builder/field.vue?vue&type=template&id=9c8e0c52 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_vue_vue_type_template_id_9c8e0c52__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_vue_vue_type_template_id_9c8e0c52__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./field.vue?vue&type=template&id=9c8e0c52 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field.vue?vue&type=template&id=9c8e0c52");


/***/ }),

/***/ "./app/javascript/template_builder/field_settings.vue?vue&type=template&id=23787ebb":
/*!******************************************************************************************!*\
  !*** ./app/javascript/template_builder/field_settings.vue?vue&type=template&id=23787ebb ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_settings_vue_vue_type_template_id_23787ebb__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_settings_vue_vue_type_template_id_23787ebb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./field_settings.vue?vue&type=template&id=23787ebb */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_settings.vue?vue&type=template&id=23787ebb");


/***/ }),

/***/ "./app/javascript/template_builder/field_submitter.vue?vue&type=template&id=a96674be":
/*!*******************************************************************************************!*\
  !*** ./app/javascript/template_builder/field_submitter.vue?vue&type=template&id=a96674be ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_submitter_vue_vue_type_template_id_a96674be__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_submitter_vue_vue_type_template_id_a96674be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./field_submitter.vue?vue&type=template&id=a96674be */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_submitter.vue?vue&type=template&id=a96674be");


/***/ }),

/***/ "./app/javascript/template_builder/field_type.vue?vue&type=template&id=7437ae52":
/*!**************************************************************************************!*\
  !*** ./app/javascript/template_builder/field_type.vue?vue&type=template&id=7437ae52 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_type_vue_vue_type_template_id_7437ae52__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_field_type_vue_vue_type_template_id_7437ae52__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./field_type.vue?vue&type=template&id=7437ae52 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/field_type.vue?vue&type=template&id=7437ae52");


/***/ }),

/***/ "./app/javascript/template_builder/fields.vue?vue&type=template&id=eddc3ba8":
/*!**********************************************************************************!*\
  !*** ./app/javascript/template_builder/fields.vue?vue&type=template&id=eddc3ba8 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_fields_vue_vue_type_template_id_eddc3ba8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_fields_vue_vue_type_template_id_eddc3ba8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./fields.vue?vue&type=template&id=eddc3ba8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/fields.vue?vue&type=template&id=eddc3ba8");


/***/ }),

/***/ "./app/javascript/template_builder/formula_modal.vue?vue&type=template&id=68fd1d1e":
/*!*****************************************************************************************!*\
  !*** ./app/javascript/template_builder/formula_modal.vue?vue&type=template&id=68fd1d1e ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_formula_modal_vue_vue_type_template_id_68fd1d1e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_formula_modal_vue_vue_type_template_id_68fd1d1e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./formula_modal.vue?vue&type=template&id=68fd1d1e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/formula_modal.vue?vue&type=template&id=68fd1d1e");


/***/ }),

/***/ "./app/javascript/template_builder/icon_drag.vue?vue&type=template&id=3bed9b97":
/*!*************************************************************************************!*\
  !*** ./app/javascript/template_builder/icon_drag.vue?vue&type=template&id=3bed9b97 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_icon_drag_vue_vue_type_template_id_3bed9b97__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_icon_drag_vue_vue_type_template_id_3bed9b97__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./icon_drag.vue?vue&type=template&id=3bed9b97 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/icon_drag.vue?vue&type=template&id=3bed9b97");


/***/ }),

/***/ "./app/javascript/template_builder/import_list.vue?vue&type=template&id=664b5715":
/*!***************************************************************************************!*\
  !*** ./app/javascript/template_builder/import_list.vue?vue&type=template&id=664b5715 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_import_list_vue_vue_type_template_id_664b5715__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_import_list_vue_vue_type_template_id_664b5715__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./import_list.vue?vue&type=template&id=664b5715 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/import_list.vue?vue&type=template&id=664b5715");


/***/ }),

/***/ "./app/javascript/template_builder/logo.vue?vue&type=template&id=6b91fade":
/*!********************************************************************************!*\
  !*** ./app/javascript/template_builder/logo.vue?vue&type=template&id=6b91fade ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_logo_vue_vue_type_template_id_6b91fade__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_logo_vue_vue_type_template_id_6b91fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./logo.vue?vue&type=template&id=6b91fade */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/logo.vue?vue&type=template&id=6b91fade");


/***/ }),

/***/ "./app/javascript/template_builder/mobile_draw_field.vue?vue&type=template&id=71223b4e":
/*!*********************************************************************************************!*\
  !*** ./app/javascript/template_builder/mobile_draw_field.vue?vue&type=template&id=71223b4e ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_mobile_draw_field_vue_vue_type_template_id_71223b4e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_mobile_draw_field_vue_vue_type_template_id_71223b4e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./mobile_draw_field.vue?vue&type=template&id=71223b4e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/mobile_draw_field.vue?vue&type=template&id=71223b4e");


/***/ }),

/***/ "./app/javascript/template_builder/mobile_fields.vue?vue&type=template&id=139036d3":
/*!*****************************************************************************************!*\
  !*** ./app/javascript/template_builder/mobile_fields.vue?vue&type=template&id=139036d3 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_mobile_fields_vue_vue_type_template_id_139036d3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_mobile_fields_vue_vue_type_template_id_139036d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./mobile_fields.vue?vue&type=template&id=139036d3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/mobile_fields.vue?vue&type=template&id=139036d3");


/***/ }),

/***/ "./app/javascript/template_builder/page.vue?vue&type=template&id=25f285c2":
/*!********************************************************************************!*\
  !*** ./app/javascript/template_builder/page.vue?vue&type=template&id=25f285c2 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_vue_vue_type_template_id_25f285c2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_vue_vue_type_template_id_25f285c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./page.vue?vue&type=template&id=25f285c2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/page.vue?vue&type=template&id=25f285c2");


/***/ }),

/***/ "./app/javascript/template_builder/payment_settings.vue?vue&type=template&id=4282d66f":
/*!********************************************************************************************!*\
  !*** ./app/javascript/template_builder/payment_settings.vue?vue&type=template&id=4282d66f ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_payment_settings_vue_vue_type_template_id_4282d66f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_payment_settings_vue_vue_type_template_id_4282d66f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./payment_settings.vue?vue&type=template&id=4282d66f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/payment_settings.vue?vue&type=template&id=4282d66f");


/***/ }),

/***/ "./app/javascript/template_builder/preview.vue?vue&type=template&id=03f96865":
/*!***********************************************************************************!*\
  !*** ./app/javascript/template_builder/preview.vue?vue&type=template&id=03f96865 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_preview_vue_vue_type_template_id_03f96865__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_preview_vue_vue_type_template_id_03f96865__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./preview.vue?vue&type=template&id=03f96865 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/preview.vue?vue&type=template&id=03f96865");


/***/ }),

/***/ "./app/javascript/template_builder/replace.vue?vue&type=template&id=6a93e151":
/*!***********************************************************************************!*\
  !*** ./app/javascript/template_builder/replace.vue?vue&type=template&id=6a93e151 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_replace_vue_vue_type_template_id_6a93e151__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_replace_vue_vue_type_template_id_6a93e151__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./replace.vue?vue&type=template&id=6a93e151 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/replace.vue?vue&type=template&id=6a93e151");


/***/ }),

/***/ "./app/javascript/template_builder/upload.vue?vue&type=template&id=57278d74":
/*!**********************************************************************************!*\
  !*** ./app/javascript/template_builder/upload.vue?vue&type=template&id=57278d74 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_upload_vue_vue_type_template_id_57278d74__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_upload_vue_vue_type_template_id_57278d74__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./upload.vue?vue&type=template&id=57278d74 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/template_builder/upload.vue?vue&type=template&id=57278d74");


/***/ }),

/***/ "./app/javascript/images/preview.png":
/*!*******************************************!*\
  !*** ./app/javascript/images/preview.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/images/preview-af2864e86d25c67ec9e9.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".chunk.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "uvtsign:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/packs/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"application": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkuvtsign"] = self["webpackChunkuvtsign"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["applicationVendors-node_modules_hotwired_turbo-rails_app_javascript_turbo_fetch_requests_js-n-1fcf2b"], () => (__webpack_require__("./app/javascript/application.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["applicationVendors-node_modules_hotwired_turbo-rails_app_javascript_turbo_fetch_requests_js-n-1fcf2b"], () => (__webpack_require__("./app/javascript/application.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=application.js.map