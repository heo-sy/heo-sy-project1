// 전기 마스터 블로그 기본 스크립트

document.addEventListener('DOMContentLoaded', () => {
    console.log('⚡ 전기 마스터 블로그에 오신 것을 환영합니다!');

    // 네비게이션 부드러운 스크롤 (추후 앵커 링크 추가 시 유용)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 포스트 카드 호버 효과 강화 (JS로 추가 제어 가능)
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // 필요 시 애니메이션이나 효과 추가
        });
    });
});
