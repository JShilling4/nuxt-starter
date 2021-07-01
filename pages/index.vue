<template>
    <div>
        <section class="hero-section">
            <div class="container">
                <h1 class="heading heading--hero">
                    Hero Heading
                </h1>
            </div>
        </section>

        <section>
            <div class="container">
                <h2 class="section-heading">
                    Section 1 Heading
                </h2>
            </div>
        </section>

        <section>
            <div class="container">
                <h2 class="section-heading">
                    Section 2 Heading
                </h2>
            </div>
        </section>

        <section>
            <div class="container">
                <h2 class="heading">
                    Section 3 Heading
                </h2>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    data () {
        return {
            activeSection: ''
        }
    },
    mounted () {}
}
</script>

<style lang="scss">

section {
    padding: 12rem 4rem;
}
.container {
    max-width: $main-container-width;
    margin: 0 auto;
}

.section-heading {
    display: inline-block;
    position: relative;
}

section.hero-section {
    display: flex;
    align-items: center;
    min-height: 100vh;
    text-align: center;
}
</style>
