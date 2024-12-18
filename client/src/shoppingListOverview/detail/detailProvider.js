import { createContext, useState, useMemo } from "react";

export const DetailContext = createContext();

function DetailProvider({ children, selectedList }) {
    const defaultData = {
        id: "",
        name: "",
        owner: "",
        memberList: [],
        itemList: [
            {
                id: "td01",
                name: "první úkol",
                resolved: false,
            },
        ],
    };
    
    // Pokud selectedList nemá itemList, zajistíme, že je inicializován jako prázdné pole
    const [data, setData] = useState(selectedList ? { ...selectedList, itemList: selectedList.itemList || [] } : defaultData);
    const [showResolved, setShowResolved] = useState(false);

    const filteredData = useMemo(() => {
        const result = { ...data };
        if (!showResolved) {
            result.itemList = result.itemList?.filter((item) => !item.resolved) || [];
        }
        return result;
    }, [data, showResolved]);

    const value = {
        data: filteredData,
        handlerMap: {
            updateName: (updatedData) => {
                console.log('Updating name:', updatedData);
                setData((current) => ({ ...current, ...updatedData }));
            },
            addMember: ({ memberId }) => {
                setData((current) => {
                    if (!current.memberList.includes(memberId)) {
                        current.memberList.push(memberId);
                    }
                    return { ...current };
                });
            },
            removeMember: ({ memberId }) => {
                setData((current) => {
                    const memberIndex = current.memberList.findIndex((item) => item === memberId);
                    if (memberIndex > -1) current.memberList.splice(memberIndex, 1);
                    return { ...current };
                });
            },
            addItem: () => {
                setData((current) => {
                    const updatedItemList = current.itemList || [];
                    updatedItemList.push({
                        id: Math.random().toString(),
                        name: "",
                        resolved: false,
                    });
                    return { ...current, itemList: updatedItemList };
                });
            },
            updateItemName: ({ id, name }) => {
                setData((current) => ({
                    ...current,
                    itemList: current.itemList.map((item) => (item.id === id ? { ...item, name } : item)),
                }));
            },
            toggleResolveItem: ({ id }) => {
                setData((current) => ({
                    ...current,
                    itemList: current.itemList.map((item) => (item.id === id ? { ...item, resolved: !item.resolved } : item)),
                }));
            },
            deleteItem: ({ id }) => {
                setData((current) => ({
                    ...current,
                    itemList: current.itemList.filter((item) => item.id !== id),
                }));
            },
        },
        showResolved,
        toggleShowResolved: () => setShowResolved((current) => !current),
    };

    console.log('DetailContext value:', value);

    return (
        <DetailContext.Provider value={value}>
            {children}
        </DetailContext.Provider>
    );
}

export default DetailProvider;