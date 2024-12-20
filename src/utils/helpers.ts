export function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = (error) => reject(error);
    });
}

export function playSound(src: string): HTMLAudioElement {
    const audio = new Audio(src);
    audio.play();
    return audio;
}