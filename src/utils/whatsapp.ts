export const FUTURE_MINDS_PHONE = '9618283987';
export const WHATSAPP_COUNTRY_CODE = '91'; // India
export const WHATSAPP_FULL_NUMBER = `${WHATSAPP_COUNTRY_CODE}${FUTURE_MINDS_PHONE}`;

export const DEFAULT_WHATSAPP_MESSAGE = 'Hi, i am intrested can i get more details';

/**
 * Creates a direct WhatsApp click-to-chat URL
 */
export function getWhatsAppDirectUrl(customMessage?: string): string {
  const message = customMessage || DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_FULL_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates a WhatsApp URL with enrollment details
 */
export function getEnrollmentWhatsAppUrl(details: {
  parentName: string;
  studentName: string;
  studentAge: string | number;
  courseInterest: string;
  preferredMode?: string;
  notes?: string;
}): string {
  const lines: string[] = [
    'Hi, i am intrested can i get more details',
    '',
    `*Parent Name:* ${details.parentName.trim() || 'Parent'}`,
    `*Student Name:* ${details.studentName.trim() || 'Student'}`,
    `*Student Age:* ${details.studentAge || 'Not specified'} years`,
    `*Course Interest:* ${details.courseInterest || 'Coding & Robotics'}`,
    `*Preferred Campus/Mode:* ${
      details.preferredMode === 'online_interactive'
        ? 'Live Online Interactive'
        : 'Ananth Nagar STEM Lab (In-person)'
    }`
  ];

  if (details.notes && details.notes.trim()) {
    lines.push(`*Notes/Queries:* ${details.notes.trim()}`);
  }

  lines.push('', 'Looking forward to scheduling a free trial session at Future Minds!');

  const fullText = lines.join('\n');
  return `https://wa.me/${WHATSAPP_FULL_NUMBER}?text=${encodeURIComponent(fullText)}`;
}
