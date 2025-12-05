import React from "react";

type Props = {
  onClick1: () => void;
  onClick2: () => void;
  value: string;
  setValue: () => void;
  valueSelect: string;
  setValueSelect: () => void;
};

const Button = ({
  onClick1,
  onClick2,
  value,
  setValue,
  valueSelect,
  setValueSelect,
}) => {
  return (
    <div className="max-w-lg  flex justify-center flex-col mt-4">
      <select
        name=""
        id=""
        className="text-gray-950 rounded-md mb-2 text-center"
        value={valueSelect}
        onChange={(e) => setValueSelect(e.target.value)}
      >
        <option value="">--Selecione--</option>
        <option value="cm">Caminhão</option>
        <option value="tt">Trator</option>
        <option value="pf">Perfuratriz</option>
        <option value="es">Escavadeira</option>
        <option value="cr">Carregadeira</option>
      </select>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="rounded-md text-gray-950 text-center"
        placeholder="IP ex:1.1.1.1"
      />
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="bg-blue-500 p-1 rounded-md w-full"
          onClick={onClick1}
        >
          Calcular
        </button>
        <button className="bg-[#f00] p-1 rounded-md w-full" onClick={onClick2}>
          Limpar
        </button>
      </div>
    </div>
  );
};

export default Button;
