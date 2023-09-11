import { PeerReview } from "@/model/peer-review";
import MainPeerReviewCarousel from "@/components/main/peer-review/main-peer-review-carousel";

type Props = {
  peerReviewList: PeerReview[];
};

export default function MainPeerReview(props: Props) {
  return (
    <div
      id="main-peer-reivew"
      className="relative w-screen flex flex-col items-center bg-background"
    >
      <MainPeerReviewCarousel peerReviewList={props.peerReviewList} />
    </div>
  );
}
