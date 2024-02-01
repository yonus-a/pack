import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

interface Props {
  items: any;
}

export default function NextTreeView({ items }: Props) {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {items.map((item: any) => {
        return (
          <TreeItem key={item.id} nodeId={item.id} label={item.label}>
            {item.submenu && (
              <>
                {item.submenu.map((item: any) => {
                  return (
                    <TreeItem key={item.id} nodeId={item.id} label={item.label}>
                      {item.submenu && (
                        <>
                          {item.submenu.map((item: any) => {
                            return (
                              <TreeItem
                                key={item.id}
                                nodeId={item.id}
                                label={item.label}
                              ></TreeItem>
                            );
                          })}
                        </>
                      )}
                    </TreeItem>
                  );
                })}
              </>
            )}
          </TreeItem>
        );
      })}
    </TreeView>
  );
}
