import { Button } from "./ui/button";
import { Select } from "./ui/select";
import Output from "./ui/output";
import { Input } from "./ui/input";
import { useHeader } from "./hooks/header-hooks";

const Header = () => {


const {handleCalc, ipList, handleClear,setTag,setTagType,tag,tagType} = useHeader()


  return (
    <div className="flex flex-col items-center">
      <h1>Calculadora de IPS - CKS</h1>
      <div>
        <Select value={tagType} onChange={(e) => setTagType(e.target.value)} />
        <Input
          value={tag === 0 ? "" : tag}
          onChange={(e) => setTag(parseInt(e.target.value))}
          type="number"
          placeholder="IP ex:1.1.1.1"
        />
        <div className="flex justify-center gap-4 mt-4">
          <Button variant="blue" onClick={handleCalc}>
            Calcular
          </Button>
          <Button variant="red" onClick={handleClear}>
            Limpar
          </Button>
        </div>
      </div>
      <Output ipList={ipList} tagType={tagType} />
    </div>
  );
};

export default Header;
