console.log("panel-head.js loaded!");

// function ready() {
//   let pageName = window.location.pathname.replace(/^\//i, '').replace(/\/$/i, '').replaceAll('/', '-');
//   document.body.id = pageName;
//   if (pageName === 'add-web') {
//     setTimeout(() => {
//       if ($('input#domain:first-of-type').length > 0) {
//         if (window.location.hostname !== 'localhost') {
//           let webDomainSuffix = window.location.hostname.replace(/^\w+/i, '');
//           $('input#domain:first-of-type').val(webDomainSuffix);
//         } else {
//           $('input#domain:first-of-type').val('localhost');
//         }
//       }
//       if ($('input#dns-support').length > 0) {
//         $('input#dns-support').prop('checked', false);
//       }
//       if ($('input#mail-support').length > 0) {
//         $('input#mail-support').prop('checked', false);
//       }
//     }, 1000);
//   }
// }

// document.addEventListener("DOMContentLoaded", ready);

// window.addEventListener("GpbReactLoadEvent", function(evt) {
//   console.log(evt.detail);
//   // setTimeout(() => {
//   //   $('input#domain:first-of-type').val('.monkeyisland.com.au');
//   // }, 1000);
// }, false);

// window.addEventListener("GpbAddWebLoadEvent", function(evt) {
//   console.log(evt.detail);
// }, false);

// window.location.pathname.replace(/^\//i, '').replace(/\/$/i, '').replaceAll('/', '-');

// $('.content .edit-template.add-web .edit-item .form-control[name="v_domain"]').length

// let pageName = window.location.pathname.replace(/^\//i, '').replace(/\/$/i, '').replaceAll('/', '-');
// let formEl = document.querySelector(".content form:first-of-type");
// formEl.id = `form-${pageName}`;
// let webDomainSuffix = window.location.hostname.replace(/^\w+/i, '');
// $('form#form-add-web #domain').val(webDomainSuffix);
