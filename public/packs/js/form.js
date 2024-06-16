/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./app/javascript/elements/toggle_submit.js":
/*!**************************************************!*\
  !*** ./app/javascript/elements/toggle_submit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class extends HTMLElement {
  connectedCallback() {
    this.button.disabled = false;
    this.form.addEventListener('submit', () => {
      this.button.disabled = true;
    });
  }
  disconnectedCallback() {
    this.button.disabled = false;
  }
  get button() {
    return this.querySelector('[type="submit"]');
  }
  get form() {
    return this.querySelector('form') || this.closest('form');
  }
});

/***/ }),

/***/ "./app/javascript/form.js":
/*!********************************!*\
  !*** ./app/javascript/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _submission_form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submission_form/form */ "./app/javascript/submission_form/form.vue");
/* harmony import */ var _elements_download_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/download_button */ "./app/javascript/elements/download_button.js");
/* harmony import */ var _elements_toggle_submit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/toggle_submit */ "./app/javascript/elements/toggle_submit.js");




const safeRegisterElement = (name, element, options = {}) => !window.customElements.get(name) && window.customElements.define(name, element, options);
safeRegisterElement('download-button', _elements_download_button__WEBPACK_IMPORTED_MODULE_2__["default"]);
safeRegisterElement('toggle-submit', _elements_toggle_submit__WEBPACK_IMPORTED_MODULE_3__["default"]);
safeRegisterElement('submission-form', class extends HTMLElement {
  connectedCallback() {
    this.appElem = document.createElement('div');
    this.app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_submission_form_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
      submitter: JSON.parse(this.dataset.submitter),
      canSendEmail: this.dataset.canSendEmail === 'true',
      goToLast: this.dataset.goToLast === 'true',
      isDemo: this.dataset.isDemo === 'true',
      attribution: this.dataset.attribution !== 'false',
      withConfetti: this.dataset.withConfetti !== 'false',
      withDisclosure: this.dataset.withDisclosure === 'true',
      withTypedSignature: this.dataset.withTypedSignature !== 'false',
      authenticityToken: document.querySelector('meta[name="csrf-token"]')?.content,
      values: (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(JSON.parse(this.dataset.values)),
      completedButton: JSON.parse(this.dataset.completedButton || '{}'),
      withQrButton: true,
      completedMessage: JSON.parse(this.dataset.completedMessage || '{}'),
      completedRedirectUrl: this.dataset.completedRedirectUrl,
      attachments: (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(JSON.parse(this.dataset.attachments)),
      fields: JSON.parse(this.dataset.fields)
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

/***/ "./app/javascript/submission_form/i18n.js":
/*!************************************************!*\
  !*** ./app/javascript/submission_form/i18n.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const en = {
  text: 'Text',
  by_clicking_you_agree_to_the: 'By clicking "{button}", you agree to the',
  electronic_signature_disclosure: 'Electronic Signature Disclosure',
  esignature_disclosure: 'eSignature Disclosure',
  signature: 'Signature',
  initials: 'Initials',
  drawn_signature_on_a_touchscreen_device: 'Drawn signature on a touchscreen device',
  scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: 'Scan the QR code with the camera app to open the form on mobile and draw your signature',
  date: 'Date',
  number: 'Number',
  image: 'Image',
  take_photo: 'Take photo',
  file: 'File',
  select: 'Select',
  checkbox: 'Checkbox',
  multiple: 'Multiple',
  radio: 'Radio',
  cells: 'Cells',
  stamp: 'Stamp',
  minimize: 'Minimize',
  payment: 'Payment',
  phone: 'Phone',
  submit_form: 'Submit Form',
  sign_now: 'Sign Now',
  type_here_: 'Type here...',
  optional: 'optional',
  option: 'Option',
  appears_on: 'Appears on',
  page: 'Page',
  select_your_option: 'Select your option',
  complete_hightlighted_checkboxes_and_click: 'Complete highlighted checkboxes and click',
  submit: 'submit',
  next: 'next',
  click_to_upload: 'Click to upload',
  or_drag_and_drop_files: 'or drag and drop files',
  send_copy_via_email: 'Send copy via email',
  download: 'Download',
  clear: 'Clear',
  redraw: 'Redraw',
  draw_initials: 'Draw initials',
  type_signature_here: 'Type signature here',
  type_initial_here: 'Type initials here',
  form_has_been_completed: 'Form has been completed!',
  create_a_free_account: 'Create a Free Account',
  signed_with: 'Signed with',
  please_check_the_box_to_continue: 'Please check the box to continue',
  open_source_documents_software: 'open source documents software',
  verified_phone_number: 'Verify Phone Number',
  use_international_format: 'Use international format: +1xxx',
  six_digits_code: '6-digit code',
  change_phone_number: 'Change phone number',
  sending: 'Sending...',
  resend_code: 'Re-send code',
  verification_code_has_been_resent: 'Verification code has been re-sent via SMS',
  please_fill_all_required_fields: 'Please fill all required fields',
  set_today: 'Set Today',
  toggle_multiline_text: 'Toggle Multiline Text',
  draw_signature: 'Draw signature',
  type_initial: 'Type initials',
  draw: 'Draw',
  type: 'Type',
  type_text: 'Type text',
  email_has_been_sent: 'Email has been sent',
  processing: 'Processing',
  pay_with_strip: 'Pay with Stripe',
  reupload: 'Reupload',
  upload: 'Upload',
  files: 'Files'
};
const es = {
  drawn_signature_on_a_touchscreen_device: 'Firma dibujada en un dispositivo con pantalla táctil',
  scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: 'Escanea el código QR con la aplicación de la cámara para abrir el formulario en el móvil y dibujar tu firma',
  by_clicking_you_agree_to_the: 'Al hacer clic en "{button}", usted acepta el',
  electronic_signature_disclosure: 'Divulgación de Firma Electrónica',
  esignature_disclosure: 'Divulgación de eFirma',
  minimize: 'Minimizar',
  text: 'Texto',
  signature: 'Firma',
  initials: 'Iniciales',
  date: 'Fecha',
  number: 'Número',
  image: 'Imagen',
  file: 'Archivo',
  select: 'Seleccionar',
  checkbox: 'Casilla',
  multiple: 'Múltiple',
  radio: 'Radio',
  cells: 'Celdas',
  stamp: 'Sello',
  payment: 'Pago',
  phone: 'Teléfono',
  take_photo: 'Tomar foto',
  submit_form: 'Enviar Formulario',
  sign_now: 'Firmar ahora',
  type_here_: 'Escribe aquí...',
  optional: 'opcional',
  appears_on: 'Aparece en',
  page: 'Página',
  select_your_option: 'Selecciona tu opción',
  complete_hightlighted_checkboxes_and_click: 'Completa las casillas resaltadas y haz clic',
  submit: 'enviar',
  next: 'siguiente',
  click_to_upload: 'Haz clic para cargar',
  or_drag_and_drop_files: 'o arrastra y suelta archivos',
  send_copy_via_email: 'Enviar copia por correo electrónico',
  download: 'Descargar',
  clear: 'Borrar',
  redraw: 'Redibujar',
  draw_initials: 'Dibujar iniciales',
  type_signature_here: 'Escribe la firma aquí',
  type_initial_here: 'Escribe las iniciales aquí',
  form_has_been_completed: '¡El formulario ha sido completado!',
  create_a_free_account: 'Crear una Cuenta Gratuita',
  signed_with: 'Firmado con',
  please_check_the_box_to_continue: 'Por favor marque la casilla para continuar',
  open_source_documents_software: 'software de documentos de código abierto',
  verified_phone_number: 'Verificar número de teléfono',
  use_international_format: 'Usar formato internacional: +1xxx',
  six_digits_code: 'Código de 6 dígitos',
  change_phone_number: 'Cambiar número de teléfono',
  sending: 'Enviando...',
  resend_code: 'Reenviar código',
  verification_code_has_been_resent: 'El código de verificación ha sido reenviado por SMS',
  please_fill_all_required_fields: 'Por favor, complete todos los campos obligatorios',
  set_today: 'Establecer Hoy',
  toggle_multiline_text: 'Alternar Texto Multilínea',
  draw_signature: 'Dibujar firma',
  type_initial: 'Escribir iniciales',
  draw: 'Dibujar',
  type: 'Escribir',
  type_text: 'Escribir texto',
  email_has_been_sent: 'El correo electrónico ha sido enviado',
  processing: 'Procesando',
  pay_with_strip: 'Pagar con Stripe',
  reupload: 'Volver a subir',
  upload: 'Subir',
  files: 'Archivos'
};
const it = {
  drawn_signature_on_a_touchscreen_device: 'Firma disegnata su un dispositivo con schermo tattile',
  scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: 'Scansiona il codice QR con l\'app della fotocamera per aprire il modulo sul cellulare e disegnare la tua firma',
  by_clicking_you_agree_to_the: 'Cliccando su "{button}", accetti il',
  electronic_signature_disclosure: 'Divulgazione della Firma Elettronica',
  esignature_disclosure: 'Divulgazione della eFirma',
  minimize: 'Minimizza',
  text: 'Testo',
  signature: 'Firma',
  initials: 'Iniziali',
  date: 'Data',
  number: 'Numero',
  image: 'Immagine',
  file: 'File',
  select: 'Seleziona',
  checkbox: 'Casella di controllo',
  multiple: 'Multiplo',
  radio: 'Radio',
  cells: 'Celle',
  stamp: 'Timbro',
  payment: 'Pagamento',
  phone: 'Telefono',
  submit_form: 'Invia Modulo',
  sign_now: 'Firma ora',
  type_here_: 'Digita qui...',
  optional: 'opzionale',
  appears_on: 'Compare su',
  page: 'Pagina',
  take_photo: 'Scattare una foto',
  select_your_option: 'Seleziona la tua opzione',
  complete_hightlighted_checkboxes_and_click: 'Completa le caselle evidenziate e fai clic',
  submit: 'invia',
  next: 'avanti',
  click_to_upload: 'Clicca per caricare',
  or_drag_and_drop_files: 'oppure trascina e rilascia i file',
  send_copy_via_email: 'Invia copia via email',
  download: 'Scarica',
  clear: 'Cancella',
  redraw: 'Ridisegna',
  draw_initials: 'Disegna iniziali',
  type_signature_here: 'Scrivi la firma qui',
  type_initial_here: 'Scrivi le iniziali qui',
  form_has_been_completed: 'Il modulo è stato completato!',
  create_a_free_account: 'Crea un Account Gratuito',
  signed_with: 'Firmato con',
  please_check_the_box_to_continue: 'Si prega di spuntare la casella per continuare',
  open_source_documents_software: 'software di documenti open source',
  verified_phone_number: 'Verifica numero di telefono',
  use_international_format: 'Usa formato internazionale: +1xxx',
  six_digits_code: 'Codice a 6 cifre',
  change_phone_number: 'Cambia numero di telefono',
  sending: 'Invio in corso...',
  resend_code: 'Rinvia codice',
  verification_code_has_been_resent: 'Il codice di verifica è stato rinviato tramite SMS',
  please_fill_all_required_fields: 'Si prega di compilare tutti i campi obbligatori',
  set_today: 'Imposta Oggi',
  draw_signature: 'Disegna firma',
  type_initial: 'Inserisci iniziali',
  draw: 'Disegna',
  type: 'Inserisci',
  type_text: 'Inserisci testo',
  toggle_multiline_text: 'Attiva Testo Multilinea',
  email_has_been_sent: "L'email è stata inviata",
  processing: 'Elaborazione',
  pay_with_strip: 'Paga con Stripe',
  reupload: 'Ricarica',
  upload: 'Carica',
  files: 'File'
};
const de = {
  drawn_signature_on_a_touchscreen_device: 'Gezeichnete Unterschrift auf einem Touchscreen-Gerät',
  scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: 'Scannen Sie den QR-Code mit der Kamera-App, um das Formular auf dem Handy zu öffnen und Ihre Unterschrift zu zeichnen',
  by_clicking_you_agree_to_the: 'Durch Klicken auf "{button}" stimmen Sie zu, dass Sie die',
  electronic_signature_disclosure: 'Elektronische Unterschriftenoffenlegung',
  esignature_disclosure: 'eSignatur Offenlegung',
  minimize: 'Minimieren',
  text: 'Text',
  signature: 'Unterschrift',
  initials: 'Initialen',
  date: 'Datum',
  number: 'Nummer',
  image: 'Bild',
  file: 'Datei',
  select: 'Auswählen',
  checkbox: 'Checkbox',
  multiple: 'Mehrere',
  radio: 'Radio',
  cells: 'Zellen',
  stamp: 'Stempel',
  payment: 'Zahlung',
  phone: 'Telefon',
  submit_form: 'Formular absenden',
  sign_now: 'Jetzt unterschreiben',
  type_here_: 'Hier eingeben...',
  optional: 'optional',
  appears_on: 'Erscheint auf',
  page: 'Seite',
  take_photo: 'Foto aufnehmen',
  select_your_option: 'Wähle deine Option',
  complete_hightlighted_checkboxes_and_click: 'Markierte Kontrollkästchen ausfüllen und klicken',
  submit: 'absenden',
  next: 'weiter',
  click_to_upload: 'Klicken zum Hochladen',
  or_drag_and_drop_files: 'oder Dateien hierher ziehen und ablegen',
  send_copy_via_email: 'Kopie per E-Mail senden',
  download: 'Herunterladen',
  clear: 'Löschen',
  redraw: 'Neu zeichnen',
  draw_initials: 'Initialen zeichnen',
  type_signature_here: 'Unterschrift hier eingeben',
  type_initial_here: 'Initialen hier eingeben',
  form_has_been_completed: 'Formular wurde ausgefüllt!',
  create_a_free_account: 'Kostenloses Konto erstellen',
  signed_with: 'Unterschrieben mit',
  please_check_the_box_to_continue: 'Bitte setzen Sie das Häkchen, um fortzufahren',
  open_source_documents_software: 'Open-Source-Dokumentensoftware',
  verified_phone_number: 'Telefonnummer überprüfen',
  use_international_format: 'Internationales Format verwenden: +1xxx',
  six_digits_code: '6-stelliger Code',
  change_phone_number: 'Telefonnummer ändern',
  sending: 'Senden...',
  resend_code: 'Code erneut senden',
  verification_code_has_been_resent: 'Die Verifizierungscode wurde erneut per SMS gesendet',
  please_fill_all_required_fields: 'Bitte füllen Sie alle erforderlichen Felder aus',
  set_today: 'Heute einstellen',
  draw_signature: 'Unterschrift zeichnen',
  type_initial: 'Initialen eingeben',
  draw: 'Zeichnen',
  type: 'Eingeben',
  type_text: 'Text eingeben',
  toggle_multiline_text: 'Mehrzeiligen Text umschalten',
  email_has_been_sent: 'Die E-Mail wurde gesendet',
  processing: 'Verarbeitung',
  pay_with_strip: 'Mit Stripe bezahlen',
  reupload: 'Erneut hochladen',
  upload: 'Hochladen',
  files: 'Dateien'
};
const fr = {
  drawn_signature_on_a_touchscreen_device: 'Signature dessinée sur un appareil à écran tactile',
  scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: 'Scannez le code QR avec l\'application de l\'appareil photo pour ouvrir le formulaire sur mobile et dessiner votre signature',
  by_clicking_you_agree_to_the: 'En cliquant sur "{button}", vous acceptez la',
  electronic_signature_disclosure: 'Divulgation de Signature Électronique',
  esignature_disclosure: 'Divulgation de la eSignature',
  minimize: 'Réduire',
  text: 'Texte',
  signature: 'Signature',
  initials: 'Initiales',
  date: 'Date',
  number: 'Numéro',
  image: 'Image',
  file: 'Fichier',
  select: 'Choisir',
  checkbox: 'Coche',
  multiple: 'Multiple',
  radio: 'Radio',
  cells: 'Cellules',
  stamp: 'Tampon',
  payment: 'Paiement',
  phone: 'Téléphone',
  submit_form: 'Envoyer le Formulaire',
  sign_now: 'Signer maintenant',
  type_here_: 'Tapez ici...',
  optional: 'facultatif',
  appears_on: 'Apparaît sur',
  page: 'Page',
  take_photo: 'Prendre une photo',
  select_your_option: 'Sélectionnez votre option',
  complete_hightlighted_checkboxes_and_click: 'Complétez les cases à cocher en surbrillance et cliquez',
  submit: 'envoyer',
  next: 'suivant',
  click_to_upload: 'Cliquez pour télécharger',
  or_drag_and_drop_files: 'ou faites glisser-déposer les fichiers',
  send_copy_via_email: 'Envoyer une copie par e-mail',
  download: 'Télécharger',
  clear: 'Effacer',
  redraw: 'Redessiner',
  draw_initials: 'Dessiner les initiales',
  type_signature_here: 'Tapez la signature ici',
  type_initial_here: 'Tapez les initiales ici',
  form_has_been_completed: 'Le formulaire a été complété !',
  create_a_free_account: 'Créer un Compte Gratuit',
  signed_with: 'Signé avec',
  please_check_the_box_to_continue: 'Veuillez cocher la case pour continuer',
  open_source_documents_software: 'logiciel de documents open source',
  verified_phone_number: 'Vérifier le numéro de téléphone',
  use_international_format: 'Utiliser le format international : +1xxx',
  six_digits_code: 'Code à 6 chiffres',
  change_phone_number: 'Changer le numéro de téléphone',
  sending: 'Envoi en cours...',
  resend_code: 'Renvoyer le code',
  verification_code_has_been_resent: 'Le code de vérification a été renvoyé par SMS',
  please_fill_all_required_fields: 'Veuillez remplir tous les champs obligatoires',
  set_today: "Définir Aujourd'hui",
  draw_signature: 'Dessiner une signature',
  type_initial: 'Saisir les initiales',
  draw: 'Dessiner',
  type: 'Saisir',
  type_text: 'Saisir du texte',
  toggle_multiline_text: 'Basculer le Texte Multiligne',
  email_has_been_sent: "L'email a été envoyé",
  processing: 'Traitement',
  pay_with_strip: 'Paiement avec Stripe',
  reupload: 'Recharger',
  upload: 'Télécharger',
  files: 'Fichiers'
};
const pl = {
  drawn_signature_on_a_touchscreen_device: 'Podpis odręczny na urządzeniu z ekranem dotykowym',
  scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: 'Zeskanuj kod QR za pomocą aplikacji aparatu, aby otworzyć formularz na telefonie i narysować swój podpis',
  by_clicking_you_agree_to_the: 'Klikając na "{button}", zgadzasz się na',
  electronic_signature_disclosure: 'Ujawnienie Elektronicznej Sygnatury',
  esignature_disclosure: 'Ujawnienie ePodpisu',
  minimize: 'Zminimalizuj',
  text: 'Tekst',
  signature: 'Podpis',
  initials: 'Inicjały',
  date: 'Data',
  number: 'Numer',
  image: 'Obraz',
  file: 'Plik',
  select: 'Wybierz',
  checkbox: 'Pole wyboru',
  multiple: 'Wielokrotne',
  radio: 'Radio',
  cells: 'Komórki',
  stamp: 'Pieczątka',
  payment: 'Płatność',
  phone: 'Telefon',
  submit_form: 'Wyślij Formularz',
  sign_now: 'Podpisz teraz',
  type_here_: 'Wpisz tutaj...',
  optional: 'opcjonalny',
  appears_on: 'Pojawia się na',
  page: 'Strona',
  select_your_option: 'Wybierz swoją opcję',
  complete_hightlighted_checkboxes_and_click: 'Wypełnij zaznaczone pola wyboru i kliknij',
  submit: 'wyślij',
  next: 'dalej',
  take_photo: 'Zrób zdjęcie',
  click_to_upload: 'Kliknij, aby przesłać',
  or_drag_and_drop_files: 'lub przeciągnij i upuść pliki',
  send_copy_via_email: 'Wyślij kopię drogą mailową',
  download: 'Pobierz',
  clear: 'Wyczyść',
  redraw: 'Przerysuj',
  draw_initials: 'Narysuj inicjały',
  type_signature_here: 'Wpisz podpis tutaj',
  type_initial_here: 'Wpisz inicjały tutaj',
  form_has_been_completed: 'Formularz został wypełniony!',
  create_a_free_account: 'Utwórz darmowe konto',
  signed_with: 'Podpisane za pomocą',
  please_check_the_box_to_continue: 'Proszę zaznaczyć pole, aby kontynuować',
  open_source_documents_software: 'oprogramowanie do dokumentów open source',
  verified_phone_number: 'Zweryfikuj numer telefonu',
  use_international_format: 'Użyj międzynarodowego formatu: +1xxx',
  six_digits_code: '6-cyfrowy kod',
  change_phone_number: 'Zmień numer telefonu',
  sending: 'Wysyłanie...',
  resend_code: 'Ponownie wyślij kod',
  verification_code_has_been_resent: 'Kod weryfikacyjny został ponownie wysłany',
  please_fill_all_required_fields: 'Proszę wypełnić wszystkie wymagane pola',
  set_today: 'Ustaw Dziś',
  draw_signature: 'Rysuj podpis',
  type_initial: 'Wprowadź inicjały',
  draw: 'Rysuj',
  type: 'Wprowadź',
  type_text: 'Wprowadź tekst',
  toggle_multiline_text: 'Przełącz Tekst Wielolinijkowy',
  email_has_been_sent: 'E-mail został wysłany',
  processing: 'Przetwarzanie',
  pay_with_strip: 'Płatność za pomocą Stripe',
  reupload: 'Ponowne przesłanie',
  upload: 'Przesyłanie',
  files: 'Pliki'
};
const uk = {
  drawn_signature_on_a_touchscreen_device: 'Підпис на сенсорному пристрої',
  scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: 'Скануйте QR-код за допомогою програми камери, щоб відкрити форму на мобільному пристрої та намалювати свій підпис',
  by_clicking_you_agree_to_the: 'Натиснувши на "{button}", ви погоджуєтеся з',
  electronic_signature_disclosure: 'Розголошення Електронного Підпису',
  esignature_disclosure: 'Розголошення еПідпису',
  minimize: 'Зменшити',
  text: 'Текст',
  signature: 'Підпис',
  initials: 'Ініціали',
  date: 'Дата',
  number: 'Число',
  image: 'Зображення',
  file: 'Файл',
  select: 'Вибрати',
  checkbox: 'Прапорець',
  multiple: 'Множинний',
  radio: 'Радіо',
  cells: 'Клітинки',
  stamp: 'Штамп',
  payment: 'Платіж',
  phone: 'Телефон',
  submit_form: 'Надіслати Форму',
  sign_now: 'Підписати зараз',
  type_here_: 'Введіть тут',
  optional: 'необов’язково',
  appears_on: "З'являється на",
  page: 'Сторінка',
  take_photo: 'Зробити фото',
  select_your_option: 'Виберіть варіант',
  complete_hightlighted_checkboxes_and_click: 'Заповніть позначені прапорці та натисніть',
  submit: 'надіслати',
  next: 'далі',
  click_to_upload: 'Клацніть, щоб завантажити',
  or_drag_and_drop_files: 'або перетягніть файли сюди',
  send_copy_via_email: 'Надіслати копію електронною поштою',
  download: 'Завантажити',
  clear: 'Очистити',
  redraw: 'Перемалювати',
  draw_initials: 'Намалювати ініціали',
  type_signature_here: 'Введіть підпис тут',
  type_initial_here: 'Введіть ініціали тут',
  form_has_been_completed: 'Форму заповнено!',
  create_a_free_account: 'Створити безкоштовний обліковий запис',
  signed_with: 'Підписано за допомогою',
  please_check_the_box_to_continue: 'Будь ласка, позначте прапорець, щоб продовжити',
  open_source_documents_software: 'відкритий програмний засіб для документів',
  verified_phone_number: 'Підтвердіть номер телефону',
  use_international_format: 'Використовуйте міжнародний формат: +1xxx',
  six_digits_code: '6-значний код',
  change_phone_number: 'Змінити номер телефону',
  sending: 'Надсилаю...',
  resend_code: 'Повторно відправити код',
  verification_code_has_been_resent: 'Код підтвердження був повторно надісланий',
  please_fill_all_required_fields: "Будь ласка, заповніть всі обов'язкові поля",
  set_today: 'Задати Сьогодні',
  draw_signature: 'Намалюйте підпис',
  type_initial: 'Введіть ініціали',
  draw: 'Підпис',
  type: 'Текст',
  type_text: 'Введіть текст',
  toggle_multiline_text: 'Перемкнути Багаторядковий Текст',
  email_has_been_sent: 'Електронний лист був відправлений',
  processing: 'Обробка',
  pay_with_strip: 'Сплатити за допомогою Stripe',
  reupload: 'Перезавантажити',
  upload: 'Завантажити',
  files: 'Файли'
};
const cs = {
  drawn_signature_on_a_touchscreen_device: 'Namalovaný podpis na dotykovém zařízení',
  scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: 'Naskenujte QR kód pomocí aplikace fotoaparátu, abyste otevřeli formulář na mobilním zařízení a nakreslili svůj podpis',
  by_clicking_you_agree_to_the: 'Kliknutím na "{button}" souhlasíte s',
  electronic_signature_disclosure: 'Zveřejněním Elektronického Podpisu',
  esignature_disclosure: 'Zveřejnění ePodpisu',
  minimize: 'Minimalizovat',
  text: 'Text',
  signature: 'Podpis',
  initials: 'Iniciály',
  date: 'Datum',
  number: 'Číslo',
  image: 'Obrázek',
  file: 'Soubor',
  select: 'Vybrat',
  checkbox: 'Zaškrtávací políčko',
  multiple: 'Více možností',
  radio: 'Rádio',
  cells: 'Buňky',
  stamp: 'Razítko',
  payment: 'Platba',
  phone: 'Telefon',
  submit_form: 'Odeslat formulář',
  sign_now: 'Podepsat nyní',
  type_here_: 'Zadejte zde',
  optional: 'volitelné',
  appears_on: 'Zobrazuje se na',
  page: 'Stránka',
  select_your_option: 'Vyberte svou volbu',
  take_photo: 'Fotit',
  complete_hightlighted_checkboxes_and_click: 'Označte zvýrazněné zaškrtávací políčka a klikněte na',
  submit: 'odeslat',
  next: 'další',
  click_to_upload: 'Klikněte pro nahrání',
  or_drag_and_drop_files: 'nebo přetáhněte soubory sem',
  send_copy_via_email: 'Odeslat kopii e-mailem',
  download: 'Stáhnout',
  clear: 'Smazat',
  redraw: 'Překreslit',
  draw_initials: 'Nakreslit iniciály',
  type_signature_here: 'Sem zadejte podpis',
  type_initial_here: 'Sem zadejte iniciály',
  form_has_been_completed: 'Formulář byl dokončen!',
  create_a_free_account: 'Vytvořit bezplatný účet',
  signed_with: 'Podepsáno pomocí',
  please_check_the_box_to_continue: 'Prosím, zaškrtněte políčko pro pokračování',
  open_source_documents_software: 'open source software pro dokumenty',
  verified_phone_number: 'Ověřte telefonní číslo',
  use_international_format: 'Použijte mezinárodní formát: +1xxx',
  six_digits_code: '6-místný kód',
  change_phone_number: 'Změnit telefonní číslo',
  sending: 'Odesílání...',
  resend_code: 'Znovu odeslat kód',
  verification_code_has_been_resent: 'Ověřovací kód byl znovu odeslán',
  please_fill_all_required_fields: 'Prosím vyplňte všechny povinné položky',
  set_today: 'Nastavit Dnes',
  draw_signature: 'Nakreslit podpis',
  type_initial: 'Zadat iniciály',
  draw: 'Kreslit',
  type: 'Zadat',
  type_text: 'Zadat text',
  toggle_multiline_text: 'Přepnout Víceřádkový Text',
  email_has_been_sent: 'E-mail byl odeslán',
  processing: 'Zpracování',
  pay_with_strip: 'Zaplacení přes Stripe',
  reupload: 'Znovu nahrát',
  upload: 'Nahrát',
  files: 'Soubory'
};
const pt = {
  drawn_signature_on_a_touchscreen_device: 'Assinatura desenhada em um dispositivo com tela sensível ao toque',
  scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: 'Escaneie o código QR com o aplicativo da câmera para abrir o formulário no celular e desenhar sua assinatura',
  by_clicking_you_agree_to_the: 'Ao clicar em "{button}", você concorda com o',
  electronic_signature_disclosure: 'Divulgação de Assinatura Eletrônica',
  esignature_disclosure: 'Divulgação da eAssinatura',
  minimize: 'Minimizar',
  text: 'Texto',
  signature: 'Assinatura',
  initials: 'Iniciais',
  date: 'Data',
  number: 'Número',
  image: 'Imagem',
  file: 'Arquivo',
  select: 'Selecionar',
  checkbox: 'Caixa',
  multiple: 'Múltiplo',
  radio: 'Rádio',
  cells: 'Células',
  stamp: 'Carimbo',
  payment: 'Pagamento',
  phone: 'Telefone',
  submit_form: 'Enviar Formulário',
  sign_now: 'Assinar agora',
  type_here_: 'Digite aqui',
  optional: 'opcional',
  appears_on: 'Aparece em',
  page: 'Página',
  take_photo: 'Tirar foto',
  select_your_option: 'Selecione sua opção',
  complete_hightlighted_checkboxes_and_click: 'Complete as caixas de seleção destacadas e clique',
  submit: 'enviar',
  next: 'próximo',
  click_to_upload: 'Clique para fazer o upload',
  or_drag_and_drop_files: 'ou arraste e solte arquivos',
  send_copy_via_email: 'Enviar cópia por e-mail',
  download: 'Baixar',
  clear: 'Limpar',
  redraw: 'Redesenhar',
  draw_initials: 'Desenhar iniciais',
  type_signature_here: 'Digite a assinatura aqui',
  type_initial_here: 'Digite as iniciais aqui',
  form_has_been_completed: 'O formulário foi concluído!',
  create_a_free_account: 'Criar uma Conta Gratuita',
  signed_with: 'Assinado com',
  please_check_the_box_to_continue: 'Por favor, marque a caixa para continuar',
  open_source_documents_software: 'software de documentos de código aberto',
  verified_phone_number: 'Verificar Número de Telefone',
  use_international_format: 'Use formato internacional: +1xxx',
  six_digits_code: 'Código de 6 dígitos',
  change_phone_number: 'Alterar número de telefone',
  sending: 'Enviando...',
  resend_code: 'Reenviar código',
  verification_code_has_been_resent: 'O código de verificação foi reenviado via SMS',
  please_fill_all_required_fields: 'Por favor, preencha todos os campos obrigatórios',
  set_today: 'Definir Hoje',
  draw_signature: 'Desenhar assinatura',
  type_initial: 'Inserir iniciais',
  draw: 'Desenhar',
  type: 'Inserir',
  type_text: 'Inserir texto',
  toggle_multiline_text: 'Alternar Texto Multilinha',
  email_has_been_sent: 'Email enviado',
  processing: 'Processamento',
  pay_with_strip: 'Pagar com Stripe',
  reupload: 'Reenviar',
  upload: 'Carregar',
  files: 'Arquivos'
};
const he = {
  drawn_signature_on_a_touchscreen_device: 'חתימה שנוצרה במכשיר עם מסך מגע',
  scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: 'סרוק את קוד ה-QR באמצעות אפליקציית המצלמה כדי לפתוח את הטופס במובייל ולצייר את החתימה שלך',
  by_clicking_you_agree_to_the: 'על ידי לחיצה על "{button}", אתה מסכים ל',
  electronic_signature_disclosure: 'חשיפת חתימה אלקטרונית',
  esignature_disclosure: 'חשיפת ה-eחתימה',
  minimize: 'לקטן',
  text: 'טקסט',
  signature: 'חתימה',
  initials: 'ראשי תיבות',
  date: 'תאריך',
  number: 'מספר',
  image: 'תמונה',
  file: 'קובץ',
  select: 'בחר',
  checkbox: 'תיק בחירה',
  multiple: 'רב ערכים',
  radio: 'רדיו',
  cells: 'תאים',
  stamp: 'חותמת',
  payment: 'תשלום',
  phone: 'טלפון',
  submit_form: 'שלח טופס',
  sign_now: 'חתום כעת',
  type_here_: 'הקלד כאן',
  optional: 'אופציונלי',
  option: 'אפשרות',
  appears_on: 'מופיע ב',
  page: 'עמוד',
  take_photo: 'צלם תמונה',
  select_your_option: 'בחר את האפשרות שלך',
  complete_hightlighted_checkboxes_and_click: 'השלם את תיבות הסימון המודגשות ולחץ',
  submit: 'שליחה',
  next: 'הבא',
  click_to_upload: 'לחץ להעלאה',
  or_drag_and_drop_files: 'או גרור ושחרר קבצים',
  send_copy_via_email: 'שלח עותק באמצעות אימייל',
  download: 'הורדה',
  clear: 'נקה',
  redraw: 'צייר מחדש',
  draw_initials: 'צייר ציוני ראשי תיבות',
  type_signature_here: 'הקלד חתימה כאן',
  type_initial_here: 'הקלד ציוני ראשי תיבות כאן',
  form_has_been_completed: 'הטופס הושלם',
  create_a_free_account: 'צור חשבון חינם',
  signed_with: 'חתום באמצעות',
  please_check_the_box_to_continue: 'אנא סמן את התיבה כדי להמשיך',
  open_source_documents_software: 'תוכנה פתוחה למסמכים',
  verified_phone_number: 'אימות מספר טלפון',
  use_international_format: 'השתמש בפורמט בינלאומי: +1xxx',
  six_digits_code: 'קוד משתמש שש ספרות',
  change_phone_number: 'שינוי מספר טלפון',
  sending: 'שולח',
  resend_code: 'שלח מחדש קוד',
  verification_code_has_been_resent: 'קוד האימות נשלח מחדש בSMS',
  please_fill_all_required_fields: 'אנא מלא את כל השדות הדרושים',
  set_today: 'קבע היום',
  toggle_multiline_text: 'שנה בין טקסט במספר שורות לטקסט בשורה אחת',
  draw_signature: 'צייר חתימה',
  type_initial: 'הקלד ציוני ראשי תיבות',
  draw: 'צייר',
  type: 'הקלד',
  type_text: 'הקלד טקסט',
  email_has_been_sent: 'האימייל נשלח',
  processing: 'מעבד',
  pay_with_strip: 'שלם עם סטרייפ',
  reupload: 'העלה שוב',
  upload: 'העלאה',
  files: 'קבצים'
};
const nl = {
  drawn_signature_on_a_touchscreen_device: 'Getekende handtekening op een apparaat met een touchscreen',
  scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: 'Scan de QR-code met de camera-app om het formulier op mobiel te openen en uw handtekening te tekenen',
  by_clicking_you_agree_to_the: 'Door op "{button}" te klikken, gaat u akkoord met de',
  electronic_signature_disclosure: 'Openbaarmaking van Elektronische Handtekening',
  esignature_disclosure: 'Openbaarmaking van eHandtekening',
  minimize: 'Minimaliseren',
  text: 'Tekst',
  signature: 'Handtekening',
  initials: 'Initialen',
  date: 'Datum',
  number: 'Nummer',
  image: 'Afbeelding',
  take_photo: 'Maak een foto',
  file: 'Bestand',
  select: 'Selecteer',
  checkbox: 'Aankruisvakje',
  multiple: 'Meerdere',
  radio: 'Radio',
  cells: 'Cellen',
  stamp: 'Stempel',
  payment: 'Betaling',
  phone: 'Telefoon',
  submit_form: 'Formulier verzenden',
  sign_now: 'Nu ondertekenen',
  type_here_: 'Typ hier...',
  optional: 'Optioneel',
  option: 'Optie',
  appears_on: 'Verschijnt op',
  page: 'Pagina',
  select_your_option: 'Selecteer uw optie',
  complete_hightlighted_checkboxes_and_click: 'Voltooi de gemarkeerde selectievakjes en klik',
  submit: 'Voltooien',
  next: 'Volgende',
  click_to_upload: 'Klik om te uploaden',
  or_drag_and_drop_files: 'of sleep en plaats bestanden',
  send_copy_via_email: 'Stuur kopie per e-mail',
  download: 'Downloaden',
  clear: 'Wissen',
  redraw: 'Opnieuw tekenen',
  draw_initials: 'Initialen tekenen',
  type_signature_here: 'Typ hier uw handtekening',
  type_initial_here: 'Typ hier uw initialen',
  form_has_been_completed: 'Formulier is voltooid!',
  create_a_free_account: 'Maak een gratis account aan',
  signed_with: 'Ondertekend met',
  please_check_the_box_to_continue: 'Vink het vakje aan om door te gaan',
  open_source_documents_software: 'Open source documenten software',
  verified_phone_number: 'Geverifieerd telefoonnummer',
  use_international_format: 'Gebruik internationaal formaat: +1xxx',
  six_digits_code: '6-cijferige code',
  change_phone_number: 'Wijzig telefoonnummer',
  sending: 'Voltooien...',
  resend_code: 'Code opnieuw verzenden',
  verification_code_has_been_resent: 'Verificatiecode is opnieuw verzonden via SMS',
  please_fill_all_required_fields: 'Vul alle verplichte velden in',
  set_today: 'Vandaag',
  toggle_multiline_text: 'Schakel meerregelige tekst in/uit',
  draw_signature: 'Handtekening tekenen',
  type_initial: 'Typ initialen',
  draw: 'Tekenen',
  type: 'Typen',
  type_text: 'Typ tekst',
  email_has_been_sent: 'E-mail is verzonden',
  processing: 'Verwerken',
  pay_with_strip: 'Betalen met Stripe',
  reupload: 'Opnieuw uploaden',
  upload: 'Uploaden',
  files: 'Bestanden'
};
const ar = {
  drawn_signature_on_a_touchscreen_device: 'توقيع مرسوم على جهاز بشاشة تعمل باللمس',
  scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: 'امسح رمز الاستجابة السريعة باستخدام تطبيق الكاميرا لفتح النموذج على الهاتف المحمول ورسم توقيعك',
  by_clicking_you_agree_to_the: 'بالنقر فوق "{button}"، أنت توافق على',
  electronic_signature_disclosure: 'كشف التوقيع الإلكتروني',
  esignature_disclosure: 'كشف التوقيع الإلكتروني',
  text: 'نص',
  signature: 'توقيع',
  initials: 'الاختصارات',
  date: 'تاريخ',
  number: 'رقم',
  image: 'صورة',
  take_photo: 'التقاط صورة',
  file: 'ملف',
  select: 'اختيار',
  checkbox: 'خانة اختيار',
  multiple: 'متعدد',
  radio: 'راديو',
  cells: 'خلايا',
  stamp: 'ختم',
  minimize: 'تصغير',
  payment: 'الدفع',
  phone: 'هاتف',
  submit_form: 'إرسال النموذج',
  sign_now: 'وقع الآن',
  type_here_: 'اكتب هنا',
  optional: 'اختياري',
  option: 'خيار',
  appears_on: 'يظهر على',
  page: 'صفحة',
  select_your_option: 'اختر خيارك',
  complete_hightlighted_checkboxes_and_click: 'أكمل الخانات المميزة وانقر',
  submit: 'إرسال',
  next: 'التالي',
  click_to_upload: 'انقر للتحميل',
  or_drag_and_drop_files: 'أو اسحب وأسقط الملفات',
  send_copy_via_email: 'إرسال نسخة عبر البريد الإلكتروني',
  download: 'تحميل',
  clear: 'مسح',
  redraw: 'إعادة الرسم',
  draw_initials: 'ارسم الاختصارات',
  type_signature_here: 'اكتب التوقيع هنا',
  type_initial_here: 'اكتب الاختصارات هنا',
  form_has_been_completed: 'تم إكمال النموذج!',
  create_a_free_account: 'إنشاء حساب مجاني',
  signed_with: 'تم التوقيع بواسطة',
  please_check_the_box_to_continue: 'الرجاء التحقق من الخانة للمتابعة',
  open_source_documents_software: 'برنامج وثائق مفتوح المصدر',
  verified_phone_number: 'تحقق من رقم الهاتف',
  use_international_format: 'استخدم الشكل الدولي: +1xxx',
  six_digits_code: 'رمز مكون من 6 أرقام',
  change_phone_number: 'تغيير رقم الهاتف',
  sending: 'جارٍ الإرسال',
  resend_code: 'إعادة إرسال الرمز',
  verification_code_has_been_resent: 'تم إعادة إرسال رمز التحقق عبر الرسائل القصيرة',
  please_fill_all_required_fields: 'الرجاء ملء جميع الحقول المطلوبة',
  set_today: 'تعيين اليوم',
  toggle_multiline_text: 'تبديل النصوص متعددة الأسطر',
  draw_signature: 'ارسم التوقيع',
  type_initial: 'اكتب الاختصارات',
  draw: 'ارسم',
  type: 'اكتب',
  type_text: 'اكتب نصًا',
  email_has_been_sent: 'تم إرسال البريد الإلكتروني',
  processing: 'جارٍ المعالجة',
  pay_with_strip: 'الدفع بواسطة Stripe',
  reupload: 'إعادة التحميل',
  upload: 'تحميل',
  files: 'الملفات'
};
const ko = {
  drawn_signature_on_a_touchscreen_device: '터치스크린 장치에서 그린 서명',
  scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature: '카메라 앱으로 QR 코드를 스캔하여 모바일에서 양식을 열고 서명을 그리세요',
  by_clicking_you_agree_to_the: '"{button}"를 클릭함으로써, 다음에 동의하게 됩니다',
  electronic_signature_disclosure: '전자 서명 공개',
  esignature_disclosure: '전자 서명 공개',
  text: '텍스트',
  signature: '서명',
  initials: '이니셜',
  date: '날짜',
  number: '숫자',
  image: '이미지',
  take_photo: '사진 찍기',
  file: '파일',
  select: '선택',
  checkbox: '체크박스',
  multiple: '다중',
  radio: '라디오',
  cells: '셀',
  stamp: '스탬프',
  minimize: '최소화',
  payment: '결제',
  phone: '전화',
  submit_form: '양식 제출',
  sign_now: '지금 서명',
  type_here_: '여기에 입력...',
  optional: '선택 사항',
  option: '옵션',
  appears_on: '다음에 나타납니다',
  page: '페이지',
  select_your_option: '옵션 선택',
  complete_hightlighted_checkboxes_and_click: '강조된 체크박스를 완료하고 클릭',
  submit: '제출',
  next: '다음',
  click_to_upload: '업로드하려면 클릭',
  or_drag_and_drop_files: '또는 파일을 드래그하여 놓으십시오',
  send_copy_via_email: '이메일로 사본 보내기',
  download: '다운로드',
  clear: '지우기',
  redraw: '다시 그리기',
  draw_initials: '이니셜 그리기',
  type_signature_here: '여기에 서명 입력',
  type_initial_here: '여기에 이니셜 입력',
  form_has_been_completed: '양식이 완료되었습니다!',
  create_a_free_account: '무료 계정 생성',
  signed_with: '다음으로 서명:',
  please_check_the_box_to_continue: '계속하려면 확인란을 선택하십시오',
  open_source_documents_software: '오픈 소스 문서 소프트웨어',
  verified_phone_number: '전화번호 확인됨',
  use_international_format: '국제 포맷 사용: +1xxx',
  six_digits_code: '6자리 코드',
  change_phone_number: '전화번호 변경',
  sending: '전송 중...',
  resend_code: '코드 다시 보내기',
  verification_code_has_been_resent: '인증 코드가 SMS로 다시 전송되었습니다',
  please_fill_all_required_fields: '필수 필드를 모두 입력하십시오',
  set_today: '오늘 날짜로 설정',
  toggle_multiline_text: '다중 텍스트 전환',
  draw_signature: '서명 그리기',
  type_initial: '이니셜 입력',
  draw: '그리기',
  type: '입력',
  type_text: '텍스트 입력',
  email_has_been_sent: '이메일이 전송되었습니다',
  processing: '처리 중',
  pay_with_strip: '스트라이프로 결제',
  reupload: '다시 업로드',
  upload: '업로드',
  files: '파일'
};
const i18n = {
  en,
  es,
  it,
  de,
  fr,
  pl,
  uk,
  cs,
  pt,
  he,
  nl,
  ar,
  ko
};
/* harmony default export */ __webpack_exports__["default"] = (i18n);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/appears_on.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/appears_on.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AppearsOn',
  inject: ['t', 'scrollIntoArea'],
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  computed: {
    isMultipleDocs() {
      return this.attachmentUuids.length > 1;
    },
    attachmentUuids() {
      return [...new Set(this.uniqueAreas.map(e => e.attachment_uuid))];
    },
    uniqueAreas() {
      const areas = {};
      this.field.areas?.forEach(area => {
        areas[area.attachment_uuid + area.page] ||= area;
      });
      return Object.values(areas).slice(0, 6);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/area.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/area.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconPaperclip.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCheck.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconTextSize.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconWritingSign.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCalendarEvent.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconSquareNumber1.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconPhoto.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconLetterCaseUpper.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconSelect.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCheckbox.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCircleDot.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconRubberStamp.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconColumns3.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconChecks.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconPhoneCheck.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCreditCard.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FieldArea',
  components: {
    IconPaperclip: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    IconCheck: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['t'],
  props: {
    field: {
      type: Object,
      required: true
    },
    isValueSet: {
      type: Boolean,
      required: false,
      default: false
    },
    submittable: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: [Array, String, Number, Object, Boolean],
      required: false,
      default: ''
    },
    isActive: {
      type: Boolean,
      required: false,
      default: false
    },
    withLabel: {
      type: Boolean,
      required: false,
      default: true
    },
    fieldIndex: {
      type: Number,
      required: false,
      default: 0
    },
    attachmentsIndex: {
      type: Object,
      required: false,
      default: () => ({})
    },
    area: {
      type: Object,
      required: true
    }
  },
  emits: ['update:model-value'],
  data() {
    return {
      textOverflowChars: 0
    };
  },
  computed: {
    fieldNames() {
      return {
        text: this.t('text'),
        signature: this.t('signature'),
        initials: this.t('initials'),
        date: this.t('date'),
        number: this.t('number'),
        image: this.t('image'),
        file: this.t('file'),
        select: this.t('select'),
        checkbox: this.t('checkbox'),
        multiple: this.t('multiple'),
        radio: this.t('radio'),
        cells: this.t('cells'),
        stamp: this.t('stamp'),
        payment: this.t('payment'),
        phone: this.t('phone')
      };
    },
    alignClasses() {
      return {
        center: 'text-center',
        left: 'text-left',
        right: 'text-right'
      };
    },
    option() {
      return this.field.options.find(o => o.uuid === this.area.option_uuid);
    },
    fieldIcons() {
      return {
        text: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        signature: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        date: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        number: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
        image: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
        initials: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
        file: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
        select: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
        checkbox: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
        radio: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
        stamp: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
        cells: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
        multiple: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
        phone: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
        payment: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_15__["default"]
      };
    },
    image() {
      if (this.field.type === 'image') {
        return this.attachmentsIndex[this.modelValue];
      } else {
        return null;
      }
    },
    stamp() {
      if (this.field.type === 'stamp') {
        return this.attachmentsIndex[this.modelValue];
      } else {
        return null;
      }
    },
    signature() {
      if (this.field.type === 'signature') {
        return this.attachmentsIndex[this.modelValue];
      } else {
        return null;
      }
    },
    initials() {
      if (this.field.type === 'initials') {
        return this.attachmentsIndex[this.modelValue];
      } else {
        return null;
      }
    },
    locale() {
      return Intl.DateTimeFormat().resolvedOptions()?.locale;
    },
    formattedDate() {
      if (this.field.type === 'date' && this.modelValue) {
        return this.formatDate(this.modelValue === '{{date}}' ? new Date() : new Date(this.modelValue), this.field.preferences?.format || (this.locale.endsWith('-US') ? 'MM/DD/YYYY' : 'DD/MM/YYYY'));
      } else {
        return '';
      }
    },
    attachments() {
      if (this.field.type === 'file') {
        return (this.modelValue || []).map(uuid => this.attachmentsIndex[uuid]);
      } else if (this.field.type === 'payment') {
        return [this.attachmentsIndex[this.modelValue]].filter(Boolean);
      } else {
        return [];
      }
    },
    computedStyle() {
      const {
        x,
        y,
        w,
        h
      } = this.area;
      return {
        top: y * 100 + '%',
        left: x * 100 + '%',
        width: w * 100 + '%',
        height: h * 100 + '%'
      };
    }
  },
  watch: {
    modelValue() {
      this.$nextTick(() => {
        if (['date', 'text', 'number'].includes(this.field.type) && this.$refs.textContainer && (this.textOverflowChars === 0 || this.textOverflowChars - 4 > `${this.modelValue}`.length)) {
          this.textOverflowChars = this.$refs.textContainer.scrollHeight > this.$refs.textContainer.clientHeight ? `${this.modelValue}`.length : 0;
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (['date', 'text', 'number'].includes(this.field.type) && this.$refs.textContainer) {
        this.textOverflowChars = this.$refs.textContainer.scrollHeight > this.$refs.textContainer.clientHeight ? `${this.modelValue}`.length : 0;
      }
    });
  },
  methods: {
    optionValue(option) {
      if (option) {
        if (option.value) {
          return option.value;
        } else {
          const index = this.field.options.indexOf(option);
          return `${this.t('option')} ${index + 1}`;
        }
      }
    },
    formatNumber(number, format) {
      if (format === 'comma') {
        return new Intl.NumberFormat('en-US').format(number);
      } else if (format === 'dot') {
        return new Intl.NumberFormat('de-DE').format(number);
      } else if (format === 'space') {
        return new Intl.NumberFormat('fr-FR').format(number);
      } else {
        return number;
      }
    },
    formatDate(date, format) {
      const monthFormats = {
        M: 'numeric',
        MM: '2-digit',
        MMM: 'short',
        MMMM: 'long'
      };
      const dayFormats = {
        D: 'numeric',
        DD: '2-digit'
      };
      const yearFormats = {
        YYYY: 'numeric',
        YYY: 'numeric',
        YY: '2-digit'
      };
      const parts = new Intl.DateTimeFormat([], {
        day: dayFormats[format.match(/D+/)],
        month: monthFormats[format.match(/M+/)],
        year: yearFormats[format.match(/Y+/)],
        timeZone: 'UTC'
      }).formatToParts(date);
      return format.replace(/D+/, parts.find(p => p.type === 'day').value).replace(/M+/, parts.find(p => p.type === 'month').value).replace(/Y+/, parts.find(p => p.type === 'year').value);
    },
    updateMultipleSelectValue(value) {
      if (this.modelValue?.includes(value)) {
        const newValue = [...this.modelValue];
        newValue.splice(newValue.indexOf(value), 1);
        this.$emit('update:model-value', newValue);
      } else {
        const newValue = this.modelValue ? [...this.modelValue] : [];
        newValue.push(value);
        this.$emit('update:model-value', newValue);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/areas.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/areas.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area */ "./app/javascript/submission_form/area.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FieldAreas',
  components: {
    FieldArea: _area__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    steps: {
      type: Array,
      required: false,
      default: () => []
    },
    values: {
      type: Object,
      required: false,
      default: () => ({})
    },
    attachmentsIndex: {
      type: Object,
      required: false,
      default: () => ({})
    },
    withLabel: {
      type: Boolean,
      required: false,
      default: true
    },
    currentStep: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  emits: ['focus-step'],
  data() {
    return {
      areaRefs: []
    };
  },
  beforeUpdate() {
    this.areaRefs = [];
  },
  methods: {
    findPageElementForArea(area) {
      return (this.$root.$el?.parentNode?.getRootNode() || document).getElementById(`page-${area.attachment_uuid}-${area.page}`);
    },
    scrollIntoField(field) {
      if (field?.areas) {
        this.scrollIntoArea(field.areas[0]);
      }
    },
    scrollIntoArea(area) {
      const areaRef = this.areaRefs.find(a => a.area === area);
      if (areaRef) {
        const root = this.$root.$el.parentNode.getRootNode();
        const container = root.body || root.querySelector('div');
        if (container.style.overflow === 'hidden') {
          this.scrollInContainer(areaRef.$el);
        } else {
          areaRef.$refs.scrollToElem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
        return true;
      }
    },
    scrollInContainer(target) {
      const root = this.$root.$el.parentNode.getRootNode();
      const scrollbox = root.getElementById('scrollbox');
      const formContainer = root.getElementById('form_container');
      const container = root.body || root.querySelector('div');
      const padding = 64;
      const boxRect = scrollbox.children[0].getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const targetTopRelativeToBox = targetRect.top - boxRect.top;
      scrollbox.scrollTop = targetTopRelativeToBox - container.offsetHeight + formContainer.offsetHeight + target.offsetHeight + padding;
    },
    setAreaRef(el) {
      if (el) {
        this.areaRefs.push(el);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/attachment_step.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/attachment_step.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropzone */ "./app/javascript/submission_form/dropzone.vue");
/* harmony import */ var _markdown_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown_content */ "./app/javascript/submission_form/markdown_content.vue");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconPaperclip.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconTrashX.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AttachmentStep',
  components: {
    FileDropzone: _dropzone__WEBPACK_IMPORTED_MODULE_0__["default"],
    MarkdownContent: _markdown_content__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconPaperclip: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconTrashX: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  inject: ['t'],
  props: {
    field: {
      type: Object,
      required: true
    },
    submitterSlug: {
      type: String,
      required: true
    },
    attachmentsIndex: {
      type: Object,
      required: false,
      default: () => ({})
    },
    modelValue: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  emits: ['attached', 'update:model-value'],
  computed: {
    value: {
      set(value) {
        this.$emit('update:model-value', this.modelValue || []);
      },
      get() {
        return this.modelValue || [];
      }
    }
  },
  methods: {
    removeAttachment(uuid) {
      this.value.splice(this.value.indexOf(uuid), 1);
      this.$emit('update:model-value', this.value);
    },
    onUpload(attachments) {
      attachments.forEach(attachment => {
        this.$emit('attached', attachment);
      });
      this.$emit('update:model-value', [...this.value, ...attachments.map(a => a.uuid)]);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/completed.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/completed.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCircleCheck.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconInnerShadowTop.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconBrandGithub.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconMail.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconLogin.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconDownload.js");
/* harmony import */ var _markdown_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown_content */ "./app/javascript/submission_form/markdown_content.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FormCompleted",
  components: {
    MarkdownContent: _markdown_content__WEBPACK_IMPORTED_MODULE_0__["default"],
    IconCircleCheck: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconInnerShadowTop: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconBrandGithub: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    IconMail: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    IconLogin: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    IconDownload: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  inject: ["baseUrl", "t"],
  props: {
    submitterSlug: {
      type: String,
      required: true
    },
    isDemo: {
      type: Boolean,
      required: false,
      default: false
    },
    attribution: {
      type: Boolean,
      required: false,
      default: true
    },
    withDownloadButton: {
      type: Boolean,
      required: false,
      default: true
    },
    withSendCopyButton: {
      type: Boolean,
      required: false,
      default: true
    },
    withConfetti: {
      type: Boolean,
      required: false,
      default: false
    },
    canSendEmail: {
      type: Boolean,
      required: false,
      default: false
    },
    completedButton: {
      type: Object,
      required: false,
      default: () => ({})
    },
    completedMessage: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data() {
    return {
      isSendingCopy: false,
      isDownloading: false
    };
  },
  computed: {
    isWebView() {
      return /webview|wv|ip((?!.*Safari)|(?=.*like Safari))/i.test(window.navigator.userAgent);
    }
  },
  async mounted() {
    if (this.withConfetti) {
      const {
        default: confetti
      } = await __webpack_require__.e(/*! import() */ "vendors-node_modules_canvas-confetti_dist_confetti_module_mjs").then(__webpack_require__.bind(__webpack_require__, /*! canvas-confetti */ "./node_modules/canvas-confetti/dist/confetti.module.mjs"));
      confetti({
        particleCount: 50,
        startVelocity: 30,
        spread: 140
      });
    }
  },
  methods: {
    sendCopyToEmail() {
      this.isSendingCopy = true;
      fetch(this.baseUrl + `/send_submission_email.json?submitter_slug=${this.submitterSlug}`, {
        method: "POST"
      }).then(() => {
        alert(this.t("email_has_been_sent"));
      }).finally(() => {
        this.isSendingCopy = false;
      });
    },
    download() {
      this.isDownloading = true;
      fetch(this.baseUrl + `/submitters/${this.submitterSlug}/download`).then(async response => {
        if (response.ok) {
          const urls = await response.json();
          const isSafariIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);
          if (isSafariIos && urls.length > 1) {
            this.downloadSafariIos(urls);
          } else {
            this.downloadUrls(urls);
          }
        } else {
          alert("Failed to download files");
        }
      });
    },
    downloadUrls(urls) {
      const fileRequests = urls.map(url => {
        return () => {
          return fetch(url).then(async resp => {
            const blobUrl = URL.createObjectURL(await resp.blob());
            const link = document.createElement("a");
            link.href = blobUrl;
            link.setAttribute("download", decodeURI(url.split("/").pop()));
            link.click();
            URL.revokeObjectURL(blobUrl);
          });
        };
      });
      fileRequests.reduce((prevPromise, request) => prevPromise.then(() => request()), Promise.resolve()).finally(() => {
        this.isDownloading = false;
      });
    },
    sanitizeHref(href) {
      if (href && href.trim().match(/^((?:https?:\/\/)|\/)/)) {
        return href.replace(/javascript:/g, "");
      }
    },
    downloadSafariIos(urls) {
      const fileRequests = urls.map(url => {
        return fetch(url).then(async resp => {
          const blob = await resp.blob();
          const blobUrl = URL.createObjectURL(blob.slice(0, blob.size, "application/octet-stream"));
          const link = document.createElement("a");
          link.href = blobUrl;
          link.setAttribute("download", decodeURI(url.split("/").pop()));
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
        this.isDownloading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/date_step.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/date_step.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCalendarCheck.js");
/* harmony import */ var _appears_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appears_on */ "./app/javascript/submission_form/appears_on.vue");
/* harmony import */ var _markdown_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown_content */ "./app/javascript/submission_form/markdown_content.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DateStep',
  components: {
    IconCalendarCheck: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    MarkdownContent: _markdown_content__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppearsOn: _appears_on__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  inject: ['t'],
  props: {
    field: {
      type: Object,
      required: true
    },
    showFieldNames: {
      type: Boolean,
      required: false,
      default: true
    },
    modelValue: {
      type: String,
      required: false,
      default: ''
    }
  },
  emits: ['update:model-value', 'focus'],
  computed: {
    value: {
      set(value) {
        this.$emit('update:model-value', value);
      },
      get() {
        return this.modelValue;
      }
    }
  },
  methods: {
    setCurrentDate() {
      const inputEl = this.$refs.input;
      inputEl.valueAsDate = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000);
      inputEl.dispatchEvent(new Event('input', {
        bubbles: true
      }));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/dropzone.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/dropzone.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCloudUpload.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconInnerShadowTop.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FileDropzone',
  components: {
    IconCloudUpload: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    IconInnerShadowTop: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['baseUrl', 't'],
  props: {
    message: {
      type: String,
      required: true
    },
    submitterSlug: {
      type: String,
      required: true
    },
    accept: {
      type: String,
      required: false,
      default: '*/*'
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['upload'],
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    inputId() {
      return 'el' + Math.random().toString(32).split('.')[1];
    }
  },
  methods: {
    onDropFiles(e) {
      this.uploadFiles(e.dataTransfer.files);
    },
    onSelectFiles(e) {
      e.preventDefault();
      this.uploadFiles(this.$refs.input.files).then(() => {
        if (this.$refs.input) {
          this.$refs.input.value = '';
        }
      });
    },
    async uploadFiles(files) {
      this.isLoading = true;
      return await Promise.all(Array.from(files).map(async file => {
        const formData = new FormData();
        if (file.type === 'image/bmp') {
          file = await this.convertBmpToPng(file);
        }
        formData.append('file', file);
        formData.append('submitter_slug', this.submitterSlug);
        formData.append('name', 'attachments');
        return fetch(this.baseUrl + '/api/attachments', {
          method: 'POST',
          body: formData
        }).then(resp => resp.json()).then(data => {
          return data;
        });
      })).then(result => {
        this.$emit('upload', result);
      }).finally(() => {
        this.isLoading = false;
      });
    },
    convertBmpToPng(bmpFile) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (event) {
          const img = new Image();
          img.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(function (blob) {
              const newFile = new File([blob], bmpFile.name.replace(/\.\w+$/, '.png'), {
                type: 'image/png'
              });
              resolve(newFile);
            }, 'image/png');
          };
          img.src = event.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(bmpFile);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/form.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/form.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _areas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./areas */ "./app/javascript/submission_form/areas.vue");
/* harmony import */ var _formula_areas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formula_areas */ "./app/javascript/submission_form/formula_areas.vue");
/* harmony import */ var _image_step__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image_step */ "./app/javascript/submission_form/image_step.vue");
/* harmony import */ var _signature_step__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signature_step */ "./app/javascript/submission_form/signature_step.vue");
/* harmony import */ var _initials_step__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initials_step */ "./app/javascript/submission_form/initials_step.vue");
/* harmony import */ var _attachment_step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attachment_step */ "./app/javascript/submission_form/attachment_step.vue");
/* harmony import */ var _multi_select_step__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./multi_select_step */ "./app/javascript/submission_form/multi_select_step.vue");
/* harmony import */ var _phone_step__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phone_step */ "./app/javascript/submission_form/phone_step.vue");
/* harmony import */ var _payment_step__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment_step */ "./app/javascript/submission_form/payment_step.vue");
/* harmony import */ var _text_step__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./text_step */ "./app/javascript/submission_form/text_step.vue");
/* harmony import */ var _number_step__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./number_step */ "./app/javascript/submission_form/number_step.vue");
/* harmony import */ var _date_step__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./date_step */ "./app/javascript/submission_form/date_step.vue");
/* harmony import */ var _markdown_content__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./markdown_content */ "./app/javascript/submission_form/markdown_content.vue");
/* harmony import */ var _completed__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./completed */ "./app/javascript/submission_form/completed.vue");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconWritingSign.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconInnerShadowTop.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconArrowsDiagonal.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconArrowsDiagonalMinimize2.js");
/* harmony import */ var _appears_on__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./appears_on */ "./app/javascript/submission_form/appears_on.vue");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./i18n */ "./app/javascript/submission_form/i18n.js");

















const isEmpty = obj => {
  if (obj == null) return true;
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  if (typeof obj === 'string') {
    return obj.trim().length === 0;
  }
  if (typeof obj === 'object') {
    return Object.keys(obj).length === 0;
  }
  if (obj === false) {
    return true;
  }
  return false;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SubmissionForm',
  components: {
    FieldAreas: _areas__WEBPACK_IMPORTED_MODULE_0__["default"],
    ImageStep: _image_step__WEBPACK_IMPORTED_MODULE_2__["default"],
    SignatureStep: _signature_step__WEBPACK_IMPORTED_MODULE_3__["default"],
    AppearsOn: _appears_on__WEBPACK_IMPORTED_MODULE_14__["default"],
    IconWritingSign: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    AttachmentStep: _attachment_step__WEBPACK_IMPORTED_MODULE_5__["default"],
    InitialsStep: _initials_step__WEBPACK_IMPORTED_MODULE_4__["default"],
    MultiSelectStep: _multi_select_step__WEBPACK_IMPORTED_MODULE_6__["default"],
    IconInnerShadowTop: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    DateStep: _date_step__WEBPACK_IMPORTED_MODULE_11__["default"],
    IconArrowsDiagonal: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    TextStep: _text_step__WEBPACK_IMPORTED_MODULE_9__["default"],
    NumberStep: _number_step__WEBPACK_IMPORTED_MODULE_10__["default"],
    FormulaFieldAreas: _formula_areas__WEBPACK_IMPORTED_MODULE_1__["default"],
    PhoneStep: _phone_step__WEBPACK_IMPORTED_MODULE_7__["default"],
    MarkdownContent: _markdown_content__WEBPACK_IMPORTED_MODULE_12__["default"],
    PaymentStep: _payment_step__WEBPACK_IMPORTED_MODULE_8__["default"],
    IconArrowsDiagonalMinimize2: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_19__["default"],
    FormCompleted: _completed__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  provide() {
    return {
      baseUrl: this.baseUrl,
      scrollIntoArea: this.scrollIntoArea,
      scrollIntoField: this.scrollIntoField,
      t: this.t
    };
  },
  props: {
    submitter: {
      type: Object,
      required: true
    },
    canSendEmail: {
      type: Boolean,
      required: false,
      default: false
    },
    attachments: {
      type: Array,
      required: false,
      default: () => []
    },
    onComplete: {
      type: Function,
      required: false,
      default() {
        return () => {};
      }
    },
    expand: {
      type: Boolean,
      required: false,
      default: null
    },
    minimize: {
      type: Boolean,
      required: false,
      default: false
    },
    withDisclosure: {
      type: Boolean,
      required: false,
      default: false
    },
    reuseSignature: {
      type: Boolean,
      required: false,
      default: true
    },
    withConfetti: {
      type: Boolean,
      required: false,
      default: false
    },
    autoscrollFields: {
      type: Boolean,
      required: false,
      default: true
    },
    showFieldNames: {
      type: Boolean,
      required: false,
      default: true
    },
    withQrButton: {
      type: Boolean,
      required: false,
      default: false
    },
    withTypedSignature: {
      type: Boolean,
      required: false,
      default: true
    },
    isBreakpointMd: {
      type: Boolean,
      required: false,
      default: true
    },
    baseUrl: {
      type: String,
      required: false,
      default: ''
    },
    fields: {
      type: Array,
      required: false,
      default: () => []
    },
    backgroundColor: {
      type: String,
      required: false,
      default: ''
    },
    allowToSkip: {
      type: Boolean,
      required: false,
      default: false
    },
    goToLast: {
      type: Boolean,
      required: false,
      default: true
    },
    isDemo: {
      type: Boolean,
      required: false,
      default: false
    },
    dryRun: {
      type: Boolean,
      required: false,
      default: false
    },
    attribution: {
      type: Boolean,
      required: false,
      default: true
    },
    language: {
      type: String,
      required: false,
      default: ''
    },
    values: {
      type: Object,
      required: false,
      default: () => ({})
    },
    authenticityToken: {
      type: String,
      required: false,
      default: ''
    },
    i18n: {
      type: Object,
      required: false,
      default: () => ({})
    },
    withSendCopyButton: {
      type: Boolean,
      required: false,
      default: true
    },
    withDownloadButton: {
      type: Boolean,
      required: false,
      default: true
    },
    completedRedirectUrl: {
      type: String,
      required: false,
      default: ''
    },
    completedButton: {
      type: Object,
      required: false,
      default: () => ({})
    },
    completedMessage: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data() {
    return {
      isCompleted: false,
      isFormVisible: this.expand !== false,
      showFillAllRequiredFields: false,
      currentStep: 0,
      phoneVerifiedValues: {},
      orientation: screen?.orientation?.type,
      isSubmitting: false,
      submittedValues: {},
      recalculateButtonDisabledKey: ''
    };
  },
  computed: {
    isMobile() {
      return /android|iphone|ipad/i.test(navigator.userAgent);
    },
    buttonText() {
      if (this.alwaysMinimize || this.stepFields.length === this.currentStep + 1) {
        return this.t('submit');
      } else {
        return this.t('next');
      }
    },
    alwaysMinimize() {
      return this.minimize || this.orientation?.includes('landscape') && this.isMobile && parseInt(window.innerHeight) < 550;
    },
    currentStepFields() {
      return this.stepFields[this.currentStep] || [];
    },
    browserLanguage() {
      return (navigator.language || navigator.userLanguage || 'en').split('-')[0];
    },
    queryParams() {
      return new URLSearchParams(window.location.search);
    },
    submitterSlug() {
      return this.submitter.slug;
    },
    fieldsUuidIndex() {
      return this.fields.reduce((acc, f) => {
        acc[f.uuid] = f;
        return acc;
      }, {});
    },
    previousInitialsValue() {
      if (this.reuseSignature !== false) {
        const initialsField = [...this.fields].reverse().find(field => field.type === 'initials' && !!this.values[field.uuid]);
        return this.values[initialsField?.uuid];
      } else {
        return null;
      }
    },
    isAnonymousChecboxes() {
      return this.currentField.type === 'checkbox' && this.currentStepFields.every(e => !e.name && !e.required) && this.currentStepFields.length > 4;
    },
    isButtonDisabled() {
      if (this.recalculateButtonDisabledKey) {
        return this.isSubmitting || this.currentField.required && ['image', 'file', 'multiple'].includes(this.currentField.type) && !this.values[this.currentField.uuid]?.length || this.currentField.required && this.currentField.type === 'signature' && !this.values[this.currentField.uuid]?.length && this.$refs.currentStep && !this.$refs.currentStep.isSignatureStarted || this.currentField.required && this.currentField.type === 'initials' && !this.values[this.currentField.uuid]?.length && this.$refs.currentStep && !this.$refs.currentStep.isInitialsStarted;
      } else {
        return false;
      }
    },
    currentField() {
      return this.currentStepFields[0];
    },
    stepFields() {
      return this.fields.filter(f => !f.readonly).reduce((acc, f) => {
        const prevStep = acc[acc.length - 1];
        if (this.checkFieldConditions(f)) {
          if (f.type === 'checkbox' && Array.isArray(prevStep) && prevStep[0].type === 'checkbox' && !f.description) {
            prevStep.push(f);
          } else {
            acc.push([f]);
          }
        }
        return acc;
      }, []);
    },
    formulaFields() {
      return this.fields.filter(f => f.preferences?.formula);
    },
    attachmentsIndex() {
      return this.attachments.reduce((acc, a) => {
        acc[a.uuid] = a;
        return acc;
      }, {});
    },
    submitPath() {
      return `/s/${this.submitterSlug}`;
    }
  },
  watch: {
    expand(value) {
      this.isFormVisible = value;
    },
    currentStepFields(value) {
      if (isEmpty(value) && this.currentStep > 0) {
        this.currentStep -= 1;
      }
    }
  },
  beforeUnmount() {
    screen?.orientation?.removeEventListener('change', this.onOrientationChange);
  },
  mounted() {
    this.submittedValues = JSON.parse(JSON.stringify(this.values));
    screen?.orientation.addEventListener('change', this.onOrientationChange);
    this.fields.forEach(field => {
      if (field.default_value && !field.readonly) {
        this.values[field.uuid] ||= field.default_value;
      }
    });
    if (this.queryParams.get('field_uuid')) {
      const stepIndex = this.stepFields.findIndex(fields => {
        return fields.some(f => f.uuid === this.queryParams.get('field_uuid'));
      });
      this.currentStep = Math.max(stepIndex, 0);
    } else if (this.goToLast) {
      const requiredEmptyStepIndex = this.stepFields.indexOf(this.stepFields.find(fields => fields.some(f => f.required && !this.submittedValues[f.uuid])));
      const lastFilledStepIndex = this.stepFields.indexOf([...this.stepFields].reverse().find(fields => fields.some(f => !!this.submittedValues[f.uuid]))) + 1;
      const indexesList = [this.stepFields.length - 1];
      if (requiredEmptyStepIndex !== -1) {
        indexesList.push(requiredEmptyStepIndex);
      }
      if (lastFilledStepIndex !== -1) {
        indexesList.push(lastFilledStepIndex);
      }
      this.currentStep = Math.min(...indexesList);
    }
    if (document.body?.clientWidth >= 768 && this.expand !== true && ['signature', 'initials', 'file', 'image'].includes(this.currentField?.type)) {
      this.isFormVisible = false;
    }
    if (this.alwaysMinimize) {
      this.isFormVisible = false;
    }
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      this.$nextTick(() => {
        const root = this.$root.$el.parentNode.getRootNode();
        const scrollbox = root.getElementById('scrollbox');
        const parent = root.body || root.querySelector('div');
        parent.style.overflow = 'hidden';
        scrollbox.classList.add('h-full', 'overflow-y-auto');
        scrollbox.parentNode.classList.add('h-screen', 'overflow-y-auto');
        scrollbox.parentNode.style.maxHeight = '-webkit-fill-available';
      });
    }
    this.$nextTick(() => {
      this.recalculateButtonDisabledKey = Math.random();
      Promise.all([this.maybeTrackEmailClick(), this.maybeTrackSmsClick()]).finally(() => {
        this.trackViewForm();
      });
    });
  },
  methods: {
    t(key) {
      return this.i18n[key] || _i18n__WEBPACK_IMPORTED_MODULE_15__["default"][this.language?.toLowerCase()]?.[key] || _i18n__WEBPACK_IMPORTED_MODULE_15__["default"][this.browserLanguage]?.[key] || _i18n__WEBPACK_IMPORTED_MODULE_15__["default"].en[key] || key;
    },
    onOrientationChange(event) {
      this.orientation = event.target.type;
    },
    checkFieldConditions(field) {
      if (field.conditions?.length) {
        return field.conditions.reduce((acc, c) => {
          if (['empty', 'unchecked'].includes(c.action)) {
            return acc && isEmpty(this.values[c.field_uuid]);
          } else if (['not_empty', 'checked'].includes(c.action)) {
            return acc && !isEmpty(this.values[c.field_uuid]);
          } else if (['equal', 'contains'].includes(c.action)) {
            const field = this.fieldsUuidIndex[c.field_uuid];
            const option = field.options.find(o => o.uuid === c.value);
            const values = [this.values[c.field_uuid]].flat();
            return acc && values.includes(this.optionValue(option, field.options.indexOf(option)));
          } else if (['not_equal', 'does_not_contain'].includes(c.action)) {
            const field = this.fieldsUuidIndex[c.field_uuid];
            const option = field.options.find(o => o.uuid === c.value);
            const values = [this.values[c.field_uuid]].flat();
            return acc && !values.includes(this.optionValue(option, field.options.indexOf(option)));
          } else {
            return acc;
          }
        }, true);
      } else {
        return true;
      }
    },
    optionValue(option, index) {
      if (option.value) {
        return option.value;
      } else {
        return `${this.t('option')} ${index + 1}`;
      }
    },
    maybeTrackEmailClick() {
      const {
        queryParams
      } = this;
      if (queryParams.has('t')) {
        const t = queryParams.get('t');
        queryParams.delete('t');
        const newUrl = [window.location.pathname, queryParams.toString()].filter(Boolean).join('?');
        window.history.replaceState({}, document.title, newUrl);
        return fetch(this.baseUrl + '/api/submitter_email_clicks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            t,
            submitter_slug: this.submitterSlug
          })
        });
      } else {
        return Promise.resolve({});
      }
    },
    maybeTrackSmsClick() {
      const {
        queryParams
      } = this;
      if (queryParams.has('c')) {
        const c = queryParams.get('c');
        queryParams.delete('c');
        const newUrl = [window.location.pathname, queryParams.toString()].filter(Boolean).join('?');
        window.history.replaceState({}, document.title, newUrl);
        return fetch(this.baseUrl + '/api/submitter_sms_clicks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            c,
            submitter_slug: this.submitterSlug
          })
        });
      } else {
        return Promise.resolve({});
      }
    },
    trackViewForm() {
      fetch(this.baseUrl + '/api/submitter_form_views', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          submitter_slug: this.submitterSlug
        })
      });
    },
    previousSignatureValueFor(field) {
      if (this.reuseSignature !== false) {
        const signatureField = [...this.fields].reverse().find(f => f.type === 'signature' && field.preferences?.format === f.preferences?.format && !!this.values[f.uuid]);
        return this.values[signatureField?.uuid];
      } else {
        return null;
      }
    },
    goToStep(step, scrollToArea = false, clickUpload = false) {
      this.currentStep = this.stepFields.indexOf(step);
      this.showFillAllRequiredFields = false;
      this.$nextTick(() => {
        this.recalculateButtonDisabledKey = Math.random();
        if (!this.isCompleted) {
          if (scrollToArea) {
            this.scrollIntoField(step[0]);
            this.$refs.form.querySelector('input[type="date"], input[type="number"], input[type="text"], select')?.focus();
          }
          if (clickUpload && !this.values[this.currentField.uuid] && ['file', 'image'].includes(this.currentField.type)) {
            this.$refs.form.querySelector('input[type="file"]')?.click();
          }
        }
      });
    },
    saveStep(formData) {
      const currentFieldUuids = this.currentStepFields.map(f => f.uuid);
      const currentFieldType = this.currentField.type;
      if (this.isCompleted) {
        return Promise.resolve({});
      } else {
        return fetch(this.baseUrl + this.submitPath, {
          method: 'POST',
          body: formData || new FormData(this.$refs.form)
        }).then(response => {
          if (response.status === 200) {
            currentFieldUuids.forEach(fieldUuid => {
              this.submittedValues[fieldUuid] = this.values[fieldUuid];
              if (currentFieldType === 'phone') {
                this.phoneVerifiedValues[fieldUuid] = this.values[fieldUuid];
              }
            });
          }
          return response;
        });
      }
    },
    scrollIntoField(field) {
      return this.$refs.areas.scrollIntoField(field);
    },
    scrollIntoArea(area) {
      return this.$refs.areas.scrollIntoArea(area);
    },
    async submitStep() {
      this.isSubmitting = true;
      const stepPromise = ['signature', 'phone', 'initials', 'payment'].includes(this.currentField.type) ? this.$refs.currentStep.submit : () => Promise.resolve({});
      stepPromise().then(async () => {
        const emptyRequiredField = this.stepFields.find((fields, index) => {
          if (index >= this.currentStep) {
            return false;
          }
          return fields.some(f => {
            return f.required && (f.type === 'phone' || !this.allowToSkip) && isEmpty(this.submittedValues[f.uuid]);
          });
        });
        const formData = new FormData(this.$refs.form);
        const isLastStep = this.currentStep === this.stepFields.length - 1;
        if (isLastStep && !emptyRequiredField && !this.dryRun) {
          formData.append('completed', 'true');
        }
        let saveStepRequest;
        if (!isLastStep && this.phoneVerifiedValues[this.currentField.uuid] && this.phoneVerifiedValues[this.currentField.uuid] === this.values[this.currentField.uuid]) {
          saveStepRequest = Promise.resolve({});
        } else {
          saveStepRequest = this.saveStep(formData);
        }
        await saveStepRequest.then(async response => {
          if (response.status === 422 || response.status === 500) {
            const data = await response.json();
            alert(data.error || 'Value is invalid');
            return Promise.reject(new Error(data.error));
          }
          if (isLastStep) {
            this.isSecondWalkthrough = true;
          }
          const nextStep = isLastStep && emptyRequiredField || this.stepFields[this.currentStep + 1];
          if (nextStep) {
            if (this.alwaysMinimize) {
              this.isFormVisible = false;
            }
            this.goToStep(nextStep, this.autoscrollFields);
            if (emptyRequiredField === nextStep) {
              this.showFillAllRequiredFields = true;
            }
          } else {
            this.isCompleted = true;
            const respData = await response.text();
            if (respData) {
              this.onComplete(JSON.parse(respData));
            }
            if (this.completedRedirectUrl) {
              window.location.href = this.completedRedirectUrl;
            }
          }
        }).catch(error => {
          console.error(error);
        }).finally(() => {
          this.isSubmitting = false;
        });
      }).catch(error => {
        if (error?.message === 'Image too small') {
          alert('Signature is too small - please redraw.');
        } else {
          console.log(error);
        }
      }).finally(() => {
        this.isSubmitting = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/formula_areas.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/formula_areas.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area */ "./app/javascript/submission_form/area.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FormulaFieldAreas',
  components: {
    FieldArea: _area__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    fields: {
      type: Array,
      required: false,
      default: () => []
    },
    values: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data() {
    return {
      isMathLoaded: false
    };
  },
  async mounted() {
    const {
      create,
      evaluateDependencies,
      addDependencies,
      subtractDependencies,
      divideDependencies,
      multiplyDependencies,
      powDependencies,
      roundDependencies,
      absDependencies,
      sinDependencies,
      tanDependencies,
      cosDependencies
    } = await Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_mathjs_lib_esm_index_js"), __webpack_require__.e("_d4c0")]).then(__webpack_require__.bind(__webpack_require__, /*! mathjs */ "./node_modules/mathjs/lib/esm/index.js"));
    this.math = create({
      evaluateDependencies,
      addDependencies,
      subtractDependencies,
      divideDependencies,
      multiplyDependencies,
      powDependencies,
      roundDependencies,
      absDependencies,
      sinDependencies,
      tanDependencies,
      cosDependencies
    });
    this.isMathLoaded = true;
  },
  methods: {
    findPageElementForArea(area) {
      return (this.$root.$el?.parentNode?.getRootNode() || document).getElementById(`page-${area.attachment_uuid}-${area.page}`);
    },
    calculateFormula(field) {
      const transformedFormula = field.preferences.formula.replace(/{{(.*?)}}/g, (match, uuid) => {
        return this.values[uuid] || 0.0;
      });
      return this.math.evaluate(transformedFormula.toLowerCase());
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/image_step.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/image_step.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropzone */ "./app/javascript/submission_form/dropzone.vue");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconReload.js");
/* harmony import */ var _markdown_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown_content */ "./app/javascript/submission_form/markdown_content.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ImageStep',
  components: {
    FileDropzone: _dropzone__WEBPACK_IMPORTED_MODULE_0__["default"],
    IconReload: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    MarkdownContent: _markdown_content__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['t'],
  props: {
    field: {
      type: Object,
      required: true
    },
    showFieldNames: {
      type: Boolean,
      required: false,
      default: true
    },
    submitterSlug: {
      type: String,
      required: true
    },
    attachmentsIndex: {
      type: Object,
      required: false,
      default: () => ({})
    },
    modelValue: {
      type: String,
      required: false,
      default: ''
    }
  },
  emits: ['attached', 'update:model-value'],
  methods: {
    remove() {
      this.$emit('update:model-value', '');
    },
    onImageUpload(attachments) {
      this.$emit('attached', attachments[0]);
      this.$emit('update:model-value', attachments[0].uuid);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/initials_step.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/initials_step.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _crop_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crop_canvas */ "./app/javascript/submission_form/crop_canvas.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconReload.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconTextSize.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconSignature.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconArrowsDiagonalMinimize2.js");
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! signature_pad */ "./node_modules/signature_pad/dist/signature_pad.js");
/* harmony import */ var _appears_on__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appears_on */ "./app/javascript/submission_form/appears_on.vue");
/* harmony import */ var _markdown_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown_content */ "./app/javascript/submission_form/markdown_content.vue");





const scale = 3;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InitialsStep',
  components: {
    AppearsOn: _appears_on__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconReload: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    IconTextSize: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    IconSignature: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    MarkdownContent: _markdown_content__WEBPACK_IMPORTED_MODULE_3__["default"],
    IconArrowsDiagonalMinimize2: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  inject: ['baseUrl', 't'],
  props: {
    field: {
      type: Object,
      required: true
    },
    submitterSlug: {
      type: String,
      required: true
    },
    showFieldNames: {
      type: Boolean,
      required: false,
      default: true
    },
    attachmentsIndex: {
      type: Object,
      required: false,
      default: () => ({})
    },
    previousValue: {
      type: String,
      required: false,
      default: ''
    },
    modelValue: {
      type: String,
      required: false,
      default: ''
    }
  },
  emits: ['attached', 'update:model-value', 'start', 'minimize', 'focus'],
  data() {
    return {
      isInitialsStarted: !!this.previousValue,
      isUsePreviousValue: true,
      isDrawInitials: false
    };
  },
  computed: {
    computedPreviousValue() {
      if (this.isUsePreviousValue) {
        return this.previousValue;
      } else {
        return null;
      }
    }
  },
  async mounted() {
    this.$nextTick(() => {
      if (this.$refs.canvas) {
        this.$refs.canvas.width = this.$refs.canvas.parentNode.clientWidth * scale;
        this.$refs.canvas.height = this.$refs.canvas.parentNode.clientWidth / 4.5 * scale;
        this.$refs.canvas.getContext('2d').scale(scale, scale);
      }
    });
    if (this.$refs.canvas) {
      this.pad = new signature_pad__WEBPACK_IMPORTED_MODULE_1__["default"](this.$refs.canvas);
      this.pad.addEventListener('beginStroke', () => {
        this.isInitialsStarted = true;
        this.$emit('start');
      });
      this.intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.$refs.canvas.width = this.$refs.canvas.parentNode.clientWidth * scale;
            this.$refs.canvas.height = this.$refs.canvas.parentNode.clientWidth / 4.5 * scale;
            this.$refs.canvas.getContext('2d').scale(scale, scale);
            this.intersectionObserver?.disconnect();
          }
        });
      });
      this.intersectionObserver.observe(this.$refs.canvas);
    }
  },
  beforeUnmount() {
    this.intersectionObserver?.disconnect();
  },
  methods: {
    remove() {
      this.$emit('update:model-value', '');
      this.isUsePreviousValue = false;
      this.isInitialsStarted = false;
    },
    clear() {
      this.pad.clear();
      this.isInitialsStarted = false;
      if (this.$refs.textInput) {
        this.$refs.textInput.value = '';
      }
    },
    updateWrittenInitials(e) {
      this.isInitialsStarted = !!e.target.value;
      const canvas = this.$refs.canvas;
      const context = canvas.getContext('2d');
      const fontFamily = 'Arial';
      const fontSize = '44px';
      const fontStyle = 'italic';
      const fontWeight = '';
      context.font = fontStyle + ' ' + fontWeight + ' ' + fontSize + ' ' + fontFamily;
      context.textAlign = 'center';
      context.clearRect(0, 0, canvas.width / scale, canvas.height / scale);
      context.fillText(e.target.value, canvas.width / 2 / scale, canvas.height / 2 / scale + 11);
    },
    toggleTextInput() {
      this.remove();
      this.clear();
      this.isDrawInitials = !this.isDrawInitials;
      if (!this.isDrawInitials) {
        this.$nextTick(() => {
          this.$refs.textInput.focus();
          this.$emit('start');
        });
      }
    },
    async submit() {
      if (this.modelValue || this.computedPreviousValue) {
        if (this.computedPreviousValue) {
          this.$emit('update:model-value', this.computedPreviousValue);
        }
        return Promise.resolve({});
      }
      return new Promise(resolve => {
        (0,_crop_canvas__WEBPACK_IMPORTED_MODULE_0__.cropCanvasAndExportToPNG)(this.$refs.canvas).then(async blob => {
          const file = new File([blob], 'initials.png', {
            type: 'image/png'
          });
          const formData = new FormData();
          formData.append('file', file);
          formData.append('submitter_slug', this.submitterSlug);
          formData.append('name', 'attachments');
          return fetch(this.baseUrl + '/api/attachments', {
            method: 'POST',
            body: formData
          }).then(resp => resp.json()).then(attachment => {
            this.$emit('attached', attachment);
            this.$emit('update:model-value', attachment.uuid);
            return resolve(attachment);
          });
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/markdown_content.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/markdown_content.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var snarkdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snarkdown */ "./node_modules/snarkdown/dist/snarkdown.es.js");

const htmlSplitRegexp = /(<a.+?<\/a>|<i>.+?<\/i>|<b>.+?<\/b>|<em>.+?<\/em>|<strong>.+?<\/strong>|<br>)/;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MarkdownContent',
  props: {
    string: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    items() {
      return (0,snarkdown__WEBPACK_IMPORTED_MODULE_0__["default"])(this.string.replace(/\n/g, '<br>')).split(htmlSplitRegexp);
    }
  },
  methods: {
    sanitizeHref(href) {
      if (href && href.trim().match(/^((?:https?:\/\/)|\/)/)) {
        return href.replace(/javascript:/g, '');
      }
    },
    extractAttr(text, attr) {
      if (text.includes(attr)) {
        return text.split(attr).pop().split('"')[1];
      }
    },
    extractText(text) {
      if (text) {
        return text.match(/>(.+?)</)?.[1];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/multi_select_step.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/multi_select_step.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markdown_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown_content */ "./app/javascript/submission_form/markdown_content.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MultiSelectStep',
  components: {
    MarkdownContent: _markdown_content__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  inject: ['t', 'scrollIntoField'],
  props: {
    field: {
      type: Object,
      required: true
    },
    isLastStep: {
      type: Boolean,
      required: true,
      default: false
    },
    showFieldNames: {
      type: Boolean,
      required: false,
      default: true
    },
    modelValue: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  emits: ['update:model-value'],
  data() {
    return {
      inputRefs: []
    };
  },
  computed: {
    showOptions() {
      return this.showFieldNames && (this.field.options.some(e => e.value) || this.field.options.length < 5);
    }
  },
  beforeUpdate() {
    this.inputRefs = [];
  },
  methods: {
    setInputRef(el) {
      if (el) {
        this.inputRefs.push(el);
      }
    },
    optionValue(option, index) {
      if (option.value) {
        return option.value;
      } else {
        return `${this.t('option')} ${index + 1}`;
      }
    },
    onChange() {
      this.$emit('update:model-value', this.inputRefs.filter(e => e.checked).map((e, index) => this.optionValue(e, index)));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/number_step.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/number_step.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appears_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appears_on */ "./app/javascript/submission_form/appears_on.vue");
/* harmony import */ var _markdown_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown_content */ "./app/javascript/submission_form/markdown_content.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TextStep',
  components: {
    AppearsOn: _appears_on__WEBPACK_IMPORTED_MODULE_0__["default"],
    MarkdownContent: _markdown_content__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['t'],
  props: {
    field: {
      type: Object,
      required: true
    },
    showFieldNames: {
      type: Boolean,
      required: false,
      default: true
    },
    modelValue: {
      type: [String, Number],
      required: false,
      default: ''
    }
  },
  emits: ['update:model-value', 'focus'],
  computed: {
    number: {
      set(value) {
        this.$emit('update:model-value', value);
      },
      get() {
        return this.modelValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/payment_step.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/payment_step.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconBrandStripe.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconInnerShadowTop.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconLoader.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PaymentStep',
  components: {
    IconBrandStripe: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    IconInnerShadowTop: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconLoader: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  inject: ['baseUrl', 't'],
  props: {
    modelValue: {
      type: String,
      required: false,
      default: ''
    },
    field: {
      type: Object,
      required: true
    },
    submitterSlug: {
      type: String,
      required: true
    }
  },
  emits: ['focus', 'submit', 'update:model-value', 'attached'],
  data() {
    return {
      isCreatingCheckout: false
    };
  },
  computed: {
    queryParams() {
      return new URLSearchParams(window.location.search);
    },
    sessionId() {
      return this.queryParams.get('stripe_session_id');
    },
    defaultName() {
      const {
        price,
        currency
      } = this.field.preferences || {};
      const formattedPrice = new Intl.NumberFormat([], {
        style: 'currency',
        currency
      }).format(price);
      return `Pay ${formattedPrice}`;
    }
  },
  mounted() {
    if (this.sessionId) {
      this.$emit('submit');
    }
  },
  methods: {
    async submit() {
      if (this.sessionId) {
        return fetch((this.baseUrl || '/embed').replace('/embed', '/api/stripe_payments/' + this.sessionId), {
          method: 'PUT',
          body: JSON.stringify({
            submitter_slug: this.submitterSlug
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(async resp => {
          if (resp.status === 422 || resp.status === 500) {
            const data = await resp.json();
            alert(data.error || 'Unexpected error');
            return Promise.reject(new Error(data.error));
          }
          const attachment = await resp.json();
          window.history.replaceState({}, document.title, window.location.pathname);
          this.$emit('update:model-value', attachment.uuid);
          this.$emit('attached', attachment);
          return resp;
        });
      } else {
        return Promise.resolve({});
      }
    },
    startCheckout() {
      this.isCreatingCheckout = true;
      fetch((this.baseUrl || '/embed').replace('/embed', '/api/stripe_payments'), {
        method: 'POST',
        body: JSON.stringify({
          submitter_slug: this.submitterSlug,
          field_uuid: this.field.uuid
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(async resp => {
        if (resp.status === 422 || resp.status === 500) {
          const data = await resp.json();
          alert(data.message || 'Unexpected error');
          return Promise.reject(new Error(data.message));
        }
        const {
          url
        } = await resp.json();
        const link = document.createElement('a');
        link.href = url;
        if (url) {
          link.click();
        }
      }).finally(() => {
        this.isCreatingCheckout = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/phone_step.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/phone_step.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markdown_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown_content */ "./app/javascript/submission_form/markdown_content.vue");

function throttle(func, delay) {
  let lastCallTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCallTime >= delay) {
      func.apply(this, args);
      lastCallTime = now;
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PhoneStep',
  components: {
    MarkdownContent: _markdown_content__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  inject: ['t', 'baseUrl'],
  props: {
    field: {
      type: Object,
      required: true
    },
    verifiedValue: {
      type: String,
      required: false,
      default: ''
    },
    submitterSlug: {
      type: String,
      required: true
    },
    locale: {
      type: String,
      required: false,
      default: 'en'
    },
    showFieldNames: {
      type: Boolean,
      required: false,
      default: true
    },
    modelValue: {
      type: String,
      required: false,
      default: ''
    },
    defaultValue: {
      type: String,
      required: false,
      default: ''
    }
  },
  emits: ['update:model-value', 'focus', 'submit'],
  data() {
    return {
      isCodeSent: false,
      isResendLoading: false
    };
  },
  methods: {
    emitSubmit: throttle(function (e) {
      this.$emit('submit');
    }, 1000),
    onInputCode(e) {
      if (e.target.value.length === 6) {
        this.emitSubmit();
      }
    },
    resendCode() {
      this.isResendLoading = true;
      this.sendVerificationCode().finally(() => {
        alert(this.t('verification_code_has_been_resent'));
        this.isResendLoading = false;
      });
    },
    sendVerificationCode() {
      return fetch(this.baseUrl + '/api/send_phone_verification_code', {
        method: 'POST',
        body: JSON.stringify({
          submitter_slug: this.submitterSlug,
          locale: this.locale,
          phone: this.$refs.phone.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    },
    async submit() {
      if (this.verifiedValue && this.verifiedValue === this.modelValue) {
        return Promise.resolve({});
      }
      if (!this.$refs.phone.value.toString().startsWith('+')) {
        alert(this.t('use_international_format'));
        return Promise.reject(new Error('phone invalid'));
      } else if (!this.isCodeSent) {
        this.sendVerificationCode();
        this.$emit('update:model-value', this.$refs.phone.value);
        this.isCodeSent = true;
        return Promise.reject(new Error('verify with code'));
      } else {
        return Promise.resolve({});
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/signature_step.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/signature_step.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconReload.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconCamera.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconQrcode.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconX.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconTextSize.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconSignature.js");
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconArrowsDiagonalMinimize2.js");
/* harmony import */ var _crop_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crop_canvas */ "./app/javascript/submission_form/crop_canvas.js");
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! signature_pad */ "./node_modules/signature_pad/dist/signature_pad.js");
/* harmony import */ var _appears_on__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appears_on */ "./app/javascript/submission_form/appears_on.vue");
/* harmony import */ var _markdown_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown_content */ "./app/javascript/submission_form/markdown_content.vue");





let isFontLoaded = false;
const scale = 3;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SignatureStep",
  components: {
    AppearsOn: _appears_on__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconReload: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    IconCamera: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    IconQrcode: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    MarkdownContent: _markdown_content__WEBPACK_IMPORTED_MODULE_3__["default"],
    IconX: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    IconTextSize: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    IconSignature: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    IconArrowsDiagonalMinimize2: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  inject: ["baseUrl", "t"],
  props: {
    field: {
      type: Object,
      required: true
    },
    submitterSlug: {
      type: String,
      required: true
    },
    showFieldNames: {
      type: Boolean,
      required: false,
      default: true
    },
    withDisclosure: {
      type: Boolean,
      required: false,
      default: false
    },
    withQrButton: {
      type: Boolean,
      required: false,
      default: false
    },
    buttonText: {
      type: String,
      required: false,
      default: "Submit"
    },
    withTypedSignature: {
      type: Boolean,
      required: false,
      default: true
    },
    attachmentsIndex: {
      type: Object,
      required: false,
      default: () => ({})
    },
    previousValue: {
      type: String,
      required: false,
      default: ""
    },
    modelValue: {
      type: String,
      required: false,
      default: ""
    }
  },
  emits: ["attached", "update:model-value", "start", "minimize"],
  data() {
    return {
      isSignatureStarted: !!this.previousValue,
      isShowQr: false,
      isUsePreviousValue: true,
      isTextSignature: this.field.preferences?.format === "typed",
      uploadImageInputKey: Math.random().toString()
    };
  },
  computed: {
    computedPreviousValue() {
      if (this.isUsePreviousValue) {
        return this.previousValue;
      } else {
        return null;
      }
    }
  },
  async mounted() {
    this.$nextTick(() => {
      if (this.$refs.canvas) {
        this.$refs.canvas.width = this.$refs.canvas.parentNode.clientWidth * scale;
        this.$refs.canvas.height = this.$refs.canvas.parentNode.clientWidth * scale / 3;
        this.$refs.canvas.getContext("2d").scale(scale, scale);
      }
      if (this.withQrButton) {
        __webpack_require__.e(/*! import() */ "vendors-node_modules_qr-creator_dist_qr-creator_es6_min_js").then(__webpack_require__.bind(__webpack_require__, /*! qr-creator */ "./node_modules/qr-creator/dist/qr-creator.es6.min.js")).then(({
          default: Qr
        }) => {
          Qr.render({
            text: `${document.location.origin}/p/${this.submitterSlug}?f=${this.field.uuid.split("-")[0]}`,
            radius: 0.0,
            ecLevel: "H",
            background: null,
            size: 132
          }, this.$refs.qrCanvas);
        });
      }
    });
    if (this.$refs.canvas) {
      this.pad = new signature_pad__WEBPACK_IMPORTED_MODULE_1__["default"](this.$refs.canvas);
      this.pad.addEventListener("endStroke", () => {
        this.isSignatureStarted = true;
        this.$emit("start");
      });
      this.intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.$refs.canvas.width = this.$refs.canvas.parentNode.clientWidth * scale;
            this.$refs.canvas.height = this.$refs.canvas.parentNode.clientWidth * scale / 3;
            this.$refs.canvas.getContext("2d").scale(scale, scale);
            this.intersectionObserver?.disconnect();
          }
        });
      });
      this.intersectionObserver.observe(this.$refs.canvas);
    }
  },
  beforeUnmount() {
    this.intersectionObserver?.disconnect();
    this.stopCheckSignature();
  },
  methods: {
    remove() {
      this.$emit("update:model-value", "");
      this.isUsePreviousValue = false;
      this.isSignatureStarted = false;
    },
    loadFont() {
      if (!isFontLoaded) {
        const font = new FontFace("Dancing Script", `url(${this.baseUrl}/fonts/DancingScript-Regular.otf) format("opentype")`);
        font.load().then(loadedFont => {
          document.fonts.add(loadedFont);
          isFontLoaded = true;
        }).catch(error => {
          console.error("Font loading failed:", error);
        });
      }
    },
    showQr() {
      this.isShowQr = true;
      this.startCheckSignature();
    },
    hideQr() {
      this.isShowQr = false;
      this.stopCheckSignature();
    },
    startCheckSignature() {
      const after = JSON.stringify(new Date());
      this.checkSignatureInterval = setInterval(() => {
        this.checkSignature({
          after
        });
      }, 2000);
    },
    stopCheckSignature() {
      if (this.checkSignatureInterval) {
        clearInterval(this.checkSignatureInterval);
      }
    },
    checkSignature(params = {}) {
      return fetch(this.baseUrl + "/s/" + this.submitterSlug + "/values?field_uuid=" + this.field.uuid + "&after=" + params.after, {
        method: "GET"
      }).then(async resp => {
        const {
          attachment
        } = await resp.json();
        if (attachment?.uuid) {
          this.$emit("attached", attachment);
          this.$emit("update:model-value", attachment.uuid);
          this.hideQr();
        }
      });
    },
    clear() {
      this.pad.clear();
      this.isSignatureStarted = false;
      if (this.$refs.textInput) {
        this.$refs.textInput.value = "";
        this.$refs.textInput.focus();
      }
    },
    updateWrittenSignature(e) {
      this.isSignatureStarted = !!e.target.value;
      const canvas = this.$refs.canvas;
      const context = canvas.getContext("2d");
      const fontFamily = "Dancing Script";
      const fontSize = "38px";
      const fontStyle = "italic";
      const fontWeight = "";
      context.font = fontStyle + " " + fontWeight + " " + fontSize + " " + fontFamily;
      context.textAlign = "center";
      context.clearRect(0, 0, canvas.width / scale, canvas.height / scale);
      context.fillText(e.target.value, canvas.width / 2 / scale, canvas.height / 2 / scale + 11);
    },
    toggleTextInput() {
      this.remove();
      this.clear();
      this.isTextSignature = !this.isTextSignature;
      if (this.isTextSignature) {
        this.$nextTick(() => {
          this.$refs.textInput.focus();
          this.loadFont();
          this.$emit("start");
        });
      }
    },
    drawImage(event) {
      this.remove();
      this.isSignatureStarted = true;
      const file = event.target.files[0];
      if (file && file.type.match("image.*")) {
        const reader = new FileReader();
        reader.onload = event => {
          const img = new Image();
          img.src = event.target.result;
          img.onload = () => {
            const canvas = this.$refs.canvas;
            const context = canvas.getContext("2d");
            const aspectRatio = img.width / img.height;
            const canvasWidth = canvas.width / scale;
            const canvasHeight = canvas.height / scale;
            let targetWidth = canvasWidth;
            let targetHeight = canvasHeight;
            if (canvasWidth / canvasHeight > aspectRatio) {
              targetWidth = canvasHeight * aspectRatio;
            } else {
              targetHeight = canvasWidth / aspectRatio;
            }
            if (targetHeight > targetWidth) {
              const scale = targetHeight / targetWidth;
              targetWidth = targetWidth * scale;
              targetHeight = targetHeight * scale;
            }
            const x = (canvasWidth - targetWidth) / 2;
            const y = (canvasHeight - targetHeight) / 2;
            setTimeout(() => {
              context.clearRect(0, 0, canvasWidth, canvasHeight);
              context.drawImage(img, x, y, targetWidth, targetHeight);
              this.$emit("start");
            }, 50);
          };
        };
        reader.readAsDataURL(file);
        this.uploadImageInputKey = Math.random().toString();
      }
    },
    async submit() {
      if (this.modelValue || this.computedPreviousValue) {
        if (this.computedPreviousValue) {
          this.$emit("update:model-value", this.computedPreviousValue);
        }
        return Promise.resolve({});
      }
      return new Promise((resolve, reject) => {
        (0,_crop_canvas__WEBPACK_IMPORTED_MODULE_0__.cropCanvasAndExportToPNG)(this.$refs.canvas, {
          errorOnTooSmall: true
        }).then(async blob => {
          const file = new File([blob], "signature.png", {
            type: "image/png"
          });
          const formData = new FormData();
          formData.append("file", file);
          formData.append("submitter_slug", this.submitterSlug);
          formData.append("name", "attachments");
          return fetch(this.baseUrl + "/api/attachments", {
            method: "POST",
            body: formData
          }).then(resp => resp.json()).then(attachment => {
            this.$emit("attached", attachment);
            this.$emit("update:model-value", attachment.uuid);
            return resolve(attachment);
          });
        }).catch(error => {
          return reject(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/text_step.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/text_step.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-vue */ "./node_modules/@tabler/icons-vue/dist/esm/icons/IconAlignBoxLeftTop.js");
/* harmony import */ var _appears_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appears_on */ "./app/javascript/submission_form/appears_on.vue");
/* harmony import */ var _markdown_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown_content */ "./app/javascript/submission_form/markdown_content.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TextStep',
  components: {
    IconAlignBoxLeftTop: _tabler_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    MarkdownContent: _markdown_content__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppearsOn: _appears_on__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  inject: ['t'],
  props: {
    field: {
      type: Object,
      required: true
    },
    showFieldNames: {
      type: Boolean,
      required: false,
      default: true
    },
    modelValue: {
      type: String,
      required: false,
      default: ''
    }
  },
  emits: ['update:model-value', 'focus'],
  data() {
    return {
      isTextArea: false
    };
  },
  computed: {
    cellsMaxLegth() {
      if (this.field.type === 'cells') {
        const area = this.field.areas?.[0];
        if (area) {
          return parseInt(area.w / area.cell_w) + 1;
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
    text: {
      set(value) {
        this.$emit('update:model-value', value);
      },
      get() {
        return this.modelValue;
      }
    }
  },
  mounted() {
    if (this.modelValue) {
      this.isTextArea = this.modelValue.toString().includes('\n');
      if (this.isTextArea) {
        this.$nextTick(() => {
          this.resizeTextarea();
        });
      }
    }
  },
  methods: {
    resizeTextarea() {
      const textarea = this.$refs.textarea;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    },
    toggleTextArea() {
      this.isTextArea = true;
      this.$nextTick(() => {
        this.$refs.textarea.focus();
        this.$refs.textarea.setSelectionRange(this.$refs.textarea.value.length, this.$refs.textarea.value.length);
        this.resizeTextarea();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/appears_on.vue?vue&type=template&id=3c68b04e":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/appears_on.vue?vue&type=template&id=3c68b04e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  key: 0,
  dir: "auto",
  class: "mb-2"
};
const _hoisted_2 = {
  class: "flex space-x-1 text-sm ml-1 -mt-3"
};
const _hoisted_3 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.uniqueAreas.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('appears_on')) + ": ", 1 /* TEXT */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.uniqueAreas, area => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: area.uuid,
      href: "#",
      class: "link pr-0.5",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.scrollIntoArea(area), ["prevent"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('page')) + " ", 1 /* TEXT */), $options.isMultipleDocs ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.attachmentUuids.indexOf(area.attachment_uuid) + 1) + "-", 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(area.page + 1), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_3);
  }), 128 /* KEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/area.vue?vue&type=template&id=ca50a2ca":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/area.vue?vue&type=template&id=ca50a2ca ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  key: 0,
  class: "absolute top-0 bottom-0 right-0 left-0 items-center justify-center h-full w-full"
};
const _hoisted_2 = {
  key: 0,
  class: "flex justify-center items-center h-full opacity-50"
};
const _hoisted_3 = {
  key: 1,
  class: "absolute -top-7 rounded bg-base-content text-base-100 px-2 text-sm whitespace-nowrap pointer-events-none"
};
const _hoisted_4 = {
  key: 2,
  ref: "scrollToElem",
  class: "absolute -top-20"
};
const _hoisted_5 = ["src"];
const _hoisted_6 = ["src"];
const _hoisted_7 = ["src"];
const _hoisted_8 = ["src"];
const _hoisted_9 = {
  key: 7,
  class: "px-0.5 flex flex-col justify-center"
};
const _hoisted_10 = ["href"];
const _hoisted_11 = ["checked"];
const _hoisted_12 = ["checked"];
const _hoisted_13 = ["checked"];
const _hoisted_14 = {
  key: 11,
  class: "w-full flex items-center"
};
const _hoisted_15 = {
  key: 0
};
const _hoisted_16 = {
  key: 1
};
const _hoisted_17 = {
  key: 2
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconPaperclip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconPaperclip");
  const _component_IconCheck = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconCheck");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["field-area flex absolute lg:text-base -outline-offset-1", {
      'text-[1.5vw] lg:text-base': !$data.textOverflowChars,
      'text-[1.0vw] lg:text-xs': $data.textOverflowChars,
      'cursor-default': !$props.submittable,
      'border border-red-100 bg-red-100 cursor-pointer': $props.submittable,
      'border border-red-100': !$props.isActive && $props.submittable,
      'bg-opacity-80': !$props.isActive && !$props.isValueSet && $props.submittable,
      'field-area-active outline-red-500 outline-dashed outline-2 z-10': $props.isActive && $props.submittable,
      'bg-opacity-40': ($props.isActive || $props.isValueSet) && $props.submittable
    }]),
    dir: "auto",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.computedStyle)
  }, [!$props.isActive && !$props.isValueSet && $props.field.type !== 'checkbox' && $props.submittable && !$props.area.option_uuid ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$props.field ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.fieldIcons[$props.field.type]), {
    width: "100%",
    height: "100%",
    class: "max-h-10 text-base-content"
  }))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.isActive && $props.withLabel && (!$props.area.option_uuid || !$options.option.value) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [$props.area.option_uuid && !$options.option.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.optionValue($options.option)), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.name || $options.fieldNames[$props.field.type]) + " ", 1 /* TEXT */), $props.field.type === 'checkbox' && !$props.field.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.fieldIndex + 1), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : !$props.field.required && $props.field.type !== 'checkbox' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" (optional) ")], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.isActive ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, null, 512 /* NEED_PATCH */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.type === 'image' && $options.image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 3,
    class: "object-contain mx-auto",
    src: $options.image.url
  }, null, 8 /* PROPS */, _hoisted_5)) : $props.field.type === 'stamp' && $options.stamp ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 4,
    class: "object-contain mx-auto",
    src: $options.stamp.url
  }, null, 8 /* PROPS */, _hoisted_6)) : $props.field.type === 'signature' && $options.signature ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 5,
    class: "object-contain mx-auto",
    src: $options.signature.url
  }, null, 8 /* PROPS */, _hoisted_7)) : $props.field.type === 'initials' && $options.initials ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 6,
    class: "object-contain mx-auto",
    src: $options.initials.url
  }, null, 8 /* PROPS */, _hoisted_8)) : $props.field.type === 'file' || $props.field.type === 'payment' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.attachments, (attachment, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: index,
      target: "_blank",
      href: attachment.url
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconPaperclip, {
      class: "inline w-[1.5vw] h-[1.5vw] lg:w-4 lg:h-4"
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(attachment.filename), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_10);
  }), 128 /* KEYED_FRAGMENT */))])) : $props.field.type === 'checkbox' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 8,
    class: "w-full p-[1px] flex items-center justify-center",
    onClick: _cache[1] || (_cache[1] = $event => $event.target.querySelector('input')?.click())
  }, [$props.submittable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    type: "checkbox",
    value: false,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["aspect-square base-checkbox", {
      '!w-auto !h-full': $props.area.w > $props.area.h,
      '!w-full !h-auto': $props.area.w <= $props.area.h
    }]),
    checked: !!$props.modelValue,
    onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit('update:model-value', !$props.modelValue))
  }, null, 10 /* CLASS, PROPS */, _hoisted_11)) : $props.modelValue ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconCheck, {
    key: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["aspect-square", {
      '!w-auto !h-full': $props.area.w > $props.area.h,
      '!w-full !h-auto': $props.area.w <= $props.area.h
    }])
  }, null, 8 /* PROPS */, ["class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : $props.field.type === 'radio' && $props.area.option_uuid ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 9,
    class: "w-full p-[1px] flex items-center justify-center",
    onClick: _cache[3] || (_cache[3] = $event => $event.target.querySelector('input')?.click())
  }, [$props.submittable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    type: "radio",
    value: false,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["aspect-square checked:checkbox checked:checkbox-xs", {
      'base-radio': !$props.modelValue || $props.modelValue !== $options.optionValue($options.option),
      '!w-auto !h-full': $props.area.w > $props.area.h,
      '!w-full !h-auto': $props.area.w <= $props.area.h
    }]),
    checked: !!$props.modelValue && $props.modelValue === $options.optionValue($options.option),
    onClick: _cache[2] || (_cache[2] = $event => _ctx.$emit('update:model-value', $options.optionValue($options.option)))
  }, null, 10 /* CLASS, PROPS */, _hoisted_12)) : !!$props.modelValue && $props.modelValue === $options.optionValue($options.option) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconCheck, {
    key: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["aspect-square", {
      '!w-auto !h-full': $props.area.w > $props.area.h,
      '!w-full !h-auto': $props.area.w <= $props.area.h
    }])
  }, null, 8 /* PROPS */, ["class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : $props.field.type === 'multiple' && $props.area.option_uuid ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 10,
    class: "w-full p-[1px] flex items-center justify-center",
    onClick: _cache[5] || (_cache[5] = $event => $event.target.querySelector('input')?.click())
  }, [$props.submittable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    type: "checkbox",
    value: false,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["aspect-square base-checkbox", {
      '!w-auto !h-full': $props.area.w > $props.area.h,
      '!w-full !h-auto': $props.area.w <= $props.area.h
    }]),
    checked: !!$props.modelValue && $props.modelValue.includes($options.optionValue($options.option)),
    onChange: _cache[4] || (_cache[4] = $event => $options.updateMultipleSelectValue($options.optionValue($options.option)))
  }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_13)) : !!$props.modelValue && $props.modelValue.includes($options.optionValue($options.option)) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconCheck, {
    key: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["aspect-square", {
      '!w-auto !h-full': $props.area.w > $props.area.h,
      '!w-full !h-auto': $props.area.w <= $props.area.h
    }])
  }, null, 8 /* PROPS */, ["class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : $props.field.type === 'cells' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.modelValue, (char, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      class: "text-center flex-none",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        width: $props.area.cell_w / $props.area.w * 100 + '%'
      })
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(char), 5 /* TEXT, STYLE */);
  }), 128 /* KEYED_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 12,
    ref: "textContainer",
    dir: "auto",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex items-center px-0.5 w-full", $options.alignClasses[$props.field.preferences?.align]])
  }, [Array.isArray($props.modelValue) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.modelValue.join(', ')), 1 /* TEXT */)) : $props.field.type === 'date' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formattedDate), 1 /* TEXT */)) : $props.field.type === 'number' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatNumber($props.modelValue, $props.field.preferences?.format)), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 3,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["whitespace-pre-wrap", {
      'w-full': $props.field.preferences?.align
    }])
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.modelValue), 3 /* TEXT, CLASS */))], 2 /* CLASS */))], 6 /* CLASS, STYLE */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/areas.vue?vue&type=template&id=786c7430":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/areas.vue?vue&type=template&id=786c7430 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FieldArea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FieldArea");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.steps, step => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: step[0].uuid
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(step, (field, fieldIndex) => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: field.uuid
      }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(field.areas, (area, areaIndex) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: areaIndex
        }, [$options.findPageElementForArea(area) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
          key: 0,
          to: $options.findPageElementForArea(area)
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FieldArea, {
          ref_for: true,
          ref: $options.setAreaRef,
          modelValue: $props.values[field.uuid],
          "onUpdate:modelValue": $event => $props.values[field.uuid] = $event,
          field: field,
          area: area,
          submittable: true,
          "field-index": fieldIndex,
          "is-active": $props.currentStep === step,
          "with-label": $props.withLabel,
          "is-value-set": step.some(f => f.uuid in $props.values),
          "attachments-index": $props.attachmentsIndex,
          onClick: $event => _ctx.$emit('focus-step', step)
        }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue", "field", "area", "field-index", "is-active", "with-label", "is-value-set", "attachments-index", "onClick"])], 8 /* PROPS */, ["to"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
      }), 128 /* KEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */);
    }), 128 /* KEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/attachment_step.vue?vue&type=template&id=f5e0196c":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/attachment_step.vue?vue&type=template&id=f5e0196c ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = ["value", "name"];
const _hoisted_3 = ["href"];
const _hoisted_4 = ["onClick"];
const _hoisted_5 = ["name"];
const _hoisted_6 = {
  key: 2,
  dir: "auto",
  class: "mb-3 px-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconPaperclip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconPaperclip");
  const _component_IconTrashX = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconTrashX");
  const _component_MarkdownContent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MarkdownContent");
  const _component_FileDropzone = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FileDropzone");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [$options.value.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.value, (val, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      class: "flex mb-2"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      value: val,
      type: "hidden",
      name: `values[${$props.field.uuid}][]`
    }, null, 8 /* PROPS */, _hoisted_2), val ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      class: "flex items-center space-x-1.5 w-full",
      href: $props.attachmentsIndex[val].url,
      target: "_blank"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconPaperclip, {
      width: 16,
      class: "flex-none",
      heigh: 16
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.attachmentsIndex[val].filename), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_3)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.removeAttachment(val), ["prevent"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconTrashX, {
      width: 18,
      heigh: 19
    })], 8 /* PROPS */, _hoisted_4)]);
  }), 128 /* KEYED_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 1,
    value: "",
    type: "hidden",
    name: `values[${$props.field.uuid}][]`
  }, null, 8 /* PROPS */, _hoisted_5)), $props.field.description && !$props.modelValue.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownContent, {
    string: $props.field.description
  }, null, 8 /* PROPS */, ["string"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FileDropzone, {
    message: `${$options.t('upload')} ${$props.field.name || $options.t('files')}${$props.field.required ? '' : ` (${$options.t('optional')})`}`,
    "submitter-slug": $props.submitterSlug,
    multiple: true,
    onUpload: $options.onUpload
  }, null, 8 /* PROPS */, ["message", "submitter-slug", "onUpload"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/completed.vue?vue&type=template&id=17f91b2d":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/completed.vue?vue&type=template&id=17f91b2d ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "mx-auto max-w-md flex flex-col",
  dir: "auto"
};
const _hoisted_2 = {
  class: "font-medium text-2xl flex items-center space-x-1.5 mx-auto"
};
const _hoisted_3 = {
  key: 0,
  class: "mt-2"
};
const _hoisted_4 = {
  class: "space-y-3 mt-5"
};
const _hoisted_5 = ["href"];
const _hoisted_6 = ["disabled"];
const _hoisted_7 = ["disabled"];
const _hoisted_8 = {
  key: 3,
  target: "_blank",
  href: "https://github.com/uvtsignco/uvtsign",
  class: "white-button flex items-center space-x-1 w-full"
};
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Star on Github ", -1 /* HOISTED */);
const _hoisted_10 = {
  key: 4,
  href: "https://uvtsign.co/sign_up",
  class: "white-button flex items-center space-x-1 w-full"
};
const _hoisted_11 = {
  key: 1,
  class: "text-center mt-4"
};
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "https://www.uvtsign.co/",
  target: "_blank",
  class: "underline"
}, "UVTSign", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconCircleCheck = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconCircleCheck");
  const _component_MarkdownContent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MarkdownContent");
  const _component_IconInnerShadowTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconInnerShadowTop");
  const _component_IconMail = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconMail");
  const _component_IconDownload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconDownload");
  const _component_IconBrandGithub = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconBrandGithub");
  const _component_IconLogin = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconLogin");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconCircleCheck, {
    class: "inline text-green-600",
    width: 30,
    height: 30
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.completedMessage.title || $options.t("form_has_been_completed")), 1 /* TEXT */)]), $props.completedMessage.body ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownContent, {
    string: $props.completedMessage.body
  }, null, 8 /* PROPS */, ["string"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [$props.completedButton.url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 0,
    href: $options.sanitizeHref($props.completedButton.url),
    rel: "noopener noreferrer nofollow",
    class: "white-button flex items-center w-full"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.completedButton.title || "Back to Website"), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_5)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.canSendEmail && !$props.isDemo && $props.withSendCopyButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    class: "white-button !h-auto flex items-center space-x-1 w-full",
    disabled: $data.isSendingCopy,
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.sendCopyToEmail && $options.sendCopyToEmail(...args), ["prevent"]))
  }, [$data.isSendingCopy ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconInnerShadowTop, {
    key: 0,
    class: "animate-spin"
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconMail, {
    key: 1
  })), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("send_copy_via_email")), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$options.isWebView && $props.withDownloadButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    class: "base-button flex items-center space-x-1 w-full",
    disabled: $data.isDownloading,
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.download && $options.download(...args), ["prevent"]))
  }, [$data.isDownloading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconInnerShadowTop, {
    key: 0,
    class: "animate-spin"
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconDownload, {
    key: 1
  })), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("download")), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.isDemo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconBrandGithub), _hoisted_9])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.isDemo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconLogin), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("create_a_free_account")), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $props.attribution ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("signed_with")) + " ", 1 /* TEXT */), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("open_source_documents_software")), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/date_step.vue?vue&type=template&id=555e089f":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/date_step.vue?vue&type=template&id=555e089f ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  dir: "auto"
};
const _hoisted_2 = ["for"];
const _hoisted_3 = {
  key: 0,
  class: "mb-3 px-1",
  dir: "auto"
};
const _hoisted_4 = {
  class: "text-center"
};
const _hoisted_5 = ["required", "name"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MarkdownContent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MarkdownContent");
  const _component_IconCalendarCheck = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconCalendarCheck");
  const _component_AppearsOn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AppearsOn");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex justify-between items-center w-full", {
      'mb-2': !$props.field.description
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    for: $props.field.uuid,
    class: "label text-2xl"
  }, [$props.field.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MarkdownContent, {
    key: 0,
    string: $props.field.title
  }, null, 8 /* PROPS */, ["string"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.name && $props.showFieldNames ? $props.field.name : $options.t('date')) + " ", 1 /* TEXT */), !$props.field.required ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('optional')) + ")", 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */))], 8 /* PROPS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "btn btn-outline btn-sm !normal-case font-normal",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => [$options.setCurrentDate(), _ctx.$emit('focus')], ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconCalendarCheck, {
    width: 16
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('set_today')), 1 /* TEXT */)])], 2 /* CLASS */), $props.field.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownContent, {
    string: $props.field.description
  }, null, 8 /* PROPS */, ["string"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppearsOn, {
    field: $props.field
  }, null, 8 /* PROPS */, ["field"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    ref: "input",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $options.value = $event),
    class: "base-input !text-2xl text-center w-full",
    required: $props.field.required,
    type: "date",
    name: `values[${$props.field.uuid}]`,
    onFocus: _cache[2] || (_cache[2] = $event => _ctx.$emit('focus'))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_5), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $options.value]])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/dropzone.vue?vue&type=template&id=c2fd81ae":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/dropzone.vue?vue&type=template&id=c2fd81ae ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
  class: "font-medium mb-1"
};
const _hoisted_5 = {
  class: "text-xs"
};
const _hoisted_6 = {
  class: "font-medium"
};
const _hoisted_7 = ["id", "multiple", "accept"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconInnerShadowTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconInnerShadowTop");
  const _component_IconCloudUpload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconCloudUpload");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: "flex h-32 w-full",
    onDragover: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"])),
    onDrop: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.onDropFiles && $options.onDropFiles(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    for: $options.inputId,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full relative bg-base-300 hover:bg-base-200 rounded-md border border-base-content border-dashed", {
      'opacity-50': $data.isLoading
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconInnerShadowTop, {
    key: 0,
    class: "animate-spin",
    width: 30,
    height: 30
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconCloudUpload, {
    key: 1,
    width: 30,
    height: 30
  })), $props.message ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.message), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('click_to_upload')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('or_drag_and_drop_files')), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: $options.inputId,
    ref: "input",
    multiple: $props.multiple,
    accept: $props.accept,
    type: "file",
    class: "hidden",
    onChange: _cache[0] || (_cache[0] = (...args) => $options.onSelectFiles && $options.onSelectFiles(...args))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_7)], 10 /* CLASS, PROPS */, _hoisted_1)], 32 /* NEED_HYDRATION */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/form.vue?vue&type=template&id=1a62f752":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/form.vue?vue&type=template&id=1a62f752 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["title"];
const _hoisted_2 = ["action"];
const _hoisted_3 = ["value"];
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  value: "put",
  name: "_method",
  type: "hidden"
}, null, -1 /* HOISTED */);
const _hoisted_5 = {
  class: "md:mt-4"
};
const _hoisted_6 = {
  key: 0
};
const _hoisted_7 = {
  key: 3
};
const _hoisted_8 = ["for"];
const _hoisted_9 = {
  key: 1,
  class: "py-1"
};
const _hoisted_10 = {
  key: 2,
  dir: "auto",
  class: "mb-3 px-1"
};
const _hoisted_11 = ["id", "required", "name"];
const _hoisted_12 = ["selected"];
const _hoisted_13 = ["selected", "value"];
const _hoisted_14 = {
  key: 4
};
const _hoisted_15 = ["for"];
const _hoisted_16 = {
  key: 1,
  dir: "auto",
  class: "mb-3 px-1"
};
const _hoisted_17 = {
  class: "flex w-full max-h-44 overflow-y-auto"
};
const _hoisted_18 = {
  key: 0,
  class: "text-xl px-1"
};
const _hoisted_19 = {
  class: "font-semibold"
};
const _hoisted_20 = ["for"];
const _hoisted_21 = ["id", "name", "value", "required"];
const _hoisted_22 = {
  class: "text-xl"
};
const _hoisted_23 = {
  key: 6
};
const _hoisted_24 = {
  key: 0,
  dir: "auto",
  class: "mb-3 px-1"
};
const _hoisted_25 = {
  class: "flex w-full max-h-44 overflow-y-auto"
};
const _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "hidden",
  name: "cast_boolean",
  value: "true"
}, null, -1 /* HOISTED */);
const _hoisted_27 = {
  class: "space-y-3.5 mx-auto"
};
const _hoisted_28 = {
  class: "text-xl"
};
const _hoisted_29 = {
  class: "font-semibold"
};
const _hoisted_30 = ["name", "value"];
const _hoisted_31 = ["for"];
const _hoisted_32 = ["name", "value"];
const _hoisted_33 = ["id", "oninvalid", "onchange", "required", "checked", "onClick"];
const _hoisted_34 = {
  key: 0,
  class: "text-xl"
};
const _hoisted_35 = {
  key: 1,
  class: "text-xl"
};
const _hoisted_36 = ["disabled"];
const _hoisted_37 = {
  class: "flex"
};
const _hoisted_38 = {
  key: 1,
  class: "w-6 flex justify-start mr-1"
};
const _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "...", -1 /* HOISTED */);
const _hoisted_40 = [_hoisted_39];
const _hoisted_41 = {
  key: 0,
  class: "text-center mt-1"
};
const _hoisted_42 = {
  key: 2,
  class: "flex justify-center"
};
const _hoisted_43 = {
  class: "flex items-center mt-4 mb-1 flex-wrap"
};
const _hoisted_44 = ["onClick"];
const _hoisted_45 = {
  key: 3,
  class: "mt-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FieldAreas = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FieldAreas");
  const _component_FormulaFieldAreas = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormulaFieldAreas");
  const _component_IconWritingSign = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconWritingSign");
  const _component_IconArrowsDiagonal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconArrowsDiagonal");
  const _component_IconArrowsDiagonalMinimize2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconArrowsDiagonalMinimize2");
  const _component_TextStep = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TextStep");
  const _component_NumberStep = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NumberStep");
  const _component_DateStep = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DateStep");
  const _component_MarkdownContent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MarkdownContent");
  const _component_AppearsOn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AppearsOn");
  const _component_MultiSelectStep = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MultiSelectStep");
  const _component_ImageStep = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ImageStep");
  const _component_SignatureStep = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SignatureStep");
  const _component_InitialsStep = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InitialsStep");
  const _component_AttachmentStep = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AttachmentStep");
  const _component_PhoneStep = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PhoneStep");
  const _component_PaymentStep = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PaymentStep");
  const _component_IconInnerShadowTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconInnerShadowTop");
  const _component_FormCompleted = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormCompleted");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FieldAreas, {
    ref: "areas",
    steps: $options.stepFields,
    values: $props.values,
    "attachments-index": $options.attachmentsIndex,
    "with-label": !$options.isAnonymousChecboxes && $props.showFieldNames,
    "current-step": $options.currentStepFields,
    onFocusStep: _cache[0] || (_cache[0] = $event => [$options.saveStep(), $options.goToStep($event, false, true), $options.currentField.type !== 'checkbox' ? $data.isFormVisible = true : ''])
  }, null, 8 /* PROPS */, ["steps", "values", "attachments-index", "with-label", "current-step"]), $options.formulaFields.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FormulaFieldAreas, {
    key: 0,
    fields: $options.formulaFields,
    values: $props.values
  }, null, 8 /* PROPS */, ["fields", "values"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.isFormVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    id: "expand_form_button",
    class: "btn btn-neutral flex text-white absolute bottom-0 w-full mb-3",
    style: {
      "width": "96%",
      "margin-left": "2%"
    },
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => [$data.isFormVisible = true, $options.scrollIntoField($options.currentField)], ["prevent"]))
  }, [['initials', 'signature'].includes($options.currentField.type) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconWritingSign, {
    "stroke-width": "1.5"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('sign_now')), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : $options.alwaysMinimize ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('next')), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 2
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('submit_form')), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconArrowsDiagonal, {
    class: "absolute right-0 mr-4",
    width: 20,
    height: 20
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "form_container",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["shadow-md bg-base-100 absolute bottom-0 w-full border-base-200 border p-4 rounded", {
      'md:bottom-4': $props.isBreakpointMd
    }]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      backgroundColor: $props.backgroundColor
    })
  }, [!$data.isCompleted ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    id: "minimize_form_button",
    class: "absolute right-0 mr-2 mt-2 top-0 hidden md:block",
    title: $options.t('minimize'),
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $data.isFormVisible = false, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconArrowsDiagonalMinimize2, {
    width: 20,
    height: 20
  })], 8 /* PROPS */, _hoisted_1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'md:px-4': $props.isBreakpointMd
    })
  }, [!$data.isCompleted ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    key: 0,
    ref: "form",
    action: $options.submitPath,
    method: "post",
    class: "mx-auto",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      maxWidth: $props.isBreakpointMd ? '582px' : ''
    }),
    onSubmit: _cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.submitStep && $options.submitStep(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    name: "authenticity_token",
    value: $props.authenticityToken
  }, null, 8 /* PROPS */, _hoisted_3), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [['cells', 'text'].includes($options.currentField.type) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TextStep, {
    key: $options.currentField.uuid,
    modelValue: $props.values[$options.currentField.uuid],
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $props.values[$options.currentField.uuid] = $event),
    "show-field-names": $props.showFieldNames,
    field: $options.currentField,
    onFocus: _cache[4] || (_cache[4] = $event => $options.scrollIntoField($options.currentField))
  }, null, 8 /* PROPS */, ["modelValue", "show-field-names", "field"]))])) : $options.currentField.type === 'number' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NumberStep, {
    key: $options.currentField.uuid,
    modelValue: $props.values[$options.currentField.uuid],
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $props.values[$options.currentField.uuid] = $event),
    "show-field-names": $props.showFieldNames,
    field: $options.currentField,
    onFocus: _cache[6] || (_cache[6] = $event => $options.scrollIntoField($options.currentField))
  }, null, 8 /* PROPS */, ["modelValue", "show-field-names", "field"])) : $options.currentField.type === 'date' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DateStep, {
    key: $options.currentField.uuid,
    modelValue: $props.values[$options.currentField.uuid],
    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $props.values[$options.currentField.uuid] = $event),
    "show-field-names": $props.showFieldNames,
    field: $options.currentField,
    onFocus: _cache[8] || (_cache[8] = $event => $options.scrollIntoField($options.currentField))
  }, null, 8 /* PROPS */, ["modelValue", "show-field-names", "field"])) : $options.currentField.type === 'select' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [$props.showFieldNames && ($options.currentField.name || $options.currentField.title) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
    key: 0,
    for: $options.currentField.uuid,
    dir: "auto",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["label text-2xl", {
      'mb-2': !$options.currentField.description
    }])
  }, [$options.currentField.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MarkdownContent, {
    key: 0,
    string: $options.currentField.title
  }, null, 8 /* PROPS */, ["string"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.currentField.name) + " ", 1 /* TEXT */), !$options.currentField.required ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('optional')) + ")", 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */))], 10 /* CLASS, PROPS */, _hoisted_8)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9)), $options.currentField.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownContent, {
    string: $options.currentField.description
  }, null, 8 /* PROPS */, ["string"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppearsOn, {
    field: $options.currentField
  }, null, 8 /* PROPS */, ["field"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: $options.currentField.uuid,
    dir: "auto",
    required: $options.currentField.required,
    class: "select base-input !text-2xl w-full text-center font-normal",
    name: `values[${$options.currentField.uuid}]`,
    onChange: _cache[9] || (_cache[9] = $event => $props.values[$options.currentField.uuid] = $event.target.value),
    onFocus: _cache[10] || (_cache[10] = $event => $options.scrollIntoField($options.currentField))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    selected: !$props.values[$options.currentField.uuid]
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('select_your_option')), 9 /* TEXT, PROPS */, _hoisted_12), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.currentField.options, option => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: option.uuid,
      selected: $props.values[$options.currentField.uuid] == option.value,
      value: option.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.value), 9 /* TEXT, PROPS */, _hoisted_13);
  }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, NEED_HYDRATION */, _hoisted_11)])) : $options.currentField.type === 'radio' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [$props.showFieldNames && ($options.currentField.name || $options.currentField.title) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
    key: 0,
    for: $options.currentField.uuid,
    dir: "auto",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["label text-2xl", {
      'mb-2': !$options.currentField.description
    }])
  }, [$options.currentField.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MarkdownContent, {
    key: 0,
    string: $options.currentField.title
  }, null, 8 /* PROPS */, ["string"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.currentField.name) + " ", 1 /* TEXT */), !$options.currentField.required ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('optional')) + ")", 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */))], 10 /* CLASS, PROPS */, _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.currentField.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownContent, {
    string: $options.currentField.description
  }, null, 8 /* PROPS */, ["string"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [!$props.showFieldNames || $options.currentField.options.every(e => !e.value) && $options.currentField.options.length > 4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    onClick: _cache[11] || (_cache[11] = $event => $options.scrollIntoField($options.currentField))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('complete_hightlighted_checkboxes_and_click')) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.stepFields.length === $data.currentStep + 1 ? $options.t('submit') : $options.t('next')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["space-y-3.5 mx-auto", {
      hidden: !$props.showFieldNames || $options.currentField.options.every(e => !e.value) && $options.currentField.options.length > 4
    }])
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.currentField.options, (option, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: option.uuid
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      for: option.uuid,
      class: "flex items-center space-x-3"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: option.uuid,
      "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => $props.values[$options.currentField.uuid] = $event),
      type: "radio",
      class: "base-radio !h-7 !w-7",
      name: `values[${$options.currentField.uuid}]`,
      value: option.value || `${$options.t('option')} ${index + 1}`,
      required: $options.currentField.required,
      onClick: _cache[13] || (_cache[13] = $event => $options.scrollIntoField($options.currentField))
    }, null, 8 /* PROPS */, _hoisted_21), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $props.values[$options.currentField.uuid]]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.value || `${$options.t('option')} ${index + 1}`), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_20)]);
  }), 128 /* KEYED_FRAGMENT */))], 2 /* CLASS */)])])) : $options.currentField.type === 'multiple' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MultiSelectStep, {
    key: $options.currentField.uuid,
    modelValue: $props.values[$options.currentField.uuid],
    "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => $props.values[$options.currentField.uuid] = $event),
    "show-field-names": $props.showFieldNames,
    "is-last-step": $options.stepFields.length === $data.currentStep + 1,
    field: $options.currentField
  }, null, 8 /* PROPS */, ["modelValue", "show-field-names", "is-last-step", "field"])) : $options.currentField.type === 'checkbox' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [$options.currentField.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownContent, {
    string: $options.currentField.description
  }, null, 8 /* PROPS */, ["string"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [$options.isAnonymousChecboxes || !$props.showFieldNames ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('complete_hightlighted_checkboxes_and_click')) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.stepFields.length === $data.currentStep + 1 ? $options.t('submit') : $options.t('next')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ")]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.currentStepFields, field => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
      key: field.uuid,
      type: "hidden",
      name: `values[${field.uuid}]`,
      value: !!$props.values[field.uuid]
    }, null, 8 /* PROPS */, _hoisted_30);
  }), 128 /* KEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.currentStepFields, (field, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: field.uuid
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      for: field.uuid,
      class: "flex items-center space-x-3"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "hidden",
      name: `values[${field.uuid}]`,
      value: !!$props.values[field.uuid]
    }, null, 8 /* PROPS */, _hoisted_32), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: field.uuid,
      type: "checkbox",
      class: "base-checkbox !h-7 !w-7",
      oninvalid: `this.setCustomValidity('${$options.t('please_check_the_box_to_continue')}')`,
      onchange: `this.setCustomValidity(validity.valueMissing ? '${$options.t('please_check_the_box_to_continue')}' : '');`,
      required: field.required,
      checked: !!$props.values[field.uuid],
      onClick: $event => [$options.scrollIntoField(field), $props.values[field.uuid] = !$props.values[field.uuid]]
    }, null, 8 /* PROPS */, _hoisted_33), field.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownContent, {
      string: field.title
    }, null, 8 /* PROPS */, ["string"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(field.name || field.type + ' ' + (index + 1)), 1 /* TEXT */))], 8 /* PROPS */, _hoisted_31)]);
  }), 128 /* KEYED_FRAGMENT */))])])])) : $options.currentField.type === 'image' || $options.currentField.type === 'stamp' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ImageStep, {
    key: $options.currentField.uuid,
    modelValue: $props.values[$options.currentField.uuid],
    "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => $props.values[$options.currentField.uuid] = $event),
    field: $options.currentField,
    "attachments-index": $options.attachmentsIndex,
    "submitter-slug": $options.submitterSlug,
    "show-field-names": $props.showFieldNames,
    onAttached: _cache[16] || (_cache[16] = $event => [$props.attachments.push($event), $options.scrollIntoField($options.currentField)])
  }, null, 8 /* PROPS */, ["modelValue", "field", "attachments-index", "submitter-slug", "show-field-names"])) : $options.currentField.type === 'signature' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SignatureStep, {
    ref: "currentStep",
    key: $options.currentField.uuid,
    modelValue: $props.values[$options.currentField.uuid],
    "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => $props.values[$options.currentField.uuid] = $event),
    field: $options.currentField,
    "previous-value": $options.previousSignatureValueFor($options.currentField),
    "with-typed-signature": $props.withTypedSignature,
    "attachments-index": $options.attachmentsIndex,
    "button-text": $options.buttonText,
    "with-disclosure": $props.withDisclosure,
    "with-qr-button": $props.withQrButton,
    "submitter-slug": $options.submitterSlug,
    "show-field-names": $props.showFieldNames,
    onAttached: _cache[18] || (_cache[18] = $event => $props.attachments.push($event)),
    onStart: _cache[19] || (_cache[19] = $event => $options.scrollIntoField($options.currentField)),
    onMinimize: _cache[20] || (_cache[20] = $event => $data.isFormVisible = false)
  }, null, 8 /* PROPS */, ["modelValue", "field", "previous-value", "with-typed-signature", "attachments-index", "button-text", "with-disclosure", "with-qr-button", "submitter-slug", "show-field-names"])) : $options.currentField.type === 'initials' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_InitialsStep, {
    ref: "currentStep",
    key: $options.currentField.uuid,
    modelValue: $props.values[$options.currentField.uuid],
    "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => $props.values[$options.currentField.uuid] = $event),
    field: $options.currentField,
    "previous-value": $options.previousInitialsValue,
    "attachments-index": $options.attachmentsIndex,
    "show-field-names": $props.showFieldNames,
    "submitter-slug": $options.submitterSlug,
    onAttached: _cache[22] || (_cache[22] = $event => $props.attachments.push($event)),
    onStart: _cache[23] || (_cache[23] = $event => $options.scrollIntoField($options.currentField)),
    onFocus: _cache[24] || (_cache[24] = $event => $options.scrollIntoField($options.currentField)),
    onMinimize: _cache[25] || (_cache[25] = $event => $data.isFormVisible = false)
  }, null, 8 /* PROPS */, ["modelValue", "field", "previous-value", "attachments-index", "show-field-names", "submitter-slug"])) : $options.currentField.type === 'file' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AttachmentStep, {
    key: $options.currentField.uuid,
    modelValue: $props.values[$options.currentField.uuid],
    "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => $props.values[$options.currentField.uuid] = $event),
    field: $options.currentField,
    "attachments-index": $options.attachmentsIndex,
    "submitter-slug": $options.submitterSlug,
    onAttached: _cache[27] || (_cache[27] = $event => [$props.attachments.push($event), $options.scrollIntoField($options.currentField)])
  }, null, 8 /* PROPS */, ["modelValue", "field", "attachments-index", "submitter-slug"])) : $options.currentField.type === 'phone' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PhoneStep, {
    ref: "currentStep",
    key: $options.currentField.uuid,
    modelValue: $props.values[$options.currentField.uuid],
    "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => $props.values[$options.currentField.uuid] = $event),
    field: $options.currentField,
    locale: $props.language?.toLowerCase() || $options.browserLanguage,
    "show-field-names": $props.showFieldNames,
    "verified-value": $data.phoneVerifiedValues[$options.currentField.uuid],
    "default-value": $props.submitter.phone,
    "submitter-slug": $options.submitterSlug,
    onFocus: _cache[29] || (_cache[29] = $event => $options.scrollIntoField($options.currentField)),
    onSubmit: $options.submitStep
  }, null, 8 /* PROPS */, ["modelValue", "field", "locale", "show-field-names", "verified-value", "default-value", "submitter-slug", "onSubmit"])) : $options.currentField.type === 'payment' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PaymentStep, {
    ref: "currentStep",
    key: $options.currentField.uuid,
    modelValue: $props.values[$options.currentField.uuid],
    "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => $props.values[$options.currentField.uuid] = $event),
    field: $options.currentField,
    "submitter-slug": $options.submitterSlug,
    onAttached: _cache[31] || (_cache[31] = $event => $props.attachments.push($event)),
    onFocus: _cache[32] || (_cache[32] = $event => $options.scrollIntoField($options.currentField)),
    onSubmit: $options.submitStep
  }, null, 8 /* PROPS */, ["modelValue", "field", "submitter-slug", "onSubmit"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $options.currentField.type !== 'payment' || $data.submittedValues[$options.currentField.uuid] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.currentField.type === 'signature' ? 'mt-2' : 'mt-6 md:mt-8')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "submit_form_button",
    ref: "submitButton",
    type: "submit",
    class: "base-button w-full flex justify-center",
    disabled: $options.isButtonDisabled
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_37, [$data.isSubmitting ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconInnerShadowTop, {
    key: 0,
    class: "mr-1 animate-spin"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.buttonText), 1 /* TEXT */), $data.isSubmitting ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_38, [..._hoisted_40])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 8 /* PROPS */, _hoisted_36), $data.showFillAllRequiredFields ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('please_fill_all_required_fields')), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FormCompleted, {
    key: 1,
    "is-demo": $props.isDemo,
    attribution: $props.attribution,
    "completed-button": $props.completedRedirectUrl ? {} : $props.completedButton,
    "completed-message": $props.completedRedirectUrl ? {} : $props.completedMessage,
    "with-send-copy-button": $props.withSendCopyButton && !$props.completedRedirectUrl,
    "with-download-button": $props.withDownloadButton && !$props.completedRedirectUrl,
    "with-confetti": $props.withConfetti,
    "can-send-email": $props.canSendEmail && !!$props.submitter.email,
    "submitter-slug": $options.submitterSlug
  }, null, 8 /* PROPS */, ["is-demo", "attribution", "completed-button", "completed-message", "with-send-copy-button", "with-download-button", "with-confetti", "can-send-email", "submitter-slug"])), $options.stepFields.length < 80 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.stepFields, (step, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: step[0].uuid,
      href: "#",
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["inline border border-base-300 h-3 w-3 rounded-full mx-1 mt-1", {
        'bg-base-300': index === $data.currentStep,
        'bg-base-content': index < $data.currentStep && $options.stepFields[index].every(f => !f.required || ![null, undefined, ''].includes($props.values[f.uuid])) || $data.isCompleted,
        'bg-white': index > $data.currentStep
      }]),
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $data.isCompleted ? '' : [$options.saveStep(), $options.goToStep(step, true)], ["prevent"])
    }, null, 10 /* CLASS, PROPS */, _hoisted_44);
  }), 128 /* KEYED_FRAGMENT */))])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_45))], 2 /* CLASS */)], 6 /* CLASS, STYLE */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.isFormVisible]])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/formula_areas.vue?vue&type=template&id=0853a04f":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/formula_areas.vue?vue&type=template&id=0853a04f ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FieldArea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FieldArea");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.fields, (field, fieldIndex) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: field.uuid
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(field.areas, (area, areaIndex) => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: areaIndex
      }, [$options.findPageElementForArea(area) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
        key: 0,
        to: $options.findPageElementForArea(area)
      }, [$data.isMathLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FieldArea, {
        key: 0,
        "model-value": $options.calculateFormula(field),
        field: field,
        area: area,
        submittable: false,
        "field-index": fieldIndex
      }, null, 8 /* PROPS */, ["model-value", "field", "area", "field-index"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, ["to"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
    }), 128 /* KEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/image_step.vue?vue&type=template&id=4c2ebb3e":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/image_step.vue?vue&type=template&id=4c2ebb3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = {
  class: "flex justify-between items-center w-full mb-2"
};
const _hoisted_3 = {
  class: "label text-2xl"
};
const _hoisted_4 = ["src"];
const _hoisted_5 = ["value", "name"];
const _hoisted_6 = {
  key: 1
};
const _hoisted_7 = {
  key: 0,
  dir: "auto",
  class: "mb-3 px-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconReload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconReload");
  const _component_MarkdownContent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MarkdownContent");
  const _component_FileDropzone = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FileDropzone");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$props.modelValue ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.showFieldNames && $props.field.name ? $props.field.name : $options.t('image')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "btn btn-outline btn-sm",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.remove && $options.remove(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconReload, {
    width: 16
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('reupload')), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.attachmentsIndex[$props.modelValue].url,
    class: "h-52 border border-base-300 rounded mx-auto"
  }, null, 8 /* PROPS */, _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    value: $props.modelValue,
    type: "hidden",
    name: `values[${$props.field.uuid}]`
  }, null, 8 /* PROPS */, _hoisted_5)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$props.modelValue ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [$props.field.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownContent, {
    string: $props.field.description
  }, null, 8 /* PROPS */, ["string"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FileDropzone, {
    message: `${$options.t('upload')} ${$props.field.name || $options.t('image')}${$props.field.required ? '' : ` (${$options.t('optional')})`}`,
    "submitter-slug": $props.submitterSlug,
    accept: 'image/*',
    onUpload: $options.onImageUpload
  }, null, 8 /* PROPS */, ["message", "submitter-slug", "onUpload"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/initials_step.vue?vue&type=template&id=756222be":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/initials_step.vue?vue&type=template&id=756222be ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  dir: "auto"
};
const _hoisted_2 = {
  class: "label text-2xl"
};
const _hoisted_3 = {
  class: "space-x-2 flex"
};
const _hoisted_4 = ["data-tip"];
const _hoisted_5 = {
  class: "hidden sm:inline"
};
const _hoisted_6 = ["data-tip"];
const _hoisted_7 = {
  class: "hidden sm:inline"
};
const _hoisted_8 = ["title"];
const _hoisted_9 = {
  key: 0,
  dir: "auto",
  class: "mb-3 px-1"
};
const _hoisted_10 = ["value", "name"];
const _hoisted_11 = ["src"];
const _hoisted_12 = {
  ref: "canvas",
  class: "bg-white border border-base-300 rounded-2xl w-full"
};
const _hoisted_13 = ["required", "placeholder"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MarkdownContent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MarkdownContent");
  const _component_IconTextSize = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconTextSize");
  const _component_IconSignature = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconSignature");
  const _component_IconReload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconReload");
  const _component_IconArrowsDiagonalMinimize2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconArrowsDiagonalMinimize2");
  const _component_AppearsOn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AppearsOn");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex justify-between items-center w-full", {
      'mb-2': !$props.field.description
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_2, [$props.field.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MarkdownContent, {
    key: 0,
    string: $props.field.title
  }, null, 8 /* PROPS */, ["string"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.showFieldNames && $props.field.name ? $props.field.name : $options.t('initials')), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$data.isDrawInitials ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    class: "tooltip",
    "data-tip": $options.t('type_initial')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    id: "type_text_button",
    href: "#",
    class: "btn btn-outline font-medium btn-sm",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.toggleTextInput && $options.toggleTextInput(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconTextSize, {
    width: 16
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('type')), 1 /* TEXT */)])], 8 /* PROPS */, _hoisted_4)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    class: "tooltip ml-2",
    "data-tip": $options.t('draw_initials')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    id: "type_text_button",
    href: "#",
    class: "btn btn-outline font-medium btn-sm",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.toggleTextInput && $options.toggleTextInput(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconSignature, {
    width: 16
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('draw')), 1 /* TEXT */)])], 8 /* PROPS */, _hoisted_6)), $props.modelValue || $options.computedPreviousValue ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 2,
    href: "#",
    class: "btn font-medium btn-outline btn-sm",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.remove && $options.remove(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconReload, {
    width: 16
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('clear')), 1 /* TEXT */)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 3,
    href: "#",
    class: "btn font-medium btn-outline btn-sm",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.clear && $options.clear(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconReload, {
    width: 16
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('clear')), 1 /* TEXT */)])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    title: $options.t('minimize'),
    href: "#",
    class: "py-1.5 inline md:hidden",
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('minimize'), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconArrowsDiagonalMinimize2, {
    width: 20,
    height: 20
  })], 8 /* PROPS */, _hoisted_8)])], 2 /* CLASS */), $props.field.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownContent, {
    string: $props.field.description
  }, null, 8 /* PROPS */, ["string"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppearsOn, {
    field: $props.field
  }, null, 8 /* PROPS */, ["field"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    value: $props.modelValue || $options.computedPreviousValue,
    type: "hidden",
    name: `values[${$props.field.uuid}]`
  }, null, 8 /* PROPS */, _hoisted_10), $props.modelValue || $options.computedPreviousValue ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 1,
    src: $props.attachmentsIndex[$props.modelValue || $options.computedPreviousValue].url,
    class: "mx-auto bg-white border border-base-300 rounded max-h-72"
  }, null, 8 /* PROPS */, _hoisted_11)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", _hoisted_12, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$props.modelValue && !$options.computedPreviousValue]]), !$data.isDrawInitials && !$props.modelValue && !$options.computedPreviousValue ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 2,
    id: "initials_text_input",
    ref: "textInput",
    class: "base-input !text-2xl w-full mt-6 text-center",
    required: $props.field.required && !$data.isInitialsStarted,
    placeholder: `${$options.t('type_initial_here')}...`,
    type: "text",
    onFocus: _cache[5] || (_cache[5] = $event => _ctx.$emit('focus')),
    onInput: _cache[6] || (_cache[6] = (...args) => $options.updateWrittenInitials && $options.updateWrittenInitials(...args))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/markdown_content.vue?vue&type=template&id=31a52f92":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/markdown_content.vue?vue&type=template&id=31a52f92 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["href"];
const _hoisted_2 = {
  key: 1
};
const _hoisted_3 = {
  key: 2
};
const _hoisted_4 = {
  key: 3
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.items, (item, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: index
    }, [item.startsWith('<a') && item.endsWith('</a>') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      href: $options.sanitizeHref($options.extractAttr(item, 'href')),
      rel: "noopener noreferrer nofollow",
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.extractAttr(item, 'class') || 'link'),
      target: "_blank"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.extractText(item)), 11 /* TEXT, CLASS, PROPS */, _hoisted_1)) : item.startsWith('<b>') || item.startsWith('<strong>') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("b", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.extractText(item)), 1 /* TEXT */)) : item.startsWith('<i>') || item.startsWith('<em>') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.extractText(item)), 1 /* TEXT */)) : item === '<br>' || item === '\n' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("br", _hoisted_4)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 4
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */))], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/multi_select_step.vue?vue&type=template&id=3165ebea":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/multi_select_step.vue?vue&type=template&id=3165ebea ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["for"];
const _hoisted_2 = {
  key: 1,
  dir: "auto",
  class: "mb-3 px-1"
};
const _hoisted_3 = {
  class: "flex w-full max-h-44 overflow-y-auto"
};
const _hoisted_4 = ["name"];
const _hoisted_5 = {
  key: 1,
  class: "text-xl px-1"
};
const _hoisted_6 = {
  class: "font-semibold"
};
const _hoisted_7 = ["for"];
const _hoisted_8 = ["id", "name", "value", "checked"];
const _hoisted_9 = {
  class: "text-xl"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MarkdownContent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MarkdownContent");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$props.showFieldNames && ($props.field.name || $props.field.title) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
    key: 0,
    for: $props.field.uuid,
    dir: "auto",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["label text-2xl", {
      'mb-2': !$props.field.description
    }])
  }, [$props.field.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MarkdownContent, {
    key: 0,
    string: $props.field.title
  }, null, 8 /* PROPS */, ["string"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.name), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */))], 10 /* CLASS, PROPS */, _hoisted_1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownContent, {
    string: $props.field.description
  }, null, 8 /* PROPS */, ["string"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$props.modelValue.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    type: "text",
    name: `values[${$props.field.uuid}][]`,
    value: '',
    class: "hidden"
  }, null, 8 /* PROPS */, _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$options.showOptions ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    onClick: _cache[0] || (_cache[0] = $event => $options.scrollIntoField($props.field))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('complete_hightlighted_checkboxes_and_click')) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.isLastStep ? $options.t('submit') : $options.t('next')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["space-y-3.5 mx-auto", {
      hidden: !$options.showOptions
    }])
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.field.options, (option, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: option.uuid
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      for: option.uuid,
      class: "flex items-center space-x-3",
      onClick: _cache[2] || (_cache[2] = $event => $options.scrollIntoField($props.field))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: option.uuid,
      ref_for: true,
      ref: $options.setInputRef,
      type: "checkbox",
      name: `values[${$props.field.uuid}][]`,
      value: $options.optionValue(option, index),
      class: "base-checkbox !h-7 !w-7",
      checked: ($props.modelValue || []).includes($options.optionValue(option, index)),
      onChange: _cache[1] || (_cache[1] = (...args) => $options.onChange && $options.onChange(...args))
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.optionValue(option, index)), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_7)]);
  }), 128 /* KEYED_FRAGMENT */))], 2 /* CLASS */)])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/number_step.vue?vue&type=template&id=3fff30e4":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/number_step.vue?vue&type=template&id=3fff30e4 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["for"];
const _hoisted_2 = {
  key: 1,
  class: "py-1"
};
const _hoisted_3 = {
  key: 2,
  dir: "auto",
  class: "mb-3 px-1"
};
const _hoisted_4 = {
  class: "items-center flex"
};
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "hidden",
  name: "cast_number",
  value: "true"
}, null, -1 /* HOISTED */);
const _hoisted_6 = ["id", "required", "placeholder", "name"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MarkdownContent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MarkdownContent");
  const _component_AppearsOn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AppearsOn");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$props.showFieldNames && ($props.field.name || $props.field.title) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
    key: 0,
    for: $props.field.uuid,
    dir: "auto",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["label text-2xl", {
      'mb-2': !$props.field.description
    }])
  }, [$props.field.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MarkdownContent, {
    key: 0,
    string: $props.field.title
  }, null, 8 /* PROPS */, ["string"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.name), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)), !$props.field.required ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 2
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('optional')) + ")", 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_1)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2)), $props.field.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownContent, {
    string: $props.field.description
  }, null, 8 /* PROPS */, ["string"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppearsOn, {
    field: $props.field
  }, null, 8 /* PROPS */, ["field"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: $props.field.uuid,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $options.number = $event),
    type: "number",
    class: "base-input !text-2xl w-full",
    step: "any",
    required: $props.field.required,
    placeholder: `${$options.t('type_here_')}${$props.field.required ? '' : ` (${$options.t('optional')})`}`,
    name: `values[${$props.field.uuid}]`,
    onFocus: _cache[1] || (_cache[1] = $event => _ctx.$emit('focus'))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_6), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $options.number]])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/payment_step.vue?vue&type=template&id=17603d73":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/payment_step.vue?vue&type=template&id=17603d73 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["for"];
const _hoisted_2 = ["value", "name"];
const _hoisted_3 = {
  key: 0,
  class: "text-2xl mb-2"
};
const _hoisted_4 = {
  key: 1
};
const _hoisted_5 = {
  key: 0,
  disabled: "",
  class: "base-button w-full"
};
const _hoisted_6 = ["id", "disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconLoader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconLoader");
  const _component_IconInnerShadowTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconInnerShadowTop");
  const _component_IconBrandStripe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconBrandStripe");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [!$props.modelValue && !$options.sessionId ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
    key: 0,
    for: $props.field.uuid,
    class: "label text-2xl mb-2"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.name || $options.defaultName), 9 /* TEXT, PROPS */, _hoisted_1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    value: $props.modelValue,
    hidden: "",
    name: `values[${$props.field.uuid}]`,
    class: "hidden"
  }, null, 8 /* PROPS */, _hoisted_2), $props.modelValue && !$options.sessionId ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, " Already paid ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [$options.sessionId ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconLoader, {
    width: "22",
    class: "animate-spin"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('processing')) + "... ", 1 /* TEXT */)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    id: $props.field.uuid,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn bg-[#7B73FF] text-white hover:bg-[#0A2540] text-lg w-full", {
      disabled: $data.isCreatingCheckout
    }]),
    disabled: $data.isCreatingCheckout,
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.startCheckout && $options.startCheckout(...args), ["prevent"]))
  }, [$data.isCreatingCheckout ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconInnerShadowTop, {
    key: 0,
    width: "22",
    class: "animate-spin"
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_IconBrandStripe, {
    key: 1,
    width: "22"
  })), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('pay_with_strip')), 1 /* TEXT */)], 10 /* CLASS, PROPS */, _hoisted_6))]))])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/phone_step.vue?vue&type=template&id=4ea80c8b":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/phone_step.vue?vue&type=template&id=4ea80c8b ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["for"];
const _hoisted_2 = {
  key: 0,
  dir: "auto",
  class: "mb-3 px-1"
};
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "hidden",
  name: "normalize_phone",
  value: "true"
}, null, -1 /* HOISTED */);
const _hoisted_4 = {
  key: 0
};
const _hoisted_5 = ["placeholder"];
const _hoisted_6 = {
  class: "flex justify-between mt-2 -mb-2 md:-mb-4"
};
const _hoisted_7 = ["id", "value", "readonly", "required", "name"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MarkdownContent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MarkdownContent");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    for: $data.isCodeSent ? 'one_time_code' : $props.field.uuid,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["label text-2xl", {
      'mb-2': !$props.field.description
    }])
  }, [$props.field.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MarkdownContent, {
    key: 0,
    string: $props.field.title
  }, null, 8 /* PROPS */, ["string"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.showFieldNames && $props.field.name ? $props.field.name : $options.t('verified_phone_number')) + " ", 1 /* TEXT */), !$props.field.required ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('optional')) + ")", 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */))], 10 /* CLASS, PROPS */, _hoisted_1), $props.field.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownContent, {
    string: $props.field.description
  }, null, 8 /* PROPS */, ["string"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_3, $data.isCodeSent ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "one_time_code",
    class: "base-input !text-2xl w-full text-center",
    name: "one_time_code",
    type: "text",
    autocomplete: "one-time-code",
    placeholder: $options.t('six_digits_code'),
    required: "",
    maxlength: "6",
    autofocus: "",
    inputmode: "decimal",
    onInput: _cache[0] || (_cache[0] = (...args) => $options.onInputCode && $options.onInputCode(...args))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [!$props.defaultValue ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 0,
    href: "#",
    class: "link",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $data.isCodeSent = false, ["prevent"]))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('change_phone_number')), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: "link",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.resendCode && $options.resendCode(...args), ["prevent"]))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.isResendLoading ? $options.t('sending') : $options.t('resend_code')), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: $props.field.uuid,
    ref: "phone",
    value: $props.modelValue || $props.defaultValue,
    readonly: !!$props.defaultValue,
    class: "base-input !text-2xl w-full",
    autocomplete: "tel",
    pattern: "^\\+[0-9\\s\\-]+$",
    type: "tel",
    inputmode: "tel",
    required: $props.field.required,
    placeholder: "+1 234 567-8900",
    name: `values[${$props.field.uuid}]`,
    onInvalid: _cache[3] || (_cache[3] = $event => $event.target.value ? $event.target.setCustomValidity(`${$options.t('use_international_format')}...`) : ''),
    onInput: _cache[4] || (_cache[4] = $event => [$event.target.setCustomValidity(''), _ctx.$emit('update:model-value', $event.target.value)]),
    onFocus: _cache[5] || (_cache[5] = $event => _ctx.$emit('focus'))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_7), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.isCodeSent]])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/signature_step.vue?vue&type=template&id=e24dccfe":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/signature_step.vue?vue&type=template&id=e24dccfe ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  dir: "auto",
  class: "relative"
};
const _hoisted_2 = {
  class: "label text-2xl"
};
const _hoisted_3 = {
  class: "space-x-2 flex"
};
const _hoisted_4 = ["data-tip"];
const _hoisted_5 = {
  class: "hidden sm:inline"
};
const _hoisted_6 = ["data-tip"];
const _hoisted_7 = {
  class: "hidden sm:inline"
};
const _hoisted_8 = ["data-tip"];
const _hoisted_9 = {
  class: "btn btn-outline btn-sm font-medium inline-flex flex-nowrap"
};
const _hoisted_10 = {
  class: "hidden sm:inline"
};
const _hoisted_11 = ["data-tip"];
const _hoisted_12 = ["title"];
const _hoisted_13 = {
  key: 0,
  dir: "auto",
  class: "mb-3 px-1"
};
const _hoisted_14 = ["value", "name"];
const _hoisted_15 = ["src"];
const _hoisted_16 = {
  class: "relative"
};
const _hoisted_17 = {
  key: 0,
  class: "absolute top-0.5 right-0.5"
};
const _hoisted_18 = {
  ref: "canvas",
  style: {
    "padding": "1px"
  },
  class: "bg-white border border-base-300 rounded-2xl w-full"
};
const _hoisted_19 = {
  key: 1,
  class: "top-0 bottom-0 right-0 left-0 absolute bg-white rounded-2xl m-0.5"
};
const _hoisted_20 = {
  class: "top-0 bottom-0 right-0 left-0 absolute bg-base-content/10 rounded-2xl"
};
const _hoisted_21 = {
  class: "absolute top-1.5 right-1.5 tooltip"
};
const _hoisted_22 = {
  class: "flex items-center justify-center w-full h-full p-4"
};
const _hoisted_23 = {
  key: 0,
  ref: "qr",
  class: "bg-white p-4 rounded-xl h-full"
};
const _hoisted_24 = {
  ref: "qrCanvas",
  class: "h-full"
};
const _hoisted_25 = ["required", "placeholder"];
const _hoisted_26 = {
  key: 3,
  dir: "auto",
  class: "text-base-content/60 text-xs text-center w-full mt-1"
};
const _hoisted_27 = {
  key: 4,
  dir: "auto",
  class: "text-base-content/60 text-xs text-center w-full mt-1"
};
const _hoisted_28 = {
  href: "https://www.docuseal.co/esign-disclosure",
  target: "_blank"
};
const _hoisted_29 = {
  class: "inline md:hidden"
};
const _hoisted_30 = {
  class: "hidden md:inline"
};
const _hoisted_31 = {
  key: 5,
  class: "mt-5 md:mt-7"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MarkdownContent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MarkdownContent");
  const _component_IconSignature = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconSignature");
  const _component_IconTextSize = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconTextSize");
  const _component_IconCamera = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconCamera");
  const _component_IconReload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconReload");
  const _component_IconQrcode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconQrcode");
  const _component_IconArrowsDiagonalMinimize2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconArrowsDiagonalMinimize2");
  const _component_AppearsOn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AppearsOn");
  const _component_IconX = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconX");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex justify-between items-center w-full", {
      'mb-2': !$props.field.description
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_2, [$props.field.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MarkdownContent, {
    key: 0,
    string: $props.field.title
  }, null, 8 /* PROPS */, ["string"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.showFieldNames && $props.field.name ? $props.field.name : $options.t("signature")), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$data.isTextSignature && $props.field.preferences?.format !== 'typed' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    class: "tooltip",
    "data-tip": $options.t('draw_signature')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    id: "type_text_button",
    href: "#",
    class: "btn btn-outline btn-sm font-medium",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => [$options.toggleTextInput(), $options.hideQr()], ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconSignature, {
    width: 16
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("draw")), 1 /* TEXT */)])], 8 /* PROPS */, _hoisted_4)) : $props.withTypedSignature && $props.field.preferences?.format !== 'typed' && $props.field.preferences?.format !== 'drawn' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    class: "tooltip ml-2",
    "data-tip": $options.t('type_text')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    id: "type_text_button",
    href: "#",
    class: "btn btn-outline btn-sm font-medium inline-flex flex-nowrap",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => [$options.toggleTextInput(), $options.hideQr()], ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconTextSize, {
    width: 16
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("type")), 1 /* TEXT */)])], 8 /* PROPS */, _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.field.preferences?.format !== 'typed' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 2,
    class: "tooltip",
    "data-tip": $options.t('take_photo')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconCamera, {
    width: 16
  }), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: $data.uploadImageInputKey,
    type: "file",
    hidden: "",
    accept: "image/*",
    onChange: _cache[2] || (_cache[2] = (...args) => $options.drawImage && $options.drawImage(...args))
  }, null, 32 /* NEED_HYDRATION */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("upload")), 1 /* TEXT */)])], 8 /* PROPS */, _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.modelValue || $options.computedPreviousValue ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 3,
    href: "#",
    class: "btn btn-outline btn-sm font-medium",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.remove && $options.remove(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconReload, {
    width: 16
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("redraw")), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.withQrButton && !$props.modelValue && !$options.computedPreviousValue && $props.field.preferences?.format !== 'typed' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 4,
    class: "tooltip",
    "data-tip": $options.t('drawn_signature_on_a_touchscreen_device')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-sm btn-neutral font-medium hidden md:flex", {
      'btn-outline': !$data.isShowQr,
      'text-white': $data.isShowQr
    }]),
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $data.isShowQr ? $options.hideQr() : [$data.isTextSignature = false, $options.showQr()], ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconQrcode, {
    width: 19,
    height: 19
  })], 2 /* CLASS */)], 8 /* PROPS */, _hoisted_11)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    title: $options.t('minimize'),
    class: "py-1.5 inline md:hidden",
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.$emit('minimize'), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconArrowsDiagonalMinimize2, {
    width: 20,
    height: 20
  })], 8 /* PROPS */, _hoisted_12)])], 2 /* CLASS */), $props.field.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownContent, {
    string: $props.field.description
  }, null, 8 /* PROPS */, ["string"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppearsOn, {
    field: $props.field
  }, null, 8 /* PROPS */, ["field"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    value: $props.modelValue || $options.computedPreviousValue,
    type: "hidden",
    name: `values[${$props.field.uuid}]`
  }, null, 8 /* PROPS */, _hoisted_14), $props.modelValue || $options.computedPreviousValue ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 1,
    src: $props.attachmentsIndex[$props.modelValue || $options.computedPreviousValue].url,
    class: "mx-auto bg-white border border-base-300 rounded max-h-72"
  }, null, 8 /* PROPS */, _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [!$props.modelValue && !$options.computedPreviousValue && !$data.isShowQr && !$data.isTextSignature && $data.isSignatureStarted ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: "btn btn-ghost font-medium btn-xs md:btn-sm",
    onClick: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => [$options.clear(), $options.hideQr()], ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconReload, {
    width: 16
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("clear")), 1 /* TEXT */)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", _hoisted_18, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$props.modelValue && !$options.computedPreviousValue]]), $data.isShowQr ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: "btn btn-sm btn-circle btn-normal btn-outline",
    onClick: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.hideQr && $options.hideQr(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconX)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [$props.withQrButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", _hoisted_24, null, 512 /* NEED_PATCH */)], 512 /* NEED_PATCH */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.isShowQr]])]), $data.isTextSignature ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 2,
    id: "signature_text_input",
    ref: "textInput",
    class: "base-input !text-2xl w-full mt-6",
    required: $props.field.required && !$data.isSignatureStarted,
    placeholder: `${$options.t('type_signature_here')}...`,
    type: "text",
    onInput: _cache[8] || (_cache[8] = (...args) => $options.updateWrittenSignature && $options.updateWrittenSignature(...args))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_25)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isShowQr ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("scan_the_qr_code_with_the_camera_app_to_open_the_form_on_mobile_and_draw_your_signature")), 1 /* TEXT */)) : $props.withDisclosure ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("by_clicking_you_agree_to_the").replace("{button}", $props.buttonText.charAt(0).toUpperCase() + $props.buttonText.slice(1))) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("esignature_disclosure")), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t("electronic_signature_disclosure")), 1 /* TEXT */)])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/text_step.vue?vue&type=template&id=00357200":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/text_step.vue?vue&type=template&id=00357200 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["for"];
const _hoisted_2 = {
  key: 1,
  class: "py-1"
};
const _hoisted_3 = {
  key: 2,
  dir: "auto",
  class: "mb-3 px-1"
};
const _hoisted_4 = {
  class: "items-center flex"
};
const _hoisted_5 = ["id", "maxlength", "required", "pattern", "placeholder", "name"];
const _hoisted_6 = ["id", "placeholder", "required", "name"];
const _hoisted_7 = ["data-tip"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MarkdownContent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MarkdownContent");
  const _component_AppearsOn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AppearsOn");
  const _component_IconAlignBoxLeftTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IconAlignBoxLeftTop");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$props.showFieldNames && ($props.field.name || $props.field.title) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
    key: 0,
    for: $props.field.uuid,
    dir: "auto",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["label text-2xl", {
      'mb-2': !$props.field.description
    }])
  }, [$props.field.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MarkdownContent, {
    key: 0,
    string: $props.field.title
  }, null, 8 /* PROPS */, ["string"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.name), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)), !$props.field.required ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 2
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.t('optional')) + ")", 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10 /* CLASS, PROPS */, _hoisted_1)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2)), $props.field.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MarkdownContent, {
    string: $props.field.description
  }, null, 8 /* PROPS */, ["string"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppearsOn, {
    field: $props.field
  }, null, 8 /* PROPS */, ["field"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [!$data.isTextArea ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    id: $props.field.uuid,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $options.text = $event),
    maxlength: $options.cellsMaxLegth,
    dir: "auto",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["base-input !text-2xl w-full", {
      '!pr-11 -mr-10': !$props.field.validation?.pattern
    }]),
    required: $props.field.required,
    pattern: $props.field.validation?.pattern,
    placeholder: `${$options.t('type_here_')}${$props.field.required ? '' : ` (${$options.t('optional')})`}`,
    type: "text",
    name: `values[${$props.field.uuid}]`,
    onInvalid: _cache[1] || (_cache[1] = $event => $props.field.validation?.message ? $event.target.setCustomValidity($props.field.validation.message) : ''),
    onInput: _cache[2] || (_cache[2] = $event => $props.field.validation?.message ? $event.target.setCustomValidity('') : ''),
    onFocus: _cache[3] || (_cache[3] = $event => _ctx.$emit('focus'))
  }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_5)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $options.text]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isTextArea ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
    key: 1,
    id: $props.field.uuid,
    ref: "textarea",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $options.text = $event),
    dir: "auto",
    class: "base-textarea !text-2xl w-full",
    placeholder: `${$options.t('type_here_')}${$props.field.required ? '' : ` (${$options.t('optional')})`}`,
    required: $props.field.required,
    name: `values[${$props.field.uuid}]`,
    onInput: _cache[5] || (_cache[5] = (...args) => $options.resizeTextarea && $options.resizeTextarea(...args)),
    onFocus: _cache[6] || (_cache[6] = $event => _ctx.$emit('focus'))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_6)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $options.text]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$data.isTextArea && $props.field.type !== 'cells' && !$props.field.validation?.pattern ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 2,
    class: "tooltip",
    "data-tip": $options.t('toggle_multiline_text')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    class: "btn btn-ghost btn-circle btn-sm",
    onClick: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.toggleTextArea && $options.toggleTextArea(...args), ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IconAlignBoxLeftTop)])], 8 /* PROPS */, _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./app/javascript/form.scss":
/*!**********************************!*\
  !*** ./app/javascript/form.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/javascript/submission_form/appears_on.vue":
/*!*******************************************************!*\
  !*** ./app/javascript/submission_form/appears_on.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appears_on_vue_vue_type_template_id_3c68b04e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appears_on.vue?vue&type=template&id=3c68b04e */ "./app/javascript/submission_form/appears_on.vue?vue&type=template&id=3c68b04e");
/* harmony import */ var _appears_on_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appears_on.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/appears_on.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_appears_on_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_appears_on_vue_vue_type_template_id_3c68b04e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/appears_on.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/area.vue":
/*!*************************************************!*\
  !*** ./app/javascript/submission_form/area.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _area_vue_vue_type_template_id_ca50a2ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area.vue?vue&type=template&id=ca50a2ca */ "./app/javascript/submission_form/area.vue?vue&type=template&id=ca50a2ca");
/* harmony import */ var _area_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/area.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_area_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_area_vue_vue_type_template_id_ca50a2ca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/area.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/areas.vue":
/*!**************************************************!*\
  !*** ./app/javascript/submission_form/areas.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _areas_vue_vue_type_template_id_786c7430__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./areas.vue?vue&type=template&id=786c7430 */ "./app/javascript/submission_form/areas.vue?vue&type=template&id=786c7430");
/* harmony import */ var _areas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./areas.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/areas.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_areas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_areas_vue_vue_type_template_id_786c7430__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/areas.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/attachment_step.vue":
/*!************************************************************!*\
  !*** ./app/javascript/submission_form/attachment_step.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attachment_step_vue_vue_type_template_id_f5e0196c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachment_step.vue?vue&type=template&id=f5e0196c */ "./app/javascript/submission_form/attachment_step.vue?vue&type=template&id=f5e0196c");
/* harmony import */ var _attachment_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attachment_step.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/attachment_step.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_attachment_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_attachment_step_vue_vue_type_template_id_f5e0196c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/attachment_step.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/completed.vue":
/*!******************************************************!*\
  !*** ./app/javascript/submission_form/completed.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _completed_vue_vue_type_template_id_17f91b2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completed.vue?vue&type=template&id=17f91b2d */ "./app/javascript/submission_form/completed.vue?vue&type=template&id=17f91b2d");
/* harmony import */ var _completed_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completed.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/completed.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_completed_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_completed_vue_vue_type_template_id_17f91b2d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/completed.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/date_step.vue":
/*!******************************************************!*\
  !*** ./app/javascript/submission_form/date_step.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_step_vue_vue_type_template_id_555e089f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date_step.vue?vue&type=template&id=555e089f */ "./app/javascript/submission_form/date_step.vue?vue&type=template&id=555e089f");
/* harmony import */ var _date_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date_step.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/date_step.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_date_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_date_step_vue_vue_type_template_id_555e089f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/date_step.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/dropzone.vue":
/*!*****************************************************!*\
  !*** ./app/javascript/submission_form/dropzone.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropzone_vue_vue_type_template_id_c2fd81ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropzone.vue?vue&type=template&id=c2fd81ae */ "./app/javascript/submission_form/dropzone.vue?vue&type=template&id=c2fd81ae");
/* harmony import */ var _dropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropzone.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/dropzone.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_dropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_dropzone_vue_vue_type_template_id_c2fd81ae__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/dropzone.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/form.vue":
/*!*************************************************!*\
  !*** ./app/javascript/submission_form/form.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_1a62f752__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=1a62f752 */ "./app/javascript/submission_form/form.vue?vue&type=template&id=1a62f752");
/* harmony import */ var _form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/form.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_form_vue_vue_type_template_id_1a62f752__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/form.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/formula_areas.vue":
/*!**********************************************************!*\
  !*** ./app/javascript/submission_form/formula_areas.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formula_areas_vue_vue_type_template_id_0853a04f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formula_areas.vue?vue&type=template&id=0853a04f */ "./app/javascript/submission_form/formula_areas.vue?vue&type=template&id=0853a04f");
/* harmony import */ var _formula_areas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formula_areas.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/formula_areas.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_formula_areas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_formula_areas_vue_vue_type_template_id_0853a04f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/formula_areas.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/image_step.vue":
/*!*******************************************************!*\
  !*** ./app/javascript/submission_form/image_step.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_step_vue_vue_type_template_id_4c2ebb3e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image_step.vue?vue&type=template&id=4c2ebb3e */ "./app/javascript/submission_form/image_step.vue?vue&type=template&id=4c2ebb3e");
/* harmony import */ var _image_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image_step.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/image_step.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_image_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_image_step_vue_vue_type_template_id_4c2ebb3e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/image_step.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/initials_step.vue":
/*!**********************************************************!*\
  !*** ./app/javascript/submission_form/initials_step.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initials_step_vue_vue_type_template_id_756222be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initials_step.vue?vue&type=template&id=756222be */ "./app/javascript/submission_form/initials_step.vue?vue&type=template&id=756222be");
/* harmony import */ var _initials_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initials_step.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/initials_step.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_initials_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_initials_step_vue_vue_type_template_id_756222be__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/initials_step.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/markdown_content.vue":
/*!*************************************************************!*\
  !*** ./app/javascript/submission_form/markdown_content.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markdown_content_vue_vue_type_template_id_31a52f92__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown_content.vue?vue&type=template&id=31a52f92 */ "./app/javascript/submission_form/markdown_content.vue?vue&type=template&id=31a52f92");
/* harmony import */ var _markdown_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown_content.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/markdown_content.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_markdown_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_markdown_content_vue_vue_type_template_id_31a52f92__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/markdown_content.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/multi_select_step.vue":
/*!**************************************************************!*\
  !*** ./app/javascript/submission_form/multi_select_step.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _multi_select_step_vue_vue_type_template_id_3165ebea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multi_select_step.vue?vue&type=template&id=3165ebea */ "./app/javascript/submission_form/multi_select_step.vue?vue&type=template&id=3165ebea");
/* harmony import */ var _multi_select_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multi_select_step.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/multi_select_step.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_multi_select_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_multi_select_step_vue_vue_type_template_id_3165ebea__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/multi_select_step.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/number_step.vue":
/*!********************************************************!*\
  !*** ./app/javascript/submission_form/number_step.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_step_vue_vue_type_template_id_3fff30e4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number_step.vue?vue&type=template&id=3fff30e4 */ "./app/javascript/submission_form/number_step.vue?vue&type=template&id=3fff30e4");
/* harmony import */ var _number_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number_step.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/number_step.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_number_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_number_step_vue_vue_type_template_id_3fff30e4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/number_step.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/payment_step.vue":
/*!*********************************************************!*\
  !*** ./app/javascript/submission_form/payment_step.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payment_step_vue_vue_type_template_id_17603d73__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment_step.vue?vue&type=template&id=17603d73 */ "./app/javascript/submission_form/payment_step.vue?vue&type=template&id=17603d73");
/* harmony import */ var _payment_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment_step.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/payment_step.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_payment_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_payment_step_vue_vue_type_template_id_17603d73__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/payment_step.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/phone_step.vue":
/*!*******************************************************!*\
  !*** ./app/javascript/submission_form/phone_step.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phone_step_vue_vue_type_template_id_4ea80c8b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone_step.vue?vue&type=template&id=4ea80c8b */ "./app/javascript/submission_form/phone_step.vue?vue&type=template&id=4ea80c8b");
/* harmony import */ var _phone_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone_step.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/phone_step.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_phone_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_phone_step_vue_vue_type_template_id_4ea80c8b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/phone_step.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/signature_step.vue":
/*!***********************************************************!*\
  !*** ./app/javascript/submission_form/signature_step.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signature_step_vue_vue_type_template_id_e24dccfe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signature_step.vue?vue&type=template&id=e24dccfe */ "./app/javascript/submission_form/signature_step.vue?vue&type=template&id=e24dccfe");
/* harmony import */ var _signature_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signature_step.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/signature_step.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_signature_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_signature_step_vue_vue_type_template_id_e24dccfe__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/signature_step.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/text_step.vue":
/*!******************************************************!*\
  !*** ./app/javascript/submission_form/text_step.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_step_vue_vue_type_template_id_00357200__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_step.vue?vue&type=template&id=00357200 */ "./app/javascript/submission_form/text_step.vue?vue&type=template&id=00357200");
/* harmony import */ var _text_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text_step.vue?vue&type=script&lang=js */ "./app/javascript/submission_form/text_step.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_text_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_text_step_vue_vue_type_template_id_00357200__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"app/javascript/submission_form/text_step.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./app/javascript/submission_form/appears_on.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./app/javascript/submission_form/appears_on.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_appears_on_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_appears_on_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./appears_on.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/appears_on.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/area.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./app/javascript/submission_form/area.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_area_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_area_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./area.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/area.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/areas.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./app/javascript/submission_form/areas.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_areas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_areas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./areas.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/areas.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/attachment_step.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./app/javascript/submission_form/attachment_step.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_attachment_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_attachment_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./attachment_step.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/attachment_step.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/completed.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./app/javascript/submission_form/completed.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_completed_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_completed_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./completed.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/completed.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/date_step.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./app/javascript/submission_form/date_step.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_date_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_date_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./date_step.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/date_step.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/dropzone.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./app/javascript/submission_form/dropzone.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./dropzone.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/dropzone.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/form.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./app/javascript/submission_form/form.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./form.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/form.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/formula_areas.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./app/javascript/submission_form/formula_areas.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_formula_areas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_formula_areas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./formula_areas.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/formula_areas.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/image_step.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./app/javascript/submission_form/image_step.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_image_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_image_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./image_step.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/image_step.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/initials_step.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./app/javascript/submission_form/initials_step.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_initials_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_initials_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./initials_step.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/initials_step.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/markdown_content.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./app/javascript/submission_form/markdown_content.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_markdown_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_markdown_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./markdown_content.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/markdown_content.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/multi_select_step.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./app/javascript/submission_form/multi_select_step.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_multi_select_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_multi_select_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./multi_select_step.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/multi_select_step.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/number_step.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./app/javascript/submission_form/number_step.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_number_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_number_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./number_step.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/number_step.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/payment_step.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./app/javascript/submission_form/payment_step.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_payment_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_payment_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./payment_step.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/payment_step.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/phone_step.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./app/javascript/submission_form/phone_step.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_phone_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_phone_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./phone_step.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/phone_step.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/signature_step.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./app/javascript/submission_form/signature_step.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_signature_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_signature_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./signature_step.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/signature_step.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/text_step.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./app/javascript/submission_form/text_step.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_text_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_text_step_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./text_step.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/text_step.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./app/javascript/submission_form/appears_on.vue?vue&type=template&id=3c68b04e":
/*!*************************************************************************************!*\
  !*** ./app/javascript/submission_form/appears_on.vue?vue&type=template&id=3c68b04e ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_appears_on_vue_vue_type_template_id_3c68b04e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_appears_on_vue_vue_type_template_id_3c68b04e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./appears_on.vue?vue&type=template&id=3c68b04e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/appears_on.vue?vue&type=template&id=3c68b04e");


/***/ }),

/***/ "./app/javascript/submission_form/area.vue?vue&type=template&id=ca50a2ca":
/*!*******************************************************************************!*\
  !*** ./app/javascript/submission_form/area.vue?vue&type=template&id=ca50a2ca ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_area_vue_vue_type_template_id_ca50a2ca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_area_vue_vue_type_template_id_ca50a2ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./area.vue?vue&type=template&id=ca50a2ca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/area.vue?vue&type=template&id=ca50a2ca");


/***/ }),

/***/ "./app/javascript/submission_form/areas.vue?vue&type=template&id=786c7430":
/*!********************************************************************************!*\
  !*** ./app/javascript/submission_form/areas.vue?vue&type=template&id=786c7430 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_areas_vue_vue_type_template_id_786c7430__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_areas_vue_vue_type_template_id_786c7430__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./areas.vue?vue&type=template&id=786c7430 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/areas.vue?vue&type=template&id=786c7430");


/***/ }),

/***/ "./app/javascript/submission_form/attachment_step.vue?vue&type=template&id=f5e0196c":
/*!******************************************************************************************!*\
  !*** ./app/javascript/submission_form/attachment_step.vue?vue&type=template&id=f5e0196c ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_attachment_step_vue_vue_type_template_id_f5e0196c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_attachment_step_vue_vue_type_template_id_f5e0196c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./attachment_step.vue?vue&type=template&id=f5e0196c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/attachment_step.vue?vue&type=template&id=f5e0196c");


/***/ }),

/***/ "./app/javascript/submission_form/completed.vue?vue&type=template&id=17f91b2d":
/*!************************************************************************************!*\
  !*** ./app/javascript/submission_form/completed.vue?vue&type=template&id=17f91b2d ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_completed_vue_vue_type_template_id_17f91b2d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_completed_vue_vue_type_template_id_17f91b2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./completed.vue?vue&type=template&id=17f91b2d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/completed.vue?vue&type=template&id=17f91b2d");


/***/ }),

/***/ "./app/javascript/submission_form/date_step.vue?vue&type=template&id=555e089f":
/*!************************************************************************************!*\
  !*** ./app/javascript/submission_form/date_step.vue?vue&type=template&id=555e089f ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_date_step_vue_vue_type_template_id_555e089f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_date_step_vue_vue_type_template_id_555e089f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./date_step.vue?vue&type=template&id=555e089f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/date_step.vue?vue&type=template&id=555e089f");


/***/ }),

/***/ "./app/javascript/submission_form/dropzone.vue?vue&type=template&id=c2fd81ae":
/*!***********************************************************************************!*\
  !*** ./app/javascript/submission_form/dropzone.vue?vue&type=template&id=c2fd81ae ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dropzone_vue_vue_type_template_id_c2fd81ae__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dropzone_vue_vue_type_template_id_c2fd81ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./dropzone.vue?vue&type=template&id=c2fd81ae */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/dropzone.vue?vue&type=template&id=c2fd81ae");


/***/ }),

/***/ "./app/javascript/submission_form/form.vue?vue&type=template&id=1a62f752":
/*!*******************************************************************************!*\
  !*** ./app/javascript/submission_form/form.vue?vue&type=template&id=1a62f752 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_form_vue_vue_type_template_id_1a62f752__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_form_vue_vue_type_template_id_1a62f752__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./form.vue?vue&type=template&id=1a62f752 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/form.vue?vue&type=template&id=1a62f752");


/***/ }),

/***/ "./app/javascript/submission_form/formula_areas.vue?vue&type=template&id=0853a04f":
/*!****************************************************************************************!*\
  !*** ./app/javascript/submission_form/formula_areas.vue?vue&type=template&id=0853a04f ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_formula_areas_vue_vue_type_template_id_0853a04f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_formula_areas_vue_vue_type_template_id_0853a04f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./formula_areas.vue?vue&type=template&id=0853a04f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/formula_areas.vue?vue&type=template&id=0853a04f");


/***/ }),

/***/ "./app/javascript/submission_form/image_step.vue?vue&type=template&id=4c2ebb3e":
/*!*************************************************************************************!*\
  !*** ./app/javascript/submission_form/image_step.vue?vue&type=template&id=4c2ebb3e ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_image_step_vue_vue_type_template_id_4c2ebb3e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_image_step_vue_vue_type_template_id_4c2ebb3e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./image_step.vue?vue&type=template&id=4c2ebb3e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/image_step.vue?vue&type=template&id=4c2ebb3e");


/***/ }),

/***/ "./app/javascript/submission_form/initials_step.vue?vue&type=template&id=756222be":
/*!****************************************************************************************!*\
  !*** ./app/javascript/submission_form/initials_step.vue?vue&type=template&id=756222be ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_initials_step_vue_vue_type_template_id_756222be__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_initials_step_vue_vue_type_template_id_756222be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./initials_step.vue?vue&type=template&id=756222be */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/initials_step.vue?vue&type=template&id=756222be");


/***/ }),

/***/ "./app/javascript/submission_form/markdown_content.vue?vue&type=template&id=31a52f92":
/*!*******************************************************************************************!*\
  !*** ./app/javascript/submission_form/markdown_content.vue?vue&type=template&id=31a52f92 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_markdown_content_vue_vue_type_template_id_31a52f92__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_markdown_content_vue_vue_type_template_id_31a52f92__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./markdown_content.vue?vue&type=template&id=31a52f92 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/markdown_content.vue?vue&type=template&id=31a52f92");


/***/ }),

/***/ "./app/javascript/submission_form/multi_select_step.vue?vue&type=template&id=3165ebea":
/*!********************************************************************************************!*\
  !*** ./app/javascript/submission_form/multi_select_step.vue?vue&type=template&id=3165ebea ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_multi_select_step_vue_vue_type_template_id_3165ebea__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_multi_select_step_vue_vue_type_template_id_3165ebea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./multi_select_step.vue?vue&type=template&id=3165ebea */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/multi_select_step.vue?vue&type=template&id=3165ebea");


/***/ }),

/***/ "./app/javascript/submission_form/number_step.vue?vue&type=template&id=3fff30e4":
/*!**************************************************************************************!*\
  !*** ./app/javascript/submission_form/number_step.vue?vue&type=template&id=3fff30e4 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_number_step_vue_vue_type_template_id_3fff30e4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_number_step_vue_vue_type_template_id_3fff30e4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./number_step.vue?vue&type=template&id=3fff30e4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/number_step.vue?vue&type=template&id=3fff30e4");


/***/ }),

/***/ "./app/javascript/submission_form/payment_step.vue?vue&type=template&id=17603d73":
/*!***************************************************************************************!*\
  !*** ./app/javascript/submission_form/payment_step.vue?vue&type=template&id=17603d73 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_payment_step_vue_vue_type_template_id_17603d73__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_payment_step_vue_vue_type_template_id_17603d73__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./payment_step.vue?vue&type=template&id=17603d73 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/payment_step.vue?vue&type=template&id=17603d73");


/***/ }),

/***/ "./app/javascript/submission_form/phone_step.vue?vue&type=template&id=4ea80c8b":
/*!*************************************************************************************!*\
  !*** ./app/javascript/submission_form/phone_step.vue?vue&type=template&id=4ea80c8b ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_phone_step_vue_vue_type_template_id_4ea80c8b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_phone_step_vue_vue_type_template_id_4ea80c8b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./phone_step.vue?vue&type=template&id=4ea80c8b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/phone_step.vue?vue&type=template&id=4ea80c8b");


/***/ }),

/***/ "./app/javascript/submission_form/signature_step.vue?vue&type=template&id=e24dccfe":
/*!*****************************************************************************************!*\
  !*** ./app/javascript/submission_form/signature_step.vue?vue&type=template&id=e24dccfe ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_signature_step_vue_vue_type_template_id_e24dccfe__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_signature_step_vue_vue_type_template_id_e24dccfe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./signature_step.vue?vue&type=template&id=e24dccfe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/signature_step.vue?vue&type=template&id=e24dccfe");


/***/ }),

/***/ "./app/javascript/submission_form/text_step.vue?vue&type=template&id=00357200":
/*!************************************************************************************!*\
  !*** ./app/javascript/submission_form/text_step.vue?vue&type=template&id=00357200 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_text_step_vue_vue_type_template_id_00357200__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_text_step_vue_vue_type_template_id_00357200__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./text_step.vue?vue&type=template&id=00357200 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app/javascript/submission_form/text_step.vue?vue&type=template&id=00357200");


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 			"form": 0
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
/******/ 	__webpack_require__.O(undefined, ["formVendors-node_modules_tabler_icons-vue_dist_esm_icons_IconAlignBoxLeftTop_js-node_modules_-5f1125"], () => (__webpack_require__("./app/javascript/form.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["formVendors-node_modules_tabler_icons-vue_dist_esm_icons_IconAlignBoxLeftTop_js-node_modules_-5f1125"], () => (__webpack_require__("./app/javascript/form.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=form.js.map