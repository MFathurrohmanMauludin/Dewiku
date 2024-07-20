/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import idIcon from "../../assets/indonesia.svg";
import jpIcon from "../../assets/japan.svg";
import usaIcon from "../../assets/usa.svg";
import { Listbox, ListboxItem } from "@nextui-org/react";
import i18next from "i18next";

const Language = () => {
    const localStorageKey = 'selectedLanguage';
    const storedLanguage = localStorage.getItem(localStorageKey) || "en";
    const [selectedKeys, setSelectedKeys] = useState<any>(new Set([storedLanguage]));

    const langs = [
        { label: "English", value: "en", icon: usaIcon },
        { label: "Indonesia", value: "id", icon: idIcon },
        { label: "Japan", value: "jp", icon: jpIcon },
    ];

    // for change your language without refresh page
    useEffect(() => {
        i18next.changeLanguage(selectedKeys);
    }, [selectedKeys]);

    // Save selected language to local storage whenever it changes
    useEffect(() => {
        const selectedLanguage = Array.from(selectedKeys)[0];
        localStorage.setItem(localStorageKey, selectedLanguage as string);
    }, [selectedKeys]);

    return (
        <Listbox
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
        >
            {langs.map((lang) => (
                <ListboxItem
                    key={lang.value}
                    classNames={{ base: 'px-2' }}
                    startContent={
                        <img src={lang.icon} width={24} alt={lang.label} />
                    }>
                    {lang.label}
                </ListboxItem>
            ))}
        </Listbox>
    )
}

export default Language