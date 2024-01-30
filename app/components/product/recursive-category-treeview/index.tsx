import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { TreeView } from "@mui/x-tree-view/TreeView";
import "./styles.scss";

const RecursiveComponent = ({ open, data }: any) => {
  return (
    <>
      {data.map((item: any) => (
        <>
          {item.other_product_category &&
          item.other_product_category.length > 0 ? (
            <TreeItem key={item.id} label={item.name} nodeId={item.id}>
              <RecursiveComponent
                data={item.other_product_category}
                open={open}
              />
            </TreeItem>
          ) : (
            <TreeItem key={item.id} label={item.name} nodeId={item.id} />
          )}
        </>
      ))}
    </>
  );
};

export default function RecursiveCategoryTreeview({ data }: any) {
  return (
    <TreeView
      className="recussive-treeview"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <RecursiveComponent data={data} open={open} />
    </TreeView>
  );
}
