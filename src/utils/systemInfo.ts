export const isNavigatorShareAvailable =
  typeof navigator.share === "function" &&
  typeof navigator.canShare === "function" &&
  navigator.canShare({ text: "some text" }) &&
  // crude way to disable navigatorShare on desktop safari's
  // only use it for smaller mobile screens
  window.screen.width < 800;

export const isNavigatorClipboardAvailable =
  typeof navigator.clipboard.writeText === "function";

export const isSharingBroken = () => {
  // navigator.clipboard and navigator.share does not work on fb app
  return window.navigator.userAgent.includes("FBAV");
};
