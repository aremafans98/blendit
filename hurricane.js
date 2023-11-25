const generateButton = document.getElementById("generateButton");
        const atasanDropdown = document.getElementById("atasanDropdown");
        const bawahanDropdown = document.getElementById("bawahanDropdown");
        const clothingData = {
            oversize: [
                "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/7/27/305848d4-b519-4c90-bdb5-c6e0fce3348d.jpg",
                "https://down-id.img.susercontent.com/file/46314341016d88639ecca851d28e1a7b"
                // ...
            ],
            hoodie: [
                "https://example.com/hoodie1.jpg",
                "https://example.com/hoodie2.jpg"
                // ...
            ],
            crewneck: [
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNW5EJVxnm-PTU9r98yJUn6GgO4kmXE-Qk1_ujBE4nuIfjj_KtXrz3SZD0w50KowN9nWj5aCwZcacxhF8H3Hpu09rqIwBj3TsWANwipukhpp5pfc32NY_3JRi2xFgPaea5gZ2XU1tV9HwkuA1Lym2aW_EPicWQ15LBMr5-b6grgMNjiYcVcnttJpF-Rk4/s1600/A07.jpg",
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTL7JmwpZgomMT_Nu0TOr5A6ujgYalaAuj0HogC_UnbWKLBelPyUnqE3Yfp_i7xIUbZdYQlQI_IPBnZq3t9Ocai0hPr2Si_kBzV_T_o_TmUlKm9MlpI_xErbrzaFt3Ii0oQtiDcD7oKfckCBjKwbbU4wF1vd5lNaCoZvBVkWgmK09W8AXTOJ31jgv-FxE/s1600/A08.jpg",

                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvc6JXanAh3DmAamZNTyPJH0cSDagTZhmVF-5Lr6n43kjJ9-Q9InYTe-kbJhqPrm35XG7NXYVoAmN4pVZdnIsCYBT5UJrTHoixJCAMjHVVJYJYsPNFwNPReOrHuClk2H-wn2R_691L3WHitD0K6-DArqcJ65QjDcl03bphGTlYatrz9dxDOgaRWDJP6bk/s1600/A09.jpg",

                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJQnuFvNi_gkFMROsn8KLTVwqrFGYmzysWCsMjapFQnoOfyhbjiMQxqswjJvekqOCXN76BUSV0LxhxmC7MFwY-vrLhl2-gFphQm1qNuWhQPZBq2_gRYCQviVe4PeV_iIFvKJ-9yQ5iwi1Pr3X4qSlBKLq05soxgbbXt27kI9C2wj-RAJxaxBdFxyA2or4/s1600/A10.jpg",

                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjE1k5uSQiqDE_PxdW1gXcKWwm8wly-7FLNu1HdfiM1XHxFskgeSJPO-koy8b4fxPh3lgLRwaWTikIaXrfXYrBoVmUl5r1opeV1DKBVJm0KVPlQ5IVdUy4RGk0z0514rEPB4QBbqsS4pA8ghSZpaTL83MB7ZW2Ptw-ez4U0gcwgdxBvSLXBgYn2cjMfXkE/s1600/A11.jpg"
                // ...
            ],
            rugby: [
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcj-EjH50Lt0dhZGi_tbfUPTTV_4Lupf3msByPaj4NMvjTOQH3QI4smzsapbVBVfnHkOadGQ_QkLtB0IcWmLlJ29zNckXg-b62F61BSVp9eBxiFVovXmE2B-IdA_sK6UwADmg91oys9xASEDRi2qC7Wv-LkO_-Cq73ifKYrkW-8lzloG4WPbk13pD30OY/s1600/A01.jpg",
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJDCZqP_8KIv3wEDLboYJVMWGaQfPlFRQmxhMM03gj6bcxMStn_1ckgFyVkXUaXC9kDhldrUkHR7Xv4ypDAQY1IGOKVAAN9N73xBxy0NVIXs_KfuGfdN8SX5INFUFEQdv8-wZoTEWuKlE9rTgplDG7Tke4wzpcIQ9yxGFMeZCucssHf7oxjWpOdM_9XR8/s1600/A02.jpg",

                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiE1SqPNbpftix2Pweyfn2m1SjUelP3goBKh6uoMvNe12_7pcYKlKWInJ2DT-Cb-kCA7W_x_ePcwlnOAVgSKgU0IKNQnAsq989Rz4gT_BuBGlIJC0COix1dmrwblSDuQ3w6MM8WsOztPJhjM_e41hzi9daIUK0G5QQS47I-FoxQjDZ4TyUiEdZK_t2wxNE/s1600/A03.jpg",

                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjatfGL5a-CE0BG8OF4J1jldNGZsuWcPNW1FVuYzpBF8uUdaxO6mEwY875ydb-K46Wk8RM-_MLKFCPeyWfRh1qM9mYgFpsSuFDgFn8cv6G-oMK72eTIdWBkaxxikb2EsuwVuat5yI2WaT484tqelYVyKtb9Wyvcf45TZV45_NS56viRRDyBFJ00F8N1m94/s1600/A04.jpg",

                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE5NRPbHG2sAZtAobQ3gh0Dym2yLjKxYSJ1HZdBJujt7fSyGeCeqsom-D8-TDCC7zq7XXCLQVpVIMNeoYfDN9nnankfLIW74cRLyWqafW-d5Ks1aEUAPDj45XFGPPZdaEB2bd3W_QgVOZ5kWU_qUsI2iYkjRhW1pii165PXLW_lCJfn_5tUwP3ipm-lvo/s1600/A05.jpg",

                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju3KRqxHbkcNpciok9AVhbknMKZxyEK8nk8vcfCWM41lrprahNWUA18-Hwb0twh0uu5SxL_-7VCBlEYXHGIUhNFnl1oqSVOV0Wpq68jqdcs1lT1cC4YGQvnkBev2nLg3-kpNXQtm0q8anP-zu5f8Yura15vSCNlzCrtsR9jjdn3siGPnsRW6EpwZPdo24/s1600/A06.jpg"
                // ...
            ],
            chino: [
                "https://example.com/pants1.jpg",
                "https://example.com/pants2.jpg"
                // ...
            ],
            cargo: [
                "https://id-live-01.slatic.net/p/54e71a1dfbc4615ee52df316a1515496.jpg",
                "https://id-test-11.slatic.net/p/c556f12d1c2c104c35e22c4a03c16d04.jpg"
                // ...
            ],
            short: [
                "https://example.com/short1.jpg",
                "https://example.com/short2.jpg"
                // ...
            ]
        };

        const clothingLinks = {
            oversize: [
                "https://example.com/oversize1-link",
                "https://example.com/oversize2-link"
                // ...
            ],
            hoodie: [
                "https://example.com/hoodie1-link",
                "https://example.com/hoodie2-link"
                // ...
            ],
            crewneck: [
                "https://shope.ee/3pvqXg8v1c",
                "https://shope.ee/4fUxYOoz6r",
                "https://shope.ee/3VJ0Ac28cb"
// ...
            ],
            rugby: [
                "https://shope.ee/8UhePNUv9I",
                "https://shope.ee/4VBVh3N4VO",
                "https://shope.ee/6Uwa5bORVb",
                "https://shope.ee/A9psTAcLem",
                "https://shope.ee/3VIyXJrYnp",
                "https://shope.ee/4fUvvslYMT",
                // ...
            ],
            chino: [
                "https://example.com/chino1-link",
                "https://example.com/chino2-link"
                // ...
            ],
            cargo: [
                "https://www.google.com",
                "https://www.bing.com"
                // ...
            ],
            short: [
                "https://example.com/short1-link",
                "https://example.com/short2-link"
                // ...
            ]
        };

        function openLink(type) {
            // Simulate loading time
            setTimeout(() => {
                const clothingType = clothingData[type];
                if (clothingType && clothingType.length > 0) {
                    const randomIndex = Math.floor(Math.random() * clothingType.length);
                    const clothing = clothingType[randomIndex];
                    const link = clothingLinks[type][randomIndex];

                    document.getElementById(type).querySelector('img').src = clothing;
                    document.getElementById(type + "Link").href = link;

                    document.getElementById(type).style.display = "block";
                    document.getElementById(type + "Link").style.display = "inline-block";

                    console.log(`Gambar ${type} telah diubah.`);
                } else {
                    console.error(`Tidak ada gambar ${type} yang tersedia.`);
                }
            }, 0); // Change the time as needed
        }

        generateButton.addEventListener("click", () => {
            const selectedAtasan = atasanDropdown.value;
            const selectedBawahan = bawahanDropdown.value;

            // Hide all clothing images
            const allClothingTypes = ['oversize', 'hoodie', 'crewneck', 'rugby', 'chino', 'cargo', 'short'];
            for (const type of allClothingTypes) {
                document.getElementById(type).style.display = "none";
                document.getElementById(type + "Link").style.display = "none";
            }

            // Show loading text with dots
    let dots = 1;
    generateButton.innerText = "Loading";

    const loadingInterval = setInterval(() => {
        generateButton.innerText = "Loading" + ".".repeat(dots);
        dots = (dots % 3) + 1; // Increment dots and reset to 1 after 3
    }, 500); // Adjust the interval time as needed

    setTimeout(() => {
        clearInterval(loadingInterval); // Stop the loading animation
        openLink(selectedAtasan);
        openLink(selectedBawahan);

                // Restore the "Blend" button text
                generateButton.innerText = "Blend It.";
            }, 2000); // Change the time as needed
        });
