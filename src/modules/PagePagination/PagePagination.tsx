import React from 'react';
import { Stack, Pagination } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';

type Props = {
  pageCount: number,
  currentPage: number,
};

export const PagePagination:React.FC<Props> = ({ pageCount, currentPage }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const newSearchParams = {
      page: value.toString(),
    };

    navigate({
      search: getSearchWith(searchParams, newSearchParams),
    });

    window.scrollTo(0, 0);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        margin: '16px 0',
        alignSelf: 'center',
      }}
    >
      <Pagination
        sx={{
          '& .MuiPaginationItem-root': {
            background: '#3C3E44',
            color: '#F5F5F5',
          },
          '& .MuiPaginationItem-ellipsis': {
            borderRadius: '4px',
            height: '32px',
            lineHeight: '2',
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            background: '#F5F5F5',
            color: '#202329',
          },
        }}
        count={pageCount}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};
