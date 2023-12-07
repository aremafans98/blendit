const generateButton = document.getElementById("generateButton");
        const atasanDropdown = document.getElementById("atasanDropdown");
        const bawahanDropdown = document.getElementById("bawahanDropdown");


/*gambar*/  const clothingData = {
            oversize: [
        /*A12*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGFKfU4zoFsCHD7jrSWmxeofGuuG9AzlwhP6f2q5u4lbWf4DNtvXoinvwq58n3nY_LXo2NL6HPZHXSX3hLEs7QGUXOZJKH6zM_eTV6DlZtFvsg4ZQ6zLRvVgU-e_Ki2xcP2QEMbbNL8vUZz6VKbaYzUdDqspDTo72-VhMpxBePSR4Yrz126EaOzlLgxgp2/s1600/A12.jpg",
/*A13*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj19zaSjyClEoeqN1WB06peogCiLo4lUV2fA9blqCbkhtHr0ULbiRYto6iTHtx5Q0ekoVOwboEcZeCWqJSAWxashZ6Xad76twnlXsFOyca58YxSHoGgn5lwL8Dsezu8PIR3kMzt7SPunSfhe-o5R7MLdz1HZrYeOo7WuYvoaHZP802rAVYmVd485y-3SLuB/s1600/A13.jpg",
/*A14*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM-BA-fARGa9C-TgH8j5HTtv7kKiOtRVB7qqNH9DW-d2aISp-hOHbfnslFagU0wPwBxzeH6gqsDZC1zNgh9pH8yxj7RJO0GKas3sFlEK4MmEfeK6nJQPR8R3rbdkmVfQoZukTQfiK4ztzp0NNwZY8m_l6D2dvXyU6pOJTGkTJzwxu2-_PQO9jArzk6_w89/s1600/A14.jpg",
/*A15*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_lf5mAYaBohujmMWheQ6IpBOt_IolHZp5SEoSeCgs97vGxSXrBUPW9dt-iyWBC-FhPozQvwhMiVJCY2Ctf7G0llzDef7ChzD-as2jIqWs6q02iZoJByqZuVGalJo-Mp0CPlDF7wosRgAkXOeHcb4_BXAMyVoBzto2XXbrWpgKXBMMSF3lDNb_u1AUBtsg/s1600/A15.jpg",
/*A16*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZqAnDSxYTnlsMQZJK-bMfAUQLrrYiaFzvPnPlPvCM-hL4tEMxz_0hpHj97e08H4vzN9xc5M90Fc8UcQwbA2JSwyqOE3OuVjWuURqHPJ19Uq0-p2oen6SUqZ7C5udmIdgfgRnlK-lsxJ7MQNGgX5jWiLDyXlKNdRN8DUNEgftFoGIH9oRwJYROy42zx6yg/s1600/A16.jpg",
/*A17*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8fPbERt6fu5VamInBm74OdxrexfZNjoRUIvsCb7h9lRfT4RCl-yuGcmvxgG2Adc8j0eY2jAlHB8QYMEWxE3XZlQCU8Yh08YxqiWwhiPLr8xAR0FXUpD_erCGJg8RN7BouIpqmeF53eWMm-McURV6f4yODg6AURuhuiAHl8qPEUboxn7W6Uj6y-gOxigv8/s1600/A17.jpg",
/*A52*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8Z4Q9X_tIkXVl6Oci7kz94tWWmTZzd38b_JtiB3A60EoJP7yksx8AVcQbwDhvD866s4W7alpLXpfycp-z1GTxj85YtpQNh4bNz3-0rpqg1oJMPlqGF2OeaZElOIVWfhnR5xH3TMAE7DCLvfUlUCEkNhRDTkbSIa0POmqdZtAcAJkSHf0wZey-svMqjGEw/s1600/A52.jpg",
/*A53*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjI_HPPl74UCSiBURSVfNgQ3Jt4l3vpa92JtCcsFzJvDSRi-Zn-bzNDXivPMVDAG0sGR9fLECL05Ow66rT5Ff1q9g9Kz51pfDkarPHklGvGReTVRtX0e77d3HsJOQSpfxCA-GzQNpFXJBW0OZxbVQn3QmTv0j3PW5Z1VodP59jqGy7ywEi3_6n0pS-zhCLV/s1600/A53.jpg",
/*A54*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8aWdv_Pl1S3EWiGik-r1R_Ha0tHnm2F1TbD4pKQ5JHiyc7XtQRKyP5BAeiukkJVJQQvOAkXp37rATTuOVH25Ao8nQKaLlO95a-FHDP7qqh4tFYPoHXKBXUltvNqqoLjzLGsdWWUA3aahs26rF6G974KFW37ZVIrVfr4mQpSn6xKwdqX9XyGi8BkXUZxNI/s1600/A54.jpg",
/*A55*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGgQq8AydmvGVNgaGkKpE6_fTAfPSW0ZvPun-qe0dgiM3jWN6jEMZpAKOV_kP7Xj_ptbkQL8EBG7hJavjCHySDOorTZiTwTiuVkD3dI3p7RIMEGznZmeq4JjkYfsB-5BcdUW2xuq9mGL5DBjxynM94MMnWWcDyeIXRuwR1TIsdqNO3MOQNn3wH7MQDoLZy/s1600/A55.jpg",
/*A56*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_5V4MVxdIg095s2Vb9-X8mX2Wkapw4M6kdrGc6UWyhOgsPN4tsprjM4pm0i0Vov-KWWMPafHYfN55zceBKEhRiKm4NW2c5NzfMf2NPuLXWXTyaS9LurJCspC1umMFTDJ2bAIGTvFiG2wll35h-09eUnxCYWn985NeJuMTUwNOjdhvHu4as0J6svwFwPQ/s1600/A56.jpg",
/*A57*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWkn3zDoYOmGDyjeTtdrQTEms0ThLyDWoXIEyHnWlqmPHkKCDZqO-LH0T6TFTrsNu1cXhibq0iWJ4eTHf98T1K-4UMAeymxxPGDDfDOgX7gGSNDH_b8kj18uHkuzRYgbMs0idkfwCDBeOmDyPvS_XyfPVwxB1MSoPPtB7WASs1uoSMvCS-_4rQEPT-6Yc/s1600/A57.jpg",
/*A58*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicNVUjoOiVtaWwJIsqO1NQuq9qUipuDN4QS_kSwXKk_sdlfMzWDNgXDNl4LKZgRa4OThmoBSL0zX8nKUahWmLIt1WPfJt7S8SvcVaKuXdWmCER1cK2V0vkLFoLzqCP_DylZzEghIg-ZFdiNCmDxr9ZIH96YtV64WLZPUo9NcBT8hlTELjNGmtyhCEA9js/s1600/A58.jpg"
                // ...
            ],
            hoodie: [

/*A25*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiirz_jSnZr9BXd-9MIsf26Tg0Efr3VBCJIoTBxC4tjfdhbMg7LgoMvZjFChQlXkifv6wBNwae_5t3Zr03aFBgIKCKYrd3q_ZdD0unS8hVkpiqxFxiF5uTl7j43jfspwNyay34ldJIuRAJLKHQEtu8bHtWJ3Zb39CQop5wki5NP5z5SSLMqvQGdm_qTj7is/s1600/A25.jpg",
/*A26*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjO49FmLL55wjfcSFOfsFE_o7ePdolRTqWlaPorUtImCoYKc5kENzbkL0R0DZf0C3d1xBhwHy8nIU2AxEwglgZuC9kO88O_sSxqcx0mX_PYx1ucMojKJ-w3di1tyXKaXAILmGrl4y6K2Ib1l2vKYZmxdVPPAFIclZpYYw-2y8CrPc9Uby5Z5M1UJZQ2RK1g/s1600/A26.jpg",
/*A27*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsZu8YkP3FrHaWjjk8RyINxap9TVJQYX71fw0CTfL25mL4QUS8rzc172yAiC42b4lxa3ujKpfxwUP5eyGVas8XGPbc2ebElG4V75vR-JsdWkC-zapCRcg1IjNPFWgf7qDHvvoJYxF5IK7TI4jf6oOmDdccyePIq8muKhYs9Mw6pnVmpplz20GOHiW8hvSG/s1600/A27.jpg",
/*A28*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhq0RQXa5VjSrGOjjUt50S7tXaYyAz1ho0ITBJCyHyt-tY1ApS33EqIzRFWs8tnc0ZoPbB19FNyFw5fSskjtu4K4_ggM1B8OQtu9mk29V2OncGVLFbg12eqJ8WwSDMvOeiMInoofczRw2RjXYTyHFOFSKSvk0-J99IBwz6EoDdD0kn03i8ucBV0yKsYOws9/s1600/A28.jpg",
/*A29*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibM5_HAjmOb2wroogYTG_LvJ8ej00gzdBFjSXscgzq5QtSwLjBXVEylpvwzHoOCT3BxZ12l8K9QC8wKWcEpVEFfLhKGcpkXUwajavUoDQ7yXD-9RRrsWNy30m-4GV4ctMAy2mM3V_e8grDF2acwZOY4BKk9gB6p1gU8U3u8R1Ehn4I49uFS-HzvN83D9N_/s1600/A29.jpg",
/*A30*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTUYrlAamto9bSDyYr_fdbmFpft-oGT76nh7jnmQfe9dH-y1ZWecRgePdxEVULlLI-uUCbM7GRTygPBZkmAgnab0lY0bpVtKxcrJjqpB8y9NzX0k_MFauITYSXUHaAFiS5CEGkzYf8TSoefoiVw3cIuqOBOOAJ_-czrDeHvWvttmPKMqEqcaOA7IYmwCCt/s1600/A30.jpg",
/*A31*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimpjtgLnr1uc5-aenTEXH-eCXtmcTNjeQb5nkne8N-Hp__QkgvAPVEHUX1_CvOyDf8tvkl2Ko5GS4ZWP0Gb6_Y8UNyhWuT4PUslOCPWpnPgwfr3x-DXkxb3ejnaCOMl8NLRfg9Wvw_fpILdkGshVZBia4iJXf_yEfjxBi56UWlIjGlWiNdssU-g23r3EyJ/s1600/A31.jpg",
/*A32*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEib-TdrKhJA8mdFJF-fkPKlCtmzoVngYAaTe84S36mjZZc-5nbwzJ5o3MhcNiU6z2Se5Da7hXf1MvL6T7-Y_5wONYHzMiqL1TNdaQl5OuyDfex7KRISY35LierzDXGhjuFWv3C5GP8JAWJdssSjVtjJGX2m6P8b4RvQHQ0URc63Add2M9wICU8GrIzxuFcR/s1600/A32.jpg",
/*A33*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYyKiG1wMYla1tojp8SGQZBz_vh4oSR1XD_t4eUqa4gAWmYA87_6LeZtOCz99YYcQynoPrg817GgaHqvt4XSgVDVRdWZWOCsTqweSCOLblQAOrUEtmCArS6-9aBTh4LYa-WpS4pOq-YoBBc9xW9oui4O_2t4p3VNcpT-cGfOGsT0x9mFrqEc67dJdK8-Oh/s1600/A33.jpg",
/*A34*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMmiROoNqDaPk-r32bhRmsdgf-2ugGGVZv5ZdfIj6xdf2ny884fJXYwJzVbtZBZ1tHznr7p8uO6ynT__d8cPsHNyp2qgYi_s9NT4SvaIKuVAG0v6pszgK5PBj731PKAPxMoHkq5fe-5csy71zSaBrz0Br0PHX0o00trVa6ixuf3r9DBtvIw9j6dBmcOlwy/s1600/A34.jpg"
                // ...
            ],
            crewneck: [
 /*A24*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixo78pEQr466MNyorWTH1Mpgnnj8_IxKltcrfTwo3Sad4nZ_GExnSpsGyBdxL5cwsDqE0kNI5y1AWuPB0H9bTur9FzC8I2zGJgEJzAlfBEmepBF4wM20n5lEJSoTNhMDGGYoRiYPz-h0zr3GWd1mpWmwgzajVRQUetFHL9sLSRaiHN2w6-ivYF7B9fD5uK/s1600/A24.jpg",         /*A07*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNW5EJVxnm-PTU9r98yJUn6GgO4kmXE-Qk1_ujBE4nuIfjj_KtXrz3SZD0w50KowN9nWj5aCwZcacxhF8H3Hpu09rqIwBj3TsWANwipukhpp5pfc32NY_3JRi2xFgPaea5gZ2XU1tV9HwkuA1Lym2aW_EPicWQ15LBMr5-b6grgMNjiYcVcnttJpF-Rk4/s1600/A07.jpg",
          /*A08*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTL7JmwpZgomMT_Nu0TOr5A6ujgYalaAuj0HogC_UnbWKLBelPyUnqE3Yfp_i7xIUbZdYQlQI_IPBnZq3t9Ocai0hPr2Si_kBzV_T_o_TmUlKm9MlpI_xErbrzaFt3Ii0oQtiDcD7oKfckCBjKwbbU4wF1vd5lNaCoZvBVkWgmK09W8AXTOJ31jgv-FxE/s1600/A08.jpg",
          /*A09*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvc6JXanAh3DmAamZNTyPJH0cSDagTZhmVF-5Lr6n43kjJ9-Q9InYTe-kbJhqPrm35XG7NXYVoAmN4pVZdnIsCYBT5UJrTHoixJCAMjHVVJYJYsPNFwNPReOrHuClk2H-wn2R_691L3WHitD0K6-DArqcJ65QjDcl03bphGTlYatrz9dxDOgaRWDJP6bk/s1600/A09.jpg",
          /*A10*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJQnuFvNi_gkFMROsn8KLTVwqrFGYmzysWCsMjapFQnoOfyhbjiMQxqswjJvekqOCXN76BUSV0LxhxmC7MFwY-vrLhl2-gFphQm1qNuWhQPZBq2_gRYCQviVe4PeV_iIFvKJ-9yQ5iwi1Pr3X4qSlBKLq05soxgbbXt27kI9C2wj-RAJxaxBdFxyA2or4/s1600/A10.jpg",
          /*A11*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjE1k5uSQiqDE_PxdW1gXcKWwm8wly-7FLNu1HdfiM1XHxFskgeSJPO-koy8b4fxPh3lgLRwaWTikIaXrfXYrBoVmUl5r1opeV1DKBVJm0KVPlQ5IVdUy4RGk0z0514rEPB4QBbqsS4pA8ghSZpaTL83MB7ZW2Ptw-ez4U0gcwgdxBvSLXBgYn2cjMfXkE/s1600/A11.jpg",
	  /*A05*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE5NRPbHG2sAZtAobQ3gh0Dym2yLjKxYSJ1HZdBJujt7fSyGeCeqsom-D8-TDCC7zq7XXCLQVpVIMNeoYfDN9nnankfLIW74cRLyWqafW-d5Ks1aEUAPDj45XFGPPZdaEB2bd3W_QgVOZ5kWU_qUsI2iYkjRhW1pii165PXLW_lCJfn_5tUwP3ipm-lvo/s1600/A05.jpg",                
	  /*A06*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju3KRqxHbkcNpciok9AVhbknMKZxyEK8nk8vcfCWM41lrprahNWUA18-Hwb0twh0uu5SxL_-7VCBlEYXHGIUhNFnl1oqSVOV0Wpq68jqdcs1lT1cC4YGQvnkBev2nLg3-kpNXQtm0q8anP-zu5f8Yura15vSCNlzCrtsR9jjdn3siGPnsRW6EpwZPdo24/s1600/A06.jpg"
// ...
            ],
            rugby: [
            /*Ao1*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcj-EjH50Lt0dhZGi_tbfUPTTV_4Lupf3msByPaj4NMvjTOQH3QI4smzsapbVBVfnHkOadGQ_QkLtB0IcWmLlJ29zNckXg-b62F61BSVp9eBxiFVovXmE2B-IdA_sK6UwADmg91oys9xASEDRi2qC7Wv-LkO_-Cq73ifKYrkW-8lzloG4WPbk13pD30OY/s1600/A01.jpg",
            /*A02*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJDCZqP_8KIv3wEDLboYJVMWGaQfPlFRQmxhMM03gj6bcxMStn_1ckgFyVkXUaXC9kDhldrUkHR7Xv4ypDAQY1IGOKVAAN9N73xBxy0NVIXs_KfuGfdN8SX5INFUFEQdv8-wZoTEWuKlE9rTgplDG7Tke4wzpcIQ9yxGFMeZCucssHf7oxjWpOdM_9XR8/s1600/A02.jpg",
            /*A03*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiE1SqPNbpftix2Pweyfn2m1SjUelP3goBKh6uoMvNe12_7pcYKlKWInJ2DT-Cb-kCA7W_x_ePcwlnOAVgSKgU0IKNQnAsq989Rz4gT_BuBGlIJC0COix1dmrwblSDuQ3w6MM8WsOztPJhjM_e41hzi9daIUK0G5QQS47I-FoxQjDZ4TyUiEdZK_t2wxNE/s1600/A03.jpg",
            /*A04*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjatfGL5a-CE0BG8OF4J1jldNGZsuWcPNW1FVuYzpBF8uUdaxO6mEwY875ydb-K46Wk8RM-_MLKFCPeyWfRh1qM9mYgFpsSuFDgFn8cv6G-oMK72eTIdWBkaxxikb2EsuwVuat5yI2WaT484tqelYVyKtb9Wyvcf45TZV45_NS56viRRDyBFJ00F8N1m94/s1600/A04.jpg"

                // ...
            ],
            chino: [
                "https://example.com/pants1.jpg",
                "https://example.com/pants2.jpg"
                // ...
            ],
            cargoshort: [
                /*A18*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmwMggwupjUN8EXlSZH_QxUtN6cUmSnV7iPex8gXyxJ2UaVt0Js-T7h9mIS7PsCydGY0zE4ttYK-65xPl47_es7KQOzIE4rVKEsRiIN6dcaykPbRNs5K4RDdDvDpnZ_dYniMPID3i5O3pwZhHJt57oBqWmRGdQMvJLbbNyG47IonBsxx6uDQU4vaf9-qyu/s1600/A18.jpg",
                /*A19*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW-bsXc8gwYC6rtmkwSwxzReClYO5hFTKsHJ_jhyvQ7ick_a5MRvKaemHRCAbFC7dw6gYXOaLn76-V18g_RpK1SODJIcrEGdMgzuFiTHVG4xDFv655QFzQj1MMATeeScTONHb6Cj1T1JQ5SpyDbwAVwGNDR2M7i6e3VqBkd3mWSUlZv_DGo8YhJnvaIjDW/s1600/A19.jpg",
		/*A20*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdRATMFekLzNlBhO50wSf1HkAjFcP9GL6ubbFWHMXlZe8nPkSWs-vfj555ro7oGF5CX6WLMLddxR6n1bGH8aozHuNecGnS1ViuTNAH3ST8thWqshtsRotea7syk1dAK7ZH4n3x3MHAMDXe6Bqnn0uUPqg4huHnbocW8OTwepLpv0YLl4pvTNo17FaK8_AZ/s1600/A20.jpg",
		/*A21*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhay0Ir8pa03ZQ-5aPhNITOzmgC983KUmcWXeLHCtDYgwYV0r5HPMpcUzBcY-MNi5xS7rYkxAFcMEUUy8FR8sX1Hy0PZ3LC-8fvJcZ4rkXxbFzxBw5SfogT_oxeVNSmv1qG4tWEnompsvp98FKA-5J-8H5cUL_kt8EcQhAq5yl59arhvkBfmOZ8EsSt_tVv/s1600/A21.jpg",
		/*A22*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIx9TiyTo0_v4ppgcHZpv4FqaLdcfMl5f-RM4yNFSLUYOMxNUQ74S3W3Bk2K3D8mDXOQNtzpC2qeUJs7D9W_AS4IjrQkONRjWZhSiC8jekrhO8l6zMjc_5G57Y4DzRZ1KwqQItEmhjDV4P2RIcLqUjgSZi4nEQaIDXmcPD305c-ugJ0Jz1wMHJHuTuMonq/s1600/A22.jpg",
		/*A23*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoBBdOKY0ho0xyvZ6rnx2Ko6kEYWLYVg5x-PcnzLaT51XhjmjPWLoMqXaurXrvLhNr9kXX0GEg9CRJxvqGOGqIPAlf-rOvkqLBhhKV0txovdvRBxMNLLKKBotdJ6XF7yaM88uUoHCzxR5XbE2iQKCYWrjdwEbX2VLn_Rl4pvYjlw7ytQ_CijXDv2GdyQ3e/s1600/A23.jpg"
                // ...
            ],
            cargolong: [


/*A35*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDS-19Sm0QvFF_qefTJbhoJgbbsME-Ve7JwgN9OCYWfR5bIJFdfqYLcOCmHOL7UxXpY1DLWQVCyrF_VxWTn-BqqfDf-f6jVDlLv5OlILqecDNCF1xvJhgv-YmQ90tTHlwOcE7t91CK5hy-73nj5MO8Gy9HDy_4SZKn6Bc64kY5bbu_fQdiRMw4ycAe7Vc/s1600/A35.jpg",
/*A36*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9mCkZ6qZCaQyHp1c7VWUaGGi8uHyYOzjDzyyKD5ufoBXag6zdfa-y0FkwqCD8lrAuOwgxbEBqOXWP_pVwFrYhJqemlpBNx0C9xF0sXdCS4Cz_0EE9_-yXqFxj0AUqhyjANxkeWHXDRSbF2YigVA20Shtld5ucnHHbNcDTpCpwXSZCbSsd_bX28tcbucw/s1600/A36.jpg",
/*A37*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhFnxNLgcYG6jcHKPYWlB-R6wwCuWtW9AgY4DUL2FZoQCX7yFMuu-KfJ7wjUvPdy3f4ajCt5rpYga45NXsMfT0t_wyoNo5zgawEbysTEeagYRwNkeBW3iCu0UbRCfDfni75DKUDYcOrEGYpQkMsrhU2tbQcRfPl6SovTvrBIhRRizJHF5K3NPMkVuwYeE/s1600/A37.jpg",
/*A38*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiy2qr5YUQPVLMbYLNBuXJvzd5S_yYSsm48nybAAYlWZPh5JGhsGo5zexfxb-8kkGHXek5NzXj_Tn-AE1wnEUCGHqlVx6pTSCYtrXvf-IjQkv-VoZzsIrupacFY2xhM9zUG6TnsDvMq7vNMTWHALEEWh_PVzIA9uV5fpJsrz4SSrahYHWy5kPTAI0sTqUU/s1600/A38.jpg",
/*A39*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHCzjIub1iF_KU__qpI_o_74gezM4Z3G1hzHEdEoqZv6r6viCjkdNj0KCEiBpsolp4VBhyphenhyphenCHp89UsU60S3a_sY90incOO5pYWxt3YbGFeduK8KJdtPO5JPOfHmOc7nlOZLywIAA4Bov6siF0OwVZ3ARZYO3PjHx2yuUw6V2HxwnBp8M41Hokt7Pfoop70/s1600/A39.jpg",
/*A40*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXg1ek3MOTUtKnJwfwB-xqSKGU7Z8zGESpLMkKtnxNZPDGj73omA0HYUUuW37WUOSjpAaq13tHC-8lDR9ziA5Ob0iDH6d7Pxn1w9Vc5CGwL-hvgRxnWeiJqrp0fLGmMqkVJjoHU5hs46J8XyNZDV699ZaDfKfCZYse9M5mIyROjau9namGhjro8BWQOEg/s1600/A40.jpg",
/*A41*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbNQfYaW8V7dR5X7rTcYfbdGLfqFWjk3k7MgNxiz1WW86H5oSRh0CHyua8k4SXG7YqS7l7lSgHaoifaVU1O3_0u2Tfkh56vpUOpQa0FGbEeitkOXCYf4_NX18KAF2m3zgiIAMh91ETpXVSAkmpfdbQ3aoNKaaX95hMHcjtEX7Su4pUoXJzvoN-6LSS_yU/s1600/A41.jpg",
/*A42*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI8MPk2lWDN0dxVgWnbAmmwsdhJSkrd6AKZmb0y9O6uqzjya5z9e0yLPoIYndVWD4rDO76Y0rQI2IOCcMwuVHawujEAMkBEgWZbfnXojlXO-sbDGQb2qGoLj68txcxePD1nxYTXAlAIp8yweU6YChF43J4caxCAoiKyAaULzqtUnmHCrjvp4NgT1kIATk/s1600/A42.jpg",
/*A43*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpbPRZ2L3QoPreK-W-kukYzrMWKxfJtkDJS7tgZGitANi61-f9kNg_xsT-CJ8nNJajKp519OJ-NF2GMCRCjnm2vEIMPI-7zFhznZ-pHN-FHDYSengLVNZFmh9t68C2LESQikLzzlrP4Yca3KHGa39h3a0yVvmtA_OYbCcWg1gWQQVPw_b6ZWvCIz2hayM/s1600/A43.jpg",
/*A44*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFyf56ZhgD1-aNtRLExsvC_RrtpcUaYKlu5-AtXNPM6P526OMUpB9c-A5-0kTc6FEkNxwA9haCYw_cbdVI1gV_Tc-ThIxxFTTeeSCGc2D7YGaD13GRHQ6jcmUxfbuVTRwnu_RWu_-y3zbXXQpbi71HYegHhWOpAStkrfMlDO1XOIhol7zB6Q1QlIGmsc4/s1600/A44.jpg",
/*A45*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEir1ZsX2h_zry50eGvO1OSc0hSYDze6wqfwOEY3MJorhKseQt1ZXwpqUc1kajCwv1kbKinzQ_HQj6rfd9w2vjvM3aGCLd6jFE3ju-BJGYM9kDXYXoBs4sw_ZmY5lPLhVwWes5fv-_SIRuGRi9wSPSQKWRMQOF6t8pgQAM4It9x1tiQPXCJlm-bD9ND8f7w/s1600/A45.jpg",
/*A46*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkeWb2xcWz_9Evscv4XLhR0Sg-z5YXIZiQwOAkPQcCeHkaYg1gEqNFTjNsoW0IQNg82S1n2HK-n6UzPpGRbS8RmFJk0KUD50xAXt9ylIspS5_YdkRUdvhrutDtRRFWbVeFwwYdSbNWSbAFup_s7Ec62aATv1lVPgfuT4NZeP_2e3MwxH-vWbxLWVa7b1I/s1600/A46.jpg",
/*A47*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYIe_JhASXANjQRbr0DyBeAcE1VpTTGEcnsaqaj5xTDEISYWhW63q4_VyKgmWirRymSW7SvSP8amwPUD4DcvZJxGdoPqcrNZlTsqIuPaPB6EUKYRLaa0jgJwC4JpLFDnC0Vfa-FDENMMGYSnHebyAfDAWhrAqNCFulZAluegaKRwSqQkXrzuxnUtDLGtc/s1600/A47.jpg",
/*A48*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhB-OoL-IL9uB_dGYmjgVJrqJU9M1TuhRUPWDdQ0RLce8noD8svz0sE4qMTEZ7PwsqKi-YEOhB40oJ8S0N5QvfF116HZnXeDKwgeji9s9kblvexO7pAlV7sD9yhKHiV4ZMuWHzAZs2blh9APN8nUnHBa7e72idyBE1VRYJW58dCnIcwlcdDLd8GN3IApXU/s1600/A48.jpg",
/*A49*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVeJnAOhRIREsxOltAEgr2l8XRTk5Jg_QO35jfWk4ROXJ_AYa3S-4ctk5_Tnq5AUCiRzYWsad8t9fcYaOfz5593TdY7OBgjkwJVq3tVhyphenhyphengdL5eO3mi3449ZwjW10bPV6PO4shClXe-ZuJF7qp0ZWYMrBa_oTZDe1fHJAwu3jz4ObUIKZGaQvyjSy-nOXM/s1600/A49.jpg",
/*A50*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0HEaffKBN-d4m9lk5vu0H6i7YTQo4yB14tai5hRQhU0iagBq1hdSBdWq3XN57WpnnA3onLg32WkDvlPDTejcsp25H5iKdJGaOHHHjDI2qSvMaWbVAIMpwse9kI3_tJWy_VPP-nOxYo24NtmnE3N15UdRANi7PWw0FxPzULHZFmCBsr4hNwquvyYaDr-0/s1600/A50.jpg",
/*A51*/"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgseof7nLr-cHaF_SYs-ZG547ZdCeM8dakj6-90PqAnmUGnuz3abN6SEDMWgy9u3qJMwEMASR6rxWlLGIM7wPIQ144CdkBQY4bBDnOsQqVQZAJNa5jPTzI7wD_ReZ_slcDmPztZQuffuXvygov4ajNNtxlAOlA26VoPS-Tq8sgvRo4c2bOcbrgQwDu_B9E/s1600/A51.jpg"
,
                // ...
            ]
        };

 /*URL*/  const clothingLinks = {
            oversize: [
                 /*A12*/"https://shope.ee/5fOOiqGf8j",
                 /*A13*/"https://shope.ee/6fGvwIYC7U",
		 /*A14*/"https://shope.ee/2L7wnTzg2S",
		 /*A15*/"https://shope.ee/10cZDFhICO",
		 /*A16*/"https://shope.ee/3VJuC8DIyP",
		 /*A17*/"https://shope.ee/4VCROLV0PP",
                /*A52*/"https://shope.ee/3pwzFaagBt",
/*A53*/"https://shope.ee/5pi3dTWkdc",
/*A54*/"https://shope.ee/7zmYDmOwra",
/*A55*/"https://shope.ee/AKAT0I1szA",
/*A56*/"https://shope.ee/7KWsK26QRg",
/*A57*/"https://shope.ee/20VLyOMl51",
/*A58*/"https://shope.ee/8KPPW9i9GI"
                // ...
            ],
            hoodie: [

/*A25*/"https://shope.ee/qJArS0nH6",
/*A26*/"https://shope.ee/8UibzgC68P",
/*A27*/"https://shope.ee/1LFRSowJJC",
/*A28*/"https://shope.ee/5V50Qaqot6",
/*A29*/"https://shope.ee/8KPBnwtzs3",
/*A30*/"https://shope.ee/8pLSOzg8Bt",
/*A31*/"https://shope.ee/5ASA2Rkm3B",
/*A32*/"https://shope.ee/4ppJe4XFks",
/*A32*/"https://shope.ee/9euZP4XkUl",
/*A33*/"https://shope.ee/9euZP4XkUl",
/*A34*/"https://shope.ee/9zXPnumxdD"
                // ...
            ],
            crewneck: [
               /*A24*/"https://shope.ee/fzkeyenJv",
                /*A07*/"https://shope.ee/3pvqXg8v1c",
                /*A08*/"https://shope.ee/4fUxYOoz6r",
                /*A09*/"https://shope.ee/3VJ0Ac28cb",
		/*A10*/"https://shope.ee/9UaDK0s8r6",
		/*A11*/"https://shope.ee/4poNmrZxLA",
		/*A05*/"https://shope.ee/3VIyXJrYnp",
                /*A06*/"https://shope.ee/4fUvvslYMT"
// ...
            ],
            rugby: [
                /*A01*/"https://shope.ee/8UhePNUv9I",
                /*A02*/"https://shope.ee/4VBVh3N4VO",
                /*A03*/"https://shope.ee/6Uwa5bORVb",
                /*A04*/"https://shope.ee/A9psTAcLem"
                

                // ...
            ],
            chino: [
                "https://example.com/chino1-link",
                "https://example.com/chino2-link"
                // ...
            ],
            cargoshort: [
                /*A18*/"https://shope.ee/99yIC9b0uD",
                /*A19*/"https://shope.ee/7ADDpD8Rm4",
		/*A20*/"https://shope.ee/7pSucZksfw",
		/*A21*/"https://shope.ee/5KlZeIUeSg",
		/*A22*/"https://shope.ee/3fdLfSR0hM",
		/*A23*/"https://shope.ee/20V7hZCSaf"
                // ...
            ],
            cargolong: [
/*A35*/"https://shope.ee/99yLucSmAc",
/*A36*/"https://shope.ee/6ztrLAjlGC",
/*A37*/"https://shope.ee/8Uif8BxmPW",
/*A38*/"https://shope.ee/2q4IO9AGfT",
/*A39*/"https://shope.ee/2Aobb6Ch2z",
/*A40*/"https://shope.ee/6KeAYspKyW",
/*A41*/"https://shope.ee/8Uif8vx0Gj",
/*A42*/"https://shope.ee/LMxQ5Ar2p",
/*A43*/"https://shope.ee/9KHm8iN2Qe",
/*A44*/"https://shope.ee/6fH0xxP5OO",
/*A45*/"https://shope.ee/30NibSoW1x",
/*A46*/"https://shope.ee/8A5ol41U0q",
/*A47*/"https://shope.ee/5KldO0v1y4",
/*A48*/"https://shope.ee/LMxQvXmHk",
/*A49*/"https://shope.ee/3fdPPTje5f",
/*A50*/"https://shope.ee/4VCWP6Zr8T",
/*A51*/"https://shope.ee/2L81pPsV7Q"
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
            const allClothingTypes = ['oversize', 'hoodie', 'crewneck', 'rugby', 'chino', 'cargoshort', 'cargolong'];
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
