const butInstall = document.getElementById('buttonInstall');
const installText = document.getElementById('installInfo');
// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async (event) => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
     return;
    }
    promptEvent.prompt();
    
    window.deferredPrompt = null;
  
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    installText.textContent = 'Installed successfully!';
    console.log('applications installed', event);
    window.deferredPrompt = null;
});
