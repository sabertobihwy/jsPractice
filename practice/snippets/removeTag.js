const removeTag = (fragment) => {
    const policy = window.trustedTypes?.createPolicy("default", {
        createHTML: (input) => input
    });

    const safeHTML = policy ? policy.createHTML(fragment) : fragment;
    return new DOMParser().parseFromString(safeHTML, 'text/html').body.textContent || '';
};

console.log(removeTag(`<div>Secure <b>Content</b></div>`)); // "Secure Content"
