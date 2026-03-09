const logoUpload = document.getElementById('logoUpload');
const logoSize = document.getElementById('logoSize');
const textSize = document.getElementById('textSize');
const textGap = document.getElementById('textGap');
const pageLogo = document.getElementById('pageLogo');
const page = document.querySelector('.page');
const mainContent = document.querySelector('.main-content');

// Floating toolbar refs
const toolbar = document.getElementById('textToolbar');
const toolbarSize = document.getElementById('toolbarSize');
const toolbarLabel = document.getElementById('toolbarLabel');
const toolbarVal = document.getElementById('toolbarVal');
const toolbarDel = document.getElementById('toolbarDelete');
let activeElement = null;

// Bind click handler to an editable element
function bindEditable(el) {
    el.addEventListener('click', function (e) {
        e.stopPropagation();
        activeElement = el;

        const baseSize = parseFloat(el.dataset.baseSize || 12);
        const currentSize = parseFloat(el.style.fontSize) || baseSize;
        const label = el.dataset.label || 'Text';

        toolbarLabel.textContent = label;
        toolbarSize.value = currentSize;
        toolbarVal.textContent = currentSize + 'pt';

        // Position toolbar above the element
        const rect = el.getBoundingClientRect();
        const tbWidth = 220;
        let left = rect.left + rect.width / 2 - tbWidth / 2;
        let top = rect.top - 70;

        if (left < 10) left = 10;
        if (left + tbWidth > window.innerWidth - 10) left = window.innerWidth - tbWidth - 10;
        if (top < 10) top = rect.bottom + 10;

        toolbar.style.left = left + 'px';
        toolbar.style.top = top + 'px';
        toolbar.classList.add('visible');
    });
}

// Bind all initial editable elements
document.querySelectorAll('[contenteditable="true"]').forEach(bindEditable);

// Resize active element
toolbarSize.addEventListener('input', function (e) {
    if (!activeElement) return;
    const val = e.target.value;
    activeElement.style.fontSize = val + 'pt';
    toolbarVal.textContent = val + 'pt';
});

// Delete active element
toolbarDel.addEventListener('click', function (e) {
    e.stopPropagation();
    if (!activeElement) return;
    if (confirm('Remove this text field?')) {
        activeElement.remove();
        activeElement = null;
        toolbar.classList.remove('visible');
    }
});

// Hide toolbar when clicking outside
document.addEventListener('click', function (e) {
    if (!toolbar.contains(e.target) && !e.target.closest('[contenteditable="true"]')) {
        toolbar.classList.remove('visible');
        activeElement = null;
    }
});

// Add new text field (draggable)
let fieldCounter = 1;
const pageContent = document.querySelector('.page-content');

document.getElementById('addTextBtn').addEventListener('click', function () {
    // Wrapper for absolute positioning
    const wrapper = document.createElement('div');
    wrapper.className = 'custom-field';
    wrapper.style.left = '50%';
    wrapper.style.top = '50%';
    wrapper.style.transform = 'translate(-50%, -50%)';

    // Drag handle
    const handle = document.createElement('div');
    handle.className = 'drag-handle';
    handle.textContent = '⋮⋮';
    handle.setAttribute('title', 'Drag to move');
    wrapper.appendChild(handle);

    // Editable text span
    const textEl = document.createElement('span');
    textEl.contentEditable = 'true';
    textEl.spellcheck = false;
    textEl.dataset.baseSize = '12';
    textEl.dataset.label = 'Custom Field ' + fieldCounter;
    textEl.textContent = 'New Text Field';
    wrapper.appendChild(textEl);
    fieldCounter++;

    pageContent.appendChild(wrapper);
    bindEditable(textEl);
    textEl.focus();

    // Drag logic
    let isDragging = false;
    let startX, startY, origLeft, origTop;

    handle.addEventListener('mousedown', function (e) {
        e.preventDefault();
        e.stopPropagation();
        isDragging = true;

        const pcRect = pageContent.getBoundingClientRect();
        // Remove the centering transform on first drag
        wrapper.style.transform = 'none';
        // Get current computed position
        const wRect = wrapper.getBoundingClientRect();
        origLeft = wRect.left - pcRect.left;
        origTop = wRect.top - pcRect.top;
        wrapper.style.left = origLeft + 'px';
        wrapper.style.top = origTop + 'px';

        startX = e.clientX;
        startY = e.clientY;

        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', onDragEnd);
    });

    function onDrag(e) {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        wrapper.style.left = (origLeft + dx) + 'px';
        wrapper.style.top = (origTop + dy) + 'px';
    }

    function onDragEnd() {
        isDragging = false;
        // Update stored position
        origLeft = parseInt(wrapper.style.left);
        origTop = parseInt(wrapper.style.top);
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('mouseup', onDragEnd);
    }
});

// Logo Upload
logoUpload.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (ev) {
            const img = document.createElement('img');
            img.src = ev.target.result;
            img.id = 'pageLogo';
            img.className = 'logo';
            img.style.width = logoSize.value + 'px';
            const currentLogo = document.getElementById('pageLogo');
            currentLogo.parentNode.replaceChild(img, currentLogo);
        };
        reader.readAsDataURL(file);
    }
});

// Logo Size
logoSize.addEventListener('input', function (e) {
    const logo = document.getElementById('pageLogo');
    if (logo) logo.style.width = e.target.value + 'px';
    document.getElementById('logoSizeVal').textContent = e.target.value + 'px';
});

// Global Text Size
textSize.addEventListener('input', function (e) {
    page.style.setProperty('--text-scale', e.target.value);
    document.getElementById('textSizeVal').textContent = Math.round(e.target.value * 100) + '%';
});

// Text Spacing
textGap.addEventListener('input', function (e) {
    page.style.setProperty('--gap-scale', e.target.value);
    document.getElementById('textGapVal').textContent = Math.round(e.target.value * 100) + '%';
});
