/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://s3-alpha-sig.figma.com/img/e01b/fd2b/30c6cd4eaf3d9046fb20affbd4dd7e4e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K~Ix~CP-beZmRb5dpL9-cupvjaAwuB0eCOBJcZ-2Q~8UO-WBJRdpOc1~Pub2jtOCtnBzRJRGUnMgSZDwYaiNzeEojHvMD5RpXMpftRtTWvlRZV9xqActURoD0wmGsAn0-T6qwcBf1W1KecTlswW6OpkC7Q8u6s7HUjg0y1lDRPmEsVPrqIpU59gRaYIuml3LAYEfTZ9GdNeNFfCWRxOfN5TEA8oRxTO0vlpYyLmOsDDgieTjRqYyzEJLsqu3cOg-B~IZXPhHMgW4sI1G96La0TXVUYcUhb2IPytx2WJ-Jb7gQHh3Sld3ZZ7Hp02U7C93icwlXI1kM3107oNVSqJzpA__')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}