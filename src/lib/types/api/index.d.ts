export type FetchBizZoneListDistrictRequestType = {
  level: number; // 레벨
  neLat: number; // 동남쪽 위도
  neLng: number; // 동남쪽 경도
  swLat: number; // 북서쪽 위도
  swLng: number; // 북서쪽 경도
};

export type BizZoneType = {
  allCnt: number; // 전체 구역 숫자
  bjdCode: string; // 법정동 코드
  districtLevel: number; // 구역 레벨
  districtNm: string; // 구역명
  latitude: string; // 구역 위도
  longitude: string; // 구역 경도
  maintenanceSmallCnt: number; // 가로주택 구역 숫자
  reConstructionCnt: number; // 재건축 구역 숫자
  reDevelopmentCnt: number; // 재개발 구역 숫자
  zoneRoad: string; // 도로명 주소
};
