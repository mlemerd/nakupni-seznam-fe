import { createContext, useState, useEffect } from "react";
//import Toolbar from "./detailToolbar";
//import MemberList from "./memberList";

export const DetailContext = createContext();

function DetailProvider({ children, selectedList }) {
    const defaultData = { name: "", state: "", owner: "", memberList: [], itemList: [{id:"it01", name:"první položka", resolved:"false",},], }
    const [data, setData] = useState(selectedList || defaultData);
    const [showResolved, setShowResolved] = useState(false);

    const handlerMap = {
        updateName: (updatedData) => {
            console.log('Updating name:', updatedData);
            setData((current) => ({ ...current, ...updatedData }));
        },
        addMember: ({ memberId }) => {
          setData((current) => {
              if (!current.memberList.includes(memberId))
              current.memberList.push(memberId);
              return { ...current };
          });
        },
        removeMember: ({ memberId }) => {
          setData((current) => {
            const memberIndex = current.memberList.findIndex(
            (item) => item === memberId
            );
            if (memberIndex > -1) current.memberList.splice(memberIndex, 1);
            return { ...current };
        });
        },
        addItem: () => {
          setData((current) => {
            current.itemList.push({
              id: Math.random(),
              name: "",
              resolved: false,
            });
            return { ...current };
          });
        },
        updateItemName: ({ id, name }) => {
            setData((current) => ({
                ...current,
                itemList: current.itemList.map(item => item.id === id ? { ...item, name } : item)
            }));
        },
        toggleResolveItem: ({ id }) => {
            setData((current) => ({
                ...current,
                itemList: current.itemList.map(item => item.id === id ? { ...item, resolved: !item.resolved } : item)
            }));
        },
        deleteItem: ({ id }) => {
            setData((current) => ({
                ...current,
                itemList: current.itemList.filter(item => item.id !== id)
            }));
        }
    };

    useEffect(() => {
        console.log('Selected List updated: ', selectedList);
        setData(selectedList || { name: "", state: "", owner: "", memberList: [], itemList: [] });
    }, [selectedList]);

    const value = { data, handlerMap, showResolved, toggleShowResolved: () => setShowResolved(!showResolved) };
    console.log('DetailContext value:', value);

    return (
        <DetailContext.Provider value={value}>
            {children}
        </DetailContext.Provider>
    );
}

export default DetailProvider;


/* import { createContext, useState, useEffect } from "react";
//import Toolbar from "./detailToolbar";
//import MemberList from "./memberList";

export const DetailContext = createContext();

function DetailProvider({ children, selectedList }) {
    const [data, setData] = useState(selectedList || { name: "", state: "", owner: "", memberList: [], itemList: [] });
    const [showResolved, setShowResolved] = useState(false)
    const handlerMap = {
        updateName: (updatedData) => {
            console.log("Updating name: ", updatedData)
            setData((current) => ({ ...current, ...updatedData }))
        // další handlery mohou jít sem
        },
        addMember: ({ memberId }) => {
            setData((current) => {
                if (!current.memberList.includes(memberId))
                current.memberList.push(memberId);
                return { ...current };
            });
        },
        removeMember: ({ memberId }) => {
          setData((current) => {
            const memberIndex = current.memberList.findIndex(
            (item) => item === memberId
            );
            if (memberIndex > -1) current.memberList.splice(memberIndex, 1);
            return { ...current };
        });
        },
        addItem: () => {
          setData((current) => ({
              ...current,
              itemList: [
                  ...current.itemList,
                  { id: Math.random().toString(), name: "New Item", resolved: false }
              ]
          }));
          },
          updateItemName: ({ id, name }) => {
            setData((current) => ({
                ...current,
                itemList: current.itemList.map(item => item.id === id ? { ...item, name } : item)
            }));
          },
          toggleResolveItem: ({ id }) => {
            setData((current) => ({
                ...current,
                itemList: current.itemList.map(item => item.id === id ? { ...item, resolved: !item.resolved } : item)
            }));
          },
          deleteItem: ({ id }) => {
            setData((current) => ({
                ...current,
                itemList: current.itemList.filter(item => item.id !== id)
            }));
          }
    };

    useEffect(() => {
        console.log("selected list updated: ", selectedList)
        setData(selectedList || {name:"", state:"", owner:"", memberList:[], itemList:[]});
    }, [selectedList]);

    const value = { data, handlerMap, showResolved, toggleShowResolved: () => setShowResolved(!showResolved) };
    console.log('DetailContext value:', value);

    return (
        <DetailContext.Provider value={value}>
            {children}
        </DetailContext.Provider>
    );
}

export default DetailProvider; */


/* import { createContext, useMemo, useState } from "react";

export const DetailContext = createContext();

function DetailProvider({ children, selectedList }) {
  const [data, setData] = useState(selectedList
/*     {id: "tdl01",
    name: "První úkolovník",
    owner: "u1",
    memberList: ["u2", "u3"],
    itemList: [
      {
        id: "td01",
        name: "první úkol",
        resolved: false,
      },
  ]}, 
  );

  const [showResolved, setShowResolved] = useState(false);

  const filteredData = useMemo(() => {
    const result = { ...data };
    if (!showResolved) {
      result.itemList = result.itemList.filter((item) => !item.resolved);
    }
    return result;
  }, [data, showResolved]);

  const value = {
    data: filteredData,
    handlerMap: {
      updateName: ({ name }) => {
        setData((current) => {
          current.name = name;
          return { ...current };
        });
      },
      addItem: () => {
        setData((current) => {
          current.itemList.push({
            id: Math.random(),
            name: "",
            resolved: false,
          });
          return { ...current };
        });
      },
      updateItemName: ({ id, name }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          current.itemList[itemIndex] = {
            ...current.itemList[itemIndex],
            name,
          };
          return { ...current };
        });
      },
      toggleResolveItem: ({ id }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          current.itemList[itemIndex] = {
            ...current.itemList[itemIndex],
            resolved: !current.itemList[itemIndex].resolved,
          };
          return { ...current };
        });
      },
      deleteItem: ({ id }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          console.log(itemIndex);
          current.itemList.splice(itemIndex, 1);
          return { ...current };
        });
      },
      addMember: ({ memberId }) => {
        setData((current) => {
          if (!current.memberList.includes(memberId))
            current.memberList.push(memberId);
          return { ...current };
        });
      },
      removeMember: ({ memberId }) => {
        setData((current) => {
          const memberIndex = current.memberList.findIndex(
            (item) => item === memberId
          );
          if (memberIndex > -1) current.memberList.splice(memberIndex, 1);
          return { ...current };
        });
      },
    },
    showResolved,
    toggleShowResolved: () => setShowResolved((current) => !current),
  };
  return (
    <DetailContext.Provider value={value}>{children}</DetailContext.Provider>
  );
}

export default DetailProvider; */