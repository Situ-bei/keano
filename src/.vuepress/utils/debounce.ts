/**
 * 防抖函数
 * @template T 原函数类型
 * @param {T} func - 需要防抖的原始函数
 * @param {number} delay - 防抖延迟时间（毫秒）default 200ms
 * @returns {(...args: Parameters<T>) => void} 返回一个新的防抖函数
 */

// 使用泛型 T 来保持原函数的类型，extends 确保 T 是一个函数类型
// Parameters<T> 是 TypeScript 的工具类型，用于获取函数 T 的参数类型
export function debounce<T extends (...args: any[]) => any>(
    func: T,       // 需要防抖的原始函数
    delay: number = 200 // 防抖延迟时间（毫秒）default 200ms
): (...args: Parameters<T>) => void {
    // 用于存储定时器的 ID
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    // 用于判断是否正在防抖
    let isDebouncing = false;

    return (...args: Parameters<T>) => {
        // 如果正在防抖，则直接返回
        if (isDebouncing) return;

        // 设置正在防抖标志
        isDebouncing = true;
        // 执行原始函数
        func.apply(null, args);

        // 如果定时器存在，则清除定时器
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // 设置定时器，在延迟时间后将 isDebouncing 设置为 false，并将 timeoutId 设置为 null
        timeoutId = setTimeout(() => {
            isDebouncing = false;
            timeoutId = null;
        }, delay);
    };
}