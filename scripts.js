function showResume(type) {
    document.querySelectorAll('.resume').forEach(section => section.style.display = 'none');
    document.getElementById(`resume-${type}`).style.display = 'block';
    window.scrollTo({ top: document.getElementById(`resume-${type}`).offsetTop - 100, behavior: 'smooth' });
}