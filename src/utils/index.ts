/**
 * 根据自适应规则手动计算尺寸
 * @param designValue 设计稿中的px值
 * @param designWidth 设计稿宽度，默认3840px
 * @returns 计算后的vw值和实际px值
 */
export const calculateResponsiveSize = (
  designValue: number,
  windowSize: number,
  designWidth: number = 3840,
) => {
  // 计算vw值：(设计稿px值 / 设计稿宽度) * 100
  const vwValue = (designValue / designWidth) * 100

  // 获取当前视窗宽度
  const currentViewportWidth = windowSize

  // 计算当前实际px值：(vw值 / 100) * 当前视窗宽度
  const actualPxValue = (vwValue / 100) * currentViewportWidth

  return {
    vw: parseFloat(vwValue.toFixed(6)), // 保留6位小数，与postcss配置一致
    px: Math.round(actualPxValue), // 实际像素值，四舍五入
    vwString: `${vwValue.toFixed(6)}vw`, // 可直接用于CSS的字符串
    formula: `${designValue}px → ${vwValue.toFixed(6)}vw → ${Math.round(actualPxValue)}px`,
  }
}
