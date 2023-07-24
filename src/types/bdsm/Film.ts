// 7

export const Film = {
  VoiceRecord: 'Voice Record',
  Photo: 'Photo',
  Video: 'Video',
};

export type Film = typeof Film[keyof typeof Film];