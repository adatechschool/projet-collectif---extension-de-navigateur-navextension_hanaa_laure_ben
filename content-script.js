console.log("Salut ! Dans 7 secondes toutes les pubs vont être supprimées.");

//*** Fonction qui retrouve toutes les balises Html qui contiennent des pubs et les supprime :
function retrouver_supprimer_balises_pubs() {

    //1 Initialisations des arrays qui vont contenir toutes les balises Html à supprimer dans la page grâce à leur
    // ClassName :
    // "od-billboard", "mvp_ad_halfpage_widget", "mvp-widget-ad", "mvp-widget-ad-halfpage",
    // "HalfpageAd_1", "optidigital-ad-center"

    const liste_balise_od_billboard =
        Array.from(document.getElementsByClassName("od-billboard"));
    const liste_balise_mvp_ad_halfpage_widget =
        Array.from(document.getElementsByClassName("mvp_ad_halfpage_widget"));
    const class_mvp_widget_ad =
        Array.from(document.getElementsByClassName("mvp-widget-ad"));
    const class_mvp_widget_ad_halfpage =
        Array.from(document.getElementsByClassName("mvp-widget-ad-halfpage"));
    const class_HalfpageAd_1 =
        Array.from(document.getElementsByClassName("HalfpageAd_1"));
    const class_optidigital_ad_center =
        Array.from(document.getElementsByClassName("optidigital-ad-center"));

    //2 Concaténer tous les arrays qui contiennent les noms des classes des différentes balises dans un seul array
    const all_elements_to_delete_array =
        liste_balise_od_billboard
            .concat(liste_balise_mvp_ad_halfpage_widget)
            .concat(class_mvp_widget_ad)
            .concat(class_mvp_widget_ad_halfpage)
            .concat(class_HalfpageAd_1)
            .concat(class_optidigital_ad_center);

    //3 Affichage du nombre des balises :
    console.log("Nombre des balises", all_elements_to_delete_array.length);

    //4 Parcourir tous les éléments du array pour supprimer les pubs :
    for (let i = 0; i < all_elements_to_delete_array.length; i++) {
        console.log("balise à supprimer", all_elements_to_delete_array[i]);
        all_elements_to_delete_array[i].remove();
    }
}

//****************************************** Appel des Fonctions ****************************************************//

// Pour plus de visibilité, utiliser un délai de 7s pour la suppression des balises qui contiennent des pubs :
setTimeout(retrouver_supprimer_balises_pubs, 7000);
