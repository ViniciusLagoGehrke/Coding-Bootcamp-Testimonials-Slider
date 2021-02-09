const size = {
 mobile: '320px',
 tablet: '500px',
 desktop: '1000px',
}
const device = {
 mobile: `(min-width: ${size.mobile})`,
 tablet: `(min-width: ${size.tablet})`,
 desktop: `(min-width: ${size.desktop})`
}
export default {size, device}