/**
 * 节流函数
 * @template T 原函数类型
 * @param {T} fn - 需要节流的原始函数
 * @param {number} delay - 节流延迟时间（毫秒）default 200ms
 * @returns {(...args: Parameters<T>) => void} 返回一个新的节流函数
 */
export function throttle<T extends (...args: any[]) => any>(
    fn: T,
    delay: number = 200
): (...args: Parameters<T>) => void {
    // 上次执行时间
    let lastTime: number = 0;
    // 定时器
    let timer: ReturnType<typeof setTimeout> | null = null;

    return function throttled(...args: Parameters<T>): void {
        const now = Date.now();

        // 距离上次执行的时间间隔
        const remaining = delay - (now - lastTime);
        console.log('距离上次执行的时间间隔：',remaining);
        
        // 如果距离上次执行超过了延迟时间，立即执行
        if (remaining <= 0) {
            // 清除可能存在的定时器
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }

            fn.apply(this, args);
            lastTime = now;
        } 
        // 否则，设置定时器等待剩余时间后执行
        else if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args);
                lastTime = Date.now();
                timer = null;
            }, remaining);
        }
    };
}