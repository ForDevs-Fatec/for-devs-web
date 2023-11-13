import apiPln from "../../services/api-pln.service";
import URI from "../../utils/enum/uri.enum";
import { useState } from "react";
import { HeaderComponent } from "@/components/headerComponent";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import Gif from "@/assets/techny-searching-the-web-on-tablet.gif";

type PlnData = {
  product_id: number;
  submission_date: string;
  review_title: string;
  review_text: string;
  site_category_lv2: string;
  overall_rating: number;
};

export function SearchPage() {
  const [data, setData] = useState<PlnData[]>([]);
  const [text, setText]: any = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  function handleSearch(param: any) {
    setIsLoading(true);
    apiPln
      .get<PlnData[]>(`${URI.PESQUISA_PLN}${param}`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  const formatDate = (date: string) => {
    const dateFormatted = new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return dateFormatted;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const ratingHandler = (overall_rating: number) => {
    switch (overall_rating) {
      case 1:
        return <Badge className="bg-red-600">Ruim</Badge>;
      case 2:
        return <Badge className="bg-red-600">Ruim</Badge>;
      case 3:
        return <Badge className="bg-yellow-500 text-zinc-950">Regular</Badge>;
      case 4:
        return <Badge className="bg-emerald-600">Bom</Badge>;
      case 5:
        return <Badge className="bg-emerald-600">Bom +</Badge>;
      default:
        return <Badge variant="outline">Desconhecido</Badge>;
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleLastPage = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    setCurrentPage(totalPages);
  };

  return (
    <div className="p-4 h-screen">
      <HeaderComponent />
      <div className='flex justify-center items-center p-5'>
        <div className="flex flex-col justify-center gap-2 w-[71.875rem]">
          <Input
            placeholder="Digite sua pesquisa..."
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(text)}
            className="bg-zinc-950 text-white p-4 h-12 rounded-sm border-zinc-400 placeholder:text-zinc-500"
          />

          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="animate-spin text-zinc-50" />
              <p className="text-zinc-50 ml-2">Carregando dados...</p>
            </div>
          ) : data.length === 0 ? (
            <section className="flex items-center justify-center flex-col w-full h-full">
              <img className="w-80 h-80" src={Gif} alt="no data" />
              <h1 className="text-2xl text-zinc-50">
                Nenhum resultado encontrado
              </h1>
              <span className="text-zinc-400">
                Por favor, pesquise por um termo.
              </span>
            </section>
          ) : (
            <div className="border p-2 rounded-sm shadow-2xl">
              <Table className="h-[680px] overflow-visible">
                <TableCaption>
                  <div className="flex justify-between mt-4">
                    <div className="flex justify-center mt-4">
                      <span className="text-zinc-50">
                        {currentPage} de {totalPages} páginas
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="flex items-center gap-1 p-2 bg-blue-800 hover:bg-blue-700 transition-all"
                      >
                        <ChevronLeft />
                      </Button>
                      <Button
                        onClick={handleLastPage}
                        className="flex items-center gap-1 p-2 bg-blue-800 hover:bg-blue-700 transition-all"
                      >
                        Ultima página
                      </Button>
                      <Button
                        onClick={handleNextPage}
                        disabled={currentPage * itemsPerPage >= data.length}
                        className="flex items-center justify-between gap-1 p-2 bg-blue-800 hover:bg-blue-700 transition-all"
                      >
                        <ChevronRight />
                      </Button>
                    </div>
                  </div>
                </TableCaption>
                <TableHeader>
                  <TableRow className="bg-zinc-800">
                    <TableHead className="font-bold text-zinc-50 text-left">
                      ID
                    </TableHead>
                    <TableHead className="font-bold text-zinc-50 text-left">
                      Data do comentário
                    </TableHead>
                    <TableHead className="font-bold text-zinc-50 text-left">
                      Titulo
                    </TableHead>
                    <TableHead className="font-bold text-zinc-50">
                      Comentario
                    </TableHead>
                    <TableHead className="font-bold text-zinc-50 text-center">
                      Categoria do produto
                    </TableHead>
                    <TableHead className="font-bold text-zinc-50 text-center">
                      Avaliação
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {currentItems.map((item: PlnData, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-zinc-50 font-bold text-left">
                        {item.product_id}
                      </TableCell>
                      <TableHead className="text-zinc-50 text-left">
                        {formatDate(item.submission_date)}
                      </TableHead>
                      <TableCell className="text-zinc-50 text-left">
                        {item.review_title}
                      </TableCell>
                      <TableCell className="text-zinc-50">
                        {item.review_text}
                      </TableCell>
                      <TableCell className="text-zinc-50 text-center">
                        {item.site_category_lv2}
                      </TableCell>
                      <TableCell className="text-zinc-50 text-center">
                        {ratingHandler(item.overall_rating)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}