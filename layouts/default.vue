<template>
    <div>
        <TheHeader />
        <Nuxt />
        <TheFooter />
    </div>
</template>

<style lang="scss">
@import '~assets/scss/base/base.scss';
@import '~assets/scss/base/reset.scss';
@import '~assets/scss/base/typography.scss';

html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 62.5%;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

body {
    font-size: 1.6rem;
    background-color: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
}

a {
    text-decoration: none;
}

::-webkit-scrollbar {
	width: 0;
    background: transparent;
}
body {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}
</style>
