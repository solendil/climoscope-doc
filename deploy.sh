npm run build
aws s3 rm s3://climoscope/BfmLH/doc --recursive --endpoint-url $R2_URL 
aws s3 cp dist s3://climoscope/BfmLH/doc --recursive --endpoint-url $R2_URL 
# aws s3 ls s3://climoscope/BfmLH/doc --recursive --endpoint-url $R2_URL
