let showingAlert = false;
const interval = setInterval(() => {
    document.title = showingAlert
    ? 'Sazumi Cloud': 'Sazumi Viki';

    showingAlert = !showingAlert;
}, 1000);
