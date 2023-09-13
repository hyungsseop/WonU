from json import loads, dumps
import numpy as np
import pandas as pd


def rco_sub(df, result_dcit):

  card = pd.read_excel("packages/card_benefit.xlsx")
  card_json = card.to_json(orient='records')
  card_json = loads(card_json)

  benefit_json = {}
  benefit = list(card_json[0].keys())
  for i in range(len(card_json)):
      b_tmp = list(card_json[i].values())
      if b_tmp[0] not in list(result_dcit.values()):
        continue
      benefit_json[card_json[i]['카드명']] = {
              benefit[j] : b_tmp[j] for j in range(1,len(b_tmp))
          }

  # 예외 카드혜택
  card_except_result = []
  for i in benefit_json.keys():
      for j in benefit_json[i].keys():
          try:
              int(benefit_json[i][j])
          except:
              card_except_result.append([i, j, benefit_json[i][j]])


  card_seq = []
  sale_seq = []
  for idx, row in df.iterrows():
      card_tmp = []
      sale_tmp = []
      for i in benefit_json.keys():
          if [i, row['소분류업종명'], benefit_json[i][row.소분류업종명]] in card_except_result:
              if benefit_json[i][row.소분류업종명] in '적립':
                  point = benefit_json[i][row.소분류업종명].split()[0]
                  card_tmp.append(i)
                  sale_tmp.append(int(row.결제금액 * int(point) / 100))
              elif benefit_json[i][row.소분류업종명] in '이상' and benefit_json[i][row.소분류업종명] in '할인':
                  base_amount = benefit_json[i][row.소분류업종명].split()[0]
                  discount = point = benefit_json[i][row.소분류업종명].split()[2]
                  card_tmp.append(i)
                  sale_tmp.append(int(int(row.결제금액//base_amount)*discount))
              elif benefit_json[i][row.소분류업종명] in '원':
                  discount = int(benefit_json[i][row.소분류업종명].split("원")[0])
                  card_tmp.append(i)
                  if discount > row.결제금액:
                      sale_tmp.append(discount)
                  else:
                      sale_tmp.append(row.결제금액)
              elif benefit_json[i][row.소분류업종명] in '원/l':
                  if benefit_json[i][row.소분류업종명].split('원/l')[0] in '~':
                      discount = benefit_json[i][row.소분류업종명].split('원/l')[0].split('~').mean()
                  else:
                      discount = benefit_json[i][row.소분류업종명].split('원/l')[0]
                  oil_price = 1700
                  card_tmp.append(i)
                  sale_tmp.append(int(int(row.결제금액//oil_price)*discount))
              elif benefit_json[i][row.소분류업종명] in '~':
                  discount = benefit_json[i][row.소분류업종명].split('~').mean()
                  card_tmp.append(i)
                  sale_tmp.append(int(row.결제금액 * int(discount) / 100))

          else:
              card_tmp.append(i)
              sale_tmp.append(int(row.결제금액 * int(benefit_json[i][row['소분류업종명']]) / 100))
      card_seq.append(card_tmp)
      sale_seq.append(sale_tmp)

  card_seq_tmp = card_seq.copy()
  sale_seq_tmp = sale_seq.copy()

  for i in range(len(card_seq_tmp)):
      idx = np.array(sale_seq_tmp[i]).argsort()[::-1]
      sorted_card_seq = np.array(card_seq_tmp[i])[idx]
      sorted_sale_seq = np.array(sale_seq_tmp[i])[idx]

      # Filter out non-negative values
      non_negative_indices = np.where(sorted_sale_seq > 0)
      card_seq[i] = sorted_card_seq[non_negative_indices]
      sale_seq[i] = sorted_sale_seq[non_negative_indices]


  benefit_list = list(df.소분류업종명.unique())
  benefit_list.insert(0,"할인합계")
  benefit_list.insert(1,"총사용금액")
  benefit_list.insert(2,"피킹률")

  card_rec_dict = {}
  for _ in range(len(list(result_dcit.values()))):
    card_rec_dict[list(result_dcit.values())[_]] = {
        benefit_list[j] : 0 for j in range(len(benefit_list)) 
    }
  for idx, row in df.iterrows():
    for i in range(len(card_seq[idx])):
      card_rec_dict[card_seq[idx][i]]["할인합계"] += int(sale_seq[idx][i])
      card_rec_dict[card_seq[idx][i]][row.소분류업종명] += int(sale_seq[idx][i])
      card_rec_dict[card_seq[idx][i]]["총사용금액"] += int(row.결제금액)

  return card_rec_dict