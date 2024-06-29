/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from 'moment';

export function filterByDaily(sales: any) {
  const today = moment().startOf('day');
  return sales.filter((sale: any) =>
    moment(sale.saleDate).startOf('day').isSame(today),
  );
}

export function filterByWeekly(sales: any) {
  const startOfWeek = moment().startOf('isoWeek');
  return sales.filter(
    (sale: any) =>
      moment(sale.saleDate).isSameOrBefore(startOfWeek) &&
      moment(sale.saleDate).isAfter(startOfWeek.subtract(1, 'weeks')),
  );
}

export function filterByMonthly(sales: any) {
  const startOfMonth = moment().startOf('month');
  return sales.filter((sale: any) =>
    moment(sale.saleDate).startOf('month').isSame(startOfMonth),
  );
}

export function filterByYearly(sales: any) {
  const startOfYear = moment().startOf('year');
  return sales.filter((sale: any) =>
    moment(sale.saleDate).startOf('year').isSame(startOfYear),
  );
}
