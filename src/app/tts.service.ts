import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TtsService {
  private apiKey: string = '13c18d0b18323c869244f89ddcfdbb25'; // It's free, no credit card attached, and I'm too lazy to host on something other than Github right now
  private apiUrl: string = 'https://api.elevenlabs.io/v1/text-to-speech/ZJCNdZEjYwkOElxugmW2';

  constructor() {}

  async speak(text: string) {
    try {
      const response = await axios.post(this.apiUrl, {
        text: text,
        model_id: 'eleven_multilingual_v2'
      }, {
        headers: {
          'xi-api-key': this.apiKey,
          'Content-Type': 'application/json'
        },
        responseType: 'arraybuffer'
      });

      const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      console.error('Error using ElevenLabs TTS', error);
    }
  }
}