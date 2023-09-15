<template>
    <div>
        <Header />
        <Nav />
        <h1>Detail</h1>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Nav from '../components/Nav.vue'

export default {
    name: 'detail',
    components: {
        Header,
        Nav,
        Footer
    }
}
</script>