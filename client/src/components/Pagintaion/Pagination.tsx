import React from "react";
import { usePagination } from "../../hooks/usePagination";
import { IPaginationState } from "../../types";

import { PaginationWrapper, PagintionItem } from "./style";

interface IPaginationProps {
  pagination: IPaginationState;
  setPagination: React.Dispatch<React.SetStateAction<IPaginationState>>;
  onPageClick: (pagination: { limit: number; pageIndex: number }) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
  pagination,
  setPagination,
  onPageClick,
}) => {
  const { pageIndex, total, limit } = pagination;

  const paginationRange = usePagination({
    currentPage: pageIndex,
    totalCount: total,
    siblingCount: 1,
    pageSize: limit,
  });

  const handlePageClick = (desiredPageIndex: number) => {
    if (desiredPageIndex < 0 || desiredPageIndex > Math.floor(total / limit))
      return;
    setPagination((prevState) => {
      return { ...prevState, pageIndex: desiredPageIndex };
    });

    onPageClick({ limit, pageIndex: desiredPageIndex });
  };
  console.log("paginationRange", paginationRange);
  const paginationItemToRender = paginationRange?.map((page) => {
    if (typeof page === "string") {
      return (
        <PagintionItem key={"id" + Math.random().toString(16).slice(2)}>
          {page}
        </PagintionItem>
      );
    } else
      return (
        <PagintionItem
          onClick={() => handlePageClick(page - 1)}
          className={pageIndex === page - 1 ? "active" : ""}
          key={page}
        >
          {page}
        </PagintionItem>
      );
  });
  paginationRange &&
    paginationRange?.length > 0 &&
    paginationItemToRender?.unshift(
      <PagintionItem
        onClick={() => handlePageClick(pagination.pageIndex - 1)}
        key={"previous"}
      >
        Previous
      </PagintionItem>
    );
  paginationRange &&
    paginationRange?.length > 0 &&
    paginationItemToRender?.push(
      <PagintionItem
        onClick={() => handlePageClick(pagination.pageIndex + 1)}
        key={"next"}
      >
        Next
      </PagintionItem>
    );

  return <PaginationWrapper>{paginationItemToRender}</PaginationWrapper>;
};
