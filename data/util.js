export function getMessage(key, messages, language) {
  const message = messages[key];
  console.log(message, language);
  if (message) {
    return message[language];
  } else {
    return `οχι ${messages}`;
  }
}
