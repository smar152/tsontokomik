export function getMessage(key, messages, language) {
  const message = messages[key];
  if (message) {
    return message[language];
  } else {
    return `οχι ${messages}`;
  }
}
