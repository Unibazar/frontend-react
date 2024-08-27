
import AddProductPage from "@/components/Dashboard/Components/AddProductPage";
import ListProductPage from "@/components/Dashboard/Components/ListProductPage";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { useSearchParams } from "next/navigation"


function products() {
  const searchParams = useSearchParams(); 
  const query = searchParams.get('q');

  return (
    <DashboardLayout>
      {query=="list"?<ListProductPage/>:
      <AddProductPage/>}
    </DashboardLayout>
  )
}

export default products
