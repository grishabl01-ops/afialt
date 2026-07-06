export {};

declare global {
  interface Window {
    // Yandex.Metrika global. Optional — may be blocked by ad/tracker blockers.
    ym?: (counterId: number, action: string, ...params: unknown[]) => void;
  }
}
