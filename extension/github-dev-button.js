//
// GitHub Dev Button
//

'use strict';
(function() {
  const buttonList = document.querySelector(
    '.file-navigation.mb-3.d-flex.flex-items-start'
  );
  // If no button list, hit the escape hatch
  if (!buttonList) return;

  // Construct button html
  const url = document.location.href.replace(".com",".dev");
  const button = `
      <a
        target="_blank"
        class="btn ml-2 d-none d-md-block  btn-primary"
        href="${url}"
        style="background-color:#006fc5"
        title="Open in Github Dev"
        aria-label="Open in Github Dev"
      >
      Github.Dev<svg height="20px" width="20px" style="    vertical-align: text-bottom;
      height: 16px;
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
     " xmlns="http://www.w3.org/2000/svg" class="icon gap-left-100 width-300" viewBox="0 0 24 24" fill="white" aria-label="外部链接" 
      role="img"><path d="M0 0h24v24H0z" fill="none">
      </path><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg></a>`;
  // Inject button html into DOM
  buttonList.innerHTML = `${buttonList.innerHTML}${button}`;
})();