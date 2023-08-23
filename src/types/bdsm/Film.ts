// 7

export const Film = {
  VoiceRecord: 'Voice Record',
  Photo: 'Photo',
  Video: 'Video',
};

export type Film = typeof Film[keyof typeof Film];

export const filmArray: Film[] = [
  Film.VoiceRecord,
  Film.Photo,
  Film.Video,
];
