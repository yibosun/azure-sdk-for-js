// We have a dependency on navigator to get the user agent string.

interface Navigator {
  userAgent: string;
}
interface Window {
  readonly navigator: Navigator;
}

declare var navigator: Navigator;
