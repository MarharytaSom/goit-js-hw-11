import{S as l}from"./assets/vendor-338edac8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const f="44648144-e72e61b3f392a294e0f76f542",u="https://pixabay.com/api/";async function d(r){const t=await fetch(`${u}?key=${f}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error("Failed to fetch images");return await t.json()}function m(){const r=document.querySelector(".gallery");r.innerHTML=""}function p(r){const t=document.querySelector(".gallery"),n=r.map(e=>`
    <div class="photo-card">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${e.likes}</p>
        <p class="info-item"><b>Views:</b> ${e.views}</p>
        <p class="info-item"><b>Comments:</b> ${e.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>
      </div>
    </div>
  `).join("");t.insertAdjacentHTML("beforeend",n),new l(".gallery a").refresh()}function a(r){iziToast.error({title:"Error",message:r,position:"topRight"})}function c(r){const t=document.querySelector(".loader");r?t.classList.add("visible"):t.classList.remove("visible")}document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#search-form").addEventListener("submit",async t=>{t.preventDefault();const n=t.currentTarget.elements.query.value.trim();if(!n){a("Please enter a search query");return}m(),c(!0);try{const s=await d(n);if(c(!1),s.hits.length===0){a("Sorry, there are no images matching your search query. Please try again!");return}p(s.hits)}catch{c(!1),a("An error occurred while fetching images. Please try again.")}})});
//# sourceMappingURL=commonHelpers.js.map
