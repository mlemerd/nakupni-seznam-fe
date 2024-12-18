import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          welcome: "Welcome to Shopeek",
          user: "User",
          overview: "Shopping list overview",
          archive: "Archive",
          delete: "Delete",
          detail: "List detail",
          select: "Select a shopping list to see detail",
          name: "Name",
          state: "State",
          owner: "Owner",
          memberList: "Member list",
          addMember: "Add member",
          remove: "Remove",
          addItem: "Add an item",
          allItems: "View all items",
          unresolvedItems: "View unresolved items only",
          done: "Done",
          restore: "Restore",
          createForm: "Create a new shopping list",
          enterName: "Enter the name of your new shopping list",
          create: "Create",
          close:"Close",
          deleteConfirm: "Do you really want to delete the shopping list?",
          back:"Go back",
          solved: "Solved",
          unsolved:"Unsolved"
        },
      },
      cs: {
        translation: {
          welcome: "Vítejte v Shopeek",
          user: "Uživatel",
          overview: "Přehled nákupních seznamů",
          archive:"Archivovat",
          delete: "Smazat",
          detail: "Detail seznamu",
          select: "Vyberte nákupní seznam pro zobrazení detailu",
          name: "Název",
          state: "Stav",
          owner: "Majitel",
          memberList: "Seznam členů",
          addMember: "Přidat člena",
          remove: "Odebrat",
          addItem: "Přidat položku",
          allItems: "Zobrazit všechny položky",
          unresolvedItems: "Zobrazit pouze nevyřešené",
          done: "Hotovo",
          restore: "Vrátit",
          createForm: "Vytvořit nový nákupní seznam",
          enterName: "Zadejte název nákupního seznamu",
          create: "Vytvořit",
          close:"Zavřít",
          deleteConfirm: "Opravdu chcete smazat seznam?",
          back:"Zpět",
          solved: "Vyřešené",
          unsolved: "Nevyřešené"
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
/*     backend: {
      loadPath: './locales/{{lng}}/translation.json',
    }, */
  });

export default i18n;
