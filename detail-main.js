(function() {
    var overlay = document.querySelector('.page-transition');
    if (!overlay) return;
    function fadeOut() { gsap.fromTo(overlay, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.6, ease: 'power2.out', delay: 0.1 }); }
    fadeOut();
    window.addEventListener('pagehide', function() { gsap.set(overlay, { autoAlpha: 1 }); });
    window.addEventListener('pageshow', function(e) { if (e.persisted) fadeOut(); });
    document.querySelectorAll('a[href]').forEach(function(link) {
        var href = link.getAttribute('href') || '';
        if (link.hostname !== window.location.hostname || link.target === '_blank' || href.startsWith('#')) return;
        link.addEventListener('click', function(e) {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
            e.preventDefault();
            gsap.to(overlay, { autoAlpha: 1, duration: 0.45, ease: 'power2.in', onComplete: function() { window.location.href = link.href; } });
        });
    });
})();
gsap.from('.detail-hero img', { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out', delay: 0.2 });
gsap.from('.detail-info__title', { opacity: 0, y: 16, duration: 0.7, ease: 'power2.out', delay: 0.4 });
gsap.from('.detail-info__meta', { opacity: 0, y: 16, duration: 0.7, ease: 'power2.out', delay: 0.5 });
gsap.from('.detail-info__desc', { opacity: 0, y: 16, duration: 0.7, ease: 'power2.out', delay: 0.6 });
