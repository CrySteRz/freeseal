/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/javascript/draw.js":
/*!********************************!*\
  !*** ./app/javascript/draw.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signature_pad */ "./node_modules/signature_pad/dist/signature_pad.js");
/* harmony import */ var _submission_form_crop_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submission_form/crop_canvas */ "./app/javascript/submission_form/crop_canvas.js");


window.customElements.define('draw-signature', class extends HTMLElement {
  connectedCallback() {
    const scale = 3;
    this.canvas.width = this.canvas.parentNode.clientWidth * scale;
    this.canvas.height = this.canvas.parentNode.clientHeight * scale;
    this.canvas.getContext('2d').scale(scale, scale);
    this.pad = new signature_pad__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas);
    this.pad.addEventListener('endStroke', () => {
      this.updateSubmitButtonVisibility();
    });
    this.clearButton.addEventListener('click', e => {
      e.preventDefault();
      this.clearSignaturePad();
    });
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.submitButton.disabled = true;
      this.submitImage().then(data => {
        this.valueInput.value = data.uuid;
        return fetch(this.form.action, {
          method: 'PUT',
          body: new FormData(this.form)
        }).then(response => {
          this.form.classList.add('hidden');
          this.success.classList.remove('hidden');
          return response;
        });
      }).finally(() => {
        this.submitButton.disabled = false;
      });
    });
  }
  clearSignaturePad() {
    this.pad.clear();
    this.updateSubmitButtonVisibility();
  }
  updateSubmitButtonVisibility() {
    if (this.pad.isEmpty()) {
      this.submitButton.style.display = 'none';
      this.placeholderButton.style.display = 'block';
    } else {
      this.submitButton.style.display = 'block';
      this.placeholderButton.style.display = 'none';
    }
  }
  async submitImage() {
    return new Promise((resolve, reject) => {
      (0,_submission_form_crop_canvas__WEBPACK_IMPORTED_MODULE_1__.cropCanvasAndExportToPNG)(this.canvas, {
        errorOnTooSmall: true
      }).then(async blob => {
        const file = new File([blob], 'signature.png', {
          type: 'image/png'
        });
        const formData = new FormData();
        formData.append('file', file);
        formData.append('submitter_slug', this.dataset.slug);
        formData.append('name', 'attachments');
        return fetch('/api/attachments', {
          method: 'POST',
          body: formData
        }).then(resp => resp.json()).then(attachment => {
          return resolve(attachment);
        });
      }).catch(error => {
        return reject(error);
      });
    });
  }
  get submitButton() {
    return this.querySelector('button[type="submit"]');
  }
  get clearButton() {
    return this.querySelector('button[aria-label="Clear"]');
  }
  get placeholderButton() {
    return this.querySelector('button[disabled]');
  }
  get canvas() {
    return this.querySelector('canvas');
  }
  get valueInput() {
    return this.querySelector('input[name^="values"]');
  }
  get form() {
    return this.querySelector('form');
  }
  get success() {
    return this.querySelector('#success');
  }
});

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"draw": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["drawVendors-node_modules_signature_pad_dist_signature_pad_js"], () => (__webpack_require__("./app/javascript/draw.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=draw.js.map